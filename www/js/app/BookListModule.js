app.BookListModule = function(url) {
  this.url = url;
  this.init();
};

app.BookListModule.prototype.init = function() {
  this.container = $('#list');
  this.detailContainer = $('#detail');
  var self = this;
  $.get(this.url, function(data) {
    self.render(data);
  });
};

app.BookListModule.prototype.render = function(data) {
  app.goToList();
  var tmpl = '';
  $(data).find('h3 a').each(function(i, a) {
    var url = app.domain + $(a).attr('href');
    tmpl +=
      '<div class="item" url="' + url + '">' + $(a).text() + '</div>';
  });
  this.container.empty().html(tmpl);

  var self = this;
  this.container.find('.item').on('click', function(e) {
    var url = $(e.target).attr('url');
    app.goToDetail();
    $.get(url, function(data) {
      var text = $(data).find('.tpc_content');
      if(text.length == 0) {
        self.detailContainer.empty().html(data);
      } else {
        self.detailContainer.empty().html(text);
      }
    });
  });
};

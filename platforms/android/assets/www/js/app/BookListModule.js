app.BookListModule = function(url) {
  this.url = url;
  this.page = 1;
  this.init();
};

app.BookListModule.prototype.init = function() {
  this.container = $('#list');
  this.detailContainer = $('#detail');
  var self = this;
  $.get(this.url, function(data) {
    self.render(data, true);
  });

  $('.more').on('click', function(e) {
    $.get(self.url + '&page=' + (self.page+1), function(data) {
      self.render(data, false);
      self.page++;
    });
  });
};

app.BookListModule.prototype.render = function(data, clear) {
  app.goToList();
  var tmpl = '';
  $(data).find('h3 a').each(function(i, a) {
    var url = app.domain + $(a).attr('href');
    tmpl +=
      '<div class="item" url="' + url + '">' + $(a).text() + '</div>';
  });
  if(clear) {
    this.container.empty().html(tmpl);
  } else {
    this.container.html(tmpl);
  }
    

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

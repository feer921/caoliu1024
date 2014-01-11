app.index = function() {
  this.init();
};


app.index.prototype.init = function() {
  parseUtil.getDomain();
  this.list = $('#index .categorys');
  $('#index img')[0].src = app.domain + 'index.gif';
  var self = this;

  this.list.find('.books').on('click', function(e) {
    var url = app.domain + 'thread0806.php?fid=20';
    new app.BookListModule(url);
  });

};

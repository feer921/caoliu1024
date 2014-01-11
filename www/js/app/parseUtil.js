Parse.initialize("kBYewlO15B2LvtQ8neK2cVGInBVCZukG1rpWy1uP", "UHfuUsHKFs99TO8OJOtWjmdA2caGmHHBWi7twklU");

parseUtil = {};

parseUtil.getDomain = function() {
  var Caoliu1024 = Parse.Object.extend("caoliu1024");
//   var o = new Caoliu1024();
//   o.set("domain": 'http://184.154.178.130/index.php');
// o.save();
  var query = new Parse.Query(Caoliu1024);
  query.equalTo("domain");
  query.find({
    success: function(results) {
      // console.log(results[0]._serverData.domain);
      // app.domain = results[0]._serverData.domain;
    },
    error: function(error) {
      console.log("Error: " + error.code + " " + error.message);
    }
  });
  app.domain = app.domain || 'http://184.154.178.130/';
}
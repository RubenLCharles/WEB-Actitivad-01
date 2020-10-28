var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
function showHobbie() {    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("hobbies").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
      });
    }); 

}

var btnHob = document.getElementById("btnHob");
btnHob.addEventListener (
    "click",
    function() {
        showHobbie();
    },
    false
)



var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var MongoClient=require('mongodb').MongoClient;
var url1= "mongodb+srv://admin:admin@user-1712507-hgdqg.mongodb.net/test?retryWrites=true&w=majority"

var someschema=new Schema({
    image: String,
    type: String,
    title: String,
    price: Number,

});
function productCollection(callback) { // product
    MongoClient.connect(uri, function(err, db) {
      if (err) throw err;
      var dbo = db.db("test");
      dbo.collection("products").find().toArray(function(err, result) {
        if (err) {
          console.log(err);
        } else if (result.length > 0) {
          callback(result);
        }
      });
          db.close();
    });
  }
  function findProductByType (type, callback) {
	MongoClient.connect(uri, function(err, db) {
		if (err) throw err;
		var dbo = db.db("test");
		dbo.collection("products").find({
			type: type
		}).toArray(function(err, result) {
			if (err) throw err;
			else {
				callback(result);
			}
		});
		db.close();
	})
}





module.exports=mongoose.model('products',someschema);
module.exports.productCollection = productCollection;
module.exports.findProductByType =findProductByType;
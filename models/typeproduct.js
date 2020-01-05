var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MongoClient = require('mongodb').MongoClient; // connect online
var url1= "mongodb+srv://admin:admin@user-1712507-hgdqg.mongodb.net/test?retryWrites=true&w=majority"


var someschema = new Schema({
type: String,
name: String
});

 function typeproductCollection(callback) {
	MongoClient.connect(uri, function(err, db) {
		if (err) throw err;
		var dbo = db.db("test");
		dbo.collection("typeproduct").find().toArray(function(err, result) {
			if (err) {
				throw err;
				console.log(err);
			} else if (result.length > 0) {
				callback(result);
			}
		});
    db.close();
	});
}



module.exports = mongoose.model('typeproduct', someschema);
module.exports.typeproductCollection = typeproductCollection;

// nodejs与mongodb数据库相连
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/test";
// 录入数据
var insertDocument = function(db, callback) {
	db.collection('restaurants').insertOne({
		"address":{
			"street":"2 Avenue",
			"zipcode":"10075",
			"building":"1480",
			"coord":[-79, 40]
		},
	})
}
// nodejs操作mongodbd的更新操作
// 首先定义并连接
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var ObjectId = require("mongodb").ObjectID;
var url = "mongodb://localhost:27017/test";
// 更新特定字段
// 定义一个更新的方法
var updateRestaurants = function(db, callback) {
	db.collection('restaurants').updataOne(
		{"name":"Juni"},
		{
			$set: {"cuisine":"American(new)"},
			$currentDate: {"lastModified":true}
		},function(err, results) {
			console.log(results);
			callback();
	});
};
// 使用定义的功能
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	updateRestaurants(db, function() {
		db.close();
	});
});
// 更新嵌入式
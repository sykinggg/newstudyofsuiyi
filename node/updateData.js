// nodejs操作mongodbd的更新操作
// 首先定义并连接
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var ObjectId = require("mongodb").ObjectID;
var url = "mongodb://localhost:27017/test";
// 更新特定字段(更新------updateOne)
// 定义一个更新的方法
// 注意更新方法的名称updateOne
var updateRestaurantsA = function(db, callback) {
	db.collection('restaurants').updateOne(
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
	updateRestaurantsA(db, function() {
		db.close();
	});
});
// 更新嵌入式文件信息
// 定义该种更新的方法
var updateRestaurantsB = function(db, callback) {
	db.collection('restaurants').updateOne(
		{"restaurant_id":"41156888"},
		{$set:{"address.street":"East 31st Street"}},
		function(err, results) {
			console.log(results);
			callback();
		});
};
// 使用定义的该方法
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	updateRestaurantsB(db, function() {
		db.close();
	});
});
// 同时更新多个文件(多个更新------updateMany)
// 定义该种更新的方法
var updateRestaurantsC = function(db, callback) {
	db.collection("restaurants").updateMany(
		{"address.zipcode":"10016", cuisine:"other"},
		{
			$set: {cuisine:"Category To Be Determined"},
			$currentDate:{"lastModified": true}
		},
		function(err, results) {
			console.log(results);
			callback();
		});
};
// 使用定义的该方法
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	updateRestaurantsC(db, function() {
		db.close();
	});
});
// 替换文件(替换-----replaceOne)
// 替换所有文件除_id领域，通过一个全新的文件作为第二个参数的replaceone方法。
// 替换文件可以有不同的领域，从原始文件。
// 在替换文件，可以省略_id场以来，_id场是不变的。
// 如果你有_id领域，它必须与现有的值相同的值
// 定义该种更新的方法
var updateRestaurantsD = function(db, callback) {
	db.collection("restaurants").replaceOne(
		{"restaurant_id": "41704620"},
		{
			"name":"Valle 2",
			"address": {
				"coord": [-73, 40],
				"building": "1480",
				"street": "2 Avenue",
				"zipcode": "10075"
			}
		},
		function(err, results) {
			console.log(results);
			callback();
		});
};
// 使用定义替换的该方法
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	updateRestaurantsD(db, function() {
		db.close();
	});
});

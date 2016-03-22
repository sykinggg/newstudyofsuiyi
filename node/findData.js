// nodejs在mongodb中查询数据
// 一.连接数据库
var MongoClient = require('mongodb').MongoClient;
var assert = require("assert");
var ObjectId = require("mongodb").ObjectID;
var url = "mongodb://localhost:27017/test";
// 二.定义查询全部服务
var findRestaurantsA = function(db, callback) {
	var cursor = db.collection('restaurants').find();
	cursor.each(function(err, doc){
		assert.equal(err, null);
		if(doc != null) {
			console.log(doc);
		} else {
			callback();
		}
	});
};
// 三.调用已定义的查询服务
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findRestaurantsA(db, function(){
		db.close();
	});
});
// 运行结果在nodejs中的cmd中
// { _id: 56f0a941d93593f416d8392c,
//   address:
//    { street: '2 Avenue',
//      zipcode: '10075',
//      building: '1480',
//      coord: [ -73.9557413, 40.7720266 ] },
//   borough: 'Manhattan',
//   cuisine: 'Italian',
//   grades:
//    [ { date: Wed Oct 01 2014 08:00:00 GMT+0800 (中国标准时间),
//        grade: 'A',
//        score: 11 },
//      { date: Thu Jan 16 2014 08:00:00 GMT+0800 (中国标准时间),
//        grade: 'B',
//        score: 17 } ],
//   name: 'Vella',
//   restaurant_id: '41704620' }



// 查询中的文件域"Manhattan"
// 定义一个findrestaurantsb功能
var findRestaurantsB = function(db, callback) {
	var cursor = db.collection("restaurants").find({'borough':'Manhattan'});
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if(doc != null) {
			console.log(doc);
		} else {
			callback();
		}
	});
};
// 调用findrestaurants方法
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findRestaurantsB(db, function() {
		db.close();
	});
});
// 可同时查询多个服务
// 嵌入式文档中的字段(可以用对象点属性的方式使用)
// 定义一个findrestaurantsc功能
var findRestaurantsC = function(db, callback) {
	var cursor = db.collection('restaurants').find( { "address.zipcode" : "10075" } );
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if(doc != null) {
			console.log(doc);
		} else {
			callback();
		}
	});
};
// 调用findrestaurants方法
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findRestaurantsC(db, function() {
		db.close();
	});
});
// 数组中的字段查询(可以用对象点属性的方式使用)
// 定义一个findrestaurantsd功能
var findRestaurantsD = function(db, callback) {
	var cursor = db.collection('restaurants').find({"grades.grade":"B"});
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if(doc != null) {
			console.log(doc);
		} else {
			callback();
		}
	});
};
// 使用定义的功能
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findRestaurantsD(db, function() {
		db.close();
	});
});
// 大于运算符($gt)
// 定义一个findrestaurantsE功能
var findRestaurantsE = function(db, callback) {
	var cursor = db.collection('restaurants').find({"grades.score":{$gt:30}});
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if(doc != null){
			console.log(doc);
		} else {
			callback();
		}
	});
};
// 使用定义的功能
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findRestaurantsE(db, function() {
		db.close();
	});
});
// 小于运算符($lt)
// 定义一个findrestaurantsF功能
var findRestaurantsF = function(db, callback) {
	var cursor = db.collection('restaurants').find({"grades.score":{$lt:10}});
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if(doc != null) {
			console.log(doc);
		} else {
			callback();
		}
	});
};
// 使用定义的功能
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findRestaurantsF(db, function() {
		db.close();
	});
});
// 条件的并行执行(逻辑和)
// 定义一个findrestaurantsG功能
var findRestaurantsG = function(db, callback) {
   var cursor =db.collection('restaurants').find(
     { "cuisine": "Italian", "address.zipcode": "10075" }
   );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};
// 使用定义的功能
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findRestaurantsG(db, function() {
		db.close()
	});
});
// 条件的可选择执行(逻辑或)
// 定义一个findrestaurantsH功能
var findRestaurantsH = function(db, callback) {
	var cursor = db.collection('restaurants').find(
		{$or:[{"cuisine":"Italian"}, {"address.zipcode":"10075"}]}
	);
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if(doc != null) {
			console.log(doc);
		} else {
			callback();
		}
	});
};
// 使用定义的功能
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findRestaurantsH(db, function() {
		db.close();
	});
});
// 排序查询结果
// 用sort()方法进行的排序
var findRestaurantsI = function(db, callback) {
	var cursor = db.collection('restaurants').find().sort({"borough":1, "address.zipcode":1});
	cursor.each(function(err, doc) {
		assert.equal(err, null);
		if(doc != null) {
			console.log(doc);
		} else {
			callback();
		}
	});
};
// 使用定义的功能
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	findRestaurantsI(db, function() {
		db.close();
	});
});
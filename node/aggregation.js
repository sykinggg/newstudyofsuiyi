// nodejs数据聚合
// 命名空间链接数据库
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var ObjectId = require("mongodb").ObjectID;
var url = "mongodb://localhost:27017/test";
// 集团文件集
// 定义该功能的方法
var aggregateRestaurantsA = function(db, callback) {
  db.collection("restaurants").aggregate(
    [
      {$group:{"_id":"$borough", "count": {$sum:1}}}
    ]
  ).toArray(function(err, result) {
    assert.equal(err, null);
    console.log(result);
    callback(result);
  });
};
// 引用已定义的函数
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  aggregateRestaurantsA(db, function() {
    db.close();
  });
});
// _id文件不同的自主价值
// 过滤器和组文件
// 定义该功能的方法
var aggregateRestaurantsB = function(db, callback) {
  db.collection("restaurants").aggregate(
    [
      {$match:{"borough":"Queens", "cuisine":"  Brazilian"}},
      {$group:{"_id":"$address.zipcode", "count":{$sum:1}}}
    ]).toArray(function(err, result) {
      assert.equal(err, null);
      console.log(result);
      callback(result);
    });
};
// 调用已定义的功能
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  aggregateRestaurantsB(db, function() {
    db.close();
  });
});

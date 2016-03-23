// nodejs操作mongodb的索引_id中的
// 先决条件
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var ObjectId = require("mongodb").ObjectID;
var url = "mongodb://localhost:27017/test";
// 创建单字段索引
// 定义该功能方法-------createIndex
var indexRestaurantsA = function(db, callback) {
  db.collection("restaurants").createIndex(
    {"cuisine":1},
    null,
    function(err, results) {
      console.log(results);
      callback();
    }
  );
};
// 调用已定义的方法
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  indexRestaurantsA(db, function() {
    db.close();
  });
});

// nodejs控制mongodb删除数据
// 可以使用deleteone方法从集合中删除文件
// 定义的命名空间
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var ObjectId = require("mongodb").ObjectID;
var url = "mongodb://localhost:27017/test";
// 删除符合条件的所有文件-----deleteMany
// 定义该功能的方法
var removeRestaurantsA = function(db, callback) {
  db.collection("restaurants").deleteMany(
    {"borough":"Manhattan"},
    function(err, results) {
      console.log(results);
      callback();
    }
  );
};
// 调用定义的方法
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  removeRestaurantsA(db, function() {
    db.close();
  });
});
// 删除一个文档----------deleteOne
// 定义该功能的方法
var removeRestaurantsB = function(db, callback) {
  db.collection("restaurants").deleteOne(
    {"borough": "Queens"},
    function(err, results) {
      console.log(results);
      callback();
    }
  );
};
// 调用定义的方法
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  removeRestaurantsB(db, function() {
    db.close();
  });
});
// 删除所有文件-----------deleteMany
// 定义该功能的方法
var removeRestaurantsC = function(db, callback) {
  db.collection("restaurants").deleteMany(
    {},
    function(err, results) {
      console.log(results);
      callback();
    }
  );
};
// 调用定义的方法
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  removeRestaurantsC(db, function() {
    db.close();
  });
});
// drop删除数据库的方法
// 定义该功能的方法
var dropRestaurants = function(db, callback) {
  db.collection("restaurants").drop(function(err, response) {
    console.log(response);
    callback();
  });
};
// 调用定义的方法
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  dropRestaurants(db, function() {
    db.close();
  });
});

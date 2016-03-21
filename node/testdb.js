// nodejs链接mongodb的一种写法
// var mongo = require('mongodb'),
//   Server = mongo.Server,
//   Db = mongo.Db;

// var server = new Server('localhost', 27017, {auto_reconnect: true});
// var db = new Db('foo', server);

// db.open(function(err, db) {
//   if(!err) {
//     console.log("We are connected");
//   }
// });
// 其他写法
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});
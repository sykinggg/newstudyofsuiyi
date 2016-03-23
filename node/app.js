// Hello World代码
// var express = require('express');
// var app = express();

// app.get('/app', function (req, res) {
//   res.send('Hello World!');
// });

// var server = app.listen(3000, function () {
//   //var host = server.address().address;
//   var host = "127.0.0.1";
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });
// 一次交互示例
//  var app = require('http').createServer(handler)
//   , io = require('socket.io').listen(app)
//   , fs = require('fs')

// app.listen(2000);

// function handler (req, res) {
//   fs.readFile(__dirname + '/index.html',
//   function (err, data) {
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }

//     res.writeHead(200);
//     res.end(data);
//   });
// }

// io.sockets.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });
// 网友的交互示例
// var http = require('http');  
  
// /** 
//  * Global variables 
//  */  
// var history = [];  
// // list of currently connected clients (users)  
// var users = ["user1","user2"];  
// var clients = [];  
  
  
  
// /** 
//  * HTTP server 
//  */  
// var server = http.createServer(function (request, response) {  
//     // Not important for us. We're writing socket.io server, not HTTP server  
// });  
// server.listen(1337);  
  
// /** 
//  * socketio server 
//  */  
// var io = require("socket.io").listen(server);  
  
// //io监听socket事件  
// io.on('connection', function (connection) {  
//     console.log((new Date()) + ' Connection from origin ' + connection.id + '.');  
//     var json = { logicId:"conn_success",users: users };  
//     connection.json.send(json);  
//     var userName = false;  
  
//     console.log((new Date()) + ' Connection accepted.');  
  
//     connection.on('message', function (message) {  
//         console.log(message);  
//         if (message.logicId == "login") {  
//             clients[message.username] = connection; //将用户名与连接对应  
//             connection.username = message.username;  
//         }else if(message.logicId == "chat") {//用户发起会话  
//             //1、查找该用户是否有历史消息  
//             var toUser = message.to;//会话目标  
//             var from = message.username;//会话发起人  
//             if(history[toUser]&&history[toUser][from]){  
//                 var historyMsgs = [];  
//                 for (var i = 0; i < history[toUser][from].length; i++) {  
//                     historyMsgs.push(history[toUser][from][i]);  
//                 };  
//                 connection.json.send({logicId:"history",historyMsgs:historyMsgs});  
//             }  
//             //2、检查目标用户是否在线，若在线，转发用户请求,否则，存为历史会话中  
//             var objConnect = clients[toUser];  
//             var chatJson = {logicId:"chat", from: from, time: message.time, msg: message.msg };  
//                 connection.json.send(chatJson);  
//             if (objConnect) {  
//                 objConnect.json.send(chatJson);  
//             } else {//存储于历史会话中  
//                 if (!history[from]||!history[from][toUser]) {  
//                     if (!history[from]) {  
//                         history[from] = [];  
//                     }  
//                     history[from][toUser] = [];  
//                 }  
//                 history[from][toUser].push(chatJson);  
//             }  
//         }  
//     });  
  
//     // user disconnected  
//     connection.on('disconnect', function (socket) {  
//         console.log("关闭连接:" + socket);  
//         delete clients[connection.username];//删除用户的连接  
          
  
//     });  
  
// });  
// 
var express = require("express");
var path = require('path');
var app = express();
service = require('http').Service.(app);
app.set('views', __dirname);
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);
require('./index')(app);
service.listen(80, function(){
	console.log('App start, port 80.');
});

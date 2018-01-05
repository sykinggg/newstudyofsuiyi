
'use strict';
/*
*   基础nodejs
* */

// var http = require('http');
//
// server = http.createServer(function(req, res) {
//     res.writeHeader(200, {
//         "Content-Type": "text/plain"
//     });
//     res.end("hello World\n");
// })
//
// server.listen(8000, '127.0.0.1');
//
// console.log("server in runing at 127.0.0.1:8000");

/*
*   express框架
* */
// var express = require('express');
// var app = express();
// app.get('/', function(req, res) {
//     res.send('Hello, World1111');
// })
//
// var server = app.listen(8081, function() {
//     var host = server.address().address;
//     var port = server.address().port;
// })


/*
* 模块开发
* */

// var s = 'hello';

// function greet(name) {
//     console.log(s + ', ' + name + '!');
// }

// module.exports = greet;

var fs = require('fs');

// 读取文件readFile函数
fs.readFile(__dirname + '/router.txt', {flag: 'r+', encoding: 'utf8'}, function(err, data) {
	if(err) {
		// console.log(err);
		return false;
	}
	// console.log(data);
});

// 写文件
var w_data = '这是一段通过fs.writeFile函数写入的内容；\r\n';
var w_data = new Buffer(w_data);

/**
 * filename, 必选参数，文件名
 * data, 写入的数据，可以字符或一个Buffer对象
 * [options],flag,mode(权限),encoding
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */
fs.writeFile(__dirname + '/newRouter.txt', w_data, {flag: 'a'}, function (err) {
   if(err) {
    console.error(err);
    } else {
       console.log('写入成功');
    }
});

// 以追加方式写文件

// fs.appendFile(filename,data,[options],callback);

fs.appendFile(__dirname + '/newRouter.txt', '使用fs.appendFile追加文件内容', function () {
  console.log('追加内容完成');
});

// 打开文件

// fs.open(filename, flags, [mode], callback);

/**
 * filename, 必选参数，文件名
 * flags, 操作标识，如"r",读方式打开
 * [mode],权限，如777，表示任何用户读写可执行
 * callback 打开文件后回调函数，参数默认第一个err,第二个fd为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
 */

// fs.open(__dirname + '/newRouter.txt', 'r', '0666', function (err, fd) {
// 	console.log(err);
// 	console.log(fd);
//   console.log(fd);
// });

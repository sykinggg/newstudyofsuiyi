
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

var s = 'hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;


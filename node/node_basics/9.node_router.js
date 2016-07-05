/*

	Node.js 路由
		为路由提供请求的URL和其他需要的GET及POST参数
		随后路由需要根据这些数据来执行相应的代码

*/
// 需要查看HTTP请求，从中提取出请求的URL以及GET/POST参数
// 需要的所有数据都会包含在request对象中，该对象作为onRequest()回调函数的第一个参数传递

// 需要额外的Node.JS模块，它们分别是url和querystring模块

// 给onRequest()函数加上一些逻辑，用来找出浏览器请求的URL路径

/*
	基本示例
*/
// var http = require("http");
// var url = require("url");

// function start() {
// 	function onRequest(request, response) {
// 		var pathname = url.parse(request.url).pathname;
// 		console.log("Request for" + pathname + " received.");
// 		response.writeHead(200, {"content-Type" : "text/plain"});
// 		response.write("Hello World");
// 		response.end();
// 	}

// 	http.createServer(onRequest).listen(8888);
// 	console.log("server has started.");
// }

// exports.start = start;

/*
	编写路由9.router.js
*/
/* 将使用依赖注入的方式较松散地添加路由模块 */
// 扩展一下服务器的start()函数，以便将路由函数作为参数传递过去
var http = require('http');
var url = require('url');

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for" + pathname + " recevied.");

		route(pathname);

		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write("Hello World");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started!");
}
exports.start = start;

// 使得路由函数可以被注入到服务器中


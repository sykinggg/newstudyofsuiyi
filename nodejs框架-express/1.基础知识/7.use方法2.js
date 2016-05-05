### use基本用法2
use方法不仅可以调用中间件，还可以根据请求的网址，返回不同的网页内容
代码示例:
	var express = require("express");
	var app = express();
	
	app.use(function(request, response, next) {
		if(request.url == "/") {
			response.send("Welcome to the homepage!");
		}else {
			next();
		}
	});
	
	app.use(function(request, response, next) {
		if(request.url == "/about") {
			response.send("Welcome to the about page!");
		}else {
			next();
		}
	});
	
	app.use(function(request, response) {
		response.send("404 error!");
	});
	
	app.listen(80);
代码描述:
	上面代码通过request.url属性，判断请求的网址，从而返回不同的内容。

### all函数的基本用法
基本概念:
	和get函数不同app.all()函数可以匹配所有的HTTP动词，
		也就是说它可以过滤所有路径的请求，如果使用all函数定义中间件，那么就相当于所有请求都必须先通过此该中间件
语法格式:
	app.all(path, function(request, response){});
代码示例:我们使用all函数在请求之前设置响应头属性
	var express = require("express");
	var app = express();
	
	app.all("*", function(request, response, next) {
		response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});		//设置响应头属性值
		next();
	});
	
	app.get("/", function(request, response) {
		response.end("欢迎来到首页!");
	});
	
	app.get("/about", function(request, response) {
		response.end("欢迎来到about页面!");
	});
	
	app.get("*", function(request, response) {
		response.end("404-未找到!");
	});
	
	app.listen(80);
代码描述:
	上面代码参数中的“*”表示对所有路径有效，这个方法在给特定前缀路径或者任意路径上处理时会特别有用，不管我们请求任何路径都会事先经过all函数

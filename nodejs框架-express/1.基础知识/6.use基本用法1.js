### use基本用法1
use是express调用中间件的方法，它返回一个函数
语法格式:
	app.use([path], function(request, response, next){});
注意://可选参数path默认为"/"
代码示例:
	使用中间件
	app.use(express.static(path.join(__dirname, '/')));
代码描述:
	使用use函数调用express中间件设定了静态文件目录的访问路径(这里假设为根路径)
代码示例:
	连续调用两个中间件
	var express = require('express');
	var app = express();
	
	app.use(function(request, resopnse, next){
		console.log("method:"+request.method+"==="+"url:"+request.url);
		next();
	});
	
	app.use(function(request, response){
		response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
		response.end("示例:连续调用两个文件");
	});
	
	app.listen(80);
代码描述:
	回调函数的next参数，表示接受其他中间件的调用
	函数体中的next()，表示将请求数据传递给下一个中间件
代码总结:
	代码先调用第一个中间件，在控制台输出一行信息，然后通过next()
		调用第二个中间件，输出HTTP回应
	由于第二个中间件没有调用next方法，所以req对象就不再向后传递了
运行结果:
	method:GET===url:/
	method:GET===url:/favicon.ico

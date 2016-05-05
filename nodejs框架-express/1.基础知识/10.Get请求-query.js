### query基本用法
query是一个可获取客户端get请求路径参数的对象属性，包含着被解析过的请求参数对象，默认为{}
代码示例:
	var express = require('express');
	var app = express();
	
	app.get("*", function(req, res) {
		console.log(req.query.参数名);
		res.send("测试query属性!");
	});
	
	app.listen(80);
运行结果:
	undefined
	undefined
代码描述:
	通过req.query获取get请求路径的对象参数值
语法格式:
	req.query.参数名;
	代码示例:/search?n=Lenka
		req.query.n  // "Lenka"
	代码示例: /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
		req.query.order // "desc"
		req.query.shoe.color // "blue"
		req.query.shoe.type // "converse"

### param基本用法
和属性query一样，通过req.param我们也可以获取被解析过的请求参数对象的值
语法格式:
	req.param("参数名");
代码示例:获取请求根路径的参数值，如/?n=Lenka
	var express = require('express');
	var app = express();
	
	app.get("/", function(req, res) {
		console.log(req.param("n"));
		res.send("使用req.param属性获取请求根路径的参数对象值!");
	});
	
	app.listen(80);
运行结果:
	undefined
代码示例:也可以获取具有相应路由规则的请求对象，假设路由规则为 /user/:name/，请求路径/user/mike
	app.get("/user/:name", function(req, res) {
		console.log(req.param("name"));
		res.send("使用req.param属性获取具有路由规则的参数对象值!");
	});
运行结果:
	http://me.hubwiz.com/user/name:suiyi
	name:suiyi
注意:使用req.param属性获取具有路由规则的参数对象值!

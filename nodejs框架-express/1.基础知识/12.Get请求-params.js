### params基本用法
params是一个可以解析包含着有复杂命名路由规则的请求对象的属性
语法格式:
	req.params.参数名
代码示例:请求根路径的例子
	var express = require('express');
	var app = express();
	
	app.get("/user/:name", function(req, res) {
		console.log(req.params.name);
		res.send("使用req.params属性获取具有路由规则的参数对象值!");
	});
	
	app.listen(80);
运行结果:
	http://me.hubwiz.com/user/name:suiyi
	name:suiyi
代码描述:查看运行结果，和param属性功能是一样的，同样获取name参数值
代码示例:也可以请求复杂的路由规则，如/user/:name/:id，假设请求地址为：/user/mike/123
	app.get("/user/:name/:id", function(req, res) {
		console.log(req.params.id);
		res.send("使用req.params属性复杂路由规则的参数对象值!");
	});
运行结果:
	http://me.hubwiz.com/user/name:suiyi/id:2
	id:2
	name:suiyi
总结:属性params比param属性是不是又强大了那么一点点

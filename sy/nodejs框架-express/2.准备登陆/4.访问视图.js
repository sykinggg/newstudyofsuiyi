### 访问视图
对网页模板进行访问，这就要用到res对象的render函数了
基本函数:
	render函数，对网页模板进行渲染
语法格式:
	res.render(view, [locals], callback);
语法描述:
	参数view就是模板的文件名callback用来处理返回的渲染后的字符串，options、callback可省略
	在渲染模板时locals可为其模板传入变量值，在模板中就可以调用所传变量了
代码示例:比如渲染我们刚刚添加的index.html页面，我们就可以在app.js中写入如下内容
	var express = require('express');
	var app = express();
	var path = require('path');
	
	app.set('views', __dirname);
	
	app.set('view engine', 'html');
	app.engine('.html', require('ejs').__express);
	
	app.get('/', function(req, res) {
		res.render('index');
	});
	
	app.listen(80);
运行结果:
	success
	
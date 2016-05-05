### body基本用法
基本概念:
	body属性解析客户端的post请求参数，通过它可获取请求路径的参数值
语法格式:
	req.body.参数名;
代码示例:
	1.修改login.html，为登陆按钮增加登陆事件
		<input type="button" onclick="login();" value="登陆">
		
		function login() {
			var username = $('#username').val();
			var data = {"username": username};
			$.ajax({
				url:'/login',
				type:'POST',
				data:data
			});
		}
使用描述:
	要想使用body属性解析post请求参数值，我们需要先安装和引用express的两个中间件body-parser和multer
代码示例:安装
	npm install body-parser
	npm install multer
		引用和调用
	var bodyParser = require('body-parser');
	var multer = require('multer');
		......
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(multer());

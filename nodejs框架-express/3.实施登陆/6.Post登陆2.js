### 准备登陆
修改app启动文件的内容
代码示例:
	1.修改post方法，这里假设数据库中用户名的名字为admin、密码为admin
	app.posy('/login', function(req, res) {
		var user={
			username:'admin',
			password:'admin'
		}
		if(req.body.username == user.username&&req.body.password == user.password) {
			res.send(200);
		}else{
			res.send(404);
		}
	})
	注意:一个完整的启动文件app.js如下
	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');
	var multer = require('multer');
	
	app.set('views', __dirname);
	app.set('view engine', 'html');
	app.engine('.html', require('ejs').__express);
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(multer());
	
	app.get('/', function(req, res) {
		res.render('index');
	});
	app.get('/home', function(req, res) {
		res,render('home');
	});
	app.get('/login', function(req, res) {
		res.render('login');
	});
	app.post('/login', function(req, res) {
		var user = {
			username: 'admin',
			passworld: 'admin'
		}
		if(req.body.username==user.username&&req.body.password==user.password) {
			res.send(200);
		}else{
			res.send(404);
		}
	});
	
	app.listen(80);

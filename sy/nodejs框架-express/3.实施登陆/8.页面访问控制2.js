### 访问控制
代码示例:修改启动文件app.js的内容
	1.安装模块express-session并引用，安装
	2.使用新模块进行访问时间限制
	var express = require('express-session');
	...
	app.use(session({
		secret:'secret',
		resave:true,
		saveUninitialized:false,
		cookie: {
			maxAge: 1000*60*10		//过期时间设置(单位毫秒)
		}
	}));
	3.app.js文件新增中间件并设置模板变量值
	app.use(function(req, res, next){
		res.locals.user = req.session.user;
		var err = req.session.error;
		res.locals.message = '';
		if(err) res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
		next();
	});
描述:res.locals对象保存在一次请求范围内的响应体中的本地变量值
	注意:中间件的放置顺序很重要，等同于执行顺序
		中间件必须放在HTTP动词方法之前，否则不会执行
	4.增加logout路径处理(用户登陆退出)和index路径请求处理
	app.get('/logout', function(req, res) {
		req.session.user = null;
		req.session.error = null;
		res.redirect('index');
	});
	app.get('/index', function(req, res) {
		res.render('index');
	});
	5.修改home路径请求处理
	app.get('/home', function(req, res) {
		if(req.session.user) {
			res.render('home');
		}else {
			req.session.error = "请先登录"
			res.redirect('login');
		}
	});
	6.修改路径为login的Post请求
	app.post('/login', function(req, res) {
		var user = {
			username:'admin',
			password:'admin'
		}
		if(req.body.username==user.username&&req.body.password==user.password) {
			req.session.user = user;
			res.send(200);
		}else{
			req.session.error="用户名或密码不对";
			res.send(404);
		}
	});

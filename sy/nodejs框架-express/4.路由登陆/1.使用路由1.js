# 路由介绍
路由 ————为不同的访问路径，指定不同的处理方法
代码示例:
	1.添加三个js文件，名称分别为login、home、logout
	2.login.js文件
	module.exports = function(app) {
		app.get('/login', function(req, res) {
			res.render('login');
		});
		
		app.post('/login', function(req, res) {
			var user={
				username:'admin',
				password:'admin'
			}
			if(req.body.username==user.username&&req.body.password==user.password) {
				req.session.user = user;
				res.send(200);
			}else{
				req.session.error = "用户名或密码不正确";
				res.send(404);
			}
		})
	}
	home.js文件
	module.exports = function(app) {
		app.get('/home', function(req, res) {
			if(req.session.user){
				res.render('home');
			}else{
				req.session.error = "请登录";
				res.redirect('login');
			}
		});
	}

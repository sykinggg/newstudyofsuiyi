### 访问视图
代码示例:
	app.get('/', function(req, res) {
		res.render('index');
	});
	
	app.get('/login', function(req, res) {
		res.render('login');
	});
	
	app.get('/home', function(req, res) {
		res.render('home');
	});

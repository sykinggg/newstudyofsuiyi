### body基本用法
代码示例:修改好之后的完整的文件app.js如下所示
	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');
	var multer = require('multer');
	app.set('views', __dirname);
	app.set('view engine', 'html');
	app.engine('.html', require('ejs').express);
	app.use(bodyParser.urlencoded({extend:true}));
	app.use(multer());
	app.get('/', function(req, res) {
		console.log("用户称为:" + req.body.username);
	});
	app.listen(80);
	

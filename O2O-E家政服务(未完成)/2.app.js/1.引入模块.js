引入模块
基本概念:
	我们要在右边的环境的项目中建立一个名字为app.js的文件，然后将我们项目中要用到的一些模块添加进来，
		比如我们项目中要用到的express、socket.io等，我们的项目中已经为同学们安装了所需要的模块，并建立了app.js文件
代码示例:代码的功能是将用到的模块引入到项目中
	var path = require('path'),
		logger = require('morgan'),
		express = require('express'),
		favicon = require('serve-favicon'),
		bodyParser = require('body-parser'),
		cookieParser = require('cookie-parser');
	var app = express(),
		server = require('http').Server(app);

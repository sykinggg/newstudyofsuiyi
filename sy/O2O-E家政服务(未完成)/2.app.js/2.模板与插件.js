模版与插件
基本概念:
	前面一节中我们引入了模块，现在添加项目使用的模版与中间用到的插件
代码示例:
	//路径与使用view模版为html
	app.set('views', path.join(_dirname, 'views'));
	app.set('view engine', 'html');
	app.engine('.html', require('ejs').__express);
	//中间用到的插件
	app.user(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(cookieParser());
	//设置本地静态资源路径
	app.use(express.static(path.join(__dirname, 'public')));

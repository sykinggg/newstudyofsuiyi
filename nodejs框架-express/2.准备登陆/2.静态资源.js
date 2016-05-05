### 静态资源
实际开发中我们肯定会用到，具体使用规则已在下面列出
网页中加载静态文件（css、js、img），就需要另外指定一个存放静态文件的目录
	当浏览器发出非HTML文件请求时，服务器端就会到这个目录下去寻找相关文件
	1.项目目录下添加一个存放静态文件的目录为public
	2.在public目录下在添加三个存放js、css、img的目录，相应取名为javascripts、stylesheets、images
	3.然后就可以把相关文件放到相应的目录下了
	4.浏览器发出如下的样式表请求
		<link href="/stylesheets/bootstrap.min.css" rel="stylesheet" media="screen">
	描述:服务器端就到public/stylesheets/目录中寻找bootstrap.min.css文件
	注意:有了静态目录文件，我们还得在启动文件里告诉它这个静态文件路径，需要指定一下
		app.use(express.static(require('path').join(__dirname, 'public')));
	重点:express.static —— 指定静态文件的查找目录
总结:
	使用use函数调用中间件指定express静态访问目录
	'public'就是我们我们新建的用来存放静态文件的总目录

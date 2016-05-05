### 模板引擎
使用express框架实现一个简单的用户登陆功能，让我们先准备一下相关资源
在nodejs中使用express框架，它默认的是ejs和jade渲染模板
一. 安装
1.ejs模板安装方法
	npm install ejs
二. 使用
1.目录下安装好了之后调用如下所示：
	//指定渲染模板文件的后缀名为ejs
	app.set('view engine', 'ejs');
2.默认ejs模板只支持渲染以ejs为扩展名的文件
	用html的形式去书写就会用到express的engine函数
3.engine注册模板引擎的函数，处理指定的后缀名文件
	// 修改模板文件的后缀名为html
	app.set('view engine', 'html');
	// 运行ejs模块
	app.engine('.html', require('ejs').__express);
注意:"__express"，ejs模块的一个公共属性，表示要渲染的文件扩展名。

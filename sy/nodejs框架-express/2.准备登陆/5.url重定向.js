### redirect基本用法
redirect方法允许网址的重定向，跳转到指定的url并且可以指定status，默认为302方式
语法格式:
	res.redirect([status], url);
代码示例:
	1.使用一个完整的url跳转到一个完全不同的域名
		res.redirect("http://www.baidu.com");
	2.跳转指定页面，比如登陆页
		res.redirect("login");

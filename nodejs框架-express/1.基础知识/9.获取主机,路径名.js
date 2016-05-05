### 获取主机名、路径名
重点:如何使用req对象来处理客户端发来的HTTP请求
	1.req.host返回请求头里取得主机名(不包含端口号)
	2.req.path返回请求的URL的路径名
代码示例:
	var express = require('express');
	var app = express();
	
	app.get("*", function(req, res) {
		console.log(req.path);
		console.log(req.host);
		res.send("req.host获取主机名, req.post获取请求路径名!");
	});
	
	app.listen(80);
运行结果:
/
Sun, 10 Jan 2016 07:11:59 GMT express deprecated req.host: Use req.hostname instead at home/project/app.js:6:18
me.hubwiz.com
/favicon.ico
me.hubwiz.com

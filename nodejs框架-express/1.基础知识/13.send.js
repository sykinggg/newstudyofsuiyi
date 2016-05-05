### send基本用法
send()方法向浏览器发送一个响应信息，并可以智能处理不同类型的数据
语法格式:
	res.send([body|status], [body]);
1.当参数为一个String时，Content-Type默认设置为"text/html"
	代码示例:
		res.send("Hello World");
2.当参数为Array或Object时，Express会返回一个JSON
	代码示例:
		res.send({user:'tobi'}); //{"user":"tobi"}
		res.send([1,2,3]);
3.当参数为一个Number时，并且没有上面提到的任何一条在响应体里，Express会帮你设置一个响应体，比如：200会返回字符"OK"
	代码示例:
		res.send(200);	// OK
		res.send(404);	// Not Found
		res.send(500);	// Internal Server Error
	代码描述:send方法在输出响应时会自动进行一些设置，比如HEAD信息、HTTP缓存支持等等
运行结果:
id:2
name:suiyi
Sun, 10 Jan 2016 08:24:06 GMT express deprecated res.send(status): Use res.sendStatus(status) instead at home/project/app.js:12:7

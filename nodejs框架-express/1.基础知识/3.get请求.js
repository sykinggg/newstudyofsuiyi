### get请求
get方法 —— 根据请求路径来处理客户端发出的GET请求
代码格式:
	app.get(path, function(request, response){});
代码描述:
	path为请求的路径
	第二个参数为处理请求的回调函数，有两个参数分别是request和response
		代表请求信息和响应信息
代码示例:
var express = require('express');
var app = express();

app.get('/test', function(request, response) {
	response.send('Welcome to the homepage!');
});

app.get('/about', function(request, response) {
	response.send('Welcome to the about page!');
});

app.get('*', function(request, response) {
	response.send("404 error!");
})

app.listen(80);
代码描述:
	指定了about页面路径、根路径和所有路径的处理方法
		并且在回调函数内部，使用HTTP回应的send方法，表示向浏览器发送一个字符串

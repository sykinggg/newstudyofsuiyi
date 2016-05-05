### 用户登陆
express的post请求方法
基本概念:post方法 —— 根据请求路径来处理客户端发出的Post请求
语法格式:
	app.post(path, function(req, res){});
语法描述:
	和get方法一样，path为请求的路径，第二个参数为处理请求的回调函数
		req和res分别代表请求信息和响应信息
代码示例:处理login的post请求
	app.('/login', function(req, res){
		
	});

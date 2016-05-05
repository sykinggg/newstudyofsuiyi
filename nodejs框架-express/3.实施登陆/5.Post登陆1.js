### 准备登陆
开始实现登陆功能，让我们要先做一些准备工作，为相关按钮添加点击事件、链接
代码示例:
	1.修改index.html，增加登陆链接
	[登 陆](login)
	2.强化login页面的login方法，实现一个简单的post请求
	function login() {
		var username = $("#username").val();
		var password = $("#password").val();
		var data = {"username": username, "password": password};
		$.ajax({
			url:'login',
			type:'POST',
			data:data,
			success: function(data, status) {
				if(status == 'success') {
					location.href="home";
				}
			},
			error:function(data, status, e) {
				if(status == "error") {
					location.href="login";
				}
			}
		});
	}

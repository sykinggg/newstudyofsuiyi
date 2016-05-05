### 访问控制
代码示例:
	1.login.html页面增加EJS模板变量<message>保存登陆提示信息
	...
	<message>
	用户登录、
	...
	home.html页面，登陆成功后跳转并传入用户名
	恭喜<%= user.username%>_ 登陆成功
	注意:使用EJS模板变量值使用<%= variable_name %>输出方式，字符串输出时默认经过escape转义编码
		想要输出一些动态生成的HTML标签时可使用<%- variable_nam %>输出方式，这种方式不会被escape转义编码
	home.html页面添加退出链接，如下
	[退出](logout)

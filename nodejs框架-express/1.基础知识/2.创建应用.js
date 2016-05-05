### 创建应用
示例:认识了Express框架，我们开始创建我们的第一个express应用
代码示例:在我们的默认项目主文件app.js添加如下内容
var express = require('express');
var app = express();
app.get('/', function(request, response) {
	response.send('Hello World!');
});
app.listen(80);
说明：在后面课程学习中，我们会统一使用80端口用于监听请求。

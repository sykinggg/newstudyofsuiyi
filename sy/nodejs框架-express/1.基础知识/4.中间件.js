### Middleware<中间件>
基本概念:中间件(middleware)就是处理HTTP请求的函数，用来完成各种特定的任务，
	比如检查用户是否登录、分析数据、以及其他在需要最终将数据发送给用户之前完成的任务
注意:它最大的特点就是，一个中间件处理完，可以把相应数据再传递给下一个中间件
代码示例:一个不进行任何操作、只传递request对象的中间件
function Middleware(request, response, next) {
	next();
}
代码描述:next为中间件的回调函数
	如果它带有参数，则代表抛出一个错误，参数为错误文本
代码示例:
function Middleware(request, response, next) {
	next("出错了！");
}
注意:执行流程
	抛出错误以后，后面的中间件将不再执行，直到发现一个错误处理函数为止
		如果没有调用next方法,后面注册的函数也是不会执行的
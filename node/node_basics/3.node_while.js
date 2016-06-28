/*


	Node.js事件循环


*/
/*Node.js 是单进程单线程应用程序，但是通过事件和回调支持并发，所以性能非常高*/
/*Node.js 的每一个 API 都是异步的，并作为一个独立线程运行，使用异步函数调用，并处理并发*/
/*Node.js 基本上所有的事件机制都是用设计模式中观察者模式实现*/
// Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出
// 每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

/*
	事件驱动程序
*/
/*Node.js 使用事件驱动模型*/
// 当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求

// 这个模型非常高效可扩展性非常强
// webserver一直接受请求而不等待任何读写操作
/*非阻塞式IO或者事件驱动IO*/
// 在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数

/*整个事件驱动的流程就是这么实现的，非常简洁*/
// 有点类似于观察者模式，事件相当于一个主题(Subject)
// 而所有注册到这个事件上的处理函数相当于观察者(Observer)
/*

	概念示例

*/
// // 引入events模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.eventEmitter();

// //绑定事件及事件的处理程序
// eventEmitter.on('eventName', eventHandler);

// // 触发事件
// eventEmitter.emit('eventName');

/*

	真实示例

*/


// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectHandler = function connected() {
	console.log("连接成功");
	// 触发 data_received 事件
	eventEmitter.emit('data_received');
}
// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function() {
	console.log("数据接收成功！");
});
// 触发 connection 事件
eventEmitter.emit('connection');

console.log("程序执行完毕");

/*

	nodejs-异步函数的错误提示

*/
/*执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数*/

var fs = require("fs");
fs.readFile("2.input.txt", function(err, data) {
	if(err) {
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log("程序执行完毕!");
/*

	Node.js EventEmitter


*/
/*Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列*/
/*Node.js里面的许多对象都会分发事件*/
// 一个net.Server对象会在每次有新连接时分发一个事件
// 一个fs.readStream对象会在文件被打开的时候发出一个事件
/*所有这些产生事件的对象都是 events.EventEmitter 的实例*/

/*
	EventEmitter 类
*/
// events 模块只提供了一个对象： events.EventEmitter
// EventEmitter 的核心就是事件触发与事件监听器功能的封装

/*使用:通过require("events");来访问该模块*/

/*
	概念描述
*/
// // 引用events模块
// var events = require("events");

// // 创建eventEmitter对象
// var eventEmitter = new events.EventEmitter();

/*注意:*/
// EventEmitter 对象如果在实例化时发生错误，会触发 'error' 事件
// 当添加新的监听器时，'newListener' 事件会触发
// 当监听器被移除时，'removeListener' 事件被触发

/*

	node-EventEmitter用法

*/
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
	console.log("some_event事件触发");
});
setTimeout(function() {
	event.emit('some_event');
}, 5000);
/*代码执行的原理*/
//  event 对象注册了事件 some_event 的一个监听器
// 	然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event
// 	此时会调用some_event 的监听器



/*
	node-EventEmitter支持多个监听器
*/
// EventEmitter 的每个事件由一个事件名和若干个参数组成
// 事件名是一个字符串，通常表达一定的语义
// 对于每个事件，EventEmitter 支持 若干个事件监听器

// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递

var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
/*代码说明*/
// emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件
// 运行结果中可以看到两个事件监听器回调函数被先后调用
/*EventEmitter 提供了多个属性，如 on 和 emit*/
// on 函数用于绑定事件函数
// emit 属性用于触发一个事件

/*

	node_方法和描述

*/


/* addListener(event, listener) */
// 为指定事件添加一个监听器到监听器数组的尾部


/* on(event, listener) */
// 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数
// server.on('connection', function(stream) {
// 	console.log('someone connection');
// });


/* once(event, listener) */
// 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器
// server.once('connection', function(stream) {
// 	console.log('Ah, we have our first user!');
// });


/* removeListener(event, listener) */
// 移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器
// var callback = function(stream) {
// 	console.log('someone connection');
// };
// server.on('connection', callback);
// // ...
// server.removeListener('connection', callback);


/* removeAllListener([event]) */
// 移除所有事件的所有监听器
// 如果指定事件，则移除指定事件的所有监听器


/* setMaxListeners(n) */
// EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息
// setMaxListeners 函数用于提高监听器的默认限制的数量


/* listeners(event) */
// 返回指定事件的监听器数组


/* emit(event, [arg1], [arg2], [...]) */
// 按参数的顺序执行每个监听器
// 如果事件有注册监听返回 true，否则返回 false



/*

	类方法

*/
/* listenerCount(emitter, event) */
// 返回指定事件的监听器数量


/*

	事件

*/
/* newListener(event, listener) */
// *event-字符串,事件名称
// *listener-处理事件函数
// 该事件在添加新监听器时被触发


/* removeListener(event, listener) */
// *event-字符串,事件名称
// *listener-处理事件的函数
// 从指定监听器数组中删除一个监听器
// 需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引


/*

	实例

*/
/* 实例通过 connection（连接）事件演示了 EventEmitter 类的应用 */

var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器1
var listener1 = function listener1() {
	console.log("监听器listener1执行");
}

// 监听器2
var listener2 = function listener() {
	console.log("监听器listener2执行");
}

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.addListener('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "个监听器监听连接事件");


// 处理 connection 事件
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require("events").EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + "个监听器监听连接事件");

console.log("程序执行完毕！");





/*

			error事件

*/
/* EventEmitter 定义了一个特殊的事件 error */
/* 包含了错误的语义，在遇到 异常的时候通常会触发 error 事件 */
// 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器
// Node.js 会把它当作异常，退出程序并输出错误信息

var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');



/*

		继承EventEmitter

*/
//  不会直接使用 EventEmitter，而是在对象中继承它
//   fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类

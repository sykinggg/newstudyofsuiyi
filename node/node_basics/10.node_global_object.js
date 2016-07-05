/*

	Node.js 全局对象
		JavaScript 中有一个特殊的对象，称为全局对象（Global Object）
		它及其所有属性都可以在程序的任何地方访问，即全局变量

*/
/* 在浏览器 JavaScript 中，通常 window 是全局对象 */
/* Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性 */
// 在 Node.js 我们可以直接访问到 global 的属性


/*

	全局对象与全局变量

*/

/*
	global 最根本的作用是作为全局变量的宿主
		按照 ECMAScript 的定义，满足以下条 件的变量是全局变量
*/
// 在最外层定义的变量
// 全局对象的属性
// 隐式定义的变量（未定义直接赋值的变量）

// 定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然
/*

	注意:
		在 Node.js 中你不可能在最外层定义变量
	因为所有用户代码都是属于当前模块的
	而模块本身不是最外层上下文

*/
/*

	注意:
		永远使用 var 定义变量以避免引入全局变量
	因为全局变量会污染 命名空间，提高代码的耦合风险

*/





/*
	
	__filename(两个下划线)


*/
// __filename(两个下划线) 表示当前正在执行的脚本的文件名
// 它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同
// 如果在模块中，返回的值是模块文件的路径

/*
	示例一
*/
// 输出全局变量 __filename 的值
console.log(__filename);
// E:\newstudyofsuiyi\node\node_basics\10.node_global_object.js




/*

	__dirname
		__dirname 表示当前执行脚本所在的目录

*/

/*
	示例二
*/
console.log(__dirname);
// E:\newstudyofsuiyi\node\node_basics




/*

	setTimeout(cb, ms)
		setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)
		setTimeout() 只执行一次指定函数

*/
// 返回一个代表定时器的句柄值
function printHello() {
	console.log("Hello World!");
}

// 两秒后执行以上函数
setTimeout(printHello, 2000);




/*

	clearTimeout(t)
		clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器
		参数 t 是通过 setTimeout() 函数创建的计算器

*/
/*
	示例3
*/
function printHello() {
	console.log("Hello World!-setTimeout");
}

// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);




/*

	setInterval(cb, ms)
		setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)
			返回一个代表定时器的句柄值
			可以使用 clearInterval(t) 函数来清除定时器
			setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭

*/

/*
	示例4
*/
function printHello() {
	console.log("Hello World!");
}

// 两秒后执行以上函数
setInterval(printHello, 2000);
	



/*

	console的概念

*/
// console 用于提供控制台标准输出，
// 它是由 Internet Explorer 的 JScript 引擎提供的调试工具
// 后来逐渐成为浏览器的事实标准

// 用于向标准输出流（stdout）或标准错误流（stderr）输出字符





/*
	console.log([data], [...])
*/
/* 概念描述 */
// 向标准输出流打印字符并以换行符结束
// 该方法接收若干 个参数，如果只有一个参数，则输出这个参数的字符串形式
// 如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出





/*
	console.info([data], [ ...]);
*/
/* 概念描述 */
// 该命令的作用是返回信息性消息，这个命令与console.log差别并不大
// 除了在chrome中只会输出文字外，其余的会显示一个蓝色的惊叹号




/*
	console.error([data], [ ...]);
*/
/* 概念描述 */
// 输出错误消息的
// 控制台在出现错误时会显示是红色的叉子




/*
	console.warn([data], [...]);
*/
/* 概念描述 */
// 输出警告消息
// 控制台出现有黄色的惊叹号




/*
	console.dir(obj, [options])
*/
/* 概念描述 */
// 用来对一个对象进行检查（inspect）
// 并以易于阅读和打印的格式显示




/*

	console.time(label)

*/
/* 概念描述 */
// 输出时间，表示计时开始




/*

	console.timeEnd(label);

*/
/* 概念描述 */
// 结束时间，表示计时结束




/*

	console.trace(message, [...])

*/
// 当前执行的代码在堆栈中的调用路径
// 只要给想测试的函数里面加入 console.trace 就行了




/*

	console.assert(value, [message, ...])

*/
/* 概念描述 */
// 用于判断某个表达式或变量是否为真
// 接受两个参数，第一个参数是表达式，第二个参数是字符串
// 只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果




/*

	console的实例

*/
/*
	console.log
*/
console.log('Hello World');

/*
	console.trace
*/
console.trace();

/*
	示例5
*/
console.info("程序开始执行");

var counter = 10;
console.log("计数", counter);

console.time('获取数据');

var test = 'test'
console.log(test);

console.timeEnd('获取数据');

console.info('程序执行完毕!');





/*

	process
		process 是一个全局变量，即 global 对象的属性

*/
// 用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口




/*
	exit
*/
// 当进程准备退出时触发




/*
	beforeExit
*/
// 当 node 清空事件循环，并且没有其他安排时触发这个事件
// 通常来说，当没有进程安排时 node 退出
// 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行




/*
	uncaughtException
*/
// 当一个异常冒泡回到事件循环，触发这个事件
// 如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生




/*
	Signal事件
*/
// 当进程接收到信号时就触发
// 信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等
process.on('exit', function(code) {
	// 以下代码永远不会执行
	setTimeout(function() {
		console.log('该代码不会执行');
	}, 0);

	console.log('退出码为:', code);
});
console.log('程序执行完毕');




/*

	退出码状态

*/
/*
	1
*/
/*Uncaught Fatal Exception*/
// 有未捕获异常，并且没有被域或 uncaughtException 处理函数处理


/*
	2
*/
/*Unused*/
// 保留


/*
	3
*/
/*Internal JavaScript Parse Error*/
// JavaScript的源码启动 Node 进程时引起解析错误
// 仅会在开发 Node 时才会有


/*
	4
*/
/*Internal JavaScript Evaluation Failure*/
// JavaScript 的源码启动 Node 进程，评估时返回函数失败
// 仅会在开发 Node 时才会有



/*
	5
*/
/*Fatal Error*/
// V8 里致命的不可恢复的错误
// 通常会打印到 stderr ，内容为： FATAL ERROR



/*
	6
*/
/*Non-function Internal Exception Handler*/
// 未捕获异常，内部异常处理函数不知为何设置为on-function，并且不能被调用



/*
	7
*/
/*Internal Exception Handler Run-Time Failure*/
// 未捕获的异常， 并且异常处理函数处理时自己抛出了异常
// 如果 process.on('uncaughtException') 或 domain.on('error') 抛出了异常



/*
	8
*/
/*Unused*/
// 保留



/*
	9
*/
/*Invalid Argument*/
// 可能是给了未知的参数，或者给的参数没有值



/*
	10
*/
/*Internal JavaScript Run-Time Failure*/
// JavaScript的源码启动 Node 进程时抛出错误
// 仅会在开发 Node 时才会有



/*
	12
*/
/*Invalid Debug Argument*/
// 设置了参数--debug 和/或 --debug-brk，但是选择了错误端口



/*
	>128
*/
/*Signal Exits*/
// 如果 Node 接收到致命信号，比如SIGKILL 或 SIGHUP
// 那么退出代码就是128 加信号代码




/*

	process属性

*/
/* Process 提供了很多有用的属性 */



/*
	stdout
*/
// 标准输出流
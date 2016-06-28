/*

	Node.js 回调函数

*/
// Node.js 异步编程的直接体现就是回调
// 异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了
// 回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数
// 说明: 可以一边读取文件，一边执行其他命令
/*在文件读取完成后，我们将文件内容作为回调函数的参数返回*/
/*在执行代码时就没有阻塞或等待文件 I/O 操作*/


/*

	阻塞代码实例

*/
// var fs = require("fs");

// var data = fs.readFileSync('2.input.txt');

// console.log(data.toString());
// console.log("程序执行完成!");



/*

	非阻塞代码实例
	
*/
var fs = require("fs");

fs.readFile('2.input.txst', function(err, data) {
	if(err) {
		return console.error(err);
	}
	console.log(data.toString());
});

console.log("程序执行结束！");


/*
	总结:阻塞与非阻塞调用的不同
*/
/*第一个实例在文件读取完后才执行完程序*/
/*第二个实例我们呢不需要等待文件读取完，这样就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能*/
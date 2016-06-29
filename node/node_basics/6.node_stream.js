/*

	Node.js Stream(流)

*/
// Stream 是一个抽象接口，Node 中有很多对象实现了这个接口
/*
	例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）
*/


/* Node.js，Stream 有四种流类型 */
// Readable-可读操作
// Writable-可写操作
// Duplex-可读可写操作
// Transform-操作被写入数据，然后读出结果


/* 所有的 Stream 对象都是 EventEmitter 的实例 */
// data-当有数据可读时触发
// end-没有更多的数据可读时触发
// error-在接收和写入过程中发生错误时触发
// finish-所有数据已被写入到底层系统时触发




/*

	从流中读取数据

*/
/* 实例 */
var fs = require("fs");
var data = "";

// 创建可读流
var readerStream = fs.createReadStream('2.input.txt');

// 设置编码为utf-8
readerStream.setEncoding('UTF8');


// 处理事件 --> data, end, and error
readerStream.on('data', function(chunk) {
	data += chunk;
});

readerStream.on('end', function() {
	console.log(data);
});

readerStream.on('error', function() {
	console.log(err, stack);
});

console.log("程序执行完成");





/*

	写入流

*/
/* 	实例 */

var fs = require("fs");
var data = "写入流写入流写入流写入流";


// 创建一个可以写入的流,写入到文件2.input.txt中
var writerStream = fs.createWriteStream('2.input.txt');

// 使用utf-8编码写入数据
writerStream.write(data, 'UTF8');

// 标记文件末尾
writerStream.end();

// 处理事件流 --> data, end, error
writerStream.on("finish", function() {
	console.log("写入流完成");
});

writerStream.on("error", function() {
	console.log(err.stack);
});

console.log("程序执行完毕");




/*

	管道流

*/
/*
	管道提供了一个输出流到输入流的机制
	通常用于从一个流中获取数据并将数据传递到另外一个流中
*/


/* 实例 */
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('2.input.txt');


// 创建一个可写流
var writerStream = fs.createWriteStream('6.other_input.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("管道流执行完成");




/*

	链市流

*/
/* 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制 */
// 链式流一般用于管道操作
/*
	用管道和链式来压缩和解压文件
*/
/* 实例 */
var fs = require("fs");
var zlib = require('zlib');

// 压缩2.input.txt 文件为 2.input.txt.gz
fs.createReadStream('2.input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('2.input.txt.gz'));


console.log("文件压缩完成");

// 注意:当前目录下生成了 2.input.txt 的压缩文件 2.input.txt.gz



/*
	解压文件
*/
var fs = require("fs");
var zlib = require('zlib');

// 解压2.input.txt.gz文件为2.input_gz.txt
fs.createReadStream('2.input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('2.input_gz.txt'));

console.log("文件解压完成！");

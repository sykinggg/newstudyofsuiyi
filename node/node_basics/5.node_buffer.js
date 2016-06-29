/*

    Node-Buffer(缓冲区)

*/
/* JavaScript 语言自身只有字符串数据类型，没有二进制数据类型 */
/* 在处理像TCP流或文件流时，必须使用到二进制数据 */
// 在 Node.js中，定义了一个 Buffer 类
// 该类用来创建一个专门存放二进制数据的缓存区


// Buffer 类是随 Node 内核一起发布的核心库
/*
	Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据
	每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库
	一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存
*/

/* 创建Buffer类 */

// 方法一
// 创建长度为 10 字节的 Buffer 实例
var buf = new Buffer(10);

// 方法二
// 通过给定的数组创建 Buffer 实例
var buf = new Buffer([10, 20, 30, 40, 50]);

// 方法三
// 通过一个字符串来创建 Buffer 实例
var buf = new Buffer(["www.runoob.com", "utf-8"]);

// utf-8 是默认的编码方式
// 同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"


/* 写入缓冲区 */

/* 语法 */
// buf.write(string, offset, length, encoding);
// string-写入缓冲区的字符串
// offset-缓冲区开始写入的索引值，默认为 0 
// length-写入的字节数，默认为 buffer.length
// encoding-使用的编码。默认为 'utf8'

/* 返回值 */
// 返回实际写入的大小
// 如果 buffer 空间不足， 则只会写入部分字符串

/* 实例 */
buf = new Buffer(256);
len = buf.write('Www.baidu.com');

console.log("写入的字节数" + len);
// 写入的字节数13


/* 从缓冲区读取数据 */

/* 语法 */
// 读取 Node 缓冲区数据的语法
// buf.toString(encoding, start, end);
// encoding-使用的编码。默认为 'utf8'
// start-指定开始读取的索引位置，默认为 0
// end-结束位置，默认为缓冲区的末尾

/* 返回值 */
// 解码缓冲区数据并使用指定的编码返回字符串

buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
	buf[i] = i + 97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8', 0, 5));
console.log(buf.toString(undefined, 0, 5));




/*

	Buffer转换为JSON对象

*/

/* 语法 */
// 将 Node Buffer 转换为 JSON 对象的函数语法格式
// buf.toJSON()

/* 返回值 */
// 返回 JSON 对象

/* 实例 */
var buf = new Buffer('www.baidu.com');
var json = buf.toJSON();

console.log(json);
// {type: 'buffer', 
// data: [ 119, 119, 119, 46, 114, 117, 110, 111, 111, 98, 46, 99, 111, 109 ] }




/*

	缓冲区合并

*/
/* 语法 */
// Node 缓冲区合并的语法
// Buffer.concat(list, totalLength);

/* 参数 */
// list-用于合并的 Buffer 对象数组列表
// totalLength-指定合并后Buffer对象的总长度

/* 返回值 */
// 返回一个多个成员合并的新 Buffer 对象

/* 实例 */
var buffer1 = new Buffer('教程');
var buffer2 = new Buffer('网址');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3.toString());




/*

	缓冲区比较

*/
/* 语法 */
// Node Buffer 比较的函数语法
// 该方法在 Node.js v0.12.2 版本引入
// buf.compare(otherBuffer);


/* 参数 */
// otherBuffer-与 buf 对象比较的另外一个 Buffer 对象


/* 返回值 */
// 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同


/* 实例 */
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
	console.log(buffer1 + "在" + buffer2 + "之前");
}else if(result == 0) {
	console.log(buffer1 + "在" + buffer2 + "相同");
}else{
	console.log(buffer1 + "在" + buffer2 + "之后");
}

// ABC在ABCD之前





/*

	拷贝缓冲区

*/
/* 语法 */
// Node 缓冲区拷贝语法
// buf.copy(targetBuffer, targetStrat, sourceStart, sourceEnd);


/* 参数 */
// targetBuffer-要拷贝的 Buffer 对象
// targetStrat-数字, 可选, 默认: 0
// sourceStart-数字, 可选, 默认: 0
// sourceEnd-数字, 可选, 默认: buffer.length


/* 返回值 */
// 没有返回值


/* 实例 */
var buffer1 = new Buffer("ABC");
// 拷贝一个缓冲区
var buffer2 = new Buffer(1);
// 实例化出的内存空间仅是大小限制
buffer1.copy(buffer2);
// 注意:从buffer1中复制其内容到buffer2中并因为buffer2的大小而展示
console.log(buffer2.toString());




/*

	缓冲区裁剪

*/
/* 语法 */
// Node 缓冲区裁剪语法
// buf.slice(start, end);


/* 参数 */
// start-数字, 可选, 默认: 0
// end-数字, 可选, 默认: buffer.length


/* 返回值 */
// 返回一个新的缓冲区，它和旧缓冲区指向同一块内存
// 但是从索引 start 到 end 的位置剪切


/* 实例 */
var buffer1 = new Buffer("runoob");
// 裁剪缓冲区
var buffer2 = buffer1.slice(0, 2);
console.log(buffer2.toString());
// ru




/*

	缓冲区长度

*/
/* 语法 */
// Node 缓冲区长度计算语法
// buf.length


/* 返回值 */
// 返回 Buffer 对象所占据的内存长度


/* 实例 */
var buffer = new Buffer("www.baidu.com");
// 缓冲区长度
console.log(buffer.length);
// 13









/*

	方法参考手册

*/


/* new Buffer(size) */
// 分配一个新的 size 大小单位为8位字节的 buffer
// 注意, size 必须小于 kMaxLength，否则，将会抛出异常 RangeError


/* new Buffer(buffer) */
// 拷贝参数 buffer 的数据到 Buffer 实例


/* new Buffer(str, encoding) */
// 分配一个新的 buffer ，其中包含着传入的 str 字符串
// encoding 编码方式默认为 'utf8'


/* buf.length */
// 返回这个 buffer 的 bytes 数
// 注意这未必是 buffer 里面内容的大小
// length 是 buffer 对象所分配的内存数，它不会随着这个 buffer 对象内容的改变而改变


/* buf.write(string, offset, length, encoding) */
// 根据参数 offset 偏移量和指定的 encoding 编码方式，将参数 string 数据写入buffer
// 	offset 偏移量默认值是 0, encoding 编码方式默认是 utf8
// length 长度是将要写入的字符串的 bytes 大小
// 返回 number 类型，表示写入了多少 8 位字节流
// 如果 buffer 没有足够的空间来放整个 string，它将只会只写入部分字符串
// length 默认是 buffer.length - offset
// 这个方法不会出现写入部分字符

/*

	略》》》http://www.runoob.com/nodejs/nodejs-buffer.html

*/



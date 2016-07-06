/*

	Node.js 文件系统

*/
// Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API
/*Node 导入文件系统模块(fs)语法*/
// var fs = require('fs');




/*

	异步和同步
		Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本
		读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()

*/
// 异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)


/*
	示例1
*/
// 12.input.txt

var fs = require('fs');

// 异步读取
fs.readFile('12.input.txt', function(err, data) {
	if(err) {
		return console.log(err);
	}
	console.log('异步读取  ' + data.toString());
});

// 同步读取
var data = fs.readFileSync('12.input.txt');

console.log("同步读取:  " + data.toString());

console.log("程序执行完毕");


/* 运行结果 */
// 同步读取:  菜鸟教程官网地址：www.runoob.com
// 文件读取实例
// 程序执行完毕
// 异步读取  菜鸟教程官网地址：www.runoob.com
// 文件读取实例










/*


	Node.js文件系统的方法


*/
/*
	基本语法格式
*/
// 为在异步模式下打开文件的语法格式
// fs.open(path, flage, mode, callback);



/*
	参数
*/
// path-文件路径
// flags-文件打开的行为
// mode-设置文件模式(权限),文件创建默认权限为0666(可读,可写)
// callback-回调函数,带有两个参数:callback(err, fd)



/*

	flags参数具体值

*/

/* 
	r
*/
// 以读取模式打开文件
// 如果文件不存在抛出异常



/*
	r+
*/
// 以读写模式打开文件
// 如果文件不存在抛出异常


/*
	rs
*/
// 以同步的方式读取文件


/*
	rs+
*/
// 以同步的方式读取和写入文件


/*
	w
*/
// 以写入模式打开文件
// 如果文件不存在则创建


/*
	wx
*/
// 类似 'w'，但是如果文件路径存在
// 文件写入失败


/*
	w+
*/
// 以读写模式打开文件
// 如果文件不存在则创建


/*
	wx+
*/
// 类似 'w+'， 但是如果文件路径存在,则文件读写失败


/*
	a
*/
// 以追加模式打开文件
// 如果文件不存在则创建


/*
	ax
*/
// 类似 'a'， 但是如果文件路径存在,则文件追加失败


/*
	a+
*/
// 以读取追加模式打开文件
// 如果文件不存在则创建

/*
	ax+
*/
// 类似 'a+'， 但是如果文件路径存在,则文件读取追加失败



/*
	示例2
*/
// 读写

var fs = require('fs');

// 异步打开文件
console.log("准备打开文件!");
fs.open('12.input.txt', 'r+', function(err, fd) {
	if(err) {
		return console.error(err);
	}
	console.log("文件打开成功");
})

/*
	运行结果
*/
// 准备打开文件!
// 文件打开成功




/*

	获取文件信息

*/

/*
	语法格式
*/
//  通过异步模式获取文件信息的语法格式
// fs.stat(path, callback)


/*
	参数
*/
// path-文件路径
// callback-回调函数,带有两个参数:(err, stats), stats是fs.Stats对象

// fs.stat(path)执行后，会将stats类的实例返回给其回调函数
// 可以通过stats类中的提供方法判断文件的相关属性
var fs = require('fs');

fs.stat('12.input.txt', function(err, stats) {
	console.log(stats.isFile());
	console.log(err);
	console.log(stats);
})


/*
	运行结果
*/
// true
// null
// { dev: -525518115,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: undefined,
//   ino: 1970324836988540,
//   size: 61,
//   blocks: undefined,
//   atime: Wed Jul 06 2016 13:36:16 GMT+0800 (中国标准时间),
//   mtime: Wed Jul 06 2016 13:36:22 GMT+0800 (中国标准时间),
//   ctime: Wed Jul 06 2016 13:36:22 GMT+0800 (中国标准时间),
//   birthtime: Wed Jul 06 2016 13:36:16 GMT+0800 (中国标准时间) }




/*

	stats类中的方法

*/

/*
	stats.isFile()
*/
// 如果是文件返回 true，否则返回 false


/*
	stats.isDirectory()
*/
// 如果是目录返回 true，否则返回 false


/*
	stats.isBlockDevice()
*/
// 如果是块设备返回 true，否则返回 false


/*
	stats.isCharacterDevice()
*/
// 如果是字符设备返回 true，否则返回 false


/*
	stats.isSymbolicLink()
*/
// 如果是软链接返回 true，否则返回 false


/*
	stats.isFIFO()
*/
// 如果是FIFO，返回true，否则返回 false
// FIFO是UNIX中的一种特殊类型的命令管道


/*
	stats.isSocket()
*/
// 如果是 Socket 返回 true，否则返回 false



/*
	示例3
*/
var fs = require('fs');

console.log("准备打开文件!");

fs.stat('12.input.txt', function(err, stats) {
	if(err) {
		return console.error(err);
	}
	console.log(stats);
	console.log("读取文件信息成功!");


	// 检测文件类型
	console.log("是否为文件(isFile):   " + stats.isFile());
	console.log("是否为目录(isDirectory):   " + stats.isDirectory());
})



/*
	运行结果
*/
// 准备打开文件!
// { dev: -525518115,
//   mode: 33206,
//   nlink: 1,
//   uid: 0,
//   gid: 0,
//   rdev: 0,
//   blksize: undefined,
//   ino: 1970324836988540,
//   size: 61,
//   blocks: undefined,
//   atime: Wed Jul 06 2016 13:36:16 GMT+0800 (中国标准时间),
//   mtime: Wed Jul 06 2016 13:36:22 GMT+0800 (中国标准时间),
//   ctime: Wed Jul 06 2016 13:36:22 GMT+0800 (中国标准时间),
//   birthtime: Wed Jul 06 2016 13:36:16 GMT+0800 (中国标准时间) }
// 读取文件信息成功!
// 是否为文件(isFile):   true
// 是否为目录(isDirectory):   false





/*

	写入文件

*/
/*
	语法基本格式
*/
// 异步模式下写入文件的语法格式
// fs.writeFile(filename, data, options, callback)

/*
	注意:
		如果文件存在，该方法写入的内容会覆盖旧的文件内容
*/


/*
	参数
*/
// path-文件路径
// data-要写入的数据,可以是 String(字符串) 或 Buffer(流)
// options-该测试是一个对象,包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666,flag 为 'w'
// callback-回调函数,回调函数只包含错误信息参数(err),在写入失败时返回


/*
	示例4
*/
var fs = require('fs');

console.log("准备写入文件");
fs.writeFile("12.input.txt", "我是通过写入的文件内容", function(err) {
	if(err) {
		return console.error(err);
	}
	console.log("数据写入成功!");

	console.log("读取写入数据!");
	fs.readFile("12.input.txt", function(err, data) {
		if(err) {
			return console.error(err);
		}
		console.log("异步读取数据:   " + data.toString());
	});
});



/*
	运行结果
*/
// 准备写入文件
// 读取写入数据!
// 异步读取  我是通过写入的文件内容





/*

	读取文件

*/

/*
	基本语法
*/
// 异步模式下读取文件的语法格式
// fs.read(fd, buffer, offset, length, position, callback)
// 该方法使用了文件描述符来读取文件


/*
	参数
*/
// fd-通过 fs.open() 方法返回的文件描述符
// buffer-数据写入的缓冲区
// offset-缓冲区写入的写入偏移量
// length-要从文件中读取的字节数
// position-文件读取的起始位置
/* 如果 position 的值为 null，则会从当前文件指针的位置读取 */
// callback-回调函数
/*三个参数err, bytesRead, buffer*/
// err 为错误信息
// bytesRead 表示读取的字节数
// buffer 为缓冲区对象

/*
	示例5
*/
var fs = require('fs');
var buf = new Buffer(1024);

console.log("准备打开已存在的文件!");
fs.open('12.input.txt', 'r+', function(err, fd) {
	if(err) {
		return console.error(err);
	}
	console.log("文件打开成功!");
	console.log("准备读取文件!");
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
		if(err) {
			console.error(err);
		}
		console.log(bytes + "  字节被读取");

		if(bytes > 0) {
			console.log(buf.slice(0, bytes).toString());
		}
	});
});




/*
	运行结果
*/
// 准备打开已存在的文件!
// 文件打开成功
// 33  字节被读取
// 我是通过写入的文件内容





/*

	关闭文件

*/
/*
	基本语法
*/
// 异步模式下关闭文件的语法格式
// fs.close(fd, callback)
// 使用了文件描述符来读取文件


/*
	参数	
*/
// fd-通过fs.open()方法返回的文件描述符
// callback-回调函数,没有参数


/*
	示例6
*/
var fs = require('fs');
var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open('12.input.txt', 'r+', function(err, fd) {
	if(err) {
		return console.error(err);
	}

	console.log("文件打开成功!");
	console.log("准备读取文件!");
	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
		if(err) {
			console.log(err);
		}

		// 仅输出读取的字节
		if(bytes > 0) {
			console.log(buf.slice(0, bytes).toString());
		}

		// 关闭文件
		fs.close(fd, function(err) {
			if(err) {
				console.log(err);
			}
			console.log("文件关闭成功！");
		});
	});
});




/*
	运行结果
*/
// 准备打开文件！
// 文件打开成功!
// 准备读取文件!
// 我是通过写入的文件内容
// 文件关闭成功！





/*

	截取文件

*/

/*
	基本语法
*/
// 异步模式下截取文件的语法格式
// fs.ftruncate(fd, len, callback)
// 使用了文件描述符来读取文件


/*
	参数
*/
// fd-通过fs.open()方法返回的文件描述符
// len-文件内容截取长度
// callback-回调函数,没有参数



/*
	示例7
*/
var fs = require('fs');
var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open("12.input.txt", 'r+', function(err, fd) {
	if(err) {
		return console.error(err);
	}

	console.log("文件打开成功！");
	console.log("截取5字节后的文件内容");

	// 截取文件
	fs.ftruncate(fd, 5, function(err) {
		if(err) {
			console.log(err);
		}
		console.log("文件截取成功！");
		console.log("读取相同文件！");
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
			if(err) {
				console.log(err);
			}

			// 仅输出读取的字节
			if(bytes > 0) {
				console.log(buf.slice(0, bytes).toString());
			}

			// 关闭文件
			fs.close(fd, function(err) {
				if(err) {
					console.log(err);
				}
				console.log("文件关闭成功!");
			});
		});
	});
});




/*
	运行结果
*/
// 准备打开文件！
// 文件打开成功！
// 截取5字节后的文件内容
// 文件截取成功！
// 读取相同文件！
// 我
// 文件关闭成功!





/*

	删除文件

*/



/*
	基本语法
*/
// 删除文件的语法格式
// fs.unlink(path, callback);



/*
	参数
*/
// path-文件路径
// callback-回调函数,没有参数




/*
	示例8
*/
var fs = require('fs');

console.log("准备删除文件！");
fs.unlink("12.input.txt", function(err) {
	if(err) {
		return console.error(err);
	}
	console.log("文件删除成功！");
});



/*
	运行结果
*/
// 准备删除文件！
// 文件删除成功！





/*

	创建目录/文件

*/
/*
	示例9
*/
var fs = require("fs");

/* 创建目录 */
// console.log("创建文件 12.input.txt");
// fs.mkdir("12.input.txt", function(err) {
// 	if(err) {
// 		return console.error(err);
// 	}
// 	console.log("文件创建成功");
// });

/* 创建目录 */
console.log("创建目录 /tmp/text/");
fs.mkdir("tmp/text", function(err) {
	if(err) {
		return console.error(err);
	}
	console.log("目录创建成功");
})

/*
	注意:
		只能添加目录
*/



/*
	运行结果:
*/
// 创建文件 12.input.txt
// 创建目录 /tmp/text/
// { [Error: EEXIST: file already exists, mkdir 'E:\newstudyofsuiyi\node\node_basic
// s\12.input.txt']
//   errno: -4075,
//   code: 'EEXIST',
//   syscall: 'mkdir',
//   path: 'E:\\newstudyofsuiyi\\node\\node_basics\\12.input.txt' }
// { [Error: ENOENT: no such file or directory, mkdir 'E:\tmp\text']
//   errno: -4058,
//   code: 'ENOENT',
//   syscall: 'mkdir',
//   path: 'E:\\tmp\\text' }




/*

	读取目录

*/
/*
	语法
*/
// 读取目录的语法格式
// fs.readdir(path, callback)


/*
	参数
*/
// path-文件路径
// callback-回调函数
/* 回调函数带有两个参数err, files */
// err 为错误信息
// files 为 目录下的文件数组列表



/*
	示例10
*/

var fs = require('fs');

console.log('查看目录');
fs.readdir('tmp/', function(err, files) {
	if(err) {
		return console.error(err);
	}
	files.forEach(function(file) {
		console.log(file);
	});
});



/*
	运行结果
*/
// 查看目录
// text




/*

	删除目录

*/
/*
	基本语法
*/
// 删除目录的语法格式
// fs.rmdir(path, callback)


/*
	参数
*/
// path-文件路径
// callback-回调函数,没有参数



/*
	示例11
*/
var fs = require("fs");

console.log("删除目录 tmp/text");
fs.rmdir('tmp/text', function(err) {
	if(err) {
		return console.error(err);
	}

	console.log("读取 /tmp 目录");

	fs.readdir('/tmp', function(err, files) {
		if(err) {
			return console.error(err);
		}
		files.forEach(function(file) {
			console.log(file);
		});
	});
});





/*

	文件模块方法

*/

/*
	
*/
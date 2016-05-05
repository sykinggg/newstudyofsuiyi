reqiure()
基本概念:require()语句与include()语句类似，都是实现对外部文件的调用
	注意:当使用require()语句时载入文件时，它会作为PHP文件的一部分被载入
如果通过require()语句载入一个HTML文件，如"hello.html"，文件内的任何PHP命令都会被处理
代码实例:
	include(string filename);
代码描述:参数filename是指定完整路径的文件名
	注意:require 和 include 几乎完全一样，除了处理失败的方式不同之外
	注意:require 在出错时产生 (E_COMPILE_ERROR) 级别的错误
	关键:换句话说将导致脚本中止而 include 只产生警告（E_WARNING），脚本会继续运行
代码实例:
<?php
require('top.php');//嵌入外部文件top.php
?>
<?php
	echo "Hello world!";
?>
	
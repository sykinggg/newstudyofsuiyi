include()
基本概念:使用include()语句包含外部文件时，只有代码执行到include()函数时才将外部文件包含进来
	注意:当所包含的外部文件发生错误时，系统只会给出一个警告，而整个PHP文件则继续向下执行
代码实例:
	include(string filename);
代码描述:参数filename是指定完整路径的文件名
代码实例:
	<table>
		<tbody>
			<tr><td><?php include("top.php"); ?></td></tr>
			<tr><td><?php include("main.php"); ?></td></tr>
			<tr><td><?php include("bottom.php"); ?></td></tr>
		</tbody>
	</table>
代码实例:
<?php
echo "hello, world!";
?>
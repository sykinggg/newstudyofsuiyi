require_once()
基本概念:require_once()语句是require()语句的延伸，它的功能与require类似
	不同的是require_once()语句会先检查要导入的文件是不是已经在该程序中的其它地方被调用过
		如果有的话就不会再次重复调用该文件。语法与require()相同
代码实例:
<table>
	<tbody>
		<tr><td><?php require_once("top.php") ?></td></tr>//载入头文件
		<tr><td><?php require_once("main.php") ?></td></tr>//嵌入主文件
		<tr><td><?php require_once("bottom.php") ?></td></tr>// 嵌入尾文件
	</tbody>
</table>
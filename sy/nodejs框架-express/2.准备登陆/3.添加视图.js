### 添加视图
项目中我们会新建一个目录用来单独存放模板文件
下面开始新建index.html、login.html、home.html三个页面
1.index.html页面参考内容如下:
<div style="height:400px;width:550px;margin:50px auto;margin-left:auto;border:solid 1px;background: rgb(246, 246, 253);">
    <div style="margin-left: 35px;">
 
# 首页
 
        <form action="#"  role="form" style="margin-top: 90px;margin-left: 60px;">
 
# 欢迎进入首页！
 
            <div style="margin-top: 145px;">
                <input type="button" value="登 陆" />
            </div>
        </form>
    </div>
</div>
2.login.html页面参考内容如下：
...
    <title>用户登录</title>
    <meta charset="utf-8">
    <script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
...
 
<div style="height:300px;width:350px;margin:100px auto;margin-left:auto;border:solid 1px;background: rgb(246, 246, 253);">
    <div style="width:200px;margin:auto;margin-top:50px;">
 
# 用户登录
 
        <form action="#"  role="form" method="post" >
            <input id="username" type="text" name="username" style="margin: 20px 0px;" />
            <input id="password" type="password" name="password" />
            <div style="margin-top:30px;margin-left:125px;">
                <input type="button" value="登 陆" />
            </div>
        </form>
    </div>
</div>
3.home.html页面参考内容如下：
<div style="height:400px;width:550px;margin:50px auto;margin-left:auto;border:solid 1px;background: rgb(246, 246, 253);">
    <div style="margin-left: 45px;">
 
# 主页
 
        <form action="#"  role="form" style="margin-top: 90px;">
 
# 登陆成功！
 
            <div style="margin-top: 145px;">
                <input  type="button" value="退 出" />
            </div>
        </form>
    </div>
</div>
4.和静态文件一样，我们也要设置views存放的目录，如下
	// 设定views变量，意为视图存放的目录
	app.set('views', __dirname);

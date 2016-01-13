# 使用路由2
1.logout.js文件，添加如下内容
	module.exports = function (app) {
		app.get('/logout', function(req, res) {
			req.session.user = null;
			req.session.error = null;
			res.redirect('index');
		});
	}
2.app.js文件中请求路径为logout、home、login的代码就可以删除了
3.新增的三个文件使用
	require('./login')(app);
	require('./home')(app);
	require('./logout')(app);
注意:只需引用路由的目录即可

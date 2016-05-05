### Express介绍
npm提供了大量的第三方模块，其中不乏许多Web框架，比如我们本章节要讲述的一个轻量级的Web框架 ——— Express
Express是一个简洁、灵活的node.js Web应用开发框架
它提供一系列强大的功能，比如：模板解析、静态文件服务、中间件、路由控制等等
	并且还可以使用插件或整合其他模块来帮助你创建各种 Web和移动设备应用
是目前最流行的基于Node.js的Web开发框架，并且支持Ejs、jade等多种模板，可以快速地搭建一个具有完整功能的网站
代码示例:
	1.NPM安装
	npm install express
	2.获取、引用
	var express = require('express');
	var app = express();
使用:变量“app”我们就可以调用express的各种方法了

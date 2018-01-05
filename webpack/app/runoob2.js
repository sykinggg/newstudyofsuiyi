'use strict';

angular.module('app')
.config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('in/login');
		$stateProvider
		/*
		 * 帮助中心
		 * */
		.state('helpPage', {
			abstract: true,
			url: '/helpPage',
			template: '<div ui-view class="b-g-c-fff" style="position:relative;"></div>'
		})
		//帮助首页
		// 'tpl/base/modal/modal.order/carpoolCancelRoundGlobal/index.js',
		.state('helpPage.helpIndex', {
			url: '/helpIndex',
			templateUrl: 'tpl/help/html/helpIndex.html',
			controller: 'helpIndex',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load('tpl/help/js/helpIndex.js');
						/*return $ocLazyLoad.load([
						 'tpl/base/modal/modal.order/carpoolChangeDriver/index.js',
						 'tpl/base/modal/modal.order/carpoolChangeDriverNew/index.js',
						 'tpl/base/modal/modal.order/carpoolCancelRoundGlobal/index.js',
						 ]).then(function(){
						 return $ocLazyLoad.load('tpl/help/js/helpIndex.js');
						 });*/
					}
				]
			}
		})
		//问题汇总
		.state('helpPage.help', {
			url: '/help/{oneMenu}/{twoMenu}/{threeMenu}',
			templateUrl: 'tpl/help/html/help.html',
			controller: 'help',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/help/js/help.js']);
					}
				]
			}
		})
		//连接司机App
		.state('helpPage.helpDriverApp', {
			url: '/helpDriverApp',
			templateUrl: 'tpl/help/html/helpDriverApp.html',
			controller: 'helpDriverApp',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/help/js/helpDriverApp.js']);
					}
				]
			}
		})
		// 链接公告
		.state('helpPage.connectionAnnouncement', {
			url: '/connectionAnnouncement',
			templateUrl: 'tpl/help/html/connectionAnnouncement.html',
			controller: 'connectionAnnouncement',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/help/js/connectionAnnouncement.js']);
					}
				]
			}
		})
		// 产品动态
		.state('helpPage.productDynamics', {
			url: '/productDynamics',
			templateUrl: 'tpl/help/html/productDynamics.html',
			controller: 'productDynamics',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/help/js/productDynamics.js']);
					}
				]
			}
		})
		// 问题详情页面
		// .state('helpPage.helpContent', {
		//     url: '/helpContent',
		//     templateUrl: 'tpl/'
		// })
		//详情页——账号注册
		// .state('helpPage.register', {
		//     url: '/register',
		//     templateUrl: 'tpl/help/register.html'
		// })
		//平台管理——平台模板
		// .state('helpPage.platTemplate', {
		//     url: '/platTemplate',
		//     templateUrl: 'tpl/help/platTemplate.html'
		// })
		/* 地图展示 */
		.state('mapAreaShow', {
			url: '/mapAreaShow/{id}',
			templateUrl: 'tpl/base/in/html/mapAreaShow.html',
			controller: 'mapAreaShow',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/mapAreaShow.js']);
					}
				]
			}
		})
		.state('showStationMap', {
			url: '/showStationMap/{latitude}/{longitude}/{address}/{name}',
			templateUrl: 'tpl/base/in/html/showStationMap.html',
			controller: 'showStationMap',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/showStationMap.js']);
					}
				]
			}
		})
		/**
		 * 自定义app下载
		 */
		.state('customApp', {
			// abstract: true,
			// url: '/customApp/{id1}/{id2}/{id3}',
			url: '/customApp',
			controller: 'customApp',
			templateUrl: 'tpl/sale/html/app/customApp.html',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/app/customApp.js']);
					}
				]
			}
		})
		/**
		 * 登录注册
		 */
		.state('in', {
			abstract: true,
			url: '/in',
			templateUrl: 'tpl/base/in.html'
		})
		.state('in.regist', {
			url: '/regist',
			templateUrl: 'tpl/base/in/html/regist.html',
			controller: 'regist',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/regist.js']);
					}
				]
			}
		})
		.state('in.login', {
			url: '/login',
			templateUrl: 'tpl/base/in/html/login.html',
			controller: 'login',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/login.js']);
					}
				]
			}
		})
		/* 使用条款 */
		.state('in.register', {
			url: '/register',
			templateUrl: 'tpl/base/in/html/register.html',
			controller: 'Agreement',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/Agreement.js']);
					}
				]
			}
		})
		/* 关于连接 */
		.state('in.aboutOrange', {
			url: '/aboutOrange',
			templateUrl: 'tpl/base/in/html/aboutOrange.html',
			controller: 'Agreement',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/Agreement.js']);
					}
				]
			}
		})
		/* 合作联系 */
		.state('in.relationship', {
			url: '/relationship',
			templateUrl: 'tpl/base/in/html/relationship.html',
			controller: 'Agreement',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/Agreement.js']);
					}
				]
			}
		})
		/* 帮助中心 */
		.state('in.help', {
			url: '/help',
			templateUrl: 'tpl/base/in/html/help.html',
			controller: 'Agreement',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/Agreement.js']);
					}
				]
			}
		})
		/* 平台协议 */
		.state('in.PlatformProtocol', {
			url: '/PlatformProtocol',
			templateUrl: 'tpl/base/in/html/PlatformProtocol.html',
			controller: 'Agreement',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/Agreement.js']);
					}
				]
			}
		})
		/* 隐私声明和Cookie */
		.state('in.privacy', {
			url: '/privacy',
			templateUrl: 'tpl/base/in/html/privacy.html',
			controller: 'login',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/login.js']);
					}
				]
			}
		})
		.state('in.find1', {
			url: '/find1',
			templateUrl: 'tpl/base/in/html/find1.html',
			controller: 'find1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/find1.js']);
					}
				]
			}
		})
		.state('in.find2', {
			url: '/find2/{phone}',
			templateUrl: 'tpl/base/in/html/find2.html',
			controller: 'find2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/in/js/find2.js']);
					}
				]
			}
		})
		.state('in.success', {
			url: '/success',
			templateUrl: 'tpl/base/in/html/success.html'
		})

		/**
		 * 平台创建
		 */
		.state('store', {
			url: '/store',
			templateUrl: 'tpl/base/store.html'
		})
		.state('store.addStore1', {
			url: '/addStore1',
			templateUrl: 'tpl/base/store/html/addStore1.html',
			controller: 'addStore1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/store/js/addStore1.js']);
					}
				]
			}
		})
		.state('store.addStore2', {
			url: '/addStore2',
			templateUrl: 'tpl/base/store/html/addStore2.html',
			controller: 'addStore2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/store/js/addStore2.js']);
					}
				]
			}
		})
		.state('store.addStore3', {
			url: '/addStore3',
			templateUrl: 'tpl/base/store/html/addStore3.html',
			controller: 'addStore3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/store/js/addStore3.js']);
					}
				]
			}
		})
		.state('store.addStore4', {
			url: '/addStore4',
			templateUrl: 'tpl/base/store/html/addStore4.html',
			controller: 'addStore4',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/store/js/addStore4.js']);
					}
				]
			}
		})
		.state('store.storeList', {
			url: '/storeList',
			templateUrl: 'tpl/base/store/html/storeList.html',
			controller: 'storeList',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.deletePlat/modal.deletePlat.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/base/store/js/storeList.js');
						});
					}
				]
			}
		})
		.state('store.accountSetting', {
			url: '/accountSetting',
			templateUrl: 'tpl/base/store/html/accountSetting.html',
			controller: 'accountSetting',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.originalAccount/modal.originalAccount.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/base/store/js/accountSetting.js');
						});
					}
				]
			}
		})
		.state('store.updatePass', {
			url: '/updatePass',
			templateUrl: 'tpl/base/store/html/updatePass.html',
			controller: 'updatePass',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load( ['tpl/base/store/js/updatePass.js'] );
					}
				]
			}
		})
		.state('store.resetPwd', {
			url: '/resetPwd',
			templateUrl: 'tpl/base/resetPwd/resetPwd.html',
			controller: 'resetPwd',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load( ['tpl/base/resetPwd/resetPwd.js'] );
					}
				]
			}
		})
		/**
		 * 首页
		 */
		.state('index', {
			url: '/index',
			templateUrl: 'tpl/base/index/index.html',
			controller: 'index',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.productSort/modal.productSort.js',
							'tpl/base/modal/modal.functionSort/modal.functionSort.js',
							'tpl/base/modal/modal.order/carpoolChangeDriver/index.js',
							'tpl/base/modal/modal.order/carpoolChangeDriverNew/index.js',
							'tpl/base/modal/modal.order/carpoolCancelRoundGlobal/index.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/base/index/index.js');
						});
					}
				]
			}
		})

		//车辆违规
		.state('carViolation', {
			url: '/carViolation/{type}',
			templateUrl: 'tpl/monitorCenter/html/carViolation.html',
			controller: 'carViolation',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load( ['tpl/monitorCenter/js/carViolation.js'] );
					}
				]
			}
		})
		/**
		 * 通知中心——列表
		 */
		.state('notCenter', {
			url: '/notCenter/{type}',
			templateUrl: 'tpl/base/index/notCenter.html',
			controller: 'notCenter',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load( ['tpl/base/index/notCenter.js'] );
					}
				]
			}
		})

		.state('app', {
			abstract: true,
			url: '/app',
			templateUrl: 'tpl/base/app.html'
		})

		/**
		 * 订购服务
		 */
		.state('app.buyStep1', {
			url: '/buyStep1',
			templateUrl: 'tpl/base/buy/html/buyStep1.html',
			controller: 'buyStep1Ctrl',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load('tpl/base/buy/js/buyStep1.js');
					}
				]
			}
		})
		.state('app.buyStep2', {
			url: '/buyStep2',
			templateUrl: 'tpl/base/buy/html/buyStep2.html',
			controller: 'buyStep2Ctrl',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/base/buy/js/buyStep2.js');
						});
					}
				]
			}
		})
		.state('app.buyStep3', {
			url: '/buyStep3',
			templateUrl: 'tpl/base/buy/html/buyStep3.html',
			controller: 'buyStep3Ctrl',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.recharge/modal.recharge.js',
							'tpl/asset/js/recharge.js',
							'tpl/base/modal/modal.weixin.pay/modal.weixin.pay.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/base/buy/js/buyStep3.js']);
						})
					}]
			}
		})
		.state('app.buyStep4', {
			url: '/buyStep4',
			templateUrl: 'tpl/base/buy/html/buyStep4.html',
			controller: 'buyStep4Ctrl',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/buy/js/buyStep4.js']);
					}
				]
			}
		})
		.state('app.buyStep5', {
			url: '/buyStep5',
			templateUrl: 'tpl/base/buy/html/buyStep5.html',
			controller: 'buyStep5Ctrl',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/buy/js/buyStep5.js']);
					}
				]
			}
		})
		/**
		 * 平台
		 */
		.state('app.shop', {
			url: '/shop',
			abstract: true,
			template: '<div ui-view></div>'
		})
		//概况
		.state('app.shop.index', {
			url: '/index',
			templateUrl: 'tpl/shop/html/index.html',
			controller: 'shopIndex',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/shop/js/index.js']);
					}]
			}
		})
		/**
		 * 平台
		 */
		.state('app.shop.custom', {
			url: '/custom',
			abstract: true,
			template: '<div ui-view></div>'
		})
		//模版
		.state('app.shop.template', {
			url: '/template',
			templateUrl: 'tpl/shop/html/template.html',
			controller: 'templateCtrl',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/shop/js/template.js']);
					}
				]
			}
		})
		.state('app.shop.custom.allTemplate', {
			url: '/allTemplate',
			templateUrl: 'tpl/shop/html/allTemplate.html',
			controller: 'allTemplate',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/shop/js/allTemplate.js']);
					}
				]
			}
		})
		// 模板的首页排序
		.state('app.shop.firstPageSort', {
			url: '/firstPageSort',
			templateUrl: 'tpl/shop/html/firstPageSort.html',
			controller: 'firstPageSort',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/shop/js/firstPageSort.js']);
					}
				]
			}
		})
		//新模版
		.state('app.shop.editPlatAd', {
			url: '/editPlatAd',
			templateUrl: 'tpl/shop/html/editPlatAd.html',
			controller: 'editPlatAd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/shop/js/editPlatAd.js']);
						});
					}
				]
			}
		})
		//新模版编辑
		.state('app.shop.custom.editPlat', {
			url: '/editPlat/{id}',
			templateUrl: 'tpl/shop/html/editPlat.html',
			controller: 'editPlat',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.addPopService/modal.addPopService.js',
							'tpl/base/modal/modal.addSingle/modal.addSingle.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/shop/js/editPlat.js'])
						});
					}
				]
			}
		})
		//平台模板-首页排序
		.state('app.shop.indexSort', {
			url: '/indexSort',
			templateUrl: 'tpl/shop/html/indexSort.html',
			controller: 'indexSort',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.singleFunc/modal.singleFunc.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/shop/js/indexSort.js']);
						});
					}
				]
			}
		})

		/**
		 * 产品
		 */
		.state('app.product', {
			url: '/product',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.product.transportation', {
			url: '/transportation',
			abstract: true,
			template: '<div ui-view></div>'
		})
		//下架产品
		.state('app.product.transportation.soldOut', {
			url: '/soldOut',
			templateUrl: 'tpl/product/transportation/html/soldOut.html',
			controller: 'soldOut',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/transportation/js/soldOut.js']);
						})
					}
				]
			}
		})
		// 产品列表
		.state('app.product.transportation.list', {
			url: '/list/{type}',
			templateUrl: 'tpl/product/transportation/html/list.html',
			controller: 'productList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.productConfirm.js',
							'tpl/base/modal/modal.productRecommend/modal.productRecommend.js',
							'tpl/base/modal/modal.tourRecom/modal.tourRecom.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.stationQrcode/modal.stationQrcode.js',
							'tpl/base/modal/modal.lineRecom/modal.lineRecom.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/list.js']);
						});
					}
				]
			}
		})
		// 调整通知列表
		.state('app.product.transportation.noticeAdjustment', {
			url: '/noticeAdjustment',
			templateUrl: 'tpl/product/transportation/html/noticeAdjustment.html',
			controller: 'noticeAdjustment',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/transportation/js/noticeAdjustment.js']);
						})
					}
				]
			}
		})
		// 调整通知新增|编辑
		.state('app.product.transportation.noticeEdit', {
			url: '/notice/{id}',
			templateUrl: 'tpl/product/transportation/html/noticeAdjustment/notice.html',
			controller: 'noticeController',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/transportation/js/noticeAdjustment/notice.js']);
						})
					}
				]
			}
		})
		// 认领线路
		.state('app.product.transportation.claimLineList', {
			url: '/claimLineList',
			templateUrl: 'tpl/product/transportation/html/claimLine/claimLineList.html',
			controller: 'claimLineList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/claimLine/claimLineList.js']);
					}
				]
			}
		})
		// 认领线路-线路详情
		.state('app.product.transportation.claimDetail', {
			url: '/claimDetail/{id}',
			templateUrl: 'tpl/product/transportation/html/claimLine/claimDetail.html',
			controller: 'claimDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/claimLine/claimDetail.js']);
					}
				]
			}
		})
		// 拼车列表
		.state('app.product.transportation.carpoolsList', {
			url: '/carpoolsList/{type}',
			templateUrl: 'tpl/product/transportation/html/carpoolsList.html',
			controller: 'carpoolsList',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.sendDriverOrder.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/transportation/js/carpoolsList.js']);
						})
					}
				]
			}
		})
		// 拼车详情
		.state('app.product.transportation.carpoolsDetails', {
			url: '/carpoolsDetails/{type}/{pid}/{skuid}',
			templateUrl: 'tpl/product/transportation/html/carpoolsDetails.html',
			controller: 'carpoolsDetails',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.sendDriverOrder.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/transportation/js/carpoolsDetails.js']);
						})
					}
				]
			}
		})
		// 产品司机列表
		.state('app.product.transportation.proDriver', {
			url: '/proDriver/{type}',
			templateUrl: 'tpl/product/transportation/html/proDriver.html',
			controller: 'proDriver',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/proDriver.js']);
						});
					}
				]
			}
		})
		// 产品车辆列表
		.state('app.product.transportation.proCarList', {
			url: '/proCarList/{type}',
			templateUrl: 'tpl/product/transportation/html/proCarList.html',
			controller: 'proCarList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/proCarList.js']);
						});
					}
				]
			}
		})
		//车站班车
		.state('app.product.transportation.lineCarList', {
			url: '/lineCarList',
			params: {'shiftNum': null},
			templateUrl: 'tpl/product/transportation/html/lineCar/lineCarList.html',
			controller: 'lineCarList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/lineCar/lineCarList.js']);
						});
					}
				]
			}
		})
		// 产品列表
		.state('app.product.transportation.lineCarProductList', {
			url: '/lineCarProductList',
			templateUrl: 'tpl/product/transportation/html/lineCar/lineCarProductList.html',
			controller: 'lineCarProductList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.stationQrcode/modal.stationQrcode.js',
							'tpl/base/modal/modal.wayStations/modal.wayStations.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/lineCar/lineCarProductList.js']);
						});
					}
				]
			}
		})
		// 车站班车-产品编辑1
		.state('app.product.transportation.lineCarProductEditA', {
			url: '/lineCarProductEditA/{id}',
			templateUrl: 'tpl/product/transportation/html/lineCar/lineCarProductEditA.html',
			controller: 'lineCarProductEditA',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.wayStations/modal.wayStations.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/lineCar/lineCarProductEditA.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.lineCarProductEditB', {
			url: '/lineCarProductEditB/{id}',
			templateUrl: 'tpl/product/transportation/html/lineCar/lineCarProductEditB.html',
			controller: 'lineCarProductEditB',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.setCheckMapShow/modal.setCheckMapShow.js',
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.wayStations/modal.wayStations.js',
							'tpl/base/modal/modal.stationBusLine/modal.stationBusLine.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/lineCar/lineCarProductEditB.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.lineCarProductEditC', {
			url: '/lineCarProductEditC/{id}',
			templateUrl: 'tpl/product/transportation/html/lineCar/lineCarProductEditC.html',
			controller: 'lineCarProductEditC',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.wayStations/modal.wayStations.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/lineCar/lineCarProductEditC.js']);
						});
					}
				]
			}
		})
		// 车站班车-产品编辑1
		.state('app.product.transportation.lineCarProductWatchA', {
			url: '/lineCarProductWatchA/{id}',
			templateUrl: 'tpl/product/transportation/html/lineCar/lineCarProductWatchA.html',
			controller: 'lineCarProductWatchA',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.wayStations/modal.wayStations.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/lineCar/lineCarProductWatchA.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.lineCarProductWatchB', {
			url: '/lineCarProductWatchB/{id}',
			templateUrl: 'tpl/product/transportation/html/lineCar/lineCarProductWatchB.html',
			controller: 'lineCarProductWatchB',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.setCheckMapShow/modal.setCheckMapShow.js',
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.wayStations/modal.wayStations.js',
							'tpl/base/modal/modal.stationBusLine/modal.stationBusLine.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/lineCar/lineCarProductWatchB.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.lineCarProductWatchC', {
			url: '/lineCarProductWatchC/{id}',
			templateUrl: 'tpl/product/transportation/html/lineCar/lineCarProductWatchC.html',
			controller: 'lineCarProductWatchC',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.wayStations/modal.wayStations.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/lineCar/lineCarProductWatchC.js']);
						});
					}
				]
			}
		})
		// 产品概况
		.state('app.product.transportation.lineCarSum', {
			url: '/lineCarSum',
			templateUrl: 'tpl/product/transportation/html/lineCar/lineCarSum.html',
			controller: 'lineCarSum',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js',
							'tpl/base/modal/modal.orderMarkRefund/modal.orderMarkRefund.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/lineCar/lineCarSum.js']);
						});
					}
				]
			}
		})
		// 产品退款订单
		.state('app.product.transportation.refundOrder', {
			url: '/refundOrder/{id}',
			templateUrl: 'tpl/product/transportation/html/lineCar/refundOrder.html',
			controller: 'refundOrder',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/lineCar/refundOrder.js']);
					}
				]
			}
		})
		// 班次sku管理
		.state('app.product.transportation.flightSku', {
			url: '/flightSku/{shiftId}',
			templateUrl: 'tpl/product/transportation/html/flightSku.html',
			controller: 'flightSku',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.productConfirm.js',
							'tpl/base/modal/modal.skuBindDriverCar/modal.skuModal.js',
							'tpl/base/modal/modal.shiftView/modal.shiftView.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/flightSku.js']);
						});
					}
				]
			}
		})
		// 班次sku详情
		.state('app.product.transportation.skuDeta', {
			url: '/skuDeta/{type}/{shiftId}',
			templateUrl: 'tpl/product/transportation/html/skuDeta.html',
			controller: 'skuDeta',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.productConfirm.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/skuDeta.js']);
						});
					}
				]
			}
		})
		//机场专线
		.state('app.product.transportation.airportAdd1', {
			url: '/airAdd1/{productId}',
			templateUrl: 'tpl/product/transportation/html/airport/airportAdd1.html',
			controller: 'airAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/airport/airportAdd1.js']);
					}
				]
			}
		})
		.state('app.product.transportation.airportAdd2', {
			url: '/airAdd2/{productId}',
			templateUrl: 'tpl/product/transportation/html/airport/airportAdd2.html',
			controller: 'airAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/airport/airportAdd2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.airportAdd3', {
			url: '/airAdd3/{productId}',
			templateUrl: 'tpl/product/transportation/html/airport/airportAdd3.html',
			controller: 'airAdd3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.configurationDriver/modal.configurationDriver.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/airport/airportAdd3.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.airportEdit', {
			url: '/airEdit/{productId}',
			templateUrl: 'tpl/product/transportation/html/airport/airportEdit.html',
			controller: 'airEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/airport/airportEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.airportShiftList', {
			url: '/airShiftList/{productId}',
			templateUrl: 'tpl/product/transportation/html/airport/airportShiftList.html',
			controller: 'airShiftList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/airport/airportShiftList.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.airportShiftEdit', {
			url: '/airShiftEdit/{productId}/{shiftId}',
			templateUrl: 'tpl/product/transportation/html/airport/airportShiftEdit.html',
			controller: 'airShiftEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/airport/airportShiftEdit.js']);
						});
					}
				]
			}
		})
		// 品牌约车
		.state('app.product.transportation.chAdd1', {
			url: '/chAdd1',
			templateUrl: 'tpl/product/transportation/html/chProduct/chAdd1.html',
			controller: 'chAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.OfficalChargingRule/modal.OfficalChargingRule.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/chProduct/chAdd1.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.chAdd2', {
			url: '/chAdd2',
			templateUrl: 'tpl/product/transportation/html/chProduct/chAdd2.html',
			controller: 'chAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/chProduct/chAdd2.js']);
					}
				]
			}
		})
		.state('app.product.transportation.chEdit1', {
			url: '/chEdit1/{productId}',
			templateUrl: 'tpl/product/transportation/html/chProduct/chEdit1.html',
			controller: 'chEdit1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.OfficalChargingRule/modal.OfficalChargingRule.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/chProduct/chEdit1.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.chEdit2', {
			url: '/chEdit2/{productId}',
			templateUrl: 'tpl/product/transportation/html/chProduct/chEdit2.html',
			controller: 'chEdit2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.OfficalChargingRule/modal.OfficalChargingRule.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/chProduct/chEdit2.js']);
						});
					}
				]
			}
		})
		// 公交出行
		.state('app.product.transportation.busAdd1', {
			url: '/busAdd1',
			templateUrl: 'tpl/product/transportation/html/bus/busAdd1.html',
			controller: 'busAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.stationManage/modal.stationManage.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/bus/busAdd1.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.busAdd2', {
			url: '/busAdd2',
			templateUrl: 'tpl/product/transportation/html/bus/busAdd2.html',
			controller: 'busAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.addBusLine/addCountyBusLine.js',
							'tpl/base/modal/modal.addBusLine/addUrbanBusLine.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/bus/busAdd2.js']);
						});
					}
				]
			}
		})

		//城际专线
		.state('app.product.transportation.cityAdd1', {
			url: '/cityAdd1',
			templateUrl: 'tpl/product/transportation/html/city/cityAdd1.html',
			controller: 'cityAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.stationManage/modal.stationManage.js',
							'tpl/base/modal/modal.stationAdd/modal.stationAdd.js',
							'tpl/base/modal/modal.stationMap/modal.stationMap.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/cityAdd1.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.cityAdd2', {
			url: '/cityAdd2',
			templateUrl: 'tpl/product/transportation/html/city/cityAdd2.html',
			controller: 'cityAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.recommended.sites/index.js',
							'tpl/base/modal/modal.carpoolSite/modal.carpoolSite.js',
							'tpl/base/modal/modal.addBillingRule/modal.addBillingRule.js',
							'tpl/base/modal/modal.carpoolMaps/modal.carpoolMaps.js',
							'tpl/base/modal/modal.carpoolMapSite/modal.carpoolMapSite.js',
							'tpl/base/modal/modal.carpoolSiteMap/modal.carpoolSiteMap.js',
							'tpl/base/modal/modal.cityCounty/modal.cityCounty.js',
							'tpl/base/modal/modal.historicalInter.data/index.js',
							'tpl/base/modal/modal.historicalCall.data/index.js',
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.map.show/modal.map.show.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/cityAdd2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.cityAdd3', {
			url: '/cityAdd3/{productId}',
			templateUrl: 'tpl/product/transportation/html/city/cityAdd3.html',
			controller: 'cityAdd3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.configurationDriver/modal.configurationDriver.js',
							'tpl/base/modal/modal.productPreview/modal.productPreview.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/cityAdd3.js']);
						});
					}
				]
			}
		})
		// 城际专线 专车编辑
		.state('app.product.transportation.citySpecialEdit1', {
			url: '/citySpecialEdit1/{productId}',
			params: {cityEditId:null},
			templateUrl: 'tpl/product/transportation/html/city/citySpecialEdit1.html',
			controller: 'citySpecialEdit1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/product/transportation/js/city/citySpecialEdit1.js',
							'tpl/base/modal/modal.stationManage/modal.stationManage.js'
						]);
					}
				]
			}
		})
		.state('app.product.transportation.citySpecialEdit2', {
			url: '/citySpecialEdit2/{cityEditId}',
			templateUrl: 'tpl/product/transportation/html/city/citySpecialEdit2.html',
			controller: 'citySpecialEdit2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.recommended.sites/index.js',
							'tpl/base/modal/modal.carpoolSite/modal.carpoolSite.js',
							'tpl/base/modal/modal.addBillingRule/modal.addBillingRule.js',
							'tpl/base/modal/modal.carpoolMaps/modal.carpoolMaps.js',
							'tpl/base/modal/modal.carpoolMapSite/modal.carpoolMapSite.js',
							'tpl/base/modal/modal.carpoolSiteMap/modal.carpoolSiteMap.js',
							'tpl/base/modal/modal.cityCounty/modal.cityCounty.js',
							'tpl/base/modal/modal.historicalInter.data/index.js',
							'tpl/base/modal/modal.historicalCall.data/index.js',
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.map.show/modal.map.show.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/citySpecialEdit2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.citySpecialEdit3', {
			url: '/citySpecialEdit3/{cityEditId}',
			templateUrl: 'tpl/product/transportation/html/city/citySpecialEdit3.html',
			controller: 'citySpecialEdit3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.configurationDriver/modal.configurationDriver.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/citySpecialEdit3.js']);
						});
					}
				]
			}
		})
		// 城际专线 快车编辑
		.state('app.product.transportation.cityExpressEdit', {
			url: '/cityExpressEdit/{productId}',
			templateUrl: 'tpl/product/transportation/html/city/cityExpressEdit.html',
			controller: 'cityExpressEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.productConfirm.js',
							'tpl/base/modal/modal.schedule/modal.batchEditDriver.js',
							'tpl/base/modal/modal.skuBindDriverCar/modal.skuModal.js',
							'tpl/base/modal/modal.shiftView/modal.shiftView.js',
							'tpl/base/modal/modal.setSchedule/modal.scheduleExport.js',
							'tpl/base/modal/modal.setSchedule/modal.scheduleOrderList.js',
							'tpl/base/modal/modal.setSchedule/modal.setSchedule.js',
							'tpl/base/modal/modal.batchSetScheduleDriver/modal.batchSetScheduleDriver.js',
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/modal.stationManage/modal.stationManage.js',
							'tpl/base/modal/modal.stationAdd/modal.stationAdd.js',
							'tpl/base/modal/modal.stationMap/modal.stationMap.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/cityExpressEdit.js']);
						});
					}
				]
			}
		})
		// 排班表
		.state('app.product.transportation.schedule', {
			url: '/schedule/{productId}',
			templateUrl: 'tpl/product/transportation/html/schedule.html',
			controller: 'schedule',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.schedule/modal.batchEditDriver.js',
							'tpl/base/modal/modal.setSchedule/modal.scheduleExport.js',
							'tpl/base/modal/modal.setSchedule/modal.scheduleOrderList.js',
							'tpl/base/modal/modal.setSchedule/modal.setSchedule.js',
							'tpl/base/modal/modal.batchSetScheduleDriver/modal.batchSetScheduleDriver.js',
							'tpl/base/modal/modal.shiftView/modal.shiftView.js',
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/modal.stationManage/modal.stationManage.js',
							'tpl/base/modal/modal.stationAdd/modal.stationAdd.js',
							'tpl/base/modal/modal.stationMap/modal.stationMap.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/schedule.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.cityEdit', {
			url: '/cityEdit/{productId}',
			templateUrl: 'tpl/product/transportation/html/city/cityEdit.html',
			controller: 'cityEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/cityEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.cityShiftList', {
			url: '/cityShiftList/{productId}',
			templateUrl: 'tpl/product/transportation/html/city/cityShiftList.html',
			controller: 'cityShiftList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/cityShiftList.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.cityShiftEdit', {
			url: '/cityShiftEdit/{productId}/{shiftId}',
			templateUrl: 'tpl/product/transportation/html/city/cityShiftEdit.html',
			controller: 'cityShiftEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/cityShiftEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.cityShiftOldEdit', {
			url: '/cityShiftOldEdit/{productId}/{shiftId}',
			templateUrl: 'tpl/product/transportation/html/city/cityShiftOldEdit.html',
			controller: 'cityShiftOldEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/cityShiftOldEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.manualShift', {
			url: '/manualShift',
			templateUrl: 'tpl/product/transportation/html/city/manualShift.html',
			controller: 'manualShift',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/manualShift.js']);
						});
					}
				]
			}
		})
		//工作班车
		.state('app.product.transportation.workAdd1', {
			url: '/workAdd1',
			templateUrl: 'tpl/product/transportation/html/work/workAdd1.html',
			controller: 'workAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/work/workAdd1.js']);
					}
				]
			}
		})
		.state('app.product.transportation.workAdd2', {
			url: '/workAdd2',
			templateUrl: 'tpl/product/transportation/html/work/workAdd2.html',
			controller: 'workAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/work/workAdd2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.workAdd3', {
			url: '/workAdd3',
			params: {'productId': null},
			templateUrl: 'tpl/product/transportation/html/work/workAdd3.html',
			controller: 'workAdd3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/work/workAdd3.js']);
					}
				]
			}
		})
		.state('app.product.transportation.workEdit', {
			url: '/workEdit/{productId}',
			templateUrl: 'tpl/product/transportation/html/work/workEdit.html',
			controller: 'workEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/work/workEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.workShiftList', {
			url: '/workShiftList/{productId}',
			templateUrl: 'tpl/product/transportation/html/work/workShiftList.html',
			controller: 'workShiftList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/work/workShiftList.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.workShiftEdit', {
			url: '/workShiftEdit/{productId}/{shiftId}',
			templateUrl: 'tpl/product/transportation/html/work/workShiftEdit.html',
			controller: 'workShiftEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/work/workShiftEdit.js']);
						});
					}
				]
			}
		})
		//到达列表
		.state('app.product.transportation.arrivalList', {
			url: '/arrivalList/{type}',
			templateUrl: 'tpl/product/transportation/html/arrivalList.html',
			controller: 'arrivalList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/arrivalList.js']);
					}
				]
			}
		})
		//到达列表-查看轨迹
		.state('app.product.transportation.arrivalTrajectory', {
			url: '/arrivalTrajectory/{id}',
			templateUrl: 'tpl/product/transportation/html/arrivalTrajectory.html',
			controller: 'arrivalTrajectory',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/arrivalTrajectory.js']);
					}
				]
			}
		})
		//校园专线
		.state('app.product.transportation.schoolAdd1', {
			url: '/schoolAdd1',
			templateUrl: 'tpl/product/transportation/html/school/schoolAdd1.html',
			controller: 'schoolAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.stationManage/modal.stationManage.js',
							'tpl/base/modal/modal.stationMap/modal.stationMap.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/school/schoolAdd1.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.schoolAdd2', {
			url: '/schoolAdd2',
			templateUrl: 'tpl/product/transportation/html/school/schoolAdd2.html',
			controller: 'schoolAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/school/schoolAdd2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.schoolAdd3', {
			url: '/schoolAdd3/{productId}',
			templateUrl: 'tpl/product/transportation/html/school/schoolAdd3.html',
			controller: 'schoolAdd3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.configurationDriver/modal.configurationDriver.js',
							'tpl/base/modal/modal.productPreview/modal.productPreview.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/school/schoolAdd3.js']);
						});
					}
				]
			}
		})
		// 校园专线 专车编辑
		.state('app.product.transportation.schoolSpecialEdit1', {
			url: '/schoolSpecialEdit1/{productId}',
			params: {schoolEditId:null},
			templateUrl: 'tpl/product/transportation/html/school/schoolSpecialEdit1.html',
			controller: 'schoolSpecialEdit1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/product/transportation/js/school/schoolSpecialEdit1.js',
							'tpl/base/modal/modal.stationManage/modal.stationManage.js'
						]);
					}
				]
			}
		})
		.state('app.product.transportation.schoolSpecialEdit2', {
			url: '/schoolSpecialEdit2/{schoolEditId}',
			templateUrl: 'tpl/product/transportation/html/school/schoolSpecialEdit2.html',
			controller: 'schoolSpecialEdit2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/school/schoolSpecialEdit2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.schoolSpecialEdit3', {
			url: '/schoolSpecialEdit3/{schoolEditId}',
			templateUrl: 'tpl/product/transportation/html/school/schoolSpecialEdit3.html',
			controller: 'schoolSpecialEdit3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.configurationDriver/modal.configurationDriver.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/school/schoolSpecialEdit3.js']);
						});
					}
				]
			}
		})
		// 校园专线 快车编辑
		.state('app.product.transportation.schoolExpressEdit', {
			url: '/schoolExpressEdit/{productId}',
			templateUrl: 'tpl/product/transportation/html/school/schoolExpressEdit.html',
			controller: 'schoolExpressEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/modal.stationManage/modal.stationManage.js',
							'tpl/base/modal/modal.stationMap/modal.stationMap.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/school/schoolExpressEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.schoolEdit', {
			url: '/schoolEdit/{productId}',
			templateUrl: 'tpl/product/transportation/html/school/schoolEdit.html',
			controller: 'schoolEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/school/schoolEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.schoolShiftList', {
			url: '/schoolShiftList/{productId}',
			templateUrl: 'tpl/product/transportation/html/school/schoolShiftList.html',
			controller: 'schoolShiftList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/school/schoolShiftList.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.schoolShiftEdit', {
			url: '/schoolShiftEdit/{productId}/{shiftId}',
			templateUrl: 'tpl/product/transportation/html/school/schoolShiftEdit.html',
			controller: 'schoolShiftEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/school/schoolShiftEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.schoolShiftOldEdit', {
			url: '/schoolShiftOldEdit/{productId}/{shiftId}',
			templateUrl: 'tpl/product/transportation/html/school/schoolShiftOldEdit.html',
			controller: 'schoolShiftOldEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/school/schoolShiftOldEdit.js']);
						});
					}
				]
			}
		})
		//出租的士新增
		.state('app.product.transportation.taxiAdd1', {
			url: '/taxiAdd1',
			templateUrl: 'tpl/product/transportation/html/taxi/taxiAdd1.html',
			controller: 'taxiAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/taxi/taxiAdd1.js']);
					}
				]
			}
		})
		//出租的士编辑
		.state('app.product.transportation.taxiEdit1', {
			url: '/taxiEdit1/{productId}',
			templateUrl: 'tpl/product/transportation/html/taxi/taxiEdit1.html',
			controller: 'taxiEdit1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/taxi/taxiEdit1.js']);
					}
				]
			}
		})
		// 自驾租车新增
		.state('app.product.transportation.carRentalAdd1', {
			url: '/carRentalAdd1/{productId}',
			templateUrl: 'tpl/product/transportation/html/carRental/carRentalAdd1.html',
			controller: 'carRentalAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.vehicleSelection/modal.vehicleSelection.js',
							'tpl/base/modal/modal.dateCarRental/modal.dateCarRental.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/carRental/carRentalAdd1.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.carRentalAdd2', {
			url: '/carRentalAdd2/{productId}',
			templateUrl: 'tpl/product/transportation/html/carRental/carRentalAdd2.html',
			controller: 'carRentalAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/carRental/carRentalAdd2.js']);
					}
				]
			}
		})
		// 自驾租车——订单跟进
		.state('app.product.transportation.crOrder', {
			url: '/crOrder/{type}',
			templateUrl: 'tpl/product/transportation/html/crOrder.html',
			controller: 'crOrder',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/crOrder.js']);
					}
				]
			}
		})
		.state('app.product.transportation.crOrderDate', {
			url: '/crOrderDate/{orderId}',
			templateUrl: 'tpl/product/transportation/html/crOrderDate.html',
			controller: 'crOrderDate',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/crOrderDate.js']);
					}
				]
			}
		})
		// 和城际专线一模一样的景点专线——新增
		.state('app.product.transportation.scenicAdd1', {
			url: '/scenicAdd1',
			templateUrl: 'tpl/product/transportation/html/scenic/scenicAdd1.html',
			controller: 'scenicAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.stationManage/modal.stationManage.js',
							'tpl/base/modal/modal.stationMap/modal.stationMap.js',
							'tpl/base/modal/modal.stationAdd/modal.stationAdd.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/scenic/scenicAdd1.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.scenicAdd2', {
			url: '/scenicAdd2',
			templateUrl: 'tpl/product/transportation/html/scenic/scenicAdd2.html',
			controller: 'scenicAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/scenic/scenicAdd2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.scenicAdd3', {
			url: '/scenicAdd3/{productId}',
			templateUrl: 'tpl/product/transportation/html/scenic/scenicAdd3.html',
			controller: 'scenicAdd3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.configurationDriver/modal.configurationDriver.js',
							'tpl/base/modal/modal.productPreview/modal.productPreview.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/scenic/scenicAdd3.js']);
						});
					}
				]
			}
		})
		// 和城际专线一模一样的景点专线——专车编辑
		.state('app.product.transportation.scenicSpecialEdit1', {
			url: '/scenicSpecialEdit1/{productId}',
			params: {scenicEditId:null},
			templateUrl: 'tpl/product/transportation/html/scenic/scenicSpecialEdit1.html',
			controller: 'scenicSpecialEdit1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/product/transportation/js/scenic/scenicSpecialEdit1.js',
							'tpl/base/modal/modal.stationManage/modal.stationManage.js'
						]);
					}
				]
			}
		})
		.state('app.product.transportation.scenicSpecialEdit2', {
			url: '/scenicSpecialEdit2/{scenicEditId}',
			templateUrl: 'tpl/product/transportation/html/scenic/scenicSpecialEdit2.html',
			controller: 'scenicSpecialEdit2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/scenic/scenicSpecialEdit2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.scenicSpecialEdit3', {
			url: '/scenicSpecialEdit3/{scenicEditId}',
			templateUrl: 'tpl/product/transportation/html/scenic/scenicSpecialEdit3.html',
			controller: 'scenicSpecialEdit3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.configurationDriver/modal.configurationDriver.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/scenic/scenicSpecialEdit3.js']);
						});
					}
				]
			}
		})
		// 和城际专线一模一样的景点专线——快车编辑
		.state('app.product.transportation.scenicExpressEdit', {
			url: '/scenicExpressEdit/{productId}',
			templateUrl: 'tpl/product/transportation/html/scenic/scenicExpressEdit.html',
			controller: 'scenicExpressEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/modal.stationManage/modal.stationManage.js',
							'tpl/base/modal/modal.stationMap/modal.stationMap.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/scenic/scenicExpressEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.scenicEdit', {
			url: '/scenicEdit/{productId}',
			templateUrl: 'tpl/product/transportation/html/scenic/scenicEdit.html',
			controller: 'scenicEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/scenic/scenicEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.scenicShiftList', {
			url: '/scenicShiftList/{productId}',
			templateUrl: 'tpl/product/transportation/html/scenic/scenicShiftList.html',
			controller: 'scenicShiftList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/scenic/scenicShiftList.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.scenicShiftEdit', {
			url: '/scenicShiftEdit/{productId}/{shiftId}',
			templateUrl: 'tpl/product/transportation/html/scenic/scenicShiftEdit.html',
			controller: 'scenicShiftEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/scenic/scenicShiftEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.scenicShiftOldEdit', {
			url: '/scenicShiftOldEdit/{productId}/{shiftId}',
			templateUrl: 'tpl/product/transportation/html/scenic/scenicShiftOldEdit.html',
			controller: 'scenicShiftOldEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/scenic/scenicShiftOldEdit.js']);
						});
					}
				]
			}
		})
		//旅游专线新增
		.state('app.product.transportation.tourAdd1', {
			url: '/tourAdd1',
			templateUrl: 'tpl/product/transportation/html/tour/tourAdd1.html',
			controller: 'tourAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/tour/tourAdd1.js']);
					}
				]
			}
		})
		.state('app.product.transportation.tourAdd2', {
			url: '/tourAdd2',
			templateUrl: 'tpl/product/transportation/html/tour/tourAdd2.html',
			controller: 'tourAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/tour/tourAdd2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.tourAdd3', {
			url: '/tourAdd3',
			templateUrl: 'tpl/product/transportation/html/tour/tourAdd3.html',
			controller: 'tourAdd3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/transportation/js/tour/tourAdd3.js']);
						})
					}
				]
			}
		})
		.state('app.product.transportation.tourAdd4', {
			url: '/tourAdd4',
			templateUrl: 'tpl/product/transportation/html/tour/tourAdd4.html',
			controller: 'tourAdd4',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.productPreview/modal.productPreview.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/transportation/js/tour/tourAdd4.js']);
						})
					}
				]
			}
		})
		//旅游专线编辑
		.state('app.product.transportation.tourEdit1', {
			url: '/tourEdit1/{productId}',
			templateUrl: 'tpl/product/transportation/html/tour/tourEdit1.html',
			controller: 'tourEdit1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/tour/tourEdit1.js']);
					}
				]
			}
		})
		.state('app.product.transportation.tourEdit2', {
			url: '/tourEdit2/{productId}',
			templateUrl: 'tpl/product/transportation/html/tour/tourEdit2.html',
			controller: 'tourEdit2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/tour/tourEdit2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.tourEdit3', {
			url: '/tourEdit3/{productId}',
			templateUrl: 'tpl/product/transportation/html/tour/tourEdit3.html',
			controller: 'tourEdit3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/transportation/js/tour/tourEdit3.js']);
						})
					}
				]
			}
		})
		.state('app.product.transportation.tourEdit4', {
			url: '/tourEdit4/{productId}',
			templateUrl: 'tpl/product/transportation/html/tour/tourEdit4.html',
			controller: 'tourEdit4',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/transportation/js/tour/tourEdit4.js']);
						})
					}
				]
			}
		})

		//定制包车
		.state('app.product.transportation.customAdd1', {
			url: '/customAdd1',
			templateUrl: 'tpl/product/transportation/html/custom/customAdd1.html',
			controller: 'customAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/custom/customAdd1.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.customAdd2', {
			url: '/customAdd2',
			templateUrl: 'tpl/product/transportation/html/custom/customAdd2.html',
			controller: 'customAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'tpl/base/modal/modal.datePrice/modal.datePrice.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/custom/customAdd2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.customAdd3', {
			url: '/customAdd3',
			templateUrl: 'tpl/product/transportation/html/custom/customAdd3.html',
			controller: 'customAdd3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.productPreview/modal.productPreview.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/custom/customAdd3.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.customEdit', {
			url: '/customEdit/{productId}',
			templateUrl: 'tpl/product/transportation/html/custom/customEdit.html',
			controller: 'customEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/custom/customEdit.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.customEditPro', {
			url: '/customEditPro/{productId}',
			templateUrl: 'tpl/product/transportation/html/custom/customEditPro.html',
			controller: 'customEditPro',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/custom/customEditPro.js']);
						});
					}
				]
			}
		})
		/* 线路包车编辑 */
		.state('app.product.transportation.lineProductEdit1', {
			url: '/lineProductEdit1/{productId}',
			templateUrl: 'tpl/product/transportation/html/custom/lineProductEdit1.html',
			controller: 'lineProductEdit1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/custom/lineProductEdit1.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.lineProductEdit2', {
			url: '/lineProductEdit2/{productId}',
			templateUrl: 'tpl/product/transportation/html/custom/lineProductEdit2.html',
			controller: 'lineProductEdit2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'tpl/base/modal/modal.datePrice/modal.datePrice.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/custom/lineProductEdit2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.lineProductEdit3', {
			url: '/lineProductEdit3/{productId}',
			templateUrl: 'tpl/product/transportation/html/custom/lineProductEdit3.html',
			controller: 'lineProductEdit3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/custom/lineProductEdit3.js']);
						});
					}
				]
			}
		})
		/* 接站专线-新增 */
		.state('app.product.transportation.stationLineAdd1', {
			url: '/stationLineAdd1',
			templateUrl: 'tpl/product/transportation/html/stationLine/stationLineAdd1.html',
			controller: 'stationLineAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/stationLine/stationLineAdd1.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.stationLineAdd2', {
			url: '/stationLineAdd2',
			templateUrl: 'tpl/product/transportation/html/stationLine/stationLineAdd2.html',
			controller: 'stationLineAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/stationLine/stationLineAdd2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.stationLineAdd3', {
			url: '/stationLineAdd3/{productId}',
			templateUrl: 'tpl/product/transportation/html/stationLine/stationLineAdd3.html',
			controller: 'stationLineAdd3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/modal.configurationDriver/modal.configurationDriver.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/stationLine/stationLineAdd3.js']);
						});
					}
				]
			}
		})
		/* 接站专车-编辑 */
		.state('app.product.transportation.stationLineEdit1', {
			url: '/stationLineEdit1/{productId}',
			templateUrl: 'tpl/product/transportation/html/stationLine/stationLineEdit1.html',
			controller: 'stationLineEdit1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/stationLine/stationLineEdit1.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.stationLineEdit2', {
			url: '/stationLineEdit2/{productId}',
			templateUrl: 'tpl/product/transportation/html/stationLine/stationLineEdit2.html',
			controller: 'stationLineEdit2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/stationLine/stationLineEdit2.js']);
						});
					}
				]
			}
		})
		.state('app.product.transportation.stationLineEdit3', {
			url: '/stationLineEdit3/{productId}',
			templateUrl: 'tpl/product/transportation/html/stationLine/stationLineEdit3.html',
			controller: 'stationLineEdit3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/modal.configurationDriver/modal.configurationDriver.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/stationLine/stationLineEdit3.js']);
						});
					}
				]
			}
		})
		/* 接站快车编辑 */
		.state('app.product.transportation.expressStationEdit', {
			url: '/expressStationEdit/{productId}',
			templateUrl: 'tpl/product/transportation/html/stationLine/expressStationEdit.html',
			controller: 'expressStationEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/stationLine/expressStationEdit.js']);
						});
					}
				]
			}
		})
		/* 接站快车班次列表 */
		.state('app.product.transportation.expressShiftList', {
			url: '/expressShiftList/{productId}',
			templateUrl: 'tpl/product/transportation/html/stationLine/expressShiftList.html',
			controller: 'expressShiftList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/stationLine/expressShiftList.js']);
						});
					}
				]
			}
		})
		/* 接站快车班次编辑以及新增 */
		.state('app.product.transportation.expressShiftEdit', {
			url: '/expressShiftEdit/{productId}/{shiftId}',
			templateUrl: 'tpl/product/transportation/html/stationLine/expressShiftEdit.html',
			controller: 'expressShiftEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/stationLine/expressShiftEdit.js']);
						});
					}
				]
			}
		})

		.state('app.product.transportation.group', {
			url: '/group',
			templateUrl: 'tpl/product/transportation/html/group.html',
			controller: 'group',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/group.js']);
					}
				]
			}
		})
		.state('app.product.transportation.class', {
			url: '/class/{type}',
			templateUrl: 'tpl/product/transportation/html/class.html',
			controller: 'class',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/class.js']);
					}
				]
			}
		})
		/*
		 * 产品——旅游度假
		 * */
		.state('app.product.holiday', {
			url: '/holiday',
			abstract: true,
			template: '<div ui-view></div>'
		})
		// 产品列表
		.state('app.product.holiday.holList', {
			url: '/holList/{type}',
			templateUrl: 'tpl/product/holiday/html/holList.html',
			controller: 'holidayProductList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.productConfirm.js',
							'tpl/base/modal/modal.productRecommend/modal.productRecommend.js',
							'tpl/base/modal/modal.tourRecom/modal.tourRecom.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.stationQrcode/modal.stationQrcode.js',
							'tpl/base/modal/modal.lineRecom/modal.lineRecom.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/holiday/js/holList.js']);
						});
					}
				]
			}
		})
		//下架产品列表
		.state('app.product.holiday.holSoldOut', {
			url: '/holSoldOut',
			templateUrl: 'tpl/product/holiday/html/holSoldOut.html',
			controller: 'holSoldOut',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/holiday/js/holSoldOut.js']);
					}
				]
			}
		})
		// 班次sku管理
		.state('app.product.holiday.holFlightSku', {
			url: '/holFlightSku/{shiftId}',
			templateUrl: 'tpl/product/holiday/html/holFlightSku.html',
			controller: 'holidayFlightSku',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.productConfirm.js',
							'tpl/base/modal/modal.skuBindDriverCar/modal.skuModal.js',
							'tpl/base/modal/modal.shiftView/modal.shiftView.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/holiday/js/holFlightSku.js']);
						});
					}
				]
			}
		})
		/*
		 * 产品——旅游度假——景点
		 * */
		.state('app.product.holiday.holTourAdd1', {
			url: '/holTourAdd1',
			templateUrl: 'tpl/product/holiday/html/tour/holTourAdd1.html',
			controller: 'holidayTourAdd1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/holiday/js/tour/holTourAdd1.js']);
					}
				]
			}
		})
		.state('app.product.holiday.holTourAdd2', {
			url: '/holTourAdd2',
			templateUrl: 'tpl/product/holiday/html/tour/holTourAdd2.html',
			controller: 'holidayTourAdd2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/holiday/js/tour/holTourAdd2.js']);
						});
					}
				]
			}
		})
		.state('app.product.holiday.holTourAdd3', {
			url: '/holTourAdd3',
			templateUrl: 'tpl/product/holiday/html/tour/holTourAdd3.html',
			controller: 'holidayTourAdd3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/holiday/js/tour/holTourAdd3.js']);
						})
					}
				]
			}
		})
		.state('app.product.holiday.holTourAdd4', {
			url: '/holTourAdd4',
			templateUrl: 'tpl/product/holiday/html/tour/holTourAdd4.html',
			controller: 'holidayTourAdd4',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.productPreview/modal.productPreview.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/holiday/js/tour/holTourAdd4.js']);
						})
					}
				]
			}
		})
		//旅游专线编辑
		.state('app.product.holiday.holTourEdit1', {
			url: '/holTourEdit1/{productId}',
			templateUrl: 'tpl/product/holiday/html/tour/holTourEdit1.html',
			controller: 'holidayTourEdit1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/holiday/js/tour/holTourEdit1.js']);
					}
				]
			}
		})
		.state('app.product.holiday.holTourEdit2', {
			url: '/holTourEdit2/{productId}',
			templateUrl: 'tpl/product/holiday/html/tour/holTourEdit2.html',
			controller: 'holidayTourEdit2',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/holiday/js/tour/holTourEdit2.js']);
						});
					}
				]
			}
		})
		.state('app.product.holiday.holTourEdit3', {
			url: '/holTourEdit3/{productId}',
			templateUrl: 'tpl/product/holiday/html/tour/holTourEdit3.html',
			controller: 'holidayTourEdit3',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/holiday/js/tour/holTourEdit3.js']);
						})
					}
				]
			}
		})
		.state('app.product.holiday.holTourEdit4', {
			url: '/holTourEdit4/{productId}',
			templateUrl: 'tpl/product/holiday/html/tour/holTourEdit4.html',
			controller: 'holidayTourEdit4',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function() {
							return $ocLazyLoad.load(['tpl/product/holiday/js/tour/holTourEdit4.js']);
						})
					}
				]
			}
		})

		/*
		 * 产品查看页面wLineCustom
		 * */
		.state('showDetail', {
			abstract: true,
			url: '/showDetail',
			template: '<div ui-view class="b-g-c-fff"></div>'
		})
		//查看线路包车详情页面
		.state('showDetail.wLineCustom', {
			url: '/wLineCustom/{productId}',
			templateUrl: 'tpl/product/transportation/html/custom/wLineCustom.html',
			controller: 'wLineCustom',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/custom/wLineCustom.js']);
					}
				]
			}
		})
		//查看定制包车详情页面
		.state('showDetail.wCharterCustom', {
			url: '/wCharterCustom/{productId}',
			templateUrl: 'tpl/product/transportation/html/custom/wCharterCustom.html',
			controller: 'wCharterCustom',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/custom/wCharterCustom.js']);
					}
				]
			}
		})
		//查看批量导入反馈信息
		.state('showDetail.importDriverResult', {
			url: '/importDriverResult',
			templateUrl: 'tpl/resource/html/driver/importDriverResult.html',
			controller: 'importDriverResult',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/resource/js/driver/importDriverResult.js']);
					}
				]
			}
		})
		.state('showDetail.importCarResult', {
			url: '/importCarResult',
			templateUrl: 'tpl/resource/html/car/importCarResult.html',
			controller: 'importCarResult',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/resource/js/car/importCarResult.js']);
					}
				]
			}
		})

		.state('showDetail.importMemberResult', {
			url: '/importMemberResult',
			templateUrl: 'tpl/resource/html/member/importMemberResult.html',
			controller: 'importMemberResult',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/resource/js/member/importMemberResult.js']);
					}
				]
			}
		})

		//查看司机信息
		.state('showDetail.wDriverMsg', {
			url: '/wDriverMsg/{productId}/{editNotAllowed}',
			templateUrl: 'tpl/resource/html/driver/wDriverMsg.html',
			controller: 'wDriverMsg',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/resource/js/driver/wDriverMsg.js']);
					}
				]
			}
		})

		//查看城际专线
		.state('showDetail.wCityExpress', {
			url: '/wCityExpress/{type}/{productId}',
			templateUrl: 'tpl/product/transportation/html/city/wCityExpress.html',
			controller: 'wCityExpress',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.stationMap/modal.stationMap.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/wCityExpress.js']);
						});
					}
				]
			}
		})
		.state('showDetail.wCitySpecial', {
			url: '/wCitySpecial/{type}/{productId}',
			templateUrl: 'tpl/product/transportation/html/city/wCitySpecial.html',
			controller: 'wCitySpecial',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.map.show/modal.map.show.js',
							'tpl/base/modal/modal.configurationDriver/modal.configurationDriver.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/wCitySpecial.js']);
						});
					}
				]
			}
		})
		.state('showDetail.wCityCarPoolBus', {
			url: '/wCityCarPoolBus/{type}/{productId}',
			templateUrl: 'tpl/product/transportation/html/city/wCityCarPoolBus.html',
			controller: 'wCityCarPoolBus',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.recommended.sites/index.js',
							'tpl/base/modal/modal.addBillingRule/modal.addBillingRule.js',
							'tpl/base/modal/modal.carpoolMaps/modal.carpoolMaps.js',
							'tpl/base/modal/modal.carpoolMapSite/modal.carpoolMapSite.js',
							'tpl/base/modal/modal.carpoolSiteMap/modal.carpoolSiteMap.js',
							'tpl/base/modal/modal.carpoolSite/modal.carpoolSite.js',
							'tpl/base/modal/modal.cityCounty/modal.cityCounty.js',
							'tpl/base/modal/modal.historicalInter.data/index.js',
							'tpl/base/modal/modal.historicalCall.data/index.js',
							'tpl/base/modal/modal.configurationDriver/modal.configurationDriver.js',
							'tpl/base/modal/modal.carpoolMaps/modal.carpoolMaps.js',
							'tpl/base/modal/modal.cityCounty/modal.cityCounty.js',
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/city/wCityCarPoolBus.js']);
						});
					}
				]
			}
		})
		// 查看公交详情
		.state('showDetail.busDetail', {
			url: '/busDetail/{productId}',
			templateUrl: 'tpl/product/transportation/html/bus/busDetail.html',
			controller: 'busDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.addBusLine/addCountyBusLine.js',
							'tpl/base/modal/modal.addBusLine/addUrbanBusLine.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/bus/busDetail.js']);
						});
					}
				]
			}
		})
		// 地图demo
		.state('showDetail.mapDemo', {
			url: '/mapDemo',
			templateUrl: 'tpl/product/transportation/html/mapDemo.html',
			controller: 'mapDemo',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([

						]).then(function(){
							return $ocLazyLoad.load(['tpl/product/transportation/js/mapDemo.js']);
						});
					}
				]
			}
		})
		.state('showDetail.wAirport', {
			url: '/wAirport/{productId}',
			templateUrl: 'tpl/product/transportation/html/airport/wAirport.html',
			controller: 'airEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/airport/airportEdit.js']);
					}
				]
			}
		})
		//查看工作产品
		.state('showDetail.wWork', {
			url: '/wWork/{productId}',
			templateUrl: 'tpl/product/transportation/html/work/wWork.html',
			controller: 'workEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/work/workEdit.js']);
					}
				]
			}
		})
		//查看接站专线-接站快车
		.state('showDetail.wStationExpress', {
			url: '/wStationExpress/{productId}',
			templateUrl: 'tpl/product/transportation/html/stationLine/wStationExpress.html',
			controller: 'wStationExpress',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/stationLine/wStationExpress.js']);
					}
				]
			}
		})
		//查看接站专线-接站专车
		.state('showDetail.wStationSpecial', {
			url: '/wStationSpecial/{productId}',
			templateUrl: 'tpl/product/transportation/html/stationLine/wStationSpecial.html',
			controller: 'wStationSpecial',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/stationLine/wStationSpecial.js']);
					}
				]
			}
		})
		//查看校园班车-校园班车
		.state('showDetail.wSchoolShuttle', {
			url: '/wSchoolShuttle/{productId}',
			templateUrl: 'tpl/product/transportation/html/school/wSchoolShuttle.html',
			controller: 'wSchoolShuttle',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/school/wSchoolShuttle.js']);
					}
				]
			}
		})
		//查看校园班车-校园专车
		.state('showDetail.wSchoolSpecial', {
			url: '/wSchoolSpecial/{productId}',
			templateUrl: 'tpl/product/transportation/html/school/wSchoolSpecial.html',
			controller: 'wSchoolSpecial',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/product/transportation/js/school/wSchoolSpecial.js']);
					}
				]
			}
		})
		/*
		 * 资源
		 * */
		.state('app.resource', {
			url: '/resource',
			abstract: true,
			template: '<div ui-view></div>'
		})
		/*
		 * 资源司机
		 * */
		.state('app.resource.driver', {
			url: '/driver',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.resource.driver.list', {
			url: '/list',
			templateUrl: 'tpl/resource/html/driver/list.html',
			controller: 'driverList',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js',
							'tpl/base/modal/modal.order/carpoolChangeDriverPosition/index.js',
							'tpl/base/modal/modal.importBundleDriver/modal.importBundleDriver.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/driver/list.js');
						});
					}
				]
			}
		})
		.state('app.resource.driver.watchEditDriver', {
			url: '/watchEditDriver/{id}/{editNotAllowed}',
			templateUrl: 'tpl/resource/html/driver/watchEditDriver.html',
			controller: 'watchEditDriver',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/driver/watchEditDriver.js');
						});
					}
				]
			}
		})

		.state('app.resource.driver.add', {
			url: '/add',
			templateUrl: 'tpl/resource/html/driver/add.html',
			controller: 'driverAdd',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/driver/add.js');
						});
					}
				]
			}
		})
		.state('app.resource.driver.addPurview', {
			url: '/addPurview',
			templateUrl: 'tpl/resource/html/driver/addPurview.html',
			controller: 'driverAddPurview',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/driver/addPurview.js');
						});
					}
				]
			}
		})
		.state('app.resource.driver.edit', {
			url: '/edit/{id}/{editNotAllowed}',
			templateUrl: 'tpl/resource/html/driver/edit.html',
			controller: 'driverEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/driver/edit.js');
						});
					}
				]
			}
		})
		.state('app.resource.driver.editPurview', {
			url: '/editPurview/{id}/{editNotAllowed}',
			templateUrl: 'tpl/resource/html/driver/editPurview.html',
			controller: 'driverEditPurview',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/driver/editPurview.js');
						});
					}
				]
			}
		})
		.state('app.resource.driver.editCard', {
			url: '/editCard/{id}/{editNotAllowed}',
			templateUrl: 'tpl/resource/html/driver/editCard.html',
			controller: 'driverEditCard',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/driver/editCard.js');
						});
					}
				]
			}
		})
		.state('app.resource.driver.bindShop', {
			url: '/bindShop',
			templateUrl: 'tpl/resource/html/driver/bindShop.html',
			controller: 'driverBindShop',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/resource/js/driver/bindShop.js']);
					}
				]
			}
		})
		.state('app.resource.driver.bindCar', {
			url: '/bindCar/{id}/{carId}',
			templateUrl: 'tpl/resource/html/driver/bindCar.html',
			controller: 'bindCar',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/resource/js/driver/bindCar.js']);
					}
				]
			}
		})
		.state('app.resource.driver.registerDriver', {
			url: '/registerDriver',
			templateUrl: 'tpl/resource/html/driver/registerDriver.html',
			controller: 'registerDriver',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.telDetect/modal.telDetect.js',
							'tpl/base/modal/modal.reject/modal.reject.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js',
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/driver/registerDriver.js');
						});
					}
				]
			}
		})
		.state('app.resource.driver.outerDriver', {
			url: '/outerDriver',
			templateUrl: 'tpl/resource/html/driver/outerDriver.html',
			controller: 'outerDriver',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.importDriver/modal.importDriver.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/driver/outerDriver.js');
						});
					}
				]
			}
		})

		.state('app.resource.driver.offShelvesDriver', {
			url: '/offShelvesDriver',
			templateUrl: 'tpl/resource/html/driver/offShelvesDriver.html',
			controller: 'offShelvesDriver',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/driver/offShelvesDriver.js');
						});
					}
				]
			}
		})
		/*
		 * 资源用户信息-会员
		 * */

		.state('app.resource.member', {
			url: '/member',
			abstract: true,
			template: '<div ui-view></div>'
		})

		.state('app.resource.member.list', {
			url: '/list',
			params: {'id':null},
			templateUrl: 'tpl/resource/html/member/list.html',
			controller: 'memberList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.addMember/modal.addMember.js',
							'tpl/base/modal/modal.addPoint/modal.addPoint.js',
							'tpl/base/modal/modal.importBundleDriver/modal.importBundleDriver.js',
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/member/list.js');
						});
					}
				]
			}
		})
		.state('app.resource.member.detail', {
			url: '/detail/{id}',
			templateUrl: 'tpl/resource/html/member/detail.html',
			controller: 'memberDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/member/detail.js');
						});
					}
				]
			}
		})
		.state('app.resource.member.manage', {
			url: '/manage',
			templateUrl: 'tpl/resource/html/member/manage.html',
			controller: 'memberManage',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load('tpl/resource/js/member/manage.js');
					}
				]
			}
		})
		.state('app.resource.member.integralList', {
			url: '/integralList',
			templateUrl: 'tpl/resource/html/member/integralList.html',
			controller: 'integralList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load('tpl/resource/js/member/integralList.js');
					}
				]
			}
		})
		.state('app.resource.member.addIntegralRule', {
			url: '/addIntegralRule/{id}/{ids}',
			templateUrl: 'tpl/resource/html/member/addIntegralRule.html',
			controller: 'addIntegralRule',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load('tpl/resource/js/member/addIntegralRule.js');
					}
				]
			}
		})
		.state('app.resource.member.createCard', {
			url: '/createCard',
			templateUrl: 'tpl/resource/html/member/createCard.html',
			controller: 'createCard',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/member/createCard.js');
						});
					}
				]
			}
		})
		.state('app.resource.member.cardEdit', {
			url: '/cardEdit/{id}',
			templateUrl: 'tpl/resource/html/member/cardEdit.html',
			controller: 'cardEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/member/cardEdit.js');
						});
					}
				]
			}
		})
		.state('app.resource.member.createNoThresholdCard', {
			url: '/createNoThresholdCard',
			templateUrl: 'tpl/resource/html/member/createNoThresholdCard.html',
			controller: 'createNoThresholdCard',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/member/createNoThresholdCard.js');
						});
					}
				]
			}
		})
		.state('app.resource.member.noThresholdCardEdit', {
			url: '/noThresholdCardEdit/{id}',
			templateUrl: 'tpl/resource/html/member/noThresholdCardEdit.html',
			controller: 'noThresholdCardEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/member/noThresholdCardEdit.js');
						});
					}
				]
			}
		})
		.state('app.resource.member.applyCoupon', {
			url: '/applyCoupon',
			templateUrl: 'tpl/resource/html/member/applyCoupon.html',
			controller: 'applyCoupon',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/member/applyCoupon.js');
						});
					}
				]
			}
		})
		/*
		 * 资源车辆
		 * */
		.state('app.resource.car', {
			url: '/car',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.resource.car.list', {
			url: '/list',
			templateUrl: 'tpl/resource/html/car/list.html',
			controller: 'carList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.lineCarQrcode/modal.lineCarQrcode.js',
							'tpl/base/modal/modal.importBundleDriver/modal.importBundleDriver.js',                                    'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/car/list.js');
						});
					}
				]
			}
		})
		.state('app.resource.car.watchEditCar', {
			url: '/watchEditCar/{id}/{editNotAllowed}',
			templateUrl: 'tpl/resource/html/car/watchEditCar.html',
			controller: 'watchEditCar',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/car/watchEditCar.js');
						});
					}
				]
			}
		})
		.state('app.resource.car.add', {
			url: '/add',
			templateUrl: 'tpl/resource/html/car/add.html',
			controller: 'carAdd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/car/add.js');
						});
					}
				]
			}
		})
		.state('app.resource.car.edit', {
			url: '/edit/{id}/{editNotAllowed}',
			templateUrl: 'tpl/resource/html/car/edit.html',
			controller: 'carEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/resource/js/car/edit.js');
						});
					}
				]
			}
		})
		.state('app.resource.car.bindShop', {
			url: '/bindShop',
			templateUrl: 'tpl/resource/html/car/bindShop.html',
			controller: 'carBindShop',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/resource/js/car/bindShop.js']);
					}
				]
			}
		})
		.state('app.resource.car.registerCar', {
			url: '/registerCar',
			templateUrl: 'tpl/resource/html/car/registerCar.html',
			controller: 'registerCar',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.reject/modal.reject.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/resource/js/car/registerCar.js']);
						});
					}
				]
			}
		})
		.state('app.resource.car.offShelvesCar', {
			url: '/offShelvesCar',
			templateUrl: 'tpl/resource/html/car/offShelvesCar.html',
			controller: 'offShelvesCar',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/resource/js/car/offShelvesCar.js']);
						});
					}
				]
			}
		})
		/**
		 * 数据
		 */
		.state('app.data', {
			url: '/data',
			abstract: true,
			template: '<div ui-view></div>'
		})
		//数据概况
		.state('app.data.index', {
			url: '/index',
			templateUrl: 'tpl/data/html/index.html',
			controller: 'dataC',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load('tpl/data/js/data.js');
					}]
			}
		})
		//交易分析
		.state('app.data.tradeAnalyze', {
			url: '/tradeAnalyze/{date}',
			templateUrl: 'tpl/data/html/tradeAnalyze.html',
			controller: 'tradeAnalyze',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load('tpl/data/js/tradeAnalyze.js');
					}]
			}
		})
		// 用户分析
		.state('app.data.user', {
			url: '/data',
			abstract: true,
			template: '<div ui-view></div>'
		})
		//用户属性
		.state('app.data.user.userAttribute', {
			url: '/userAttribute',
			templateUrl: 'tpl/data/html/userAttribute.html',
			controller: 'userAttribute',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load('tpl/data/js/userAttribute.js');
					}]
			}
		})
		//用户分析——用户增长
		.state('app.data.user.userAnalyze', {
			url: '/userAnalyze',
			templateUrl: 'tpl/data/html/userAnalyze.html',
			controller: 'userAnalyze',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load('tpl/data/js/userAnalyze.js');
					}]
			}
		})
		// 数据——统计
		.state('app.data.statistics', {
			url: '/data',
			abstract: true,
			template: '<div ui-view></div>'
		})
		// 数据——统计——司机
		.state('app.data.statistics.driverStatistic', {
			url: '/driverStatistic',
			templateUrl: 'tpl/data/html/driverStatistic.html',
			controller: 'driverStatistic',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/data/js/driverStatistic.js');
						});
					}]
			}
		})
		// 数据——统计——车辆
		.state('app.data.statistics.carStatistic', {
			url: '/carStatistic',
			templateUrl: 'tpl/data/html/carStatistic.html',
			controller: 'carStatistic',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/data/js/carStatistic.js');
						});
					}]
			}
		})
		// 数据——统计——站点
		.state('app.data.statistics.siteStatistic', {
			url: '/siteStatistic',
			templateUrl: 'tpl/data/html/siteStatistic.html',
			controller: 'siteStatistic',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/data/js/siteStatistic.js');
						});
					}]
			}
		})
		// 数据——统计——线路
		.state('app.data.statistics.lineStatistic', {
			url: '/lineStatistic',
			templateUrl: 'tpl/data/html/lineStatistic.html',
			controller: 'lineStatistic',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/data/js/lineStatistic.js');
						});
					}]
			}
		})
		// 数据——统计——企业分组
		.state('app.data.statistics.groupStatistic', {
			url: '/groupStatistic',
			templateUrl: 'tpl/data/html/groupStatistic.html',
			controller: 'groupStatistic',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/data/js/groupStatistic.js');
						});
					}]
			}
		})

		// 资产
		.state('app.asset', {
			url: '/asset',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.asset.index', {
			url: '/index',
			templateUrl: 'tpl/asset/html/index.html',
			controller: 'sevenDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.payment/modal.payment.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/asset/js/index.js']);
						});
					}
				]
			}
		})
		.state('app.asset.draw', {
			url: '/draw/{type}',
			templateUrl: 'tpl/asset/html/draw.html',
			controller: 'draw',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/draw.js']);
					}
				]
			}
		})
		.state('app.asset.tradeRecord', {
			url: '/tradeRecord/{flag}',
			templateUrl: 'tpl/asset/html/tradeRecord.html',
			controller: 'tradeRecord',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/tradeRecord.js']);
					}
				]
			}
		})
		// 提现记录
		.state('app.asset.drawRecord', {
			url: '/drawRecord',
			templateUrl: 'tpl/asset/html/drawRecord.html',
			controller: 'drawRecord',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/drawRecord.js']);
					}
				]
			}
		})
		// 充值记录
		.state('app.asset.chargeRecord', {
			url: '/chargeRecord',
			templateUrl: 'tpl/asset/html/chargeRecord.html',
			controller: 'chargeRecord',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/chargeRecord.js']);
					}
				]
			}
		})
		// 提现页面
		.state('app.asset.recharge', {
			url: '/recharge',
			templateUrl: 'tpl/asset/html/recharge.html',
			controller: 'recharge',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.recharge/modal.recharge.js',
							'tpl/asset/js/recharge.js',
							'tpl/base/modal/modal.weixin.pay/modal.weixin.pay.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/asset/js/recharge.js']);
						});
					}
				]
			}
		})

		/********资产对账单***********/
		.state('app.asset.statements', {
			url: '/statements',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.asset.statements.accountGather', {
			url: '/accountGather',
			templateUrl: 'tpl/asset/html/statements/accountGather.html',
			controller: 'accountGather',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/statements/accountGather.js']);
					}
				]
			}
		})
		// 企业对账
		.state('app.asset.statements.accountDetail', {
			url: '/accountDetail',
			templateUrl: 'tpl/asset/html/statements/accountDetail.html',
			controller: 'accountDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/statements/accountDetail.js']);
					}
				]
			}
		})
		// 分组结算
		.state('app.asset.statements.groupSettlement', {
			url: '/groupSettlement/{groupId}',
			templateUrl: 'tpl/asset/html/statements/groupSettlement.html',
			controller: 'groupSettlement',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/statements/groupSettlement.js']);
					}
				]
			}
		})
		// 产品明细
		.state('app.asset.statements.productDetail', {
			url: '/productDetail/{productTypeLevelOne}/{productTypeLevelTwo}',
			templateUrl: 'tpl/asset/html/statements/productDetail.html',
			controller: 'productDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/statements/productDetail.js']);
					}
				]
			}
		})
		// 线路明细
		.state('app.asset.statements.routeDetail', {
			url: '/routeDetail/{routeIdA}/{routeIdB}',
			templateUrl: 'tpl/asset/html/statements/routeDetail.html',
			controller: 'routeDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/statements/routeDetail.js']);
					}
				]
			}
		})
		// 车辆明细
		.state('app.asset.statements.carDetail', {
			url: '/carDetail/{carId}',
			templateUrl: 'tpl/asset/html/statements/carDetail.html',
			controller: 'carDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/statements/carDetail.js']);
					}
				]
			}
		})
		// 电召明细networkDetail
		.state('app.asset.statements.carPoolDetail', {
			url: '/carPoolDetail/{carpoolDate}',
			templateUrl: 'tpl/asset/html/statements/carPoolDetail.html',
			controller: 'carPoolDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/statements/carPoolDetail.js']);
					}
				]
			}
		})
		// 网络明细
		.state('app.asset.statements.networkDetail', {
			url: '/networkDetail/{networkDate}',
			templateUrl: 'tpl/asset/html/statements/networkDetail.html',
			controller: 'networkDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/statements/networkDetail.js']);
					}
				]
			}
		})
		// 车站明细
		.state('app.asset.statements.stationDetail', {
			url: '/stationDetail/{stationName}',
			templateUrl: 'tpl/asset/html/statements/stationDetail.html',
			controller: 'stationDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/statements/stationDetail.js']);
					}
				]
			}
		})
		// 司机结算
		.state('app.asset.statements.driverSettlement', {
			url: '/driverSettlement/{driverId}',
			templateUrl: 'tpl/asset/html/statements/driverSettlement.html',
			controller: 'driverSettlement',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/statements/driverSettlement.js']);
					}
				]
			}
		})
		// 佣金账单
		.state('app.asset.statements.accountCommission', {
			url: '/accountCommission',
			templateUrl: 'tpl/asset/html/statements/accountCommission.html',
			controller: 'accountCommission',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.balance/modal.balance.js',
							'tpl/base/modal/modal.payment/modal.payment.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/asset/js/statements/accountCommission.js']);
						});
					}
				]
			}
		})
		// 支付记录
		.state('app.asset.statements.paymentHistory', {
			url: '/paymentHistory',
			templateUrl: 'tpl/asset/html/statements/paymentHistory.html',
			controller: 'paymentHistory',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/statements/paymentHistory.js']);
					}
				]
			}
		})
		// 营销账单
		.state('app.asset.statements.accountSale', {
			url: '/accountSale',
			templateUrl: 'tpl/asset/html/statements/accountSale.html',
			controller: 'accountSale',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.accountExplain/modal.accountExplain.js',
							'tpl/base/modal/modal.markedById/modal.markedById.js',
							'tpl/base/modal/modal.markedByIds/modal.markedByIds.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/asset/js/statements/accountSale.js']);
						});
					}
				]
			}
		})
		/********资产新版发票管理***********/
		.state('app.asset.ticketManage', {
			url: '/ticketManage',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.asset.ticketManage.ticketGeneral', {
			url: '/ticketGeneral',
			templateUrl: 'tpl/asset/html/ticketManage/ticketGeneral.html',
			controller: 'ticketGeneral',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/ticketManage/ticketGeneral.js']);
					}
				]
			}
		})
		//发票管理索取发票页面
		.state('app.asset.ticketManage.applyList', {
			url: '/applyList',
			templateUrl: 'tpl/asset/html/ticketManage/applyList.html',
			controller: 'applyList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/ticketManage/applyList.js']);
					}
				]
			}
		})
		//发票管理索取发票发票记录页面
		.state('app.asset.ticketManage.applyRecord', {
			url: '/applyRecord',
			templateUrl: 'tpl/asset/html/ticketManage/applyRecord.html',
			controller: 'applyRecord',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.ticketDetail/modal.ticketDetail.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/asset/js/ticketManage/applyRecord.js']);
						});
					}
				]
			}
		})
		//申请开票
		.state('app.asset.ticketManage.applyForm', {
			url: '/applyForm/{money}/{id}/{invoiceId}',
			templateUrl: 'tpl/asset/html/ticketManage/applyForm.html',
			controller: 'applyForm',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/ticketManage/applyForm.js']);
					}
				]
			}
		})
		//对外开票列表
		.state('app.asset.ticketManage.makeInvoiceList', {
			url: '/makeInvoiceList',
			templateUrl: 'tpl/asset/html/ticketManage/makeInvoiceList.html',
			controller: 'makeInvoiceList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.outDetail/modal.outDetail.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/asset/js/ticketManage/makeInvoiceList.js']);
						});
					}
				]
			}
		})
		//对外开票记录
		.state('app.asset.ticketManage.makeInvoiceRecord', {
			url: '/makeInvoiceRecord',
			templateUrl: 'tpl/asset/html/ticketManage/makeInvoiceRecord.html',
			controller: 'makeInvoiceRecord',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/ticketManage/makeInvoiceRecord.js']);
					}
				]
			}
		})
		//电子发票--列表
		.state('app.asset.ticketManage.invoiceList', {
			url: '/invoiceList',
			templateUrl: 'tpl/asset/html/ticketManage/invoiceList.html',
			controller: 'invoiceList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/ticketManage/invoiceList.js']);
					}
				]
			}
		})
		//电子发票--详情
		.state('app.asset.ticketManage.invoiceDetail', {
			url: '/invoiceDetail/{id}',
			templateUrl: 'tpl/asset/html/ticketManage/invoiceDetail.html',
			controller: 'invoiceDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/ticketManage/invoiceDetail.js']);
					}
				]
			}
		})
		/********资产新版发票管理结束***********/
		//计费标准
		.state('app.asset.feeStandard', {
			url: '/feeStandard',
			templateUrl: 'tpl/asset/html/feeStandard.html',
			controller: 'feeStandard',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/feeStandard.js']);
					}
				]
			}
		})

		.state('app.asset.weixinPay', {
			url: '/weixinPay',
			templateUrl: 'tpl/asset/html/weixinPay.html',
			controller: 'weixinPay',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/asset/js/weixinPay.js']);
					}
				]
			}
		})
		// .state('app.asset.recharge', {
		//    url: '/recharge',
		//    templateUrl: 'tpl/asset/html/recharge.html',
		//})

		/**
		 * 询价
		 */
		.state('app.price', {
			url: '/price',
			abstract: true,
			template: '<div ui-view></div>'
		})
		//询价概况
		.state('app.price.index', {
			url: '/index',
			templateUrl: 'tpl/price/html/index.html',
			controller: 'priceIndex',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/price/js/index.js']);
					}
				]
			}
		})
		.state('app.price.allPrice', {
			url: '/allPrice',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.price.allPrice.driverDetail', {
			url: '/driverDetail/{id}',
			templateUrl: 'tpl/price/html/allPrice/driverDetail.html',
			controller: 'driverDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/price/js/allPrice/driverDetail.js']);
					}
				]
			}
		})

		/* 企业班车 */
		.state('app.price.allPrice.enterpriseShuttle', {
			url: '/enterpriseShuttle',
			templateUrl: 'tpl/price/html/allPrice/enterpriseShuttle.html',
			controller: 'enterpriseShuttle',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/price/js/allPrice/enterpriseShuttle.js');
						})
					}
				]
			}
		})
		/* 校园班车 */
		.state('app.price.allPrice.campusBus', {
			url: '/campusBus',
			templateUrl: 'tpl/price/html/allPrice/campusBus.html',
			controller: 'campusBus',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/price/js/allPrice/campusBus.js');
						})
					}
				]
			}
		})
		/* 企业班车详情 */
		.state('app.price.allPrice.businessDetail', {
			url: '/businessDetail/{id}',
			templateUrl: 'tpl/price/html/allPrice/businessDetail.html',
			controller: 'businessDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/price/js/allPrice/businessDetail.js']);
					}
				]
			}
		})
		.state('app.price.allPrice.cityinessDetail', {
			url: '/cityinessDetail/{id}',
			templateUrl: 'tpl/price/html/allPrice/cityinessDetail.html',
			controller: 'cityinessDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/price/js/allPrice/cityinessDetail.js']);
					}
				]
			}
		})
		/*************新版定制包车****************/
		/* 定制包车 */
		.state('app.price.allPrice.charterBus', {
			url: '/charterbus',
			templateUrl: 'tpl/price/html/allPrice/charterBus.html',
			controller: 'charterBus',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/price/js/allPrice/charterBus.js');
						})
					}
				]
			}
		})
		.state('app.price.allPrice.entDetail', {
			url: '/entDetail/{id}',
			templateUrl: 'tpl/price/html/allPrice/entDetail.html',
			controller: 'entDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.customEntDetail/modal.customEntDetail.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/price/js/allPrice/entDetail.js']);
						});
					}
				]
			}
		})
		.state('app.price.allPrice.lineCharter', {
			url: '/lineCharter',
			templateUrl: 'tpl/price/html/allPrice/lineCharter.html',
			controller: 'lineCharter',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/price/js/allPrice/lineCharter.js');
						})
					}
				]
			}
		})
		.state('app.price.allPrice.lineCharterDetail', {
			url: '/lineCharterDetail/{id}',
			templateUrl: 'tpl/price/html/allPrice/lineCharterDetail.html',
			controller: 'lineCharterDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.lookInvoice/modal.lookInvoice.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/price/js/allPrice/lineCharterDetail.js');
						})
					}
				]
			}
		})

		.state('app.price.allPrice.lineShare', {
			url: '/lineShare',
			templateUrl: 'tpl/price/html/allPrice/lineShare.html',
			controller: 'lineShare',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/price/js/allPrice/lineShare.js');
						})
					}
				]
			}
		})
		.state('app.price.allPrice.lineShareDetail', {
			url: '/lineShareDetail/{id}',
			templateUrl: 'tpl/price/html/allPrice/lineShareDetail.html',
			controller: 'lineShareDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/price/js/allPrice/lineShareDetail.js']);
					}
				]
			}
		})

		/**
		 * 订单
		 */
		.state('app.order', {
			url: '/order',
			abstract: true,
			template: '<div ui-view></div>'
		})
		//订单概况
		.state('app.order.index', {
			url: '/index',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.order.index.all', {
			url: '/all',
			templateUrl: 'tpl/order/html/basic/index.html',
			controller: 'orderIndex',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/order/js/basic/index.js']);
					}
				]
			}
		})

		.state('app.order.list', {
			url: '/list',
			abstract: true,
			template: '<div ui-view></div>'
		})
		// 所有订单-常规订单
		.state('app.order.list.conventional', {
			url: '/conventional/{type}',
			templateUrl: 'tpl/order/html/list/list.html',
			controller: 'orderList',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.orderMarkRefund/modal.orderMarkRefund.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/order/js/list/list.js']);
						});
					}
				]
			}
		})
		.state('app.order.list.detail', {
			url: '/detail/{id}/{type}/{LevelOne}/{LevelTwo}',
			templateUrl: 'tpl/order/html/list/detail.html',
			controller: 'orderDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.orderMarkRefund/modal.orderMarkRefundNew.js',
							'tpl/base/modal/modal.orderMarkRefund/modal.orderMarkRefund.js',
							'tpl/base/modal/modal.lookInvoice/modal.lookInvoice.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/order/js/list/detail.js']);
						});
					}
				]
			}
		})
		// 所有订单-品牌约车
		.state('app.order.list.carHailing', {
			url: '/carHailing',
			templateUrl: 'tpl/order/html/list/carHailingList.html',
			controller: 'carHailingList',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.orderMarkRefund/modal.orderMarkRefund.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/order/js/list/carHailingList.js']);
						});
					}
				]
			}
		})
		// 品牌约车-订单详情
		.state('app.order.list.carHailDetail', {
			url: '/carHailDetail/{id}',
			templateUrl: 'tpl/order/html/list/carHailDetail.html',
			controller: 'carHailDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.orderMarkRefund/modal.orderMarkRefund.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/order/js/list/carHailDetail.js']);
						});
					}
				]
			}
		})
		// 所有订单-出租的士
		.state('app.order.list.taxiList', {
			url: '/taxiList',
			templateUrl: 'tpl/order/html/list/taxiList.html',
			controller: 'taxiList',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.orderMarkRefund/modal.orderMarkRefund.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/order/js/list/taxiList.js']);
						});
					}
				]
			}
		})
		// 所有订单-自驾租车-列表
		.state('app.order.list.carRentalOrderList', {
			url: '/carRentalOrderList',
			templateUrl: 'tpl/order/html/list/carRentalOrderList.html',
			controller: 'carRentalOrderList',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/order/js/list/carRentalOrderList.js']);
						});
					}
				]
			}
		})
		// 所有订单-自驾租车-详情
		.state('app.order.list.carRentalOrderDetails', {
			url: '/carRentalOrderDetails/{orderId}',
			templateUrl: 'tpl/order/html/list/carRentalOrderDetails.html',
			controller: 'carRentalOrderDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/order/js/list/carRentalOrderDetails.js']);
					}
				]
			}
		})
		// 所有订单-接驳订单
		.state('app.order.list.shuttleOrderList', {
			url: '/shuttleOrderList',
			templateUrl: 'tpl/order/html/list/shuttleList.html',
			controller: 'shuttleList',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						// return $ocLazyLoad.load(['tpl/order/js/shuttleList.js']);
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.skuBindDriverCar/modal.skuModal.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/list/shuttleList.js');
						})
					}
				]
			}
		})
		// 接驳订单-详情
		.state('app.order.list.shuttleOrderDetails', {
			url: '/shuttleOrderDetail/{id}',
			templateUrl: 'tpl/order/html/list/shuttleDetail.html',
			controller: 'shuttleDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/order/js/list/shuttleDetail.js']);
					}
				]
			}
		})

		// 所有订单-积分订单
		.state('app.order.list.pointsList', {
			url: '/pointsList',
			templateUrl: 'tpl/order/html/list/pointsList.html',
			controller: 'pointsList',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						// return $ocLazyLoad.load(['tpl/order/js/shuttleList.js']);
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.skuBindDriverCar/modal.skuModal.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/list/pointsList.js');
						})
					}
				]
			}
		})

		// 所有订单-车辆年检
		.state('app.order.list.carInspectionList', {
			url: '/carInspectionList',
			templateUrl: 'tpl/order/html/list/carInspectionList.html',
			controller: 'carInspectionList',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.skuBindDriverCar/modal.skuModal.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js',
							'tpl/base/modal/modal.assignDriver/modal.assignDriver.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/list/carInspectionList.js');
						})
					}
				]
			}
		})

		// 所有订单-车辆年检详情
		.state('app.order.list.carInspectionDetail', {
			url: '/carInspectionDetail/{id}',
			templateUrl: 'tpl/order/html/list/carInspectionDetail.html',
			controller: 'carInspectionDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.skuBindDriverCar/modal.skuModal.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js',
							'tpl/base/modal/modal.assignDriver/modal.assignDriver.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/list/carInspectionDetail.js');
						})
					}
				]
			}
		})

		.state('app.order.customDetail', {
			url: '/customDetail/{id}',
			templateUrl: 'tpl/order/html/customDetail.html',
			controller: 'orderDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/order/js/list/detail.js']);
					}
				]
			}
		})

		.state('app.order.list.expressList', {
			url: '/expressList',
			templateUrl: 'tpl/order/html/list/expressList.html',
			controller: 'expressList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.addRemark/modal.addRemark.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/list/expressList.js');
						});
					}
				]
			}
		})
		.state('app.order.list.expressDetail', {
			url: '/expressDetail/{id}',
			templateUrl: 'tpl/order/html/list/expressDetail.html',
			controller: 'expressDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/order/js/list/expressDetail.js']);
					}
				]
			}
		})
		//微店订单
		.state('app.order.list.microShopOrder', {
			url: '/microShopOrder',
			templateUrl: 'tpl/order/html/list/microShopOrder.html',
			controller: 'microShopOrder',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.orderMarkRefund/modal.orderMarkRefundWechatStore.js',
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/list/microShopOrder.js');
						})
					}
				]
			}
		})
		//微店订单详情
		.state('app.order.list.weChatDetail', {
			url: '/weChatDetail/{id}',
			templateUrl: 'tpl/order/html/list/weChatDetail.html',
			controller: 'weChatDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.orderMarkRefund/modal.orderMarkRefundWechatStore.js',
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/list/weChatDetail.js');
						})
					}
				]
			}
		})

		// 评价管理
		.state('app.order.eval',{
			url:'/eval',
			abstract:true,
			template:'<div ui-view></div>'
		})

		.state('app.order.eval.evalList', {
			url: '/evalList',
			templateUrl: 'tpl/order/html/eval/evalList.html',
			controller: 'evalList',
			resolve: {
				deps:['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/order/js/eval/evalList.js']);
						})
					}]
			}
		})
		.state('app.order.eval.evalDetail', {
			url: '/evalDetail/{id}',
			templateUrl: 'tpl/order/html/eval/evalDetail.html',
			controller: 'evalDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/order/js/eval/evalDetail.js']);
					}
				]
			}
		})
		//电召下单
		.state('app.order.callingUpList', {
			url: '/callingUpList',
			templateUrl: 'tpl/order/html/callingUpList.html',
			controller: 'callingUpList',
			resolve: {
				deps:['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/order/js/callingUpList.js']);
						})
					}]
			}
		})


		.state('app.order.callingUpDetail', {
			url: '/callingUpDetail/{id}',
			templateUrl: 'tpl/order/html/callingUpDetail.html',
			controller: 'callingUpDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/order/js/callingUpDetail.js']);
					}
				]
			}
		})
		.state('app.order.callingUpEdit', {
			url: '/callingUpEdit/{id}',
			templateUrl: 'tpl/order/html/callingUpEdit.html',
			controller: 'callingUpEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/order/js/callingUpEdit.js']);
					}
				]
			}
		})
		/**
		 * 调度管理--快车
		 */
		.state('app.order.assign', {
			url: '/assign',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.order.assign.ticketSetup', {
			url: '/ticketSetup',
			templateUrl: 'tpl/order/html/assign/ticketSetup.html',
			controller: 'ticketSetup',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.selectStationMap.js',
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/assign/ticketSetup.js');
						});
					}
				]
			}
		})
		.state('app.order.assign.expressCarpool', {
			url: '/expressCarpool',
			templateUrl: 'tpl/order/html/assign/expressCarpool.html',
			controller: 'expressCarpool',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.editExpress/modal.editExpress.js',
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/assign/expressCarpool.js');
						});
					}
				]
			}
		})
		/**
		 * 电话下单--拼车
		 */
		.state('app.order.assign.carpoolingSet', {
			url: '/carpoolingSet',
			templateUrl: 'tpl/order/html/assign/carpoolingSet.html',
			controller: 'carpoolingSet',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/js/modal.selectCarpoolStationMap.js',
							'tpl/base/modal/modal.editCarPool/modal.editCarPool.js',
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/assign/carpoolingSet.js');
						});
					}
				]
			}
		})
		//调度管理-调度管理
		.state('app.order.assign.dispatchManagement', {
			url: '/dispatchManagement/{productId}/{type}/{startupTime}',
			templateUrl: 'tpl/order/html/assign/dispatchManagement.html',
			controller: 'dispatchManagement',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.splitScreen/modal.splitScreen.js',
							'tpl/base/modal/modal.order/carpoolOrderDetail/index.js',
							'tpl/base/modal/modal.order/carpoolSetting/index.js',
							'tpl/base/modal/modal.order/carpoolOrderSend/index.js',
							'tpl/base/modal/modal.order/carpoolChangeDriver/index.js',
							'tpl/base/modal/modal.order/carpoolChangeDriverNew/index.js',
							'tpl/base/modal/modal.order/carpoolCancelRound/index.js',
							'tpl/base/modal/modal.order/carpoolCancelRoundGlobal/index.js',
							'tpl/base/modal/modal.order/carpoolChangeDriverPosition/index.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/assign/dispatchManagement.js');
						});
					}
				]
			}
		})
		//调度管理-调度管理-新模式
		.state('app.order.assign.dispatchManagementModel1', {
			url: '/dispatchManagementModel1/{productId}/{type}/{startupTime}',
			templateUrl: 'tpl/order/html/assign/dispatchManagementModel1.html',
			controller: 'dispatchManagementModel1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.splitScreen/modal.splitScreen.js',
							'tpl/base/modal/modal.order/carpoolOrderDetail/index.js',
							'tpl/base/modal/modal.order/carpoolSetting/index.js',
							'tpl/base/modal/modal.order/carpoolOrderSend/index.js',
							'tpl/base/modal/modal.order/carpoolChangeDriver/index.js',
							'tpl/base/modal/modal.order/carpoolChangeDriverNew/index.js',
							'tpl/base/modal/modal.order/carpoolCancelRound/index.js',
							'tpl/base/modal/modal.order/carpoolCancelRoundGlobal/index.js',
							'tpl/base/modal/modal.order/carpoolChangeDriverPosition/index.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/order/js/assign/dispatchManagementModel1.js');
						});
					}
				]
			}
		})
		//调度管理-调度记录
		.state('app.order.assign.dispatchRecord', {
			url: '/dispatchRecord/{id}',
			templateUrl: 'tpl/order/html/assign/dispatchRecord.html',
			controller: 'dispatchRecord',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/order/js/assign/dispatchRecord.js']);
						});
					}
				]
			}
		})

		/*
		 * 调度班车-线路详情
		 */
		.state('app.order.assign.departureDetails', {
			url: '/departureDetails/{id}',
			templateUrl: 'tpl/order/html/assign/departureDetails.html',
			controller: 'departureDetails',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/order/js/assign/departureDetails.js']);
					}
				]
			}
		})

		//调度管理-调度统计
		.state('app.order.assign.schedulStatistics', {
			url: '/schedulStatistics/{id}',
			templateUrl: 'tpl/order/html/assign/schedulStatistics.html',
			controller: 'schedulStatistics',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/order/js/assign/schedulStatistics.js']);
						});
					}
				]
			}
		})

		/**
		 * 监管
		 */
		.state('app.manage', {
			url: '/manage',
			abstract: true,
			template: '<div ui-view></div>'
		})

		/**
		 * 营销
		 */
		.state('app.sale', {
			url: '/sale',
			abstract: true,
			template: '<div ui-view></div>'
		})
		//营销中心
		.state('app.sale.index', {
			url: '/index',
			templateUrl: 'tpl/sale/html/index.html',
			controller: 'saleIndexCtrl',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/index.js']);
					}
				]
			}
		})
		// 微信自定义菜单设置
		.state('app.sale.setup', {
			url: '/setup',
			templateUrl: 'tpl/sale/html/setup.html',
			controller: 'setupCtrl',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load('tpl/sale/js/setup.js');
					}
				]
			}
		})
		.state('app.sale.bindWeixin', {
			url: '/bindWeixin/{clearTimer}',
			templateUrl: 'tpl/sale/html/bindWeixin.html',
			controller: 'bindWeixin',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/bindWeixin.js']);
					}
				]
			}
		})
		/*
		 * 企业联盟
		 */
		.state('app.sale.company', {
			url: '/company',
			abstract: true,
			template: '<div ui-view></div>'
		})
		/*
		 * 企业联盟-联盟商家
		 */
		.state('app.sale.company.businessAlliance', {
			url: '/businessAlliance',
			templateUrl: 'tpl/sale/html/company/businessAlliance.html',
			controller: 'businessAlliance',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.addUnion/modal.addUnion.js',
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/company/businessAlliance.js']);
						});
					}
				]
			}
		})
		/*
		 * 联盟概况
		 * */
		.state('app.sale.company.leagueProfile', {
			url: '/leagueProfile',
			templateUrl: 'tpl/sale/html/company/leagueProfile.html',
			controller: 'leagueProfile',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/company/leagueProfile.js']);
					}
				]
			}
		})
		/*
		 * 企业详情
		 * */
		.state('app.sale.company.companyDetail', {
			url: '/companyDetail/{storeId}/{type}',
			templateUrl: 'tpl/sale/html/company/companyDetail.html',
			controller: 'companyDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/company/companyDetail.js']);
					}
				]
			}
		})
		/*
		 * 共享管理
		 * */
		.state('app.sale.company.shareManagement', {
			url: '/shareManagement',
			templateUrl: 'tpl/sale/html/company/shareManagement.html',
			controller: 'shareManagement',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/company/shareManagement.js']);
					}
				]
			}
		})
		/*
		 * 分销管理
		 * */
		.state('app.sale.company.distributionManagement', {
			url: '/distributionManagement',
			templateUrl: 'tpl/sale/html/company/distributionManagement.html',
			controller: 'distributionManagement',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/company/distributionManagement.js']);
					}
				]
			}
		})

		/*
		 * 联盟设置
		 * */
		.state('app.sale.company.allianceSettings', {
			url: '/allianceSettings',
			templateUrl: 'tpl/sale/html/company/allianceSettings.html',
			controller: 'allianceSettings',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.editShareProduct/modal.editShareProduct.js',
							'tpl/base/modal/modal.editShareRoute/modal.editShareRoute.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/company/allianceSettings.js']);
						});
					}
				]
			}
		})

		/*
		 * 添加盟友
		 * */
		.state('app.sale.company.addMyUnion', {
			url: '/addMyUnion',
			templateUrl: 'tpl/sale/html/company/addMyUnion.html',
			controller: 'addMyUnion',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/company/addMyUnion.js']);
					}
				]
			}
		})
		/*
		 * 添加分销
		 * */
		.state('app.sale.company.addDistribution', {
			url: '/addDistribution',
			templateUrl: 'tpl/sale/html/company/addDistribution.html',
			controller: 'addDistribution',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/company/addDistribution.js']);
					}
				]
			}
		})
		/*
		 * 按线路分销
		 * */
		.state('app.sale.company.lineDistribution', {
			url: '/lineDistribution/{storeId}',
			templateUrl: 'tpl/sale/html/company/lineDistribution.html',
			controller: 'lineDistribution',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/company/lineDistribution.js']);
					}
				]
			}
		})
		/*
		 * 按产品分销
		 * */
		.state('app.sale.company.proDistribution', {
			url: '/proDistribution/{storeId}',
			templateUrl: 'tpl/sale/html/company/proDistribution.html',
			controller: 'proDistribution',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/company/proDistribution.js']);
					}
				]
			}
		})

		/*
		 * 联盟概况——分销线路详情
		 * */
		.state('app.sale.company.routeDetails', {
			url: '/routeDetails/{id}/{LevelOne}/{storeId}/{LevelTwo}',
			templateUrl: 'tpl/sale/html/company/routeDetails.html',
			controller: 'routeDetails',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/company/routeDetails.js']);
					}
				]
			}
		})
		/*
		 * 联盟概况——共享线路详情
		 * */
		.state('app.sale.company.shareRouteDetails', {
			url: '/shareRouteDetails/{id}/{LevelOne}/{storeId}/{LevelTwo}',
			templateUrl: 'tpl/sale/html/company/shareRouteDetails.html',
			controller: 'shareRouteDetails',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/company/shareRouteDetails.js']);
					}
				]
			}
		})
		/*
		 * 连接小店
		 */
		.state('app.sale.weChatStore', {
			url: '/weChatStore',
			abstract: true,
			template: '<div ui-view></div>'
		})
		/*
		 * 连接小店-商品管理-商品列表
		 * */
		.state('app.sale.weChatStore.wareList', {
			url: '/wareList',
			templateUrl: 'tpl/sale/html/weChatStore/wareList.html',
			controller: 'wareList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.goodsQrcode/modal.goodsQrcode.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/weChatStore/wareList.js']);
						});
					}
				]
			}
		})
		/*
		 * 连接小店-上架商品详情
		 * */
		.state('app.sale.weChatStore.wareDetail', {
			url: '/wareDetail/{productId}',
			templateUrl: 'tpl/sale/html/weChatStore/wareDetail.html',
			controller: 'wareDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/weChatStore/wareDetail.js']);
					}
				]
			}
		})
		/*
		 * 连接小店-发布产品
		 * */
		.state('app.sale.weChatStore.releaseGoods', {
			url: '/releaseGoods/{productId}',
			templateUrl: 'tpl/sale/html/weChatStore/releaseGoods.html',
			controller: 'releaseGoods',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.addTags/modal.addTags.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/weChatStore/releaseGoods.js');
						});
					}
				]
			}
		})
		/*
		 * 连接小店-通用设置
		 * */
		.state('app.sale.weChatStore.setUpSetting', {
			url: '/setUpSetting',
			templateUrl: 'tpl/sale/html/weChatStore/setUpSetting.html',
			controller: 'setUpSetting',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/weChatStore/setUpSetting.js']);
					}
				]
			}
		})
		/*
		 * 微信小程序
		 */
		.state('app.sale.smallProgram', {
			url: '/weChatStore',
			abstract: true,
			template: '<div ui-view></div>'
		})
		/*
		 * 微信小程序
		 * */
		.state('app.sale.smallProgram.smallProgramIndex', {
			url: '/smallProgramIndex',
			templateUrl: 'tpl/sale/html/smallProgram/smallProgramIndex.html',
			controller: 'smallProgramIndex',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.smallQrcode/modal.smallQrcode.js',
							'tpl/base/modal/modal.smallOpen/modal.smallOpen.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/smallProgram/smallProgramIndex.js']);
						});
					}
				]
			}
		})
		/**
		 * 车站班车
		 */
		.state('app.sale.station', {
			url: '/station',
			abstract: true,
			template: '<div ui-view></div>'
		})
		/*
		 * 车站班车扩展
		 */
		.state('app.sale.station.stationExtend', {
			url: '/stationExtend',
			templateUrl: 'tpl/sale/html/station/stationExtend.html',
			controller: 'stationExtend',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/station/stationExtend.js']);
					}
				]
			}
		})
		/**
		 * 车辆年检
		 */
		.state('app.sale.carInspection', {
			url: '/carInspection',
			abstract: true,
			template: '<div ui-view></div>'
		})
		/**
		 * 车辆年检-检测场地列表
		 */
		.state('app.sale.carInspection.inspectionList', {
			url: '/inspectionList',
			templateUrl: 'tpl/sale/html/carInspection/inspectionList.html',
			controller: 'inspectionList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/carInspection/inspectionList.js']);
					}
				]
			}
		})
		/**
		 * 车辆年检-检测场地列表
		 */
		.state('app.sale.carInspection.addInspectionSite1', {
			url: '/addInspectionSite1',
			templateUrl: 'tpl/sale/html/carInspection/addInspectionSite1.html',
			controller: 'addInspectionSite1',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/carInspection/addInspectionSite1.js']);
						});
					}
				]
			}
		})
		.state('app.sale.carInspection.addInspectionSite2', {
			url: '/addInspectionSite2',
			templateUrl: 'tpl/sale/html/carInspection/addInspectionSite2.html',
			controller: 'addInspectionSite2',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/carInspection/addInspectionSite2.js']);
						});
					}
				]
			}
		})
		.state('app.sale.carInspection.addInspectionSite3', {
			url: '/addInspectionSite3',
			templateUrl: 'tpl/sale/html/carInspection/addInspectionSite3.html',
			controller: 'addInspectionSite3',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.addPerson/modal.addPerson.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/carInspection/addInspectionSite3.js']);
						});
					}
				]
			}
		})
		/**
		 * 车辆年检产品详细信息
		 */
		.state('app.sale.carInspection.inspectionDetail', {
			url: '/inspectionDetail/{id}',
			templateUrl: 'tpl/sale/html/carInspection/inspectionDetail.html',
			controller: 'inspectionDetail',
			resolve: {
				deps: ['$ocLazyLoad',
					function($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.addPerson/modal.addPerson.js',
							'tpl/base/modal/modal.map/modal.map.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/carInspection/inspectionDetail.js']);
						});
					}
				]
			}
		})
		/**
		 * 创建车辆年检
		 */
		.state('app.sale.carInspection.setting', {
			url: '/setting',
			templateUrl: 'tpl/sale/html/carInspection/setting.html',
			controller: 'carInspectionSetting',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/carInspection/setting.js']);
					}
				]
			}
		})
		/**
		 * 车辆年检服务人员
		 */
		.state('app.sale.carInspection.serveUser', {
			url: '/serveUser',
			templateUrl: 'tpl/sale/html/carInspection/serveUser.html',
			controller: 'carInspectionServeUser',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/carInspection/serveUser.js']);
					}
				]
			}
		})
		/**
		 * 车辆年检费用管理
		 */
		.state('app.sale.carInspection.cost', {
			url: '/cost',
			templateUrl: 'tpl/sale/html/carInspection/cost.html',
			controller: 'carInspectionCost',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/carInspection/cost.js']);
					}
				]
			}
		})

		/**
		 * 微信消息推送
		 */
		.state('app.sale.message', {
			url: '/message',
			abstract: true,
			template: '<div ui-view></div>',
			controller: 'message',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/message/message.js']);
					}
				]
			}
		})
		.state('app.sale.message.pushMessage', {
			url: '/pushMessage',
			templateUrl: 'tpl/sale/html/message/pushMessage.html',
			controller: 'pushMessage',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/message/pushMessage.js']);
					}
				]
			}
		})
		.state('app.sale.message.pushCount', {
			url: '/pushCount',
			templateUrl: 'tpl/sale/html/message/pushCount.html',
			controller: 'pushCount',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/message/pushCount.js']);
					}
				]
			}
		})
		.state('app.sale.message.messageRecharge', {
			url: '/messageRecharge',
			templateUrl: 'tpl/sale/html/message/messageRecharge.html',
			controller: 'messageRecharge',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.messageRecharge/modal.messageRecharge.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/message/messageRecharge.js']);
						});
					}
				]
			}
		})

		.state('app.sale.message.messageSetting', {
			url: '/messageSetting/{msgType}',
			templateUrl: 'tpl/sale/html/message/messageSetting.html',
			controller: 'messageSetting',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.addSendObj/modal.addSendObj.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/message/messageSetting.js']);
						});
					}
				]
			}
		})
		.state('app.sale.message.checkTicketMsg', {
			url: '/checkTicketMsg',
			templateUrl: 'tpl/sale/html/message/pushMessage/checkTicketMsg.html',
			controller: 'messageSetting',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/message/messageSetting.js']);
					}
				]
			}
		})
		.state('app.sale.message.inquiryMsg', {
			url: '/inquiryMsg',
			templateUrl: 'tpl/sale/html/message/pushMessage/inquiryMsg.html'
		})
		.state('app.sale.message.carPlanMsg', {
			url: '/carPlanMsg',
			templateUrl: 'tpl/sale/html/message/pushMessage/carPlanMsg.html'
		})
		.state('app.sale.message.orderMsg', {
			url: '/orderMsg',
			templateUrl: 'tpl/sale/html/message/pushMessage/orderMsg.html'
		})
		.state('app.sale.message.driverTaskMsg', {
			url: '/driverTaskMsg',
			templateUrl: 'tpl/sale/html/message/pushMessage/driverTaskMsg.html'
		})

		.state('app.sale.message.paySuccessMsg', {
			url: '/paySuccessMsg',
			templateUrl: 'tpl/sale/html/message/pushMessage/paySuccessMsg.html'
		})
		.state('app.sale.message.refundMsg', {
			url: '/refundMsg',
			templateUrl: 'tpl/sale/html/message/pushMessage/refundMsg.html'
		})
		.state('app.sale.message.rideMsg', {
			url: '/rideMsg',
			templateUrl: 'tpl/sale/html/message/pushMessage/rideMsg.html'
		})
		.state('app.sale.message.carArrangeMsg', {
			url: '/carArrangeMsg',
			templateUrl: 'tpl/sale/html/message/pushMessage/carArrangeMsg.html'
		})
		.state('app.sale.message.noQuoteMsg', {
			url: '/noQuoteMsg',
			templateUrl: 'tpl/sale/html/message/pushMessage/noQuoteMsg.html'
		})

		/**
		 * 定制APP
		 */
		.state('app.sale.app', {
			url: '/app',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.sale.app.appIndex', {
			url: '/appIndex',
			templateUrl: 'tpl/sale/html/app/appIndex.html',
			controller: 'appIndex',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.buyService/modal.buyService.js',
							'tpl/base/modal/modal.appQrcode/modal.appQrcode.js',
							'tpl/base/modal/modal.vertionHistory/modal.vertionHistory.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/app/appIndex.js']);
						});
					}
				]
			}
		})
		.state('app.sale.app.appMake', {
			url: '/appMake',
			templateUrl: 'tpl/sale/html/app/appMake.html',
			controller: 'appMake',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.createApp/modal.createApp.js',
							'tpl/base/modal/modal.buyService/modal.buyService.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/app/appMake.js');
						});
					}
				]
			}
		})
		.state('app.sale.app.appAd', {
			url: '/appAd',
			templateUrl: 'tpl/sale/html/app/appAd.html',
			controller: 'appAd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/app/appAd.js']);
					}
				]
			}
		})

		.state('app.sale.app.addAppAd', {
			url: '/addAppAd',
			templateUrl: 'tpl/sale/html/app/addAppAd.html',
			controller: 'addAppAd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/app/addAppAd.js');
						});
					}
				]
			}
		})

		.state('app.sale.app.editAppAd', {
			url: '/editAppAd/{id}',
			templateUrl: 'tpl/sale/html/app/editAppAd.html',
			controller: 'editAppAd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/app/editAppAd.js');
						});
					}
				]
			}
		})

		.state('app.sale.app.appMessage', {
			url: '/appMessage',
			templateUrl: 'tpl/sale/html/app/appMessage.html',
			controller: 'appMessage',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/app/appMessage.js']);
					}
				]
			}
		})
		.state('app.sale.app.addAppMessage', {
			url: '/addAppMessage',
			templateUrl: 'tpl/sale/html/app/addAppMessage.html',
			controller: 'addAppMessage',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/app/addAppMessage.js']);
					}
				]
			}
		})
		.state('app.sale.app.editAppMessage', {
			url: '/editAppMessage/{id}',
			templateUrl: 'tpl/sale/html/app/editAppMessage.html',
			controller: 'editAppMessage',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/app/editAppMessage.js']);
					}
				]
			}
		})
		.state('app.sale.app.payInsert', {
			url: '/payInsert',
			templateUrl: 'tpl/sale/html/app/payInsert.html',
			controller: 'payInsert',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/app/payInsert.js']);
					}
				]
			}
		})
		.state('app.sale.app.appOnShelf', {
			url: '/appOnShelf',
			templateUrl: 'tpl/sale/html/app/appOnShelf.html',
			controller: 'appOnShelf',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.onShelfHistory/modal.onShelfHistory.js',
							'tpl/base/modal/modal.agentOnShelf/modal.agentOnShelf.js',
							'tpl/base/modal/modal.buyService/modal.buyService.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/app/appOnShelf.js']);
						});
					}
				]
			}
		})

		/**
		 * 全民营销
		 */
		.state('app.sale.nationSale', {
			url: '/nationSale',
			abstract: true,
			template: '<div ui-view></div>'
		})
		/*全民营销公用头部*/
		.state('app.sale.nationSale.nationSaleNav', {
			url: '/nationSaleNav',
			templateUrl: 'tpl/sale/html/nationSale/nationSaleNav.html',
			controller: 'nationSaleNav',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/nationSale/nationSaleNav.js']);
					}
				]
			}
		})
		/*营销数据*/
		.state('app.sale.nationSale.salesData', {
			url: '/salesData',
			templateUrl: 'tpl/sale/html/nationSale/salesData.html',
			controller: 'salesData',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/nationSale/salesData.js']);
					}
				]
			}
		})
		/*营销员*/
		.state('app.sale.nationSale.salesMan', {
			url: '/salesMan',
			templateUrl: 'tpl/sale/html/nationSale/salesMan.html',
			controller: 'salesMan',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.firstGuide/modal.firstGuide.js',
							'tpl/base/modal/modal.saleCustomerList/modal.saleCustomerList.js',
							'tpl/base/modal/modal.addSalePerson/modal.addSalePerson.js',
							'tpl/base/modal/modal.addSalePerson/modal.addNewSalePerson.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/nationSale/salesMan.js',]);
						});
					}
				]
			}
		})
		/*营销订单*/
		.state('app.sale.nationSale.salesOrder', {
			url: '/salesOrder',
			templateUrl: 'tpl/sale/html/nationSale/salesOrder.html',
			controller: 'salesOrder',
			resolve: {
				deps:['$ocLazyLoad',
					function($ocLazyLoad){
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.saleExport/modal.saleExport.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/nationSale/salesOrder.js',]);
						});
					}
				]
			}
		})
		/*营销统计*/
		.state('app.sale.nationSale.salesCount', {
			url: '/salesCount',
			templateUrl: 'tpl/sale/html/nationSale/salesCount.html',
			controller: 'salesCount',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.closeAccount/modal.closeAccount.js',
							'tpl/base/modal/modal.saleExport/modal.saleExport.js',
							'tpl/base/modal/modal.saleCountCode/modal.saleCountCode.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/nationSale/salesCount.js',]);
						});
					}
				]
			}
		})
		/*营销产品*/
		.state('app.sale.nationSale.salesProduct', {
			url: '/salesProduct',
			templateUrl: 'tpl/sale/html/nationSale/salesProduct.html',
			controller: 'salesProduct',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.editNationSaleProduct/modal.editNationSaleProduct.js',
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/nationSale/salesProduct.js']);
						});
					}
				]
			}
		})
		/*招募计划*/
		.state('app.sale.nationSale.salesPlan', {
			url: '/salesPlan',
			templateUrl: 'tpl/sale/html/nationSale/salesPlan.html',
			controller: 'salesPlan',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/nationSale/salesPlan.js');
						});
					}
				]
			}
		})
		/*营销设置*/
		.state('app.sale.nationSale.salesSet', {
			url: '/salesSet',
			templateUrl: 'tpl/sale/html/nationSale/salesSet.html',
			controller: 'salesSet',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.editNationSaleProduct/modal.editNationSaleProduct.js',
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/nationSale/salesSet.js']);
						});
					}
				]
			}
		})

		//分销
		.state('app.sale.distributionData', {
			url: '/distributionData',
			templateUrl: 'tpl/sale/html/distribution/distributionData.html',
			controller: 'distributionData',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/distribution/distributionData.js']);
						});
					}
				]
			}
		})
		.state('app.sale.distributionDataAllPlate', {
			url: '/distributionDataAllPlate',
			templateUrl: 'tpl/sale/html/distribution/distributionDataAllPlate.html',
			controller: 'distributionDataAllPlate',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.headSort/modal.headSort.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/distribution/distributionDataAllPlate.js']);
						});
					}
				]
			}
		})
		.state('app.sale.distributionSetting', {
			url: '/distributionSetting',
			templateUrl: 'tpl/sale/html/distribution/distributionSetting.html',
			controller: 'distributionSetting',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.distributionEdit/modal.distributionEdit.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/sale/js/distribution/distributionSetting.js']);
						});
					}
				]
			}
		})
		.state('app.sale.distributionSameCity', {
			url: '/distributionSameCity',
			templateUrl: 'tpl/sale/html/distribution/distributionSameCity.html',
			controller: 'distributionSameCity',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load(['tpl/sale/js/distribution/distributionSameCity.js']);
					}
				]
			}
		})

		// 微信优惠券
		.state('app.sale.couponList', {
			url: '/couponList',
			templateUrl: 'tpl/sale/html/coupon/couponList.html',
			controller: 'couponList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.urlQrcode/modal.urlQrcode.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/coupon/couponList.js');
						});
					}
				]
			}
		})
		.state('app.sale.couponAdd', {
			url: '/couponAdd',
			templateUrl: 'tpl/sale/html/coupon/couponAdd.html',
			controller: 'couponAdd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.addProduct/modal.addProduct.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/coupon/couponAdd.js');
						});
					}
				]
			}
		})
		.state('app.sale.couponEdit', {
			url: '/couponEdit/{id}',
			templateUrl: 'tpl/sale/html/coupon/couponEdit.html',
			controller: 'couponEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.addProduct/modal.addProduct.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/coupon/couponEdit.js');
						});
					}
				]
			}
		})
		// 满减满送
		.state('app.sale.fullCutList', {
			url: '/fullCutList',
			templateUrl: 'tpl/sale/html/fullCut/fullCutList.html',
			controller: 'fullCutList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/fullCut/fullCutList.js']);
					}
				]
			}
		})
		.state('app.sale.fullCutAdd', {
			url: '/fullCutAdd',
			templateUrl: 'tpl/sale/html/fullCut/fullCutAdd.html',
			controller: 'fullCutAdd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/fullCut/fullCutAdd.js']);
					}
				]
			}
		})
		.state('app.sale.fullCutEdit', {
			url: '/fullCutEdit/{id}',
			templateUrl: 'tpl/sale/html/fullCut/fullCutEdit.html',
			controller: 'fullCutEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/fullCut/fullCutEdit.js']);
					}
				]
			}
		})
		// 满减满送 -- 人
		.state('app.sale.fullCutListP', {
			url: '/fullCutListP',
			templateUrl: 'tpl/sale/html/fullCutPerson/fullCutListP.html',
			controller: 'fullCutListP',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/fullCutPerson/fullCutListP.js']);
					}
				]
			}
		})
		.state('app.sale.fullCutAddP', {
			url: '/fullCutAddP',
			templateUrl: 'tpl/sale/html/fullCutPerson/fullCutAddP.html',
			controller: 'fullCutAddP',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/fullCutPerson/fullCutAddP.js']);
					}
				]
			}
		})
		.state('app.sale.fullCutEditP', {
			url: '/fullCutEditP/{id}',
			templateUrl: 'tpl/sale/html/fullCutPerson/fullCutEditP.html',
			controller: 'fullCutEditP',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/fullCutPerson/fullCutEditP.js']);
					}
				]
			}
		})
		// 首单优惠
		.state('app.sale.firstOrderList', {
			url: '/firstOrderList',
			templateUrl: 'tpl/sale/html/firstOrder/firstOrderList.html',
			controller: 'firstOrderList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/firstOrder/firstOrderList.js']);
					}
				]
			}
		})
		.state('app.sale.firstOrderAdd', {
			url: '/firstOrderAdd',
			templateUrl: 'tpl/sale/html/firstOrder/firstOrderAdd.html',
			controller: 'firstOrderAdd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/firstOrder/firstOrderAdd.js']);
					}
				]
			}
		})
		.state('app.sale.firstOrderEdit', {
			url: '/firstOrderEdit/{id}',
			templateUrl: 'tpl/sale/html/firstOrder/firstOrderEdit.html',
			controller: 'firstOrderEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/firstOrder/firstOrderEdit.js']);
					}
				]
			}
		})
		// 新用户编辑
		.state('app.sale.newUserEdit', {
			url: '/newUserEdit',
			templateUrl: 'tpl/sale/html/newUser/newUserEdit.html',
			controller: 'newUserEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/newUser/newUserEdit.js']);
					}
				]
			}
		})
		// 积分兑换产品
		.state('app.sale.integralType0', {
			url: '/integralType0',
			templateUrl: 'tpl/sale/html/integral/integralType0.html',
			controller: 'integralType0',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.exchangeProduct/modal.exchangeProduct.js',
							'tpl/base/modal/modal.hotExchange/modal.hotExchange.js',
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/integral/integralType0.js');
						});
					}
				]
			}
		})
		// 积分抵现
		.state('app.sale.integralType1', {
			url: '/integralType1',
			templateUrl: 'tpl/sale/html/integral/integralType1.html',
			controller: 'integralType1',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/integral/integralType1.js']);
					}
				]
			}
		})
		// 添加积分抵现
		.state('app.sale.exchangeIntegral', {
			url: '/exchangeIntegral',
			templateUrl: 'tpl/sale/html/integral/exchangeIntegral.html',
			controller: 'exchangeIntegral',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/integral/exchangeIntegral.js']);
					}
				]
			}
		})
		// 编辑积分抵现
		.state('app.sale.exchangeIntegralEdit', {
			url: '/exchangeIntegralEdit/{id}',
			templateUrl: 'tpl/sale/html/integral/exchangeIntegralEdit.html',
			controller: 'exchangeIntegralEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/integral/exchangeIntegralEdit.js']);
					}
				]
			}
		})
		// 添加积分兑换产品
		.state('app.sale.exchangeProduct', {
			url: '/exchangeProduct',
			templateUrl: 'tpl/sale/html/integral/exchangeProduct.html',
			controller: 'exchangeProduct',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/integral/exchangeProduct.js']);
					}
				]
			}
		})
		// 编辑积分抵现
		.state('app.sale.exchangeProductEdit', {
			url: '/exchangeProductEdit/{id}',
			templateUrl: 'tpl/sale/html/integral/exchangeProductEdit.html',
			controller: 'exchangeProductEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/integral/exchangeProductEdit.js']);
					}
				]
			}
		})
		// 小件快运
		.state('app.sale.smallExpressList', {
			url: '/smallExpressList',
			templateUrl: 'tpl/sale/html/smallExpress/smallExpressList.html',
			controller: 'smallExpressList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/smallExpress/smallExpressList.js');
						});
					}
				]
			}
		})
		.state('app.sale.smallExpressEditRule', {
			url: '/smallExpressEditRule',
			templateUrl: 'tpl/sale/html/smallExpress/smallExpressEditRule.html',
			controller: 'smallExpressEditRule',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map.connectionExpress/modal.map.js',
							'tpl/base/modal/modal.map.show/modal.map.show.js',
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/smallExpress/smallExpressEditRule.js');
						});
					}
				]
			}
		})

		.state('app.sale.smallExpressEdit', {
			url: '/smallExpressEdit/{id}',
			templateUrl: 'tpl/sale/html/smallExpress/smallExpressEdit.html',
			controller: 'smallExpressEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map.connectionExpress/modal.map.js',
							'tpl/base/modal/modal.map.show/modal.map.show.js',
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/sale/js/smallExpress/smallExpressEdit.js');
						});
					}
				]
			}
		})

		/**
		 * 接驳服务
		 */
		//接驳列表
		.state('app.sale.tranship', {
			url: '/transhipList',
			templateUrl: 'tpl/sale/html/tranship/transhipList.html',
			controller: 'transhipList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/tranship/transhipList.js']);
					}
				]
			}
		})
		//下架列表
		.state('app.sale.transhipUnshelveList', {
			url: '/transhipUnshelveList',
			templateUrl: 'tpl/sale/html/tranship/unshelveList.html',
			controller: 'transhipUnshelveList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/sale/js/tranship/unshelveList.js']);
					}
				]
			}
		})
		//新建接驳
		.state('app.sale.createTranship', {
			url: '/createTranship',
			templateUrl: 'tpl/sale/html/tranship/createTranship.html',
			controller: 'createTranship',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						// return $ocLazyLoad.load(['tpl/sale/js/tranship/createTranship.js']);
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map.connection/modal.map.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						])
						.then(function(){
							return $ocLazyLoad.load('tpl/sale/js/tranship/createTranship.js');
						})
					}
				]
			}
		})
		//编辑接驳
		.state('app.sale.editTranship', {
			url: '/editTranship/{id}',
			templateUrl: 'tpl/sale/html/tranship/editTranship.html',
			controller: 'editTranship',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map.connection/modal.map.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js'
						])
						.then(function(){
							return $ocLazyLoad.load('tpl/sale/js/tranship/editTranship.js');
						})
					}
				]
			}
		})

				/*
				 * 监控
				 * */
				.state('app.monitor', {
					url: '/monitor',
					abstract: true,
					template: '<div ui-view></div>'
				})
				// .state('app.monitor.index', {
				//     url: '/index',
				//     templateUrl: 'tpl/monitor/html/index.html',
				//     controller: 'monitorIndex',
				//     resolve: {
				//         deps: ['$ocLazyLoad',
				//             function ($ocLazyLoad) {
				//                 return $ocLazyLoad.load(['tpl/monitor/js/index.js']);
				//             }
				//         ]
				//     }
				// })
				.state('app.monitor.historyRoute', {
					url: '/historyRoute',
					templateUrl: 'tpl/monitor/html/historyRoute.html',
					controller: 'historyRoute',
					resolve: {
						deps: ['$ocLazyLoad',
							function ($ocLazyLoad) {
								return $ocLazyLoad.load('tpl/monitor/js/historyRoute.js')
							}
						]
						/*deps: ['$ocLazyLoad',
							function ($ocLazyLoad) {
								return $ocLazyLoad.load([
									'../../../bower_components/lushu/lushu.js'
								])
									.then(function(){
										return $ocLazyLoad.load('tpl/monitor/js/historyRoute.js')
									});
							}
						]*/
					}
				})
				.state('app.monitor.index', {
					url: '/index',
					templateUrl: 'tpl/monitor/html/historyRoute.html',
					controller: 'historyRoute',
					resolve: {
						deps: ['$ocLazyLoad',
							function ($ocLazyLoad) {
								return $ocLazyLoad.load('tpl/monitor/js/historyRoute.js')
							}
						]
					}
				})
				/*
				 * 公交出行
				 * */
				.state('app.monitor.busTrip', {
					url: '/busTrip',
					templateUrl: 'tpl/monitor/html/busTrip.html',
					controller: 'busTrip',
					resolve: {
						deps: ['$ocLazyLoad',
							function ($ocLazyLoad) {
								return $ocLazyLoad.load('tpl/monitor/js/busTrip.js')
							}
						]
					}
				})

		/**
		 * 设置
		 */
		.state('app.setting', {
			url: '/setting',
			abstract: true,
			template: '<div ui-view></div>'
		})
		//平台信息
		.state('app.setting.platform', {
			url: '/platform',
			abstract: true,
			template: '<div ui-view></div>'
		})

		//站点管理
		.state('app.setting.siteManage', {
			url: '/siteManage',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.setting.siteManage.privateSiteManage', {
			url: '/privateSiteManage',
			templateUrl: 'tpl/setting/html/siteManage/privateSiteManage.html',
			controller: 'privateSiteManage',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/siteManage/privateSiteManage.js']);
					}
				]
			}
		})
		.state('app.setting.siteManage.publicSiteManage', {
			url: '/publicSiteManage',
			templateUrl: 'tpl/setting/html/siteManage/publicSiteManage.html',
			controller: 'publicSiteManage',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/siteManage/publicSiteManage.js']);
					}
				]
			}
		})
		.state('app.setting.siteManage.siteAdd', {
			url: '/siteAdd',
			templateUrl: 'tpl/setting/html/siteManage/siteAdd.html',
			controller: 'siteAdd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/setting/js/siteManage/siteAdd.js');
						});
					}
				]
			}
		})

		//私有站点编辑
		.state('app.setting.siteManage.privateSiteEdit', {
			url: '/privateSiteEdit/{id}',
			templateUrl: 'tpl/setting/html/siteManage/privateSiteEdit.html',
			controller: 'privateSiteEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/setting/js/siteManage/privateSiteEdit.js');
						});
					}
				]
			}
		})

		//公有站点编辑
		.state('app.setting.siteManage.publicSiteEdit', {
			url: '/publicSiteEdit/{id}',
			templateUrl: 'tpl/setting/html/siteManage/publicSiteEdit.html',
			controller: 'publicSiteEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/siteManage/publicSiteEdit.js']);
					}
				]
			}
		})

		//私有站点查看
		.state('app.setting.siteManage.privateSiteLook', {
			url: '/privateSiteLook/{id}',
			templateUrl: 'tpl/setting/html/siteManage/privateSiteLook.html',
			controller: 'privateSiteLook',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/siteManage/privateSiteLook.js']);
					}
				]
			}
		})
		//公有站点查看
		.state('app.setting.siteManage.publicSiteLook', {
			url: '/publicSiteLook/{id}',
			templateUrl: 'tpl/setting/html/siteManage/publicSiteLook.html',
			controller: 'publicSiteLook',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/siteManage/publicSiteLook.js']);
					}
				]
			}
		})

		//公司门店站点查看
		.state('app.setting.siteManage.subStoreLook', {
			url: '/subStoreLook/{id}',
			templateUrl: 'tpl/setting/html/subStore/subStoreLook.html',
			controller: 'subStoreLook',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/subStore/subStoreLook.js']);
					}
				]
			}
		})

		//下架站点
		.state('app.setting.siteManage.offshelfSiteManage',{
			url:'/offshelfSiteManage',
			templateUrl:'tpl/setting/html/siteManage/offshelfSiteManage.html',
			controller:'offshelfSiteManage',
			resolve:{
				deps:['$ocLazyLoad',
					function($ocLazyLoad){
						return $ocLazyLoad.load(['tpl/setting/js/siteManage/offshelfSiteManage.js']);
					}
				]
			}
		})
		//下架站点查看
		.state('app.setting.siteManage.offshelfSiteLook', {
			url: '/offshelfSiteLook/{id}',
			templateUrl: 'tpl/setting/html/siteManage/offshelfSiteLook.html',
			controller: 'offshelfSiteLook',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/siteManage/offshelfSiteLook.js']);
					}
				]
			}
		})
		//门店管理
		//              .state('app.setting.subStore', {
		//                  url: '/subStore',
		//                  abstract: true,
		//                  template: '<div ui-view></div>'
		//              })
		//门店列表
		.state('app.setting.siteManage.subStoreList', {
			url: '/subStoreList',
			templateUrl: 'tpl/setting/html/subStore/subStoreList.html',
			controller: 'subStoreList',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/subStore/subStoreList.js']);
					}
				]
			}
		})
		// 添加门店
		.state('app.setting.siteManage.subStoreAdd', {
			url: '/subStoreAdd/{type}',
			templateUrl: 'tpl/setting/html/subStore/subStoreAdd.html',
			controller: 'subStoreAdd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/setting/js/subStore/subStoreAdd.js');
						});
					}
				]
			}
		})
		// 编辑门店
		.state('app.setting.siteManage.subStoreEdit', {
			url: '/subStoreEdit/{id}',
			templateUrl: 'tpl/setting/html/subStore/subStoreEdit.html',
			controller: 'subStoreEdit',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/setting/js/subStore/subStoreEdit.js');
						});
					}
				]
			}
		})


		.state('app.setting.platform.platformInfo', {
			url: '/platformInfo',
			templateUrl: 'tpl/setting/html/platform/platformInfo.html',
			controller: 'platformInfo',
			resolve: {
				deps: ['$ocLazyLoad',
					function( $ocLazyLoad ){
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/js/modal.imgCrop.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/setting/js/platform/platformInfo.js');
						});
					}
				]
			}
		})
		.state('app.setting.platform.contactInfo', {
			url: '/contactInfo',
			templateUrl: 'tpl/setting/html/platform/contactInfo.html',
			controller: 'contactInfo',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/platform/contactInfo.js']);
					}
				]
			}
		})
		// 权限管理
		.state('app.setting.authorityManage', {
			url: '/authorityManage',
			abstract: true,
			template: '<div ui-view></div>'
		})
		.state('app.setting.authorityManage.departmentManage', {
			url: '/departmentManage',
			templateUrl: 'tpl/setting/html/authorityManage/departmentManage.html',
			controller: 'departmentManage',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/authorityManage/departmentManage.js']);
					}
				]
			}
		})
		//分组信息
		.state('app.setting.authorityManage.groupInfo', {
			url: '/groupSetting',
			templateUrl: 'tpl/setting/html/groupSetting.html',
			controller: 'groupSetting',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/modal.addGroup/modal.addGroup.js',
							'tpl/base/modal/modal.groupFunc/modal.groupFunc.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/setting/js/groupSetting.js');
						});
					}
				]
			}
		})
		//角色管理
		.state('app.setting.authorityManage.roleManage', {
			url: '/roleManage',
			templateUrl: 'tpl/setting/html/authorityManage/roleManage.html',
			controller: 'roleManage',
			resolve: {
				deps: ['$ocLazyLoad',
					// function ($ocLazyLoad) {
					//     return $ocLazyLoad.load(['tpl/setting/js/authorityManage/roleManage.js']);
					// }
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.addFirmUsers/modal.addFirmUsers.js',
							'tpl/base/modal/modal.watchFirmUser/modal.watchFirmUser.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/authorityManage/roleManage.js']);
						});
					}
				]
			}
		})
		.state('app.setting.authorityManage.workerAdd', {
			url: '/workerAdd/{id}',
			templateUrl: 'tpl/setting/html/authorityManage/workerAdd.html',
			controller: 'workerAdd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/authorityManage/workerAdd.js']);
					}
				]
			}
		})
		.state('app.setting.authorityManage.memberAdd', {
			url: '/memberAdd',
			templateUrl: 'tpl/setting/html/authorityManage/memberAdd.html',
			controller: 'memberAdd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/authorityManage/memberAdd.js']);
					}
				]
			}
		})
		.state('app.setting.authorityManage.firmRoleAdd', {
			url: '/firmRoleAdd/{id}',
			templateUrl: 'tpl/setting/html/authorityManage/firmRoleAdd.html',
			controller: 'firmRoleAdd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/authorityManage/firmRoleAdd.js']);
					}
				]
			}
		})
		// 通用设置
		/*.state('app.setting.generalSetting', {
		 url: '/generalSetting',
		 templateUrl: 'tpl/setting/html/generalSetting.html',
		 controller: 'generalSetting',
		 resolve: {
		 deps: ['$ocLazyLoad',
		 function ($ocLazyLoad) {
		 return $ocLazyLoad.load([
		 'js/qiniu/js/plupload.full.min.js',
		 'js/qiniu/js/ui.js',
		 'js/qiniu/js/qiniu.js',
		 'js/qiniu/js/highlight.js',
		 'tpl/base/modal/modal.groupFunc/modal.groupFunc.js'
		 ]).then(function(){
		 return $ocLazyLoad.load('tpl/setting/js/generalSetting.js');
		 });
		 }
		 ]
		 }
		 })*/

		//参数设置
		.state('app.setting.paramSetting', {
			url: '/paramSetting',
			abstract: true,
			template: '<div ui-view></div>'
		})
		//机场快车
		.state('app.setting.paramSetting.airExpress', {
			url: '/airExpress',
			templateUrl: 'tpl/setting/html/paramSetting/airExpress.html',
			controller: 'airExpress',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/airExpress.js']);
						});
					}
				]
			}
		})
		//机场专车
		.state('app.setting.paramSetting.airSpecial', {
			url: '/airSpecial',
			templateUrl: 'tpl/setting/html/paramSetting/airSpecial.html',
			controller: 'airSpecial',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/airSpecial.js']);
						});
					}
				]
			}
		})
		//接站快车
		.state('app.setting.paramSetting.stationExpress', {
			url: '/stationExpress',
			templateUrl: 'tpl/setting/html/paramSetting/stationExpress.html',
			controller: 'stationExpress',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/stationExpress.js']);
						});
					}
				]
			}
		})
		//接站专车
		.state('app.setting.paramSetting.stationSpecial', {
			url: '/stationSpecial',
			templateUrl: 'tpl/setting/html/paramSetting/stationSpecial.html',
			controller: 'stationSpecial',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/stationSpecial.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.lineProduct', {
			url: '/lineProduct',
			templateUrl: 'tpl/setting/html/paramSetting/lineProduct.html',
			controller: 'lineProduct',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.map/modal.map.js',
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/lineProduct.js']);
						});
					}
				]
			}
		})
		// 城际参数设置
		.state('app.setting.paramSetting.busLine', {
			url: '/busLine',
			templateUrl: 'tpl/setting/html/paramSetting/busLine.html',
			controller: 'busLine',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/busLine.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.busLineSpecial', {
			url: '/busLineSpecial',
			templateUrl: 'tpl/setting/html/paramSetting/busLineSpecial.html',
			controller: 'busLineSpecial',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/busLineSpecial.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.busLineCarSharing', {
			url: '/busLineCarSharing',
			templateUrl: 'tpl/setting/html/paramSetting/busLineCarSharing.html',
			controller: 'busLineCarSharing',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/busLineCarSharing.js']);
						});
					}
				]
			}
		})
		// 和城际一样的景点参数设置
		.state('app.setting.paramSetting.scenicLine', {
			url: '/scenicLine',
			templateUrl: 'tpl/setting/html/paramSetting/scenicLine.html',
			controller: 'scenicLine',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/scenicLine.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.scenicLineSpecial', {
			url: '/scenicLineSpecial',
			templateUrl: 'tpl/setting/html/paramSetting/scenicLineSpecial.html',
			controller: 'scenicLineSpecial',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/scenicLineSpecial.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.scenicLineCarSharing', {
			url: '/scenicLineCarSharing',
			templateUrl: 'tpl/setting/html/paramSetting/scenicLineCarSharing.html',
			controller: 'scenicLineCarSharing',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/scenicLineCarSharing.js']);
						});
					}
				]
			}
		})
		// 和城际一样的校园参数设置
		.state('app.setting.paramSetting.schoolLine', {
			url: '/schoolLine',
			templateUrl: 'tpl/setting/html/paramSetting/schoolLine.html',
			controller: 'schoolLine',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/schoolLine.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.schoolLineSpecial', {
			url: '/schoolLineSpecial',
			templateUrl: 'tpl/setting/html/paramSetting/schoolLineSpecial.html',
			controller: 'schoolLineSpecial',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/schoolLineSpecial.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.schoolLineCarSharing', {
			url: '/schoolLineCarSharing',
			templateUrl: 'tpl/setting/html/paramSetting/schoolLineCarSharing.html',
			controller: 'schoolLineCarSharing',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/schoolLineCarSharing.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.workParam', {
			url: '/workParam',
			templateUrl: 'tpl/setting/html/paramSetting/workParam.html',
			controller: 'workParam',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/workParam.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.schoolParam', {
			url: '/schoolParam',
			templateUrl: 'tpl/setting/html/paramSetting/schoolParam.html',
			controller: 'schoolParam',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/schoolParam.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.tourParam', {
			url: '/tourParam',
			templateUrl: 'tpl/setting/html/paramSetting/tourParam.html',
			controller: 'tourParam',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/tourParam.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.netWorkCar', {
			url: '/netWorkCar',
			templateUrl: 'tpl/setting/html/paramSetting/netWorkCar.html',
			controller: 'netWorkCar',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'tpl/base/modal/js/modal.imgCrop.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/netWorkCar.js']);
						});
					}
				]
			}
		})
		.state('app.setting.paramSetting.taxi', {
			url: '/taxi',
			templateUrl: 'tpl/setting/html/paramSetting/taxiParam.html',
			controller: 'taxi',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.textField/modal.textField.js',
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paramSetting/taxiParam.js']);
						});
					}
				]
			}
		})
		//税务/财务
		.state('app.setting.bankCard', {
			url: '/bankCard',
			templateUrl: 'tpl/setting/html/bankCard.html',
			controller: 'bankCard',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/setting/js/bankCard.js']);
					}
				]
			}
		})
		// 设置里面的修改密码
		.state('app.setting.resetPwd', {
			url: '/resetPwd',
			templateUrl: 'tpl/setting/html/resetPwd.html',
			controller: 'resetPwd',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load(['tpl/base/resetPwd/resetPwd.js']);
					}
				]
			}
		})


		//税务/财务绑定银行卡
		.state('app.setting.bindBankCard', {
			url: '/bindBankCard',
			templateUrl: 'tpl/setting/html/bindBankCard.html',
			controller: 'bindBankCard',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/setting/js/bindBankCard.js'
						]);

					}
				]
			}
		})
		//联系信息
		.state('app.setting.contact', {
			url: '/contact',
			templateUrl: 'tpl/setting/html/contact.html'
		})

		//支付设置
		.state('app.setting.paymentSetting', {
			url: '/paymentSetting',
			abstract: true,
			template: '<div ui-view></div>'
		})
		//支付设置--微信设置
		.state('app.setting.paymentSetting.weChatPayment', {
			url: '/weChatPayment',
			templateUrl: 'tpl/setting/html/paymentSetting/weChatPayment.html',
			controller: 'weChatPayment',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/base/modal/modal.weChatPayment/modal.weChatPayment.js'
						]).then(function(){
							return $ocLazyLoad.load(['tpl/setting/js/paymentSetting/weChatPayment.js']);
						});
					}
				]
			}
		})
		//支付设置--手动验票设置
		.state('app.setting.paymentSetting.generalSetting', {
			url: '/generalSetting',
			templateUrl: 'tpl/setting/html/paymentSetting/generalSetting.html',
			controller: 'generalSetting',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/modal.groupFunc/modal.groupFunc.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/setting/js/paymentSetting/generalSetting.js');
						});
					}
				]
			}
		})


		//分销信息
		.state('app.setting.distInfo', {
			url: '/distInfo',
			templateUrl: 'tpl/setting/html/distInfo.html'
		})
		//退货维权设置
		.state('app.setting.return', {
			url: '/return',
			templateUrl: 'tpl/setting/html/return.html'
		})
		//管理人员
		.state('app.setting.people', {
			url: '/people',
			templateUrl: 'tpl/setting/html/people.html'
		})
		//添加管理人员
		.state('app.setting.addPeople', {
			url: '/addPeople',
			templateUrl: 'tpl/setting/html/addPeople.html'
		})
		//设置支付交易
		.state('app.setting.payTrade', {
			url: '/payTrade',
			templateUrl: 'tpl/setting/html/payTrade.html'
		})
		//消费保障
		.state('app.setting.consumer', {
			url: '/consumer',
			templateUrl: 'tpl/setting/html/consumer.html'
		})
		//通用设置
		.state('app.setting.generalSet', {
			url: '/generalSet',
			templateUrl: 'tpl/setting/html/generalSet.html'
		})
		//分组信息
		.state('app.setting.groupInfo', {
			url: '/groupSetting',
			templateUrl: 'tpl/setting/html/groupSetting.html',
			controller: 'groupSetting',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'js/qiniu/js/plupload.full.min.js',
							'js/qiniu/js/ui.js',
							'js/qiniu/js/qiniu.js',
							'js/qiniu/js/highlight.js',
							'tpl/base/modal/modal.addGroup/modal.addGroup.js',
							'tpl/base/modal/modal.groupFunc/modal.groupFunc.js'
						]).then(function(){
							return $ocLazyLoad.load('tpl/setting/js/groupSetting.js');
						});
					}
				]
			}
		})
		.state('app.mapDemo', {
			url: '/mapDemo/{licensePlatProvince}/{licensePlat}/{day}',
			templateUrl: 'tpl/demo.html',
			controller: 'mapDemo',
			resolve: {
				deps: ['$ocLazyLoad',
					function ($ocLazyLoad) {
						return $ocLazyLoad.load([
							'tpl/demo.js'
						]);

					}
				]
			}
		})
		/**
		 * 连接
		 */
		.state('app.orange', {
			url: '/orange',
			abstract: true,
			template: '<div ui-view></div>'
		})
	}
]);
// import index from './views/index';
// import undefinedPage from './views/404';
// import mapIndex from './views/map/index';
// import mapBase from './views/map/base';
// import mapSearch from './views/map/search';
//
// // 异步引用
// // component: (resolve) => require(['./views/map/base.vue'], resolve)
// const routers = [
//     {
//         path: '/',
// 		redirect: '/index'
//     },
//     {
// 		path: '/index',
// 		name: 'index',
// 		meta: {
// 			title: '首页'
// 		},
// 		component: index
//     },
//     {
//         path: '/map',
// 		name: 'map',
// 		meta: {
// 			title: '地图'
// 		},
// 		component: mapIndex,
// 		children: [
// 			{
// 				path: '/',
// 				redirect: '/map/base'
// 			},
// 			{
// 				path: '/map/base',
// 				component: mapBase
// 			},
// 			{
// 				path: '/map/search',
// 				component: mapSearch
// 			}
// 		]
//     },
//     {
//         path: '*',
//         component: undefinedPage
//     }
// ];
import baseRouters from './routes/base';
import mapRoutes from './routes/map';
import undefinedRoutes from './routes/404';
import trainAnimRoutes from './routes/trainAnim';
import combinationRoutes from './routes/combination';

let routerArr = [
	baseRouters,
	mapRoutes,
	undefinedRoutes,
	trainAnimRoutes,
  combinationRoutes
];

let routers = [];

for (let i = 0; i < routerArr.length; i++){
	routers = routers.concat(routerArr[i])
}

export default routers

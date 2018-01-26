import index from './views/index';
import mapBase from './views/map/base';
import undefinedPage from './views/404';

// 异步引用
// component: (resolve) => require(['./views/map/base.vue'], resolve)
const routers = [
    {
        path: '/',
		redirect: '/index'
    },
    {
		path: '/index',
		meta: {
			title: '首页'
		},
		component: index
    },
    {
        path: '/map',
		meta: {
			title: '地图'
		},
		component: mapBase
    },
    {
        path: '*',
        component: undefinedPage
    }
];
export default routers;
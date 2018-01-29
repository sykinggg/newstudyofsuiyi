import index from './views/index';
import undefinedPage from './views/404';
import mapIndex from './views/map/index';
import mapBase from './views/map/base';
import mapSearch from './views/map/search';

// 异步引用
// component: (resolve) => require(['./views/map/base.vue'], resolve)
const routers = [
    {
        path: '/',
		redirect: '/index'
    },
    {
		path: '/index',
		name: 'index',
		meta: {
			title: '首页'
		},
		component: index
    },
    {
        path: '/map',
		name: 'map',
		meta: {
			title: '地图'
		},
		component: mapIndex,
		children: [
			{
				path: '/',
				redirect: '/map/base'
			},
			{
				path: '/map/base',
				component: mapBase
			},
			{
				path: '/map/search',
				component: mapSearch
			}
		]
    },
    {
        path: '*',
        component: undefinedPage
    }
];
export default routers;
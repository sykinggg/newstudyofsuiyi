import mapIndex from '../views/map/index';
import mapBase from '../views/map/base';
import mapSearch from '../views/map/search';

// const mapIndex = () => import('./views/map/index')
// const mapBase = () => import('./views/map/base')
// const mapSearch = () => import('./views/map/search')

const mapRoutes = [
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
];
export default mapRoutes;
import home from '../component/home';
import about from '../component/about';
import topics from '../component/topics';
import map from '../component/map/map'

const router = [
	{
		link: '/',
		link_name: 'home',
		component: home
	},
	{
		link: '/about',
		link_name: 'about',
		component: about
	},
	{
		link: '/topics',
		link_name: 'topics',
		component: topics
	},
	{
		link: '/map/aMap',
		link_name: 'map',
		component: map
	}
];

export default router;
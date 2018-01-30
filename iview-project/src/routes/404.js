import undefinedPage from '../views/404';
// const undefinedPage = () => import('./views/404')
const undefinedRoutes = [
	{
		path: '*',
		component: undefinedPage
	}
];

export default undefinedRoutes;
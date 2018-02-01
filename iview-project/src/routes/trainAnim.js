
import trainAnimIndex from '../views/trainAnim/index';
import trainAnimBase from '../views/trainAnim/base';
const trainAnimRoutes = [
	{
		path: '/trainAnim',
		name: 'trainAnim',
		meta: {
			title: '过渡&动画'
		},
		component: trainAnimIndex,
		children: [
			{
				path: '/',
				redirect: '/trainAnim/base'
			},
			{
				path: '/trainAnim/base',
				component: trainAnimBase
			},
		]
	}
];
export default trainAnimRoutes
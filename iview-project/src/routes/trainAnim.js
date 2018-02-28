
import trainAnimIndex from '../views/trainAnim/index';
import trainAnimBase from '../views/trainAnim/base';
import trainAnimState from '../views/trainAnim/stateTransition';
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
      {
        path: '/trainAnim/state',
        component: trainAnimState
      }
		]
	}
];
export default trainAnimRoutes

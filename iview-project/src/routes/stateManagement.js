import base from '../views/stateManagement/base';
import vuex from '../views/stateManagement/vuex';
import describe from '../views/stateManagement/describe';

const vuexRoutes = [
  {
    path: '/stateManagement',
    name: 'stateManagement',
    meta: {
      title: '状态管理'
    },
    component: base,
    children: [
      {
        path: '/',
        redirect: '/stateManagement/vuex'
      },
      {
        path: '/stateManagement/vuex',
        component: vuex
      },
      {
        path: '/stateManagement/describe',
        component: describe
      }
    ]
  }
];

export default vuexRoutes

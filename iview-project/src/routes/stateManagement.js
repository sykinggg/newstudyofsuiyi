import base from '../views/stateManagement/base';
import vuex from '../views/stateManagement/vuex';
import describe from '../views/stateManagement/describe';
import state from '../views/stateManagement/state';
import getter from '../views/stateManagement/getter';
import mutation from '../views/stateManagement/mutation';
import action from '../views/stateManagement/action';
import module from '../views/stateManagement/module';

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
      },
      {
        path: '/stateManagement/state',
        component: state
      },
      {
        path: '/stateManagement/getter',
        component: getter
      },
      {
        path: '/stateManagement/mutation',
        component: mutation
      },
      {
        path: '/stateManagement/action',
        component: action
      },
      {
        path: '/stateManagement/module',
        component: module
      }
    ]
  }
];

export default vuexRoutes

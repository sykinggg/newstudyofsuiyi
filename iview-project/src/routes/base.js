import index from '../views/index'
import baseIndex from '../views/base/index'
import bTemplate from '../views/base/template'
import computationalAttr from '../views/base/computationalAttr'
import styleComponent from '../views/base/style'
import condition from '../views/base/condition'
import list from '../views/base/list'
import functionComponent from '../views/base/function'
import formComponent from '../views/base/form';
import componentVue from '../views/base/componentVue';
import style from '../views/base/style'
// const index = () => import('./views/index')
// const template = () => import('./views/base/template')

const baseRouters = [
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
		path: '/base',
		meta: {
			title: '基础'
		},
		component: baseIndex,
		children: [
			{
				path: '/',
				redirect: '/base/template'
			},
			{
				path: '/base/template',
				component: bTemplate
			},
			{
				path: '/base/computationalAttr',
				component: computationalAttr
			},
			{
				path: '/base/style',
				component: styleComponent
			},
			{
				path: '/base/condition',
				component: condition
			},
			{
				path: '/base/list',
				component: list
			},
			{
				path: '/base/function',
				component: functionComponent
			},
			{
				path: '/base/form',
				component: formComponent
			},
			{
				path: '/base/componentVue',
				component: componentVue
			}
		]
	}
];

export default baseRouters
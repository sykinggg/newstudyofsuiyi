import React, { Component } from 'react';

/**
 * createStore
 * 		创建一个拥有应用程序完整状态树
 * 	Arguments
 * 		reduce: function
 * 			给定当前状态树和要处理的动作的返回下一个状态树的还原函数
 * 		preloadedState: any
 * 			初始状态
 * 			可以选择将其指定为通用应用程序中的服务器状态，或恢复先前序列化的用户会话
 * 			如果使用联合减速器生成减速器，则必须是与传递给它的键具有相同形状的普通对象
 * 			可以自由地通过减速器可以理解的任何事情
 * 		enhancer: function
 * 			可以选择指定它来增强具有第三方功能 applyMiddleware()
 * 	Returns
 * 		Store:
 * 			一个持有应用程序完整状态的对象
 * 			改变其状态的唯一方法是通过调度行动
 * 			可以订阅其状态更改以更新UI
 * */

import { createStore } from 'redux'

function todo(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat([action.text]);
		default:
			return state
	}
}

let store = createStore(todo, ['use Redux']);

store.dispatch({
	type: 'ADD_TODO',
	text: 'Read the docs'
});

console.log(store.getState());

class reduxCreateStore extends Component{
	render() {
		return(
			<div>reduxCreateStore</div>
		)
	}
}

export default reduxCreateStore
import React, { Component } from 'react';

/**
 * Store（和vuex特别像）
 * 		通过同步或者异步的事件来改变状态值
 * methods:
 * 		*getState()
 * 			返回应用程序的当前状态树
 * 			Returns
 * 			应用程序的当前状态树
 * 		*dispatch(action)
 * 			发送一个动作
 * 			触发状态改变的唯一渠道
 * 			Arguments
 * 				action
 * 				动作必须有一个类型字段来指示正在执行的动作的类型
 * 				类型可以定义为常量并从另一个模块导入
 * 				因为字符串是可序列化的，所以最好使用字符串而不是符号
 * 			returns
 * 				object
 * */

import { createStore } from 'redux';

function todo(state = [], action) {
	switch (action.type) {
		case 'ADD_TODO':
			return state.concat([action.text]);
		default:
			return state
	}
}

let store = createStore(todo, ['Use Redux']);

function addTodo(text) {
	return {
		type: 'ADD_TODO',
		text: text
	}
}

let s1 = store.dispatch(addTodo('Read the docs'));
let s2 = store.dispatch(addTodo('Read about the middleware'));

console.log(s1);
//	{type: "ADD_TODO", text: "Read the docs"}
console.log(s2);
//	{type: "ADD_TODO", text: "Read about the middleware"}
console.log(store);
//	{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
console.log(store.getState());
//	["Use Redux", "Read the docs", "Read about the middleware"]

/**
 * subscribe(listener)
 * 		添加了一个更改监听器
 * 		将在任何时候调用动作时被调用，并且状态树的某些部分可能已经发生了变化
 * 		可以调用getstate（）来读取回调中的当前状态树
 * 	就是类似于angular5中的rxJs
 * 		Arguments
 * 			调度动作后调用的回调，状态树可能已经改变
 * 		Returns
 * 			一个取消订阅更改侦听器的函数
 * */

function select(state) {
	return state;
}

let currentValue;
function handleChange() {
	let previousValue = currentValue;
	currentValue = select(store.getState());

	if(previousValue != currentValue) {
		console.log(previousValue);
		//	undefined
		console.log(currentValue);
		//	["Use Redux", "Read the docs", "Read about the middleware"]
	}
}

let unsubscribe = store.subscribe(handleChange);
unsubscribe();

class reduxStore extends Component{
	handleChange = handleChange;
	render() {
		return(
			<div>
				<p>reduxStore</p>
				<button onClick={this.handleChange}>handleChange</button>
			</div>
		)
	}
}

/**
 * replaceReducer(nextReducer)
 * 		替换store当前使用的dispath来计算状态
 * 	Arguments
 * 		nextReducer: Function
 * */

export default reduxStore;
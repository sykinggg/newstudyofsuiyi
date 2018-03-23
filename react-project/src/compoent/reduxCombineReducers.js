import React, { Component } from 'react';
import { createStore } from 'redux';

import reducer from './reducers/index';

let store = createStore(reducer);
console.log(store.getState());
/**
 * {todo: Array(0), counter: 0}
 * 	counter:0
 * 	todo:[]
 * */

store.dispatch({
	type: 'ADD_TODO',
	text: 'Use Redux'
});
console.log(store.getState());

/**
 * {todo: Array(1), counter: 0}
 * 	counter: 0
 * 	todo:['Use Redux']
 * */

store.dispatch({
	type: 'DECREMENT'
});

console.log(store.getState());
/**
 * {todo: Array(1), counter: -1}
 * */

/**
 * combineReducers
 * 		逻辑代码分离
 * */

class reduxCombineReducers extends Component{
	render() {
		return(
			<div>
				<p>reduxCombineReducers</p>
			</div>
		)
	}
}

export default reduxCombineReducers;
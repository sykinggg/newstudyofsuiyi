import React, { Component } from 'react';

/**
 * applyMiddleware
 * 	中间件是用自定义功能扩展Reduce的建议方法
 * 	中间件最常见的用例是支持异步操作，没有太多的样板代码或依赖于像rx这样的库
 * 	通过让你派发异步操作和正常操作来实现这一点
 * 	redux-thunk允许动作创建者通过调度函数来反转控制
 * 		Arguments
 * 			符合redux中间件API的函数
 * 			签名格式
 * 			({ getState, dispatch }) => next => action
 * 		Returns
 * 			一个应用给定中间件的存储增强器
 * 			存储增强器签名是createstore => createstore'
 * 			简单的方法是将其作为最后一个增强器参数传递给createstore（）
 * */

import { createStore, applyMiddleware } from 'redux'
import todo from './reducers/todos';

function logger({ getState }) {
	return next => action => {

		console.log(next);
		/**ƒ dispatch(action) {
			if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /!* default *!/])(action)) {
				throw new Error('Actions must be plain objects. ' + 'Use custom middlewar…*/

		console.log('will dispatch', action)
		//	will dispatch {type: "ADD_TODO", text: "Understand the middleware"}

		let returnValue = next(action)

		console.log('state after dispatch', getState())
		//	state after dispatch (2) ["Use Redux", "Understand the middleware"]

		return returnValue
	}
}

let store = createStore(
	todo,
	['Use Redux'],
	applyMiddleware(logger)
)

store.dispatch({
	type: 'ADD_TODO',
	text: 'Understand the middleware'
})

console.log(store.getState());
/**
 * 如果中间件有返回值
 * ["Use Redux", "Understand the middleware"]
 * 如果中间件没有返回值
 *  ["Use Redux", "Understand the middleware"]
 * */

class reduxApplyMiddleware extends Component{
	render(){
		return(
			<div>
				<p>reduxApplyMiddleware</p>
			</div>
		)
	}
}

export default reduxApplyMiddleware
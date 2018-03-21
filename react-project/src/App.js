import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tick from './compoent/tick';
import Event from './compoent/event';
import LoginControl from './compoent/loginControl';
import Inline from './compoent/inline';
import PreventRender from './compoent/preventRender';
import ListKey from './compoent/listKey';
import Form from './compoent/form';
import State1 from './compoent/state1_calculator';
import State2 from './compoent/state2_calculator';
import State1_2 from './compoent/state1_2';
import Reusable from './compoent/reusableComponent';
//  原始dom
/*<div className="App">P
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h1 className="App-title">Welcome to React</h1>
	</header>
	<p className="App-intro">Pre
		To get started, edit <code>src/App.js</code> and save to reload.
	</p>
</div>*/
//  从component中获取的组件是第一个字母大写并且是单标签
class App extends Component {
    render() {
        return (
            <div>
				<p>hello World</p>
                <Tick />
                <Event />
                <LoginControl />
                <Inline unreadMessages={'asdasd'} />
                <PreventRender />
                <ListKey />
                <Form />
				<State1 />
                <State2 scale="c" />
                <State1_2 />
				<Reusable />
            </div>
        );
    }
}

export default App;

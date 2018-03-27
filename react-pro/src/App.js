import React, { Component } from 'react';
import logo from './logo.svg';
import './App.less';
import Body from './component/body';
import Footer from './component/footer';
import router from './dataFormat/AppRouter';
/**<div className="App">
 <header className="App-header">
 <img src={logo} className="App-logo" alt="logo" />
 <h1 className="App-title">Welcome to React</h1>
 </header>
 <p className="App-intro">
 To get started, edit <code>src/App.js</code> and save to reload.
 </p>
 </div>*/

class App extends Component {
    constructor() {
        super();
        this.state = {
            router,
			navClassName: 'ui pointing secondary menu',
			bodyClassName: 'ui segment active tab'
        }
    }
    render() {
        return (
            <div>
                <Body config={this.state}/>
                <Footer/>
            </div>
        );
    }
}

export default App;

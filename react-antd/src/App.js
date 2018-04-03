import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import logo from './logo.svg';
import './App.less';
import Body from './component/body';
import Footer from './component/footer';
import router from './dataFormat/AppRouter';

import { Menu, Breadcrumb, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

//	地址跳转
class LinkJump extends React.Component{
	render(){
		const {props} = this.props;

		return(
			<NavLink className="item" exact to={props.link} >{props.link_name}</NavLink>
		)
	}
}

//	内容展示
class LinkContent extends React.Component{
	render(){
		const {props} = this.props;

		return(
			<Route exact path={props.link} component={props.component} />
		)
	}
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            router
        }

		this.linkJumpDom = this.state.router.map((item, key) => <LinkJump key={key} props={item} />);
		this.linkContentDom = this.state.router.map((item, key) => <LinkContent key={key} props={item} />);
    }
    render() {
        return (
			<Router>
				<div className="ant-layout-aside">
					<aside className="ant-layout-sider">
						<div className="ant-layout-logo hide"></div>
						{this.linkJumpDom}
					</aside>
					<div className="ant-layout-main">
						{this.linkContentDom}
					</div>
					<Footer/>
				</div>
			</Router>
        );
    }
}

export default App;

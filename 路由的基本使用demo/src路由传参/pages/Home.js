import React, { Component } from 'react'
import {  Route, Redirect, Switch } from "react-router-dom"
import HomeNews from './HomeNews';
import HomeMsg from './HomeMsg'
import MyNavLink from "../components/MyNavLink"


export default class Home extends Component {
	
	render() {

		return (
			<div><h2>Home组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<MyNavLink to="/home/news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink to="/home/message">Message</MyNavLink>
						</li>
					</ul>
					<Switch>
						<Route path="/home/news" component={HomeNews}/>
						<Route path="/home/message" component={HomeMsg} />
						<Redirect to="/home/news"/>
					</Switch>
				</div>
			</div>
		)
	}
}

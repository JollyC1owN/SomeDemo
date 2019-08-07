import React, { Component } from 'react'
import { NavLink, Route, Redirect, Switch } from "react-router-dom"
import HomeNews from './HomeNews';
import HomeMsg from './HomeMsg';

export default class Home extends Component {
	render() {
		return (
			<div><h2>Home组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<NavLink className="list-group-item" to="/home/news">News</NavLink>
						</li>
						<li>
							<NavLink className="list-group-item" to="/home/message">Message</NavLink>
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

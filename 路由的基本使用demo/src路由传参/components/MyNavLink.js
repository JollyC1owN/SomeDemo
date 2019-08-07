import React, { Component } from 'react'
		import { NavLink} from "react-router-dom"

export default class MyNavLink extends Component {
	render() {
		let allObj =this.props 
		return (
			//replace:能够解决，一直点击同一个路由组件NavLink，
			//控制台出现警告：tiny-warning.esm.js:12 Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack
			//浏览器不会将同样的路径push到stack里
			<NavLink className="list-group-item" {...allObj} replace></NavLink>
		)
	}
}

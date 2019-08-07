import React, { Component } from 'react'
import PubSub from "pubsub-js"
import Item from "../item/Item"


export default class List extends Component {
	state = {
		isFirst: true,
		isLoading: false,
		users: [],
		errMsg: ""
	}
	componentDidMount() {
		PubSub.subscribe("updataListState", (msg, { isFirst, isLoading, users, errMsg}) => {
			this.setState({ isFirst, isLoading, users, errMsg })
		 })
	}
	render() {
		let { isFirst, isLoading, users, errMsg } = this.state
		if (isFirst) {
			return <h2>输入关键字进行搜索</h2>
		} else if (isLoading) {
			return <h2>Loading...</h2>
		} else if (errMsg) {
			return <h2>{errMsg}</h2>
		} else {
			return (
				<div className="row">
					{
						users.map((user) => {
							return <Item key={user.userName} user={user}></Item>
						})
					}
				</div>
			)
		}
	}
}


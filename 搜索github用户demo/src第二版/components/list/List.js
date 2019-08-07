import React, { Component } from 'react'
import axios from "axios"
import Item from "../item/Item"


export default class List extends Component {
	state = {
		isFirst: true,
		isLoading: false,
		users: [],
		errMsg: ""
	}
	//接受新的props {keyWord: "xxxx"}
	componentWillReceiveProps({ keyWord }) {
		this.setState({
			isFirst: false,
			isLoading: true,
			users: [],
			errMsg: ""
		})
		const url = `https://api.github.com/search/users?q=${keyWord}`
		axios.get(url)
			.then((result) => {
				let users = result.data.items.map((item) => {
					return {
						userAvataUrl: item.avatar_url,
						userRepoUrl: item.html_url,
						userName: item.login
					}
				})
				this.setState({
					isFirst: false,
					isLoading: false,
					users,
					errMsg: ""
				})
			})
			.catch((err) => {
				this.setState({
					isFirst: false,
					isLoading: false,
					users: [],
					errMsg: err.toString()
				})
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


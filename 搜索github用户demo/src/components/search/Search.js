import React, { Component } from 'react'
import axios from "axios"
import PubSub from "pubsub-js"

export default class Search extends Component {
	search = () => { 
		PubSub.publish("userListState", { isFirst: false, isLoading: true, users: [], errMsg: ""})
		let keyWord = this.refs.userText.value
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
				PubSub.publish("userListState", { isFirst: false, isLoading: false, users, errMsg: "" })
			})
			.catch((err) => { 
				PubSub.publish("userListState", { isFirst: false, isLoading: false, users: [], errMsg: err.toString() })
			})
	}
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Search Github Users</h3>
				<div>
					<input type="text" placeholder="enter the name you search" ref="userText" />
					<button onClick={this.search}>Search</button>
				</div>
			</section>
		)
	}
}

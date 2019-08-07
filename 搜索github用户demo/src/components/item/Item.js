import React, { Component } from 'react'
import './Item.css';
export default class Item extends Component {
	render() {
		let { userAvataUrl, userRepoUrl, userName} =this.props
		return (
			<div className="card">
				<a href={userRepoUrl} target="_blank" rel="noopener noreferrer">
					<img src={userAvataUrl} style={{ width: "100px" }} alt={ userName } />
				</a>
				<p className="card-text">{userName}</p>
			</div>
		)
	}
}


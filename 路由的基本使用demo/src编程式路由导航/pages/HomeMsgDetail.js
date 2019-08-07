import React, { Component } from 'react'

export default class HomeMsgDetail extends Component {
	state = {
		messageDetails : [
			{ id: 1, title: 'Message001', content: '我爱你, 中国' },
			{ id: 2, title: 'Message002', content: '我爱你, 老婆' },
			{ id: 3, title: 'Message003', content: '我爱你, 孩子' },
			{ id: 4, title: 'Message004', content: '我爱你, tomb' }
		]
	}

	render() {
		let { id } = this.props.match.params
		let { messageDetails } = this.state
		
		let data = messageDetails.find((item) => { 
			// item.id是number    id是字符串类型
			return item.id === id*1
		})
		
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{data.title}</li>
				<li>CONTENT:{data.content}</li>
			</ul>
		)
	}
}

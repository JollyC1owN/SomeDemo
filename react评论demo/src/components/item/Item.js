import React, { Component } from 'react'
import './Item.css';
export default class Item extends Component {
	delete = (userId) => { 
		let { delComment,userName } = this.props
		if (window.confirm(`确认要删除${userName}的评论吗？`)) {
			//1.第一种获取方式：获取要删除的评论的id
			// let { userId } = this.props

			

			//2.拿id去删除App中的state中的数据
			delComment(userId)
		 }

	}
	render() {
		let { userName, userContent,userId } = this.props
		return (
			<li className="list-group-item">
				<div className="handle">
					{/*第一种删除方式<a href="#1" onClick={this.delete}>删除</a>
							第二种在onClick事件中传一个箭头函数，返回值是函数的调用，在点击时就把userId传入，不用再单独获取
				*/}
					<a href="#1" onClick={() => { return this.delete(userId)}}>删除</a>
					</div>
				<p className="user"><span>{userName}</span><span>说:</span></p>
				<p className="centence">{userContent}</p>
				</li>	
		)
	}
}

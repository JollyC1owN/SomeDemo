import React, { Component } from 'react'
import { Link,Switch,Route } from "react-router-dom"
import HomeMsgDetail from './HomeMsgDetail';

export default class HomeMsg extends Component {
	state = {
		messages: []
	}
	componentDidMount() {
		this.timerid=setTimeout(() => { 
			this.setState({
				messages: [
					{ mid: 1, content: "message001" },
					{ mid: 2, content: "message002" },
					{ mid: 3, content: "message003" },
					{ mid: 4, content: "message004" }
				]
			})
		},2000)
	}
	componentWillUnmount() {
		clearTimeout(this.timerid)
	}
	
	render() {
		let { messages} =this.state
		return (
			<div>
				<ul>
					{
						messages.map((item) => { 
							return (
								<li key={item.mid}>
									<Link to={`/home/message/detail/${item.mid}`}>{item.content}</Link>&nbsp;&nbsp;
                      <button>push查看</button>&nbsp;&nbsp;
                      <button>replace查看</button>
								</li>
							)
						})
					}
				</ul>
				<button>回退</button>
				<hr />
				<Switch>
					<Route path="/home/message/detail/:id" component={HomeMsgDetail}/>
				</Switch>
			</div>
		)
	}
}

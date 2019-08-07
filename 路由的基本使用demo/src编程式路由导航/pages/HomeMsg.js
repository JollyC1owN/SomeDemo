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
	showPath = (path) => { 
		this.props.history.push(path)
	}	
	replacePath = (path) => { 
		this.props.history.replace(path)
	}
	handlerGoBack = () => { 
		this.props.history.goBack()
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
                      <button onClick={() => { return this.showPath(`/home/message/detail/${item.mid}`)}}>push查看</button>&nbsp;&nbsp;
                      <button onClick={() => { return this.replacePath(`/home/message/detail/${item.mid}`) }}>replace查看</button>
								</li>
							)
						})
					}
				</ul>
				<button onClick={this.handlerGoBack}>回退</button>
				<hr />
				<Switch>
					<Route path="/home/message/detail/:id" component={HomeMsgDetail}/>
				</Switch>
			</div>
		)
	}
}

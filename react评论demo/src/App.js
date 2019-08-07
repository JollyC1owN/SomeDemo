import React, { Component } from 'react'
import Add from "./components/add/Add"
import List from "./components/list/List"

export default class App extends Component {

  state = {
    comments: [
      // {userId:"001",userName:"tomb",userContent:"reactGoGoGO" },
      // {userId:"002",userName:"jolly",userContent:"react666666" },
      // {userId:"003",userName:"clown",userContent:"react难难难" },
  ]}
  addComment = (commentObj) => {
    let comments = [...this.state.comments]
    comments.unshift(commentObj)
    this.setState({comments})
  }
  delComment = (userId) => { 
    let comments = [...this.state.comments]
    comments.forEach((item,index) => {
      if (item.userId === userId) { 
        //匹配成功，删除匹配到的对象
        comments.splice(index,1)
      }
    })
    //更新状态
    this.setState({comments})
  }
  render() {
    let { comments} = this.state
		return (
        <div>
          <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>
          </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={comments} delComment={this.delComment}/>
        </div>
        </div>
		)
	}
}

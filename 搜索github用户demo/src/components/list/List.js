import React, {Component} from 'react'
import Item from "../item/Item"
import PubSub from "pubsub-js"

export default class List extends Component {
  state = {
    isFirst: true,
    isLoading: false,
    users: [],
    errMsg: ""
  }

  componentDidMount() {
    PubSub.subscribe("userListState", (msg, {isFirst, isLoading, users, errMsg}) => {
      this.setState({isFirst, isLoading, users, errMsg})
    })
  }

  render() {
    let {isFirst, isLoading, users, errMsg} = this.state
    if (isFirst) {
      return <h2>输入内容来搜索</h2>
    } else if (isLoading) {
      return <h2>Loading...</h2>
    } else if (errMsg) {
      return <h2>errMsg</h2>
    } else {
      return (
        <div className="row">
          {
            users.map((item, index) => {
              return <Item key={index} {...item}/>
            })
          }
        </div>
      )
    }
  }
}

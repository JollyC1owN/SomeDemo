import React, { Component } from 'react'
import Search from "./components/search/Search"
import List from "./components/list/List"

export default class App extends Component {
  state = {
    keyWord: "" //当前keyWord是供list组件使用  
  }
  setKeyWord = (keyWord) => {
    this.setState({
      keyWord
    })
  }
  render() {
    return (
      <div className="container">
        <Search setKeyWord={this.setKeyWord} />
        <List keyWord={this.state.keyWord}/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import axios from "axios"
export default class App extends Component {
  state = {
    isLoading: true,
    repoName: "",
    repoUrl: "",
    errMsg: ""
  }
  keyWord = "v"
  async  componentDidMount() {
    const url = `https://api.github.com/search/repositories?q=${this.keyWord}&sort=stars`
    try {
      let response = await axios.get(url)
      let repoInfo = response.data.items[0]
      this.setState({
        isLoading: false,
        repoName: repoInfo.name,
        repoUrl: repoInfo.html_url,
        errMsg: ""
      })
    } catch (err) {
      this.setState({
        isLoading: false,
        repoName: "",
        repoUrl: "",
        errMsg: err.toString()
      })
    }
  }
  render() {
    let { isLoading, repoName, repoUrl, errMsg } = this.state
    if (isLoading) {
      return <h2>Loading...</h2>
    } else if (errMsg) {
      return <h2>{errMsg}</h2>
    } else {
      return <h2>gitHub上包含【{this.keyWord}】关键字的所有仓库中，点赞数量最多的是<a href={repoUrl}>{repoName}</a></h2>

    }
  }
}

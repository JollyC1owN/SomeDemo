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
  //推荐使用 .then .catch 不用再让生命周期函数成为一个async函数
  componentDidMount() {
    //发送请求的地址
    const url = `https://api.github.com/search/repositories?q=${this.keyWord}&sort=stars`
    //axios的请求
    axios.get(url)
      .then(
        //请求成功后返回是一个promise对象
        (response) => {
          console.log(response)//---->promise对象
          let repoInfo = response.data.items[0] //---->promise对象中的data对象保存的是请求来需要的数据，对象中【items】对应的属性值是一个数组
          console.log(repoInfo)
          //修改state状态值
          this.setState({
            isLoading: false,
            repoName: repoInfo.name,
            repoUrl: repoInfo.html_url,
            errMsg: ""
          })
        }
    )
      //当有错误时
      .catch((err) => {
        console.log(err,typeof err)
        this.setState({
          isLoading: false,
          repoName: "",
          repoUrl: "",
          //返回的错误是一个对象类型，调用toString方法---->在react中已经写好了这个方法将错误中的信息解析出来
          //不能直接传递err，会产生报错
          errMsg: err.toString()
        })
      })
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

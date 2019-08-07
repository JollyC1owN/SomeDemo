import React, { Component } from 'react'
// import { Link, Route } from "react-router-dom"
import { NavLink, Route, Redirect, Switch } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生的html中用a标签实现页面的切换，页面刷新，要准备多个页面 
              <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a>*/}

              {/*用react路由实现切换--------路由切换*/}
              <NavLink className="list-group-item" to="/about" >About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*<h3>我是Home的内容</h3>
                <h3>我是About的内容</h3>*/}
                {/*定义(注册)路由与组件的对应关系 ，写switch后，找到匹配的路由后，就不会再往下寻找*/}
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

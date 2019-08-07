import React, { Component } from 'react'
// import { Link, Route } from "react-router-dom"
import {  Route, Redirect, Switch } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import MyNavLink from './components/MyNavLink';



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
              {/**<a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
              <MyNavLink  to="/about">About</MyNavLink>
              <MyNavLink  to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/**<h3>我是Home的内容</h3> */}
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Redirect to="/home" />
                </Switch>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

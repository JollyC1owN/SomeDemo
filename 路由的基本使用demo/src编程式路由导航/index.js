import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//两种路由常用这个 ---->HashRouter----哈西路由,
//BrowserRouter----浏览器路由,使用这个时，html中路径使用绝对路径（%PUBLIC_URL%） 	或者使用/css/index.css；不加 . 则在public开始查找
// import {HashRouter,BrowserRouter } from "react-router-dom"
import { HashRouter } from "react-router-dom"

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

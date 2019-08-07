import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//两种路由HashRouter,BrowserRouter 
import {HashRouter,BrowserRouter } from "react-router-dom"

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Info from './components/Info';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/speakers' element={<Info/>}/>
    </Routes>
  </Router>,
    document.getElementById('root')
);
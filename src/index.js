/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Info from './components/Info';
import Submission from './components/Submission';
import Registration from './components/Registration/Registration';
import Homepage from './pages/Homepage';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/speakers' element={<Info/>}/>
      <Route path='/submission' element={<Submission/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/home" element={<Homepage/>}/>
    </Routes>
  </Router>,
    document.getElementById('root')
);
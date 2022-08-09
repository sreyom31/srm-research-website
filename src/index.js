<<<<<<< HEAD
/* eslint-disable prettier/prettier */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Info from './components/Info';
import Committee from './components/committee';
import Submission from './components/Submission';
import Registration from './components/Registration/Registration';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/speakers' element={<Info/>}/>
      <Route path='/committee' element={<Committee/>}/>
      <Route path='/submission' element={<Submission/>}/>
      <Route path="/registration" element={<Registration/>}/>
    </Routes>
  </Router>,
    document.getElementById('root')
=======
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
import Gallery from './components/Gallery'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/speakers' element={<Info/>}/>
      <Route path='/submission' element={<Submission />} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/home" element={<Homepage/>}/>
    </Routes>
  </Router>,
    document.getElementById('root')
>>>>>>> 87759b937ca0cd2a30cde77c0751c5d667ad1b1d
);
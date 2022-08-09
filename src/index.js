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
<<<<<<< HEAD
import Committee from './components/committee';
=======
import Gallery from './components/Gallery'

>>>>>>> 87759b937ca0cd2a30cde77c0751c5d667ad1b1d
ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/speakers' element={<Info/>}/>
<<<<<<< HEAD
      <Route path='/committee' element={<Committee/>}/>
      <Route path='/submission' element={<Submission/>}/>
=======
      <Route path='/submission' element={<Submission />} />
      <Route path='/gallery' element={<Gallery/>} />
>>>>>>> 87759b937ca0cd2a30cde77c0751c5d667ad1b1d
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/home" element={<Homepage/>}/>
    </Routes>
  </Router>,
    document.getElementById('root')
);
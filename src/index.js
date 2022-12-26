/* eslint-disable prettier/prettier */
import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Info from './components/Info';
import Submission from './components/Submission';
import Registration from './components/Registration/Registration';
import Homepage from './components/Homepage';
import CallForPaper from './components/CallForPaper/CallForPaper';
import Committee from './components/committee';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';

let root = document.getElementById('root');
root = createRoot(root);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/speakers" element={<Info />} />

      <Route path="/committee" element={<Committee />} />
      <Route path="/submission" element={<Submission />} />

      <Route path="/conferences" element={<UpcomingEvents />} />
      <Route path="/gallery" element={<Gallery />} />

      <Route path="/registration" element={<Registration />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/callforpaper" element={<CallForPaper />} />

      <Route path="/contact" element={<Contacts />} />
    </Routes>
  </Router>
);

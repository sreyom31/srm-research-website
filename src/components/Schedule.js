import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Schedule.css';
const Schedule = () => {
  return (
    <div className="schedule">
      <Header />
      <div className="scheduleInfo">
        <p>You can download the schedule from this link - </p>
        <a
          href="https://drive.google.com/file/d/10Ex315ZMKtnrlYM_WXjtI625GezstvWC/view?usp=sharing"
          download
        >
          <button className="schedule-btn">Download</button>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;

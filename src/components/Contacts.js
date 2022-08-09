import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './contact.css';

function Contacts() {
  return (
    <>
      <Header />
      <div>
        <h1>Contact us</h1>
        <div className="contact-container">
          <h2>For Enquiry:</h2>
          <h3>NAME XXXXXX</h3>
          <h4>Chairperson</h4>
          <h4>School of Computer Science,</h4>
          <h4>SRM Institute of Science and Technology,</h4>
          <h4>Kattankulathur</h4>
          <h4>Chennai-603203</h4>
          <h4>
            <strong>Email id:</strong> XXXXXXXX@srmist.edu.in
          </h4>
          <h4>
            <strong>Whatsapp:</strong> XXXXXXXXXXX
          </h4>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacts;

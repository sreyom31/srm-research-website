import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './contact.css';

function Contacts() {
  return (
    <>
      <Header />
      <div>
        <p className="mt-8 text-center text-4xl font-bold">Contact us</p>
        <div className="contact-container">
          <p className="pb-2 text-3xl font-semibold">For Enquiry:</p>
          <p className="pb-2 text-2xl">Name -----</p>
          <p className="pb-2 text-2xl">Chairperson</p>
          <p className="pb-2 text-2xl">School of Computer Science,</p>
          <p className="pb-2 text-2xl">
            SRM Institute of Science and Technology,
          </p>
          <p className="pb-2 text-2xl">Kattankulathur</p>
          <p className="pb-2 text-2xl">Chennai-603203</p>
          <p className="pb-2 text-2xl">
            <strong>Email id:</strong> XXXXXXXX@srmist.edu.in
          </p>
          <p className="pb-2 text-2xl">
            <strong>Whatsapp:</strong> XXXXXXXXXXX
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacts;

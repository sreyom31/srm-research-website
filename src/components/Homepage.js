import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Homepage.css';

function Homepage() {
  return (
    <>
      <Header />

      {/* <div className="imptable">
        <table>
          <tr>
            <th colSpan="2">IMPORTANT DATES</th>
          </tr>
          <tr>
            <td>Paper Submission Deadline</td>
            <td>28th Feb 2023</td>
          </tr>
          <tr>
            <td>Notification of Acceptance</td>
            <td>31st March 2023</td>
          </tr>
          <tr>
            <td>Revised Paper Submission Deadline</td>
            <td>12th April 2023</td>
          </tr>
          <tr>
            <td>Registration Deadline</td>
            <td>20th April 2023</td>
          </tr>
          <tr>
            <td>Conference Date</td>
            <td>26th-28th April 2023</td>
          </tr>
        </table>
      </div> */}
      <div className="bg-local bg-cover   bg-no-repeat overflow-auto bg-[url('https://iciot.github.io/img/intro-bg.jpg')]">
        <div className="bg-gradient-to-r from-black">
          <div className="About text-white ">
            <div>
              <h2 className="aboutext ">About ICIoT 2023 Conference</h2>
              <br />
              <p className="pb-5">
                The Department of Computing Technologies, SRM Institute of
                Science and Technology, Chennai, India is planning to conduct
                the 4th edition of International Conference on Internet of
                Things (ICIoT 2023) from April 26th to 28th, 2023 at the
                Kattankulathur campus, Chennai. The conference aims to provide
                an outstanding opportunity for both academic and industrial
                communities to share their knowledge on new trends and
                challenges in emerging technologies and progress in standards on
                topics relevant to todays fast moving technology trends into the
                Internet of Things. It also provides a platform for the
                discussion of new results in the field of Internet of things.
                The Conference will have different themes for each day and each
                theme contains different thought-provoking sessions.
              </p>
              <p>
                The main focus of sessions on day one will be the applications
                of IoT for Home, City and Education. The second day sessions
                will focus on the applications of IoT in Manufacturing and
                Agriculture. The third day sessions will be about IoTs
                contribution for improvements in Transportation and Healthcare.
                Faculty, Students and Researchers will be presenting their ideas
                and findings, during the Paper Presentation sessions on all the
                three days. Apart from that workshops will be conducted with
                their themes being in line with the topics of the day.
              </p>
            </div>
          </div>
          <div className="About text-white ">
            <div>
              <h2 className="aboutext">
                About SRM Institute of Science and Technology
              </h2>
              <br />
              <p>
                Education is all about creating an environment of academic
                freedom, where bright minds meet, discover and learn. One would
                experience top of the world living and learning experience at
                SRM. SRM Institute of Science and Technology (formerly known as
                SRM University) - where you have the freedom to take wings. SRM
                Institute of Science and Technology is one of the top ranking
                universities in India with over 52,000 full time students and
                more than 3200 faculty across all the campuses - Kattankulathur,
                Ramapuram, Vadapalani Campus – all in and around Chennai, and
                Modinagar, NCR, Delhi - offering a wide range of undergraduate,
                postgraduate and doctoral programs in six Faculties –
                Engineering & Technology, Management, Medicine & Health
                sciences, Science & Humanities, Law and Agricultural Sciences
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;

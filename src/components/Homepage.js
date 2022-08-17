import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Homepage.css';

function Homepage() {
  return (
    <>
      <Header />
      <div className="brochure_div">
        <a className="brochure" href="#">
          View Brochure
        </a>
      </div>
      <div className="imptable">
        <table>
          <tr>
            <th colSpan="2">IMPORTANT DATES</th>
          </tr>
          <tr>
            <td>Final Paper Submission Deadline</td>
            <td>DD MM YYYY</td>
          </tr>
          <tr>
            <td>Registration Deadline</td>
            <td>DD MM YYYY</td>
          </tr>
          <tr>
            <td>Conference Date</td>
            <td>DD MM YYYY</td>
          </tr>
        </table>
      </div>
      <div className="About">
        <div>
          <h2 className="aboutext">About ICIoT 2022 Conference</h2>
          <br />
          <p>
            The School of Computing, SRM Institute of Science and Technology,
            Chennai, India conducted the 3rd edition of International Conference
            on Internet of Things (ICIOT 2022) from April 5th to 7th, 2022 in
            the Kattankulathur campus, Chennai. The conference aimed to provide
            an outstanding opportunity for both academic and industrial
            communities to address new trends and challenges in emerging
            technologies and progress in standards on topics relevant todays
            fast-moving technology trends in to the Internet of Things. It also
            provided a platform for the discussion of new results in the field
            of Internet of things. Different themes are addressed on each day
            and each theme contains different thought-provoking sessions. The
            first day sessions were meant to focus on application of IoT in the
            field of Computer Science and Information Technology. On the second
            day Startups and Entrepreneurs shared their success stories and
            experiences in implementing IoT and few sessions were focused on
            Industrial IoT. Government initiatives like Digital India, Smart
            Cities, where top bureaucrats from various departments were planned
            on the themes during the last day of the Conference. Researchers,
            Faculty, Students and Practitioners were presented their findings
            and ideas during the Paper presentation session on all the three
            days. We have received 256 papers including authors from countries
            like Australia, Turkey, Lithuania, and Saudi Arabia. The conference
            is inaugurated on 5th April 2022 with the dignitaries from SRM IST,
            DST, DRDO, Australia, USA, Canada, Singapore, and Ireland.
          </p>
        </div>
      </div>
      <div className="About">
        <div>
          <h2 className="aboutext">
            About SRM Institute of Science and Technology
          </h2>
          <br />
          <p>
            Education is all about creating an environment of academic freedom,
            where bright minds meet, discover and learn. One would experience
            top of the world living and learning experience at SRM. SRM
            Institute of Science and Technology (formerly known as SRM
            University) - where you have the freedom to take wings. SRM
            Institute of Science and Technology is one of the top ranking
            universities in India with over 52,000 full time students and more
            than 3200 faculty across all the campuses - Kattankulathur,
            Ramapuram, Vadapalani Campus – all in and around Chennai, and
            Modinagar, NCR, Delhi - offering a wide range of undergraduate,
            postgraduate and doctoral programs in six Faculties – Engineering &
            Technology, Management, Medicine & Health sciences, Science &
            Humanities, Law and Agricultural Sciences
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;

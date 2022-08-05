import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Homepage.css';

function Homepage() {
  return (
    <>
      <Header />
      <div className="About">
        <div>
          <h2 className="aboutext">Lorem</h2>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            nobis, ad nesciunt modi quos vero reiciendis, fugiat totam, itaque
            odit omnis beatae officiis dolorem? Itaque maxime cum, debitis
            voluptate deserunt perspiciatis consequatur ipsa incidunt a
            quibusdam quae vel modi in dicta, eaque maiores officia
            voluptatibus. Beatae officiis facilis tempora aspernatur dolorum est
            exercitationem provident voluptas rem aliquam, natus repellendus
            deserunt corrupti quaerat ex nemo officia nostrum doloremque!
            Voluptatum nobis quasi inventore quibusdam culpa officiis commodi,
            facilis eius quos. Ipsam nulla corrupti ad sit quo pariatur, beatae
            unde praesentium quam dolorem? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quam nobis, ad nesciunt modi quos vero
            reiciendis, fugiat totam, itaque odit omnis beatae officiis dolorem?
            Itaque maxime cum, debitis voluptate deserunt perspiciatis
            consequatur ipsa incidunt a quibusdam quae vel modi in dicta, eaque
            maiores officia voluptatibus. Beatae officiis facilis tempora
            aspernatur dolorum est exercitationem provident voluptas rem
            aliquam, natus repellendus deserunt corrupti quaerat ex nemo officia
            nostrum doloremque! Voluptatum nobis quasi inventore quibusdam culpa
            officiis commodi, facilis eius quos. Ipsam nulla corrupti ad sit quo
            pariatur, beatae unde praesentium quam dolorem?
          </p>
        </div>
      </div>
      <div className="imptable">
        <table>
          <tr>
            <th colSpan="2">IMPORTANT DATES</th>
          </tr>
          <tr>
            <td>Date1</td>
            <td>DD MM YYYY</td>
          </tr>
          <tr>
            <td>Date2</td>
            <td>DD MM YYYY</td>
          </tr>
          <tr>
            <td>Date3</td>
            <td>DD MM YYYY</td>
          </tr>
          <tr>
            <td>Date4</td>
            <td>DD MM YYYY</td>
          </tr>
          <tr>
            <td>Date5</td>
            <td>DD MM YYYY</td>
          </tr>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;

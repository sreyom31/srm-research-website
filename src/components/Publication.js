import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Publication = () => {
  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className=" grid grid-cols-4 gap-4">
          <div className=" md:col-span-1"></div>
          <div className="col-span-full rounded mx-5 bg-white items-center md:col-span-2 flex flex-col justify-center">
            <h1 className="uppercase font-bold  text-4xl text-center m-5 leading-loose">
              Publication Policy
            </h1>
            <li className="font-bold px-5  text-lg list-none">
              PUBLISHING POLICY
            </li>
            <ol className="list-decimal list-outside text-justify p-5">
              <li className="list-decimal">
                1. Double-Blind review process will be followed for reviewing
                the papers.
              </li>
              <br />
              <li className="list-decimal">
                2. Similarity Score of less than 10% is acceptable.
              </li>
              <br />
              <li className="list-decimal">
                3. All papers will be checked for similarity score using
                Turnitin and Plagiarism Detector.{' '}
              </li>
              <br />
              <li className="list-decimal">
                4. Authors are responsible for ensuring the originality of the
                content of their paper and shall avoid plagiarism at all times.
                Failure to comply with the guidelines may result in rejection of
                the paper, at time during the process of publication.
              </li>
              <br />
              <li className="list-decimal">
                5. Shortlisted and presented papers of the conference will be
                recommended for inclusion in the Scopus/Thomson Reuter-indexed
                proceedings. However if the chief editor deems it necessary to
                reject any of the paper due to quality concerns the Conference
                Team cannot be held responsible. Hence authors are expected to
                take the onus of ensuring any quality suggestions conveyed by
                the committee is implemented appropriately before the final
                submission.
              </li>
              <br />
            </ol>
            <li className="font-bold px-5 text-center text-xl list-none">
              PUBLICATION PARTNERS
            </li>
            <li className="font-bold px-5 text-center pt-5 text-lg list-none">
              Communications in Computer and Information Science
            </li>
            <ol className="list-none list-outside text-justify p-5">
              <li className="list-none">
                Based on the presentation made some papers will be selected and
                the authors need to submit extended versions of the papers to be
                included in a CCIS Series book of Springer. The CCIS series is
                devoted to the publication of proceedings of computer science
                conferences. Its aim is to efficiently disseminate original
                research results in informatics in printed and electronic form.
                However, if the chief editor deems it necessary to reject any of
                the paper due to quality concerns the Conference Team cannot be
                held responsible. Authors are expected to take the onus of
                ensuring any quality suggestions conveyed by the committee is
                implemented appropriately before the final submission.
              </li>
              <br />
              <li className="list-none">
                CCIS is abstracted/indexed in DBLP, Google Scholar,
                EI-Compendex, Mathematical Reviews, SCImago, Scopus. CCIS
                volumes are also submitted for the inclusion in ISI Proceedings.
              </li>
              <div className="text-left font-bold mt-4">
                <a
                  href="http://www.springer.com/series/7899"
                  className="text-left font-bold"
                >
                  http://www.springer.com/series/7899
                </a>
              </div>
              <li className="list-none">
                <span className="font-bold">Scopus: </span>
                <a href="https://www.scopus.com/sourceid/17700155007">
                  Scopus - Communications in Computer and Information Science
                </a>
              </li>
              <br />
            </ol>
            <img
              src="../images/springer1.jpeg"
              className="p-4 mb-4"
              alt="springer CCIS"
            ></img>
            <li className="font-bold px-5 text-center text-xl list-none">
              AIP Conference Proceedings
            </li>
            <ol className="list-none list-outside text-justify p-5">
              <li className="list-none">
                Shortlisted and presented papers of the conference will be
                recommended for inclusion in AIP Conference proceedings. However
                if the chief editor deems it necessary to reject any of the
                paper due to quality concerns the Conference Team cannot be held
                responsible. Authors are expected to take the onus of ensuring
                any quality suggestions conveyed by the committee is implemented
                appropriately before the final Submission.
              </li>
              <div className="text-left font-bold mt-4">
                <a
                  href="https://aip.scitation.org/journal/apc"
                  className="text-left font-bold"
                >
                  https://aip.scitation.org/journal/apc
                </a>
              </div>
              <li className="list-none">
                <span className="font-bold">Scopus: </span>
                <a href="https://www.scopus.com/sourceid/26916">
                  Scopus - AIP Conference Proceedings
                </a>
              </li>
            </ol>
            <img
              src="../images/AIP.jpeg"
              className="p-4 mb-4"
              alt="AIP Publishing"
            ></img>
            <li className="font-bold px-5 text-center text-md list-none">
              Indexing Logo
            </li>

            <div className="flex p-8">
              <div className="flex flex-row">
                <div>
                  <img
                    src="/images/wos.jpeg"
                    alt="wos"
                    // className="border-2 black basis-1/2"
                  ></img>
                </div>
                <div>
                  <img
                    src="/images/scopus.png"
                    alt="scopus"
                    // className="border-2 black basis-1/2"
                  ></img>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  <img
                    src="/images/googleScholar.png"
                    alt="googleScholar"
                    // className="border-2 black"
                  ></img>
                </div>
                <div>
                  <img
                    src="/images/compendex.png"
                    alt="compendex"
                    // className="border-2 black"
                  ></img>
                </div>
              </div>
              <div className="flex flex-row">
                <div>
                  <img
                    src="/images/dblp.png"
                    alt="dblp"
                    // className="border-2 black"
                  ></img>
                </div>
                <div>
                  <img
                    src="/images/math.jpeg"
                    alt="MathSciNet"
                    // className="border-2 black"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publication;

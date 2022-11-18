import React from 'react';
import pic1 from '../images/Procediabook.png';
import Footer from './Footer';
import Header from './Header';
const Submission = () => {
  return (
    <div>
      <Header />
      <div className="bg-sky-200">
        <div className=" grid grid-cols-4 gap-4">
          <div className=" md:col-span-1"></div>
          <div className="col-span-full rounded  m-5 bg-white items-center-center md:col-span-2">
            <h1 className="uppercase font-bold  text-4xl text-center m-5 leading-loose">
              Paper Submission
            </h1>
            <img src={pic1} width="100%" />
            <div className="flex">
              <button className="p-3 m-7 px-10 font-bold bg-slate-900 text-white text-center rounded-full">
                Download Templates
              </button>
              <button className="p-3 px-10 m-7 font-bold bg-red-700 text-white text-center rounded-full">
                Paper Submission
              </button>
            </div>
            <ol>
              <li className="font-bold px-5  text-lg">
                Guidelines for Paper Submission
              </li>
              <ol className="list-decimal list-outside text-justify p-5">
                <li className="list-decimal">
                  Authors are invited to submit their paper electronically using
                  a proceedings template written in English, with a length of up
                  to 10 pages, a full paper presenting the results of original
                  research or an innovative paper, and a short paper that is
                  partially completed with a theoretically established idea to
                  practical applications relevant to the conference. Over the
                  ten (10) page limit, additional pages per paper will be
                  charged.
                </li>
                <br />
                <li className="list-decimal">
                  All submissions must be made electronically through the
                  editorial manager/Submission Management System, and all
                  accepted and presented papers will be included in Procedia
                  Computer Science Journal, Elsevier for possible publication
                  and indexing in databases such as ScienceDirect, Scopus,
                  Google Scholar, INSPEC, Web of Science, and Journal Citation
                  Report (JCR), among others.
                </li>
                <br />
                <li className="list-decimal">
                  All manuscripts submitted to ICIOT 2023 2022 will undergo a
                  peer-review process and the submitted manuscript will be
                  reviewed by at least three reviewers. The review process will
                  be double-blind.
                </li>
                <br />
                <li className="list-decimal">
                  The page limit for papers is a minimum of 3(Three) pages and a
                  maximum of 10(Ten) pages Additional pages per paper above the
                  Ten(10) page limit will be charged at a rate of 1,000 Indian
                  rupees per page respectively.
                </li>
                <br />
                <li className="list-decimal">
                  The acceptance of the paper will be released after completion
                  of peer review process.
                </li>
                <br />
              </ol>
              <li className="font-bold px-5  text-lg">PLAGIARISM POLICY</li>
              <p className="p-5">
                Before submitting the paper, it should be checked for plagiarism
                using licensed plagiarism tools such as Turnitin. The content
                similarity should not exceed 10%. In an article, any type of
                self-plagiarism or plagiarism from other work(s) should be
                avoided. If you incorporate a model, concept, figure, table,
                data, or concluding statement from a previously published work,
                make sure to correctly cite the source research work. Also, the
                language you use to explain it should not be the same as the
                language used in the research work from which you adapted it.
                You should get permission from the copyright owners before
                utilizing any copyrighted material.
              </p>
              <li className="font-bold px-5  text-lg">
                Publications and Indexing
              </li>
              <p className="p-5">
                Full and Short papers will be triple-blind reviewed by the
                Scientific committee. All accepted papers of International
                Conference on Machine Learning and Data Engineering by Elsevier
                will be published Procedia Computer Science, Journal.
              </p>
              <li className="font-bold px-5  text-lg">About Indexing</li>
              <p className="p-5">
                Contributions will be indexed by Elsevier Procedia Scopus and
                Clarivate Conference Proceedings Citation Index – Web of Science
                (former ISI Thomson) and will be available on Sciverse
                ScienceDirect.
              </p>
            </ol>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Submission;

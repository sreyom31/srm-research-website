import React from 'react';
import Footer from './Footer';
import Header from './Header';
const Submission = () => {
  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className=" grid grid-cols-4 gap-4">
          <div className=" md:col-span-1"></div>
          <div className="col-span-full rounded mx-5 bg-white items-center md:col-span-2 flex flex-col justify-center">
            <h1 className="uppercase font-bold  text-4xl text-center m-5 leading-loose">
              Paper Submission
            </h1>
            <div className="flex">
              <a
                href="../ICIOT-template.docx"
                download
                className="p-3 m-7 px-10 font-bold bg-sky-200 text-black text-center rounded-full"
              >
                Download Templates
              </a>
              <button className="p-3 px-10 m-7 font-bold bg-[#122a58] text-white text-center rounded-full">
                Paper Submission
              </button>
            </div>
            <ol>
              <li className="font-bold px-5  text-lg">
                Guidelines for Paper Submission
              </li>
              <ol className="list-decimal list-outside text-justify p-5">
                <li className="list-decimal">
                  1. This conference employs double-blind review process, prior
                  to submitting your full-papers, make sure that the document is
                  as per the template that has been shared.
                </li>
                <br />
                <li className="list-decimal">
                  2. Papers should be prepared using Microsoft Word, with text
                  being single-spaced.
                </li>
                <br />
                <li className="list-decimal">
                  3. Number of pages in an article should not exceed 12. The
                  desired page size is 10 – 12.
                </li>
                <br />
                <li className="list-decimal">
                  4. All references, figures, and tables should be numbered in
                  sequence starting from 1 and MUST be duly cited / referred
                  within the text.
                </li>
                <br />
                <li className="list-decimal">
                  5. The figures / graphs / plots in the manuscript MUST be of
                  good resolution (600 dpi or more), tables MUST NOT be in
                  pictorial format. Text in figures should not be too small, and
                  preferably of equal size as the text of the article.
                </li>
                <br />
                <li className="list-decimal">
                  6. The paper should be 6,000 to 8,000 words (including
                  abstract, reference, and tables/figures), and has never been
                  published before or is currently submitted to another
                  conference or not being considered for publication by any
                  other publisher.
                </li>
                <br />
                <li className="list-decimal">
                  7. The paper must have less than 10% Plagiarism
                </li>
                <br />
                <li className="list-decimal">
                  8. Any article, not in format, will be rejected without any
                  judgment on its quality.
                </li>
                <br />
                <li className="list-decimal">
                  9. An author could at the most submit two of their works in
                  this edition of the Conference.
                </li>
                <br />
              </ol>
              <li className="font-bold px-5  text-lg">PUBLISHING POLICY</li>
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
                  TurnItIn and Plagiarism Detector.{' '}
                </li>
                <br />
                <li className="list-decimal">
                  4. Authors are responsible for ensuring the originality of the
                  content of their paper and shall avoid plagiarism at all
                  times. Failure to comply with the guidelines may result in
                  rejection of the paper, at time during the process of
                  publication.
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
              <li className="font-bold px-5  text-lg">PAPER SUBMISSION</li>
              <ol className="list-decimal list-outside text-justify p-5">
                <li className="list-decimal">
                  1. All papers must be submitted in PDF or as a Microsoft Word
                  Document via Microsoft Conference Management Toolkit:
                  <a style={{ textDecoration: 'underline' }}>
                    {' '}
                    https://cmt3.research.microsoft.com/ICIoT2023/Submission/Index
                  </a>
                </li>
                <br />
                <li className="list-decimal">
                  2. The submitting authors may be required to create a
                  Microsoft Conference Management Toolkit account before
                  uploading the paper (if the submitting author does not have a
                  Microsoft Conference Management Toolkit account). While
                  uploading the paper, the authors should provide the title of
                  the paper, an abstract of no more than 250 words and keywords
                  in the respective text boxes on the paper submission page.
                </li>
                <br />
                <li className="list-decimal">
                  3. Please note that all accepted papers that are registered
                  and presented at the conference will be included in the book
                  of abstracts and be submitted for possible inclusion in Scopus
                  indexed proceedings/Journal. The Final decision of inclusion
                  in the Scopus indexed proceedings/Journal will be made by the
                  Editorial Board, based on the quality of the represented work
                  and scope of the Journal.{' '}
                </li>
                <br />
              </ol>
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

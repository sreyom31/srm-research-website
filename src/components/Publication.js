import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Publication = () => {
    return(
        <div>
            <Header />
            <div className="bg-white">
                <div className=" grid grid-cols-4 gap-4">
                    <div className=" md:col-span-1"></div>
                    <div className="col-span-full rounded mx-5 bg-white items-center md:col-span-2 flex flex-col justify-center">
                        <h1 className="uppercase font-bold  text-4xl text-center m-5 leading-loose">
                            Publication Policy
                        </h1>
                        {/* <li className="font-bold px-5  text-lg">PUBLISHING POLICY</li> */}
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Publication;
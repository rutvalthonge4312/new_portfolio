import React from 'react';
import myphoto from "../images/myphoto.png";
// import './ProfilePage.css';
import resume from "../documents/Rutval_Bharat_Thonge_Resume.pdf"

function ProfilePage() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Text Section */}
                <div className="col-lg-6 col-md-12 text-section text-center text-lg-start">
                    <div className="bg-dark text-gray-300 p-4 rounded">
                        <div className="text-center text-lg-start mb-4">
                            <p className="text-2xl font-semibold">Hello, It's Me</p>
                            <h1 className="display-5 font-bold mt-2">Rutval B. Thonge</h1>
                            <h2 className="h3 font-semibold mt-2">
                                And I'm a <span className="text-info">Tech Enthusiast</span>
                            </h2>
                        </div>
                        <p className="text-center text-lg-start max-w-md mx-auto mt-4 leading-relaxed">
                            I'm an Information Technology (IT) Branch Student from the PES's MCOE, Pune.
                            I'm passionate about learning new things in the tech field and keeping myself updated with the rapidly changing tech world.
                        </p>

                        <div className="social-links mt-4 d-flex justify-content-center justify-content-lg-start">
                            <a href="https://www.facebook.com/rutval.thonge/" className="text-info fs-4 mx-2">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com" className="text-info fs-4 mx-2">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/rutu_thonge_4312/" className="text-info fs-4 mx-2">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/rutval-thonge-89b761232/" className="text-info fs-4 mx-2">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>

                        {/* Download CV Button */}
                        <div className="mt-4">
                            <a
                                href={resume}
                                download
                                className="btn btn-info text-white px-5 py-2 mt-3 rounded"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="col-lg-6 col-md-12 d-flex justify-content-center my-4 my-lg-0">
                    <div data-aos="fade-up" className="image-section">
                        <img src={myphoto} className="img-fluid rounded"  />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;

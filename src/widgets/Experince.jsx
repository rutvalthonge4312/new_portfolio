import React from 'react';
import work from "../images/work.png";
// import './Experince.css';

function Experince() {
    return (
        <div data-aos="fade-up" className='container experience-section my-5' id='exp'>
            <h2 className='text-center mb-4'>
                Work <strong>Experience</strong>
            </h2>
            <div className="experience-card p-4 rounded shadow d-flex flex-column flex-lg-row align-items-center">
                <div className="image-section mb-3 mb-lg-0 me-lg-4">
                    <img
                        src={work}
                        alt="Work Experience"
                        className='experience-image img-fluid rounded'
                    />
                </div>
                <div className="text-section text-center text-lg-start">
                    <h4 className='role-title mb-2'>React Developer | Django Developer | Flutter Developer</h4>
                    <a
                        href='https://biputri.com/'
                        target="_blank"
                        rel="noopener noreferrer"
                        className='company-link'
                    >
                        at Sarva Suvidhan Pvt. Ltd.
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Experince;

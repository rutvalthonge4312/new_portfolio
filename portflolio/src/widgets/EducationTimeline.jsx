import React from 'react';

const EducationTimeline = () => {
  const educationData = [
    {
      title: 'Secondary 10th (2019)',
      description: 'I completed my 10th in 2019 from Maharashtra Vidyalaya, Barshi and secured 95.60% in 10th Board exams.',
    },
    {
      title: 'Higher Secondary 12th (2021)',
      description: 'I completed my 12th in 2021 from Mother Public School, Madha and secured 89.86% in 12th Board exams.',
    },
    {
      title: 'BTech at PESs MCOE,Pune (2021-2025)',
      description: 'I am doing my BTech  in Information Technology at PES Modern College of Engineering, Pune from 2021 to 2025.',
    },
  ];

  return (
    <div className="timeline-container" id='education'>
      <h2 className="timeline-title title-head">
        About <span>Education</span>
      </h2>
      
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} className={`timeline-content ${index % 2 === 0 ? 'left' : 'right'}`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;

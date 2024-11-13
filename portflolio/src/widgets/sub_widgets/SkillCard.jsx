import React from 'react'
import 'boxicons/css/boxicons.min.css';


function SkillCard(props) {
  return (
    <div data-aos="fade-up" className='m-3  services-box'>
        <i className={props.classNamePassed} style={{ fontSize: '4rem' }}></i>
        <h3>{props.headingContent}</h3>
        <p>{props.para}</p>

    </div>
  )
}

export default SkillCard
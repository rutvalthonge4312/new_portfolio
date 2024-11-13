import React from 'react'
import SkillCard from './sub_widgets/SkillCard'

function Skills() {
    return (
        <div className='container' id='skill'>
            <h2 className='title-head'>My <strong>Skills</strong></h2>
            <div className="container d-flex flex-wrap">
                <SkillCard
                    classNamePassed="bx bx-code-alt"
                    headingContent="Web Developement"
                    para="
            I am a Full stack MERN Web-Developer and skilled in frontend with
            good knowledge of React.js, Flutter and for backend with Node.js, Express.js, Python Django REST API, Java(MVC)
            and Mongo-DB. I have done lots of Full stack projects using above
            mentioned Tech stack.
          "
                />
                <SkillCard
                    classNamePassed="bx bxl-flutter"
                    headingContent="Anderoid Developement"
                    para="
            I am doing Anderoid Developement using Flutter where I came across a
            completely new Language Dart.With Flutter we can do Hybrid-App
            developement that is we can make app for ios as well as anderoid
            users simulteneously
          "
                />
                <SkillCard
                    classNamePassed="bx bx-data"
                    headingContent=" Mastering Deployment"
                    para="
           I have not started working extensively on deployment yet, but in the future, I definitely plan to explore this area more. Deployment is crucial for delivering applications to end-users, ensuring reliability, scalability, and performance. Understanding tools and services like Docker, Kubernetes, and CI/CD pipelines will be essential as I work on bringing my projects to production.
          "
                />
            </div>
        </div>
    )
}

export default Skills
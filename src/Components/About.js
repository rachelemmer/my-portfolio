import React from 'react'
import PDF from '../ResumeFolder/Resume.pdf'

export default function About() {
    return (
        <div>
            <h1 className="about-title">A little bit about myself.</h1>
            <div className="about-container">
                <img className="about-photo" src="https://i.imgur.com/Im4DvPE.jpg" alt="Rachel and her dog Ollie hiking"/>
                <p className="about-paragraph">I am a Software Engineer with full stack web development experience. 
                My passion for building, creating, learning and exploring led me to enroll in Flatiron School’s immersive Software Engineering program. 
                My stack includes JS fundamentals (ES6+), Component Pattern, React.js, Redux, Ruby fundamentals, MVC pattern, Rails, SQL, ORMs, Active Record, Ruby on Rails, Node.js, Express.js, and Knex.js. 
                <br></br><br></br>
                Before my time at Flatiron School, I attended Colorado State University and received a Bachelors of Science in Psychology with a Spanish minor. 
                I spent the next few years mentoring at risk youth and their families and I also worked at a brewery! In my free time, I love traveling, camping, reading, and hiking with my dog, Ollie:)
                <br></br><br></br>
                To learn more about me, add me on <a href="https://www.linkedin.com/in/rachelaemmer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, check out my blogs on <a href="https://medium.com/@rachelaemmer" target="_blank" rel="noopener noreferrer">Medium</a>, or download my <a href={PDF} target="_blank" rel="noopener noreferrer">resume</a>! 
                </p>
            </div>
        </div>
    )
}

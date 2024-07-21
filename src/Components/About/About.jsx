import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className = 'about'>
        <div className = "about-title">
            <h1> About me </h1>
            <img src= {theme_pattern} alt = "" />
        </div>

        <div className = "about-sections">
            <div className = "about-left">
                <img src= {profile_img} alt= "" />
            </div>

            <div className = "about-right">
                <div className = "about-para">
                <p> Experienced and highly motivated Front-End Developer with a strong background in creating visually appealing and user-friendly web applications. </p>
                <p> Proficient in modern web technologies including HTML5, CSS3, JavaScript, and framework React.js. Design interactive, responsive, and cross-browser compatible websites. Committed to staying updated with the latest trends and best practices in web development to deliver high-quality and performance-optimized solutions.</p>
                </div>
                <div className = "about-skills">
                    <div className ="about-skill"> <p> HTML & CSS </p> <hr style={ {width:"70%"} } /> </div>
                    <div className ="about-skill"> <p> React JS </p> <hr style={ {width:"70%"} } /> </div>
                    <div className ="about-skill"> <p> JavaScript </p> <hr style={ {width:"60%"} } /> </div>
                    <div className ="about-skill"> <p> Next JS </p> <hr style={ {width:"70%"} } /> </div>

                </div>
            </div>
        </div>

        <div className ="about-achievements">
            <div className = "about-achievement">
                <h1> 1+</h1>
                <p> YEARS OF EXPERIENCE </p>
            </div>

            <hr />

            <div className = "about-achievement">
                <h1> 8+ </h1>
                <p> PROJECTS COMPLETED </p>
            </div>

            <hr />

            <div className = "about-achievement">
                <h1> 1+ </h1>
                <p> HAPPY CLIENTS </p>
            </div>
            
        </div>
      
    </div>
  )
}

export default About

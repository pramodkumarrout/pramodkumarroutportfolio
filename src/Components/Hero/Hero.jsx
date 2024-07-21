import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className = 'hero'>
       <img src= {profile_img} alt = "" />
       <h1> Hi,  I’m Pramod Kumar Rout </h1>
        <p> A Full Stack Developer</p>
        <div className = "hero-action">
            <div className = "hero-connect"> Connect with me </div>
            <div className = "hero-resume"> My Resume </div>

        </div>
    </div>
  )
}

export default Hero

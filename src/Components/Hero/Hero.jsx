import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div id='home' className = 'hero'>
       <img src= {profile_img} alt = "" />
       <h1> <span> Hi,  I’m Pramod Kumar Rout  </span> </h1>
        <p> A Full Stack Developer</p>
        <div className = "hero-action">
            <div className = "hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me </AnchorLink> </div>
            <div className = "hero-resume"> My Resume </div>

        </div>
    </div>
  )
}

export default Hero

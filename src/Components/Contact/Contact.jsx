import React from 'react'
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/location_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';


const Contact = () => {
  return (
    <div className = 'contact'>
       <div className ="contact-title">
        <h1> Get in touch </h1>
        <img src= {theme_pattern} alt="" />
       </div>

       <div className = "contact-section">
         <div className ="contact-left">
            <h1> Lets talk </h1>
            <p> I am always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question, want to collaborate, feel free to reach out. Fill out the form below, and I will get back to you as soon as possible.

</p>
         <div className = "contact-details">
            <div className = "contact-detail">
               <img src={mail_icon} alt="" /> <p> pramodkumarrout243@gmail.com</p>
            </div>
            <div className = "contact-detail">
               <img src= {call_icon} alt="" /> <p> +91 8328929976 </p> 
            </div>
            <div className = "contact-detail">
                <img src= {location_icon} alt="" /> <p> Arekere, Bangalore, Karnataka, 560076 </p>
            </div>
         </div>
         </div>

         <form className = "contact-form">
           <label htmlFor = ""> Your Name </label>
           <input type="text" placeholder='Enter your name' name='name' />
           <label htmlFor = ""> Your Email </label>
           <input type="email" placeholder='Enter your email' name='email' />
           <label htmlFor=""> Write your message here </label>
           <textarea name="message" rows="8" placeholder='Enter your message' />
           
           <button type="button" className ="contact-submit"> Submit now </button>
         </form>

       </div>
    </div>
  )
}

export default Contact

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Contact.css'
import HireMe from "./HireMe";


const Contact = () => {
  return (
        <div className='contact'>
        <h1>Contact me</h1>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Message' className='input-message'/>
        <Link to='/'>send</Link>
        <div className='second-lottie'>
          <HireMe />
        </div>
  </div>);
};

export default Contact;
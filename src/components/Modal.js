
import React from 'react';
import './styles/Modal.css';
import { AiOutlineClose } from 'react-icons/ai';
import myResume from '../assets/Resume_SD.pdf';
import { Link } from 'react-router-dom';

const Modal = ({showModal}) => {
    const resume = myResume;

  return (
    <div className='modal'>

        <div className="close-modal">
            <AiOutlineClose className='cm' onClick={showModal}/>
        </div>
        <div className="cart">
            <Link to='/'>Projects</Link>
        </div>
        <div className="cart">
            <Link to='/'>Hackathons</Link>
        </div>
        <div className="cart">
            <Link to='/'>Playground</Link>
        </div>
      
    </div>
  )
}

export default Modal

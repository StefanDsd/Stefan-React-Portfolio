
import React from 'react';
import '../Modal/index.modules.css';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({showModal}) => {

  return (
    <div className="modal">
      <div className="close-modal">
        <AiOutlineClose className="cm" onClick={showModal} />
      </div>
      
    </div>
  );
};

export default Modal

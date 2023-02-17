import React, { useState } from 'react';
import Modal from 'react-modal';
import resume from '../../assets/resume.jpg'

function ResumeModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };

  const imgStyle = {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
    maxHeight: '100%'
  };

  return (
    <div>
      <button className="button" onClick={() => setModalIsOpen(true)}>View Resume</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyle}
      >
        
        <img
          src={resume}
          alt="Resume"
          style={imgStyle}
        />
      </Modal>
    </div>
  );
}

export default ResumeModal;
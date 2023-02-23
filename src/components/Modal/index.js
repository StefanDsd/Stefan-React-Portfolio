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

  const downloadResume = () => {
    const link = document.createElement('a');
    link.download = 'resume.pdf';
    link.href = '/resume/resume.pdf';
    link.click();
  };

  return (
    <div>
      <button className="button" onClick={() => setModalIsOpen(true)}>View Resume</button>
      <br></br>
      <button className="button" onClick={downloadResume}>Download Resume</button>

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
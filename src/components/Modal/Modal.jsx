import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { ModalContent, Backdrop } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({children, onClick}) {
  
  const handleBackBackdropClick = (e) => {

    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  },[onClick]);


  return createPortal(
    <Backdrop onClick={handleBackBackdropClick}>
        <ModalContent>
          {children}
        </ModalContent>
    </Backdrop>,
    modalRoot,
  );
};

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
};

// 780 x 520
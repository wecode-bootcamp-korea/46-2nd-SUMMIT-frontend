import React from 'react';
import * as M from './Modal';

const Modal = ({ title, message, onClose }) => (
  <M.ModalContainer>
    <M.ModalContent>
      <M.ModalTitle>{title}</M.ModalTitle>
      <M.ModalMessage>{message}</M.ModalMessage>
      <M.ModalButton onClick={onClose}>Close</M.ModalButton>
    </M.ModalContent>
  </M.ModalContainer>
);

export default Modal;

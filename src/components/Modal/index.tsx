import React, { useContext } from 'react';
import './Modal.scss';
import ReactDOM from "react-dom";
import { AppContext } from '../../Context/AppContext';

type Props = {
  onClose: () => void;
  firstName: string;
  lastName: string;
}

const Modal = ({onClose, firstName, lastName}: Props) => {

  const { employees } = useContext(AppContext);

  const modalRoot = document.getElementById("modal-root");
  return modalRoot ? ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <h2>{firstName} {lastName}</h2>
        <p>Modal content goes here...</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>,
    modalRoot
  ): null;
};

export default Modal
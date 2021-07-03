import React from 'react';
import style from '../../scss/Modal.module.scss';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div className={style['modal__content']}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;

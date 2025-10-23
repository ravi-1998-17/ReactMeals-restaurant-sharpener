import React from "react";

const ModalOverlay = () => {
  return (
    <div>
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
};

const Backdrop = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
    </>
  );
};

const portalElements = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElements
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElements
      )}
    </>
  );
};

export default Modal;

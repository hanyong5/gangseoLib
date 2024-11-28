import React from "react";
import closeBtn from "../../assets/icons/x-01.svg";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modalFrame">
      <div className="modalBackgroundWrap">
        <img className="closeBtn" src={closeBtn} onClick={onClose} alt="" />
      </div>
      <div className="modalBackground">
        <div className="modalScrollFrame">
          <div className="modalContent"></div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

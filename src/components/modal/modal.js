import React from "react"
import ContactForm from "../modal/contactForm"
import "./modal.css"

const Modal = ({ show, handleClose }) => {
  const showHideClassName = show ? "modal do-display" : "modal dont-display"

  return (
    <div className={showHideClassName}>
      <div className="form">
        <div className="modal-main">
          <div className="button-container">
            {" "}
            <button onClick={handleClose} className="button">
              &times;
            </button>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
export default Modal

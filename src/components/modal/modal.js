import React from "react"
import "./modal.css"

const Modal = ({ show, handleClose }) => {
  const showHideClassName = show ? "modal do-display" : "modal dont-display"
  return (
    <div className={showHideClassName}>
      <div className="form">
        <form className="modal-main">
          <div className="button-container">
            {" "}
            <button onClick={handleClose} className="close">
              &times;
            </button>
          </div>
          FORM GOES HERE
        </form>
      </div>
    </div>
  )
}
export default Modal

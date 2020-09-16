import React, { useEffect, useRef } from "react"
import ContactForm from "../modal/contactForm"
import "./modal.css"

const Modal = ({ show, handleClose }) => {
  const showHideClassName = show ? "modal do-display" : "modal dont-display"
  const outside = useRef(null)

  useEffect(() => {
    document.addEventListener("click", console.log("click"))

    return () => {
      document.removeEventListener("unclick", console.log("click"))
    }
  }, [])

  return (
    <div className={showHideClassName} ref={outside}>
      <div className="form">
        <div className="modal-main">
          <div className="button-container">
            {" "}
            <button onClick={handleClose}>&times;</button>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
export default Modal

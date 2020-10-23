import React from "react"
import Modal from "react-modal"

Modal.defaultStyles.overlay.backgroundColor = "rgba(99, 99, 99, 0.6)"
Modal.setAppElement("body")

const EmailConfirmation = props => (
  <div>
    <Modal
      isOpen={!!props.emailStatus}
      onRequestClose={props.handleClearEmailStatus}
      contentLabel="Email Confirmation"
      className="modal"
    >
      <h3>Thanks for your inquiry!</h3>
      {props.confirmation && (
        <p className="modal__confirmationText">{props.confirmation}</p>
      )}
      <button
        className="button"
        aria-label="Close Window"
        onClick={props.handleClearEmailStatus}
      >
        Close Window
      </button>
    </Modal>
  </div>
)

export default EmailConfirmation

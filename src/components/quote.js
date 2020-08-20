import React, { Component } from "react"
import layoutStyles from "./layout/layout.module.scss"
import Modal from "../components/modal/Modal"

class Quote extends Component {
  state = {
    show: false,
  }

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <div id="quote">
        <div className={layoutStyles.quoteContainer}>
          <div className={layoutStyles.quote}>
            Have a project you keep putting off?
            <br />
            Request your{" "}
            <button
              type="button"
              className={layoutStyles.quoteButton}
              onClick={this.showModal}
            >
              FREE QUOTE
            </button>{" "}
            <Modal
              show={this.state.show}
              handleClose={this.hideModal}
              handleOpen={this.showModal}
            />
            today!
          </div>
        </div>
      </div>
    )
  }
}

export default Quote

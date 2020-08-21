import React, { Component } from "react"
import layoutStyles from "./layout/layout.module.scss"
import Modal from "../components/modal/Modal"

class Quote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.windowOffset = 0
  }

  showModal = () => {
    this.setState({ show: true }, () => {
      this.windowOffset = window.scrollY
      document.body.setAttribute(
        "style",
        `position: fixed; top: -${this.windowOffset}px; left: 0; right: 0;`
      )
    })
  }

  hideModal = () => {
    this.setState({ show: false }, () => {
      document.body.setAttribute("style", ``)
      window.scrollTo(0, this.windowOffset)
    })
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
            <Modal show={this.state.show} handleClose={this.hideModal} />
            today!
          </div>
        </div>
      </div>
    )
  }
}

export default Quote

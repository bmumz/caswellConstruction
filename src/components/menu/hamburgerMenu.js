import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import Sidebar from "./sidebar"
import Fade from "react-reveal/Fade"

class HamburgerMenu extends Component {
  constructor(props) {
    super(props)
    this.onToggle = this.onToggle.bind(this)
    this.state = {
      visibility: false,
    }
  }

  onToggle() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility,
      }
    })
  }

  render() {
    return (
      <div>
        <div className="nav__buttonContainer">
          <button onClick={this.onToggle} className="nav__button">
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="bg">
            {this.state.visibility && (
              <Fade left>
                <Sidebar onToggle={this.onToggle} />
              </Fade>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default HamburgerMenu

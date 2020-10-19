import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Sidebar from "./sidebar"

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
        <button onClick={this.onToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {this.state.visibility && <Sidebar />}
      </div>
    )
  }
}

export default HamburgerMenu

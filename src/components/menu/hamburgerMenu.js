import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Sidebar from "./sidebar"

const HamburgerIcon = () => <FontAwesomeIcon icon={faBars} />

const ExitIcon = () => <FontAwesomeIcon icon={faTimes} />

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
    const isVisible = this.state.visibility
    let button
    if (!isVisible) {
      button = <HamburgerIcon />
    } else {
      button = <ExitIcon />
    }
    return (
      <div>
        {" "}
        <div className="nav__buttonContainer">
          <button onClick={this.onToggle} className="nav__button">
            {button}
          </button>

          <TransitionGroup className="bg">
            {this.state.visibility && (
              <CSSTransition
                in={isVisible}
                appear={true}
                timeout={300}
                classNames="fade"
              >
                <Sidebar onToggle={this.onToggle} />
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default HamburgerMenu

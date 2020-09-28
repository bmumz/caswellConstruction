import React from "react"
import Logo from "./logo"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => (
  <div>
    <div className="header">
      <div className="header__container">
        <Logo />

        <AnchorLink href="#about" className="header__item">
          about
        </AnchorLink>
        <AnchorLink href="#services" className="header__item">
          services
        </AnchorLink>
        <AnchorLink href="#work" className="header__item">
          work
        </AnchorLink>
        <AnchorLink href="#contact" className="header__item">
          contact
        </AnchorLink>
      </div>
    </div>
  </div>
)

export default Header

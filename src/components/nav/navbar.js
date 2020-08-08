import React from "react"
import navStyles from "./nav.module.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Navbar = () => {
  return (
    <div className={navStyles.navBar}>
      <h1 className={navStyles.title}>Caswell Construction</h1>

      <div className={navStyles.menu}>
        <AnchorLink href="#about" className={navStyles.menuItem}>
          about
        </AnchorLink>
        <AnchorLink href="#services" className={navStyles.menuItem}>
          services
        </AnchorLink>
        <AnchorLink href="#work" className={navStyles.menuItem}>
          work
        </AnchorLink>
        <AnchorLink href="#contact" className={navStyles.menuItem}>
          contact
        </AnchorLink>
        <AnchorLink href="#quote" className={navStyles.menuItem}>
          <button className={navStyles.button}>get a free quote</button>
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar

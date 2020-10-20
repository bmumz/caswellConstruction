import React from "react"
import HamburgerMenu from "./menu/hamburgerMenu"
import HeroImage from "./images/heroImage"
import HeroImageMobile from "./images/heroImageMobile"

const Navigation = () => (
  <div>
    <div className="nav">
      <div className="image__mobileVisibility">
        <HeroImageMobile />
        <div className="nav__menu">
          <HamburgerMenu />
        </div>
      </div>

      <div className="image__desktopVisibility">
        <HeroImage />
        <div className="nav__menu">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  </div>
)

export default Navigation

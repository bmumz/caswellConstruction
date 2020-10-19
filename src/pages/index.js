import React, { Component } from "react"
import "normalize.css/normalize.css"
// import Logo from "../components/logo"
// import Header from "../components/header"
import HamburgerMenu from "../components/menu/hamburgerMenu"
import Insta from "../components/insta"
import HeroImage from "../components/images/heroImage"
import HeroImageMobile from "../components/images/heroImageMobile"
import About from "../components/about"
import Quote from "../components/quote"
import Services from "../components/services"
import OurWork from "../components/ourWork"
import Contact from "../components/contact/contact"
import Footer from "../components/footer"

import "../styles/styles.scss"

class App extends Component {
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
      <div>
        <HamburgerMenu />

        <div className="image__mobileVisibility">
          <HeroImageMobile />
        </div>
        <div className="image__desktopVisibility">
          <HeroImage />
        </div>

        <div className="container">
          <About />
        </div>
        <Quote />
        <div className="container">
          <Services />
          <Insta />
          <OurWork />
        </div>
        <Contact />
        <div className="container">
          <Footer />
        </div>
      </div>
    )
  }
}

export default App

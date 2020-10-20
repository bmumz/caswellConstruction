import React, { Component } from "react"
import "normalize.css/normalize.css"
import Insta from "../components/insta"
import Navigation from "../components/navigation"
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
        <Navigation />

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

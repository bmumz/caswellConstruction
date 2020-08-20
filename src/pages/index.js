import React, { Component } from "react"
import Promos from "../components/nav/promos"
import Navbar from "../components/nav/navbar"
import Image from "../components/image"
import About from "../components/about"
import Quote from "../components/quote"
import Services from "../components/services"
import OurWork from "../components/ourWork"
import Contact from "../components/contact/contact"
import Footer from "../components/footer"
import layoutStyles from "../components/layout/layout.module.scss"

import "../styles/index.scss"

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
        <Promos />
        <Navbar />
        <Image />
        <div className={layoutStyles.body}>
          <About />

          <Quote />
          <Services />
          <OurWork />
          <Contact />

          <Footer />
        </div>
      </div>
    )
  }
}

export default App

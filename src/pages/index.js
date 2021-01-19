import React from "react"
import "normalize.css/normalize.css"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import About from "../components/about"
import Quote from "../components/quote"
import Services from "../components/services/services"
import OurWork from "../components/ourWork"
import Contact from "../components/contact/contact"
import Footer from "../components/footer"

import "../styles/styles.scss"

const App = () => (
  <div>
    <SEO
      title="Caswell Construction | Norfolk County"
      description="Husband & Wife Team— offering services including Duradek installation, window and door installation, flooring, decks, drywall, residential painting, storage & organizing."
      keywords="renovations Norfolk County, construction Norfolk County, renovations Delhi Ontario, construction Norfolk County, "
    />
    <Navigation />

    <div className="container">
      <About />
    </div>
    <Quote />
    <div className="container">
      <Services />
      <OurWork />
    </div>
    <Contact />
    <div className="container">
      <Footer />
    </div>
  </div>
)

export default App

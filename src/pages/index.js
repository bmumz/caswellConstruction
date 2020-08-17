import React from "react"
import Layout from "../components/layout/layout"
import About from "../components/about"
import Quote from "../components/quote"
import Services from "../components/services"
import OurWork from "../components/ourWork"
import Contact from "../components/contact"

import "../styles/index.scss"

const IndexPage = () => (
  <div>
    <Layout>
      <About />
      <Quote />
      <Services />
      <OurWork />
      <Contact />
    </Layout>
  </div>
)

export default IndexPage

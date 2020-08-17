import React from "react"
import Navbar from "../nav/navbar"
import Promos from "../nav/promos"
import Footer from "../footer"
import Image from "../image"

import "../../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.header}>
      <div className={layoutStyles.promosBar}>
        <Promos />
      </div>
      <div className={layoutStyles.navBar}>
        <Navbar />
      </div>
      <div>
        <Image />
      </div>
      <div className={layoutStyles.body}>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.content}>{props.children}</div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout

import React from "react"
import MenuItem from "./menuItem"

const Sidebar = () => (
  <div>
    <div className="nav__list">
      <MenuItem link="#about" title="About Us" />

      <MenuItem link="#services" title="Our Services" />

      <MenuItem link="#work" title="Our Work" />

      <MenuItem link="#contact" title="Contact Us" />
    </div>
  </div>
)

export default Sidebar

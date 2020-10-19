import React from "react"
import MenuItem from "./menuItem"

const Sidebar = () => (
  <div>
    <MenuItem link="#about" title="About" />
    <MenuItem link="#services" title="Services" />
    <MenuItem link="#work" title="Our Work" />
    <MenuItem link="#contact" title="Contact" />
  </div>
)

export default Sidebar

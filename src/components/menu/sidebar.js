import React from "react"
import MenuItem from "./menuItem"

const Sidebar = props => (
  <div>
    <ul role="presentation" onClick={props.onToggle}>
      <div className="nav__list">
        <MenuItem link="#about" title="About Us" />

        <MenuItem link="#services" title="Our Services" />

        <MenuItem link="#work" title="Our Work" />

        <MenuItem link="#contact" title="Contact Us" />
      </div>
    </ul>
  </div>
)

export default Sidebar

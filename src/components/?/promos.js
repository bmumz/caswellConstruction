import React from "react"
import navStyles from "./nav.module.scss"

const Promos = () => {
  return (
    <div className={navStyles.promosBar}>
      <div className={navStyles.promosText}>
        Promotions: Now{" "}
        <img
          src="https://duradek.com/wp-content/uploads/2017/05/logo-duradek-no-roll-no-tag-e1493935234525.png"
          alt="Duradek logo"
          className={navStyles.duradekLogo}
        />{" "}
        Certified!
      </div>
    </div>
  )
}

export default Promos

import React from "react"
import Insta from "./insta"

const OurWork = () => {
  return (
    <div>
      <h1 id="work">Our Work</h1>
      <div className="instagram">
        <div className="instagram__post">
          <Insta postUrl="https://www.instagram.com/p/CFS0rU5nK1e/" />
        </div>

        <div className="instagram__post">
          <Insta postUrl="https://www.instagram.com/p/CDXZE8_Hb9i/" />
        </div>
        <div className="instagram__post">
          <Insta postUrl="https://www.instagram.com/p/CCvv778HvPH/" />
        </div>
      </div>
    </div>
  )
}

export default OurWork

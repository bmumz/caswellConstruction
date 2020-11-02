import React from "react"
import Insta from "./insta"

const OurWork = () => {
  return (
    <div>
      <h1 id="work">Our Work</h1>
      <div className="instagram">
        <div className="instagram__post">
          <Insta postUrl="https://www.instagram.com/p/CHBwAuFnvcs/?utm_source=ig_embed&utm_campaign=loading" />
        </div>

        <div className="instagram__post">
          <Insta postUrl="https://www.instagram.com/p/CGkPtlBnJIm/?utm_source=ig_embed&utm_campaign=loading" />
        </div>
        <div className="instagram__post">
          <Insta postUrl="https://www.instagram.com/p/CG8s7MbHSFF/?utm_source=ig_embed&utm_campaign=loading" />
        </div>
      </div>
    </div>
  )
}

export default OurWork

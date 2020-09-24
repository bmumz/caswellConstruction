import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Quote = () => (
  <div id="quote">
    <div className="quote">
      <h2 className="quote__cta">Have a project you keep putting off?</h2>
      <h2 className="quote__cta">
        <AnchorLink href="#contact">
          <button className="button quote--button">Contact us</button>
        </AnchorLink>
      </h2>
      <h2 className="quote__cta">today for a FREE QUOTE!</h2>

      <div></div>
    </div>
  </div>
)

export default Quote

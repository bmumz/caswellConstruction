import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Quote = () => (
  <div id="quote">
    <div className="quote">
      <h2 className="quote__cta">Have a project you keep putting off?</h2>
      <h2 className="quote__cta">
        <button className="button quote--button">
          <AnchorLink href="#contact">Contact us</AnchorLink>
        </button>
      </h2>
      <h2 className="quote__cta">today for a FREE QUOTE!</h2>

      <div></div>
    </div>
  </div>
)

export default Quote

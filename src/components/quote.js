import React from "react"
import layoutStyles from "./layout/layout.module.scss"

const Quote = () => {
  return (
    <div id="quote">
      <div className={layoutStyles.quoteContainer}>
        <div className={layoutStyles.quote}>
          Have a project you keep putting off?
          <br />
          Request your{" "}
          <button className={layoutStyles.quoteButton}>FREE QUOTE</button>{" "}
          today!
        </div>
      </div>
    </div>
  )
}

export default Quote

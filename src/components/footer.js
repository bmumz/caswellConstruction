import React from "react"

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <p>
          ©{new Date().getFullYear()} Caswell Construction. All Rights Reserved.
        </p>
        <p>
          Hero image by{" "}
          <a href="https://www.freepik.com/photos/building">freepik.com</a>
        </p>
      </div>
    </div>
  )
}

export default Footer

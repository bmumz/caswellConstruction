import React from "react"
import { Link } from "gatsby"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

const NotFound = () => (
  <div>
    <Navigation />
    <div className="container">
      <h1>Error 404: Page Not Found!</h1>
      <h3 className="center">
        Return <Link to="/">home</Link>.
      </h3>
    </div>
    <Footer />
  </div>
)

export default NotFound

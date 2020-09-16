import React from "react"
import layoutStyles from "./layout/layout.module.scss"

const About = () => {
  return (
    <div>
      <div className={layoutStyles.infoContainer}>
        <h1 className={layoutStyles.title} id="about">
          About Us
        </h1>
        <div className={layoutStyles.paragraph}>
          We are the Caswell’s— a husband and wife home remodelling and small
          construction company. We spent most of our lives working various jobs
          and trying to find something we really enjoyed, until we both realized
          our true calling was building things, changing spaces and making them
          beautiful.
          <br />
          <br />
          We decided to open our business in June of 2020. Our goal is to create
          new and happy spaces, not only for our customers, but also for
          ourselves. So, as we help our wonderful customers, we also tackle
          projects in our own home. We document it all and show the good, the
          bad, and the ugly parts of the job, and of course the end results!
          <br />
          <br />
          We have a large family, so we understand how hard it is to transform a
          space on a budget. Whether it is indoor or outdoor, we have you
          covered. We offer a wide range of services, and we want to help you
          make your dream projects a reality, on a manageable and practical
          budget. Check us out on Facebook and Instagram to follow our journey.
        </div>
      </div>
    </div>
  )
}

export default About

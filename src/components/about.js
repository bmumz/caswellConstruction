import React from "react"
import bodyStyles from "./layout/body.module.scss"

const About = () => {
  return (
    <div>
      <div className={bodyStyles.infoContainer}>
        <h1 className={bodyStyles.title} id="about">
          About Us
        </h1>
        <div className={bodyStyles.paragraph}>
          We are the Caswell’s— a husband and wife home remodelling and small
          construction company.
        </div>
        <div className={bodyStyles.paragraph}>
          We spent most of our lives working various jobs and trying to find
          something we really enjoyed, until we both realized our true calling
          was building things, changing spaces and making them beautiful. We
          decided to open our business in June of 2020.
        </div>
        <div className={bodyStyles.paragraph}>
          Our goal is to create new and happy spaces, not only for our
          customers, but also for ourselves. So, as we help our wonderful
          customers, we also tackle projects in our own home. We document it all
          and show the good, the bad, and the ugly parts of the job, and of
          course the end results!
        </div>
        <div className={bodyStyles.paragraph}>
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

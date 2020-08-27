import React, { Component } from "react"
import ContactInput from "./contactInput"
import contactStyles from "../contact/contact.module.scss"

class ContactForm extends Component {
  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className={contactStyles.dynamic}>
        <div className={contactStyles.formContainer}>
          <form onSubmit={this.handleSubmit} className={contactStyles.form}>
            <ContactInput inputType="Name" />
            <ContactInput inputType="Email" />
            <ContactInput inputType="Subject" />
            <label htmlFor="Message" className={contactStyles.label}>
              Message
            </label>
            <textarea className={contactStyles.textbox}></textarea>
            <button className="submitbutton" onClick="" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm

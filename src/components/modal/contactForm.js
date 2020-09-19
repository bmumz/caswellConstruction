import React, { Component } from "react"
import axios from "axios"
import ContactInput from "./contactInput"
import contactStyles from "../contact/contact.module.scss"

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.onNameChange = this.onNameChange.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onSubjectChange = this.onSubjectChange.bind(this)
    this.onMsgChange = this.onMsgChange.bind(this)
    this.onSubmitEmail = this.onSubmitEmail.bind(this)
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  }
  onNameChange(event) {
    this.setState({ name: event.target.value })
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }
  onSubjectChange(event) {
    this.setState({ subject: event.target.value })
  }
  onMsgChange(event) {
    this.setState({ message: event.target.value })
  }

  onSubmitEmail = event => {
    event.preventDefault()
    let name = this.state.name
    let email = this.state.email
    let subject = this.state.subject
    let message = this.state.message

    let data = { name, email, subject, message }

    axios.post("http://localhost:8001/contact", {
      headers: { "Content-Type": "application/json" },
      body: {
        data,
      },
    })
  }

  render() {
    return (
      <div className={contactStyles.dynamic}>
        <h3>
          Contact Us
          <br />
          <u>For a Free Quote!</u>
        </h3>
        <form
          id="contact-form"
          onSubmit={this.onSubmitEmail}
          className={contactStyles.form}
          action="http://localhost:8001/contact"
          method="POST"
        >
          <ContactInput
            id="name"
            inputType="Name"
            required
            value={this.state.name}
            onChange={this.onNameChange}
            className={contactStyles.formInput}
          />
          <ContactInput
            id="email"
            inputType="Email"
            required
            value={this.state.email}
            onChange={this.onEmailChange}
            className={contactStyles.formInput}
          />

          <ContactInput
            id="subject"
            required
            inputType="Subject"
            value={this.state.subject}
            onChange={this.onSubjectChange}
            className={contactStyles.formInput}
          />
          <div className={contactStyles.formInput}>
            <textarea
              id="message"
              placeholder="Enter your message..."
              className={contactStyles.textbox}
              required
              value={this.state.message}
              onChange={this.onMsgChange}
            ></textarea>
            {/* </label> */}
          </div>

          <div className={contactStyles.buttonContainer}>
            <input
              className={contactStyles.button}
              type="submit"
              value="send message"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default ContactForm

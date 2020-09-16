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

  submitEmail = event => {
    alert("Submitted " + this.state.message)
    event.preventDefault()
    axios({
      method: "POST",
      url: "/send",
      data: this.state,
    }).then(response => {
      if (response.data.status === "success") {
        alert("Message Sent.")
        this.resetForm()
      } else if (response.data.status === "fail") {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" })
  }

  render() {
    return (
      <div className={contactStyles.dynamic}>
        <div className={contactStyles.formContainer}>
          <form
            id="emailform"
            onSubmit={this.submitEmail}
            className={contactStyles.form}
            method="POST"
          >
            <ContactInput
              inputType="Name"
              required
              value={this.state.name}
              onChange={this.onNameChange}
            />
            <ContactInput
              inputType="Email"
              required
              value={this.state.email}
              onChange={this.onEmailChange}
            />
            <ContactInput
              required
              inputType="Subject"
              value={this.state.subject}
              onChange={this.onSubjectChange}
            />

            <label htmlFor="Message" className={contactStyles.label}>
              Message
              <textarea
                className={contactStyles.textbox}
                required
                value={this.state.message}
                onChange={this.onMsgChange}
              ></textarea>
            </label>

            <div className={contactStyles.buttonContainer}>
              <button className={contactStyles.button} type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ContactForm

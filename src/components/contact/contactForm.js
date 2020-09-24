import React, { Component } from "react"
import axios from "axios"
import ContactInput from "./contactInput"
import EmailConfirmation from "../emailConfirmation"

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
      emailStatus: undefined,
      confirmation: "",
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

    this.setState({ emailStatus: true })

    axios
      .post("http://localhost:8001/contact", {
        headers: { "Content-Type": "application/json" },
        data: this.state,
      })
      .then(response => {
        if (response.data.status === "success") {
          this.resetForm()
          this.setState(() => ({
            confirmation:
              "Your message has been sent! We'll be in touch as soon as possible.",
          }))
        } else if (response.data.status === "fail") {
          this.setState(() => ({
            confirmation:
              "There was an error. Please contact us directly at caswellconstruction03@gmail.com.",
          }))
        }
      })
  }

  handleClearEmailStatus = () => {
    this.setState(() => ({ emailStatus: undefined }))
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" })
    document.getElementById("contact-form").reset()
  }

  render() {
    return (
      <div>
        <form
          id="contact-form"
          onSubmit={this.onSubmitEmail}
          className="form"
          action="http://localhost:8001/contact"
          method="POST"
        >
          <ContactInput
            id="name"
            inputType="Name"
            required
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <ContactInput
            id="email"
            inputType="Email"
            required
            value={this.state.email}
            onChange={this.onEmailChange}
          />

          <ContactInput
            id="subject"
            required
            inputType="Subject"
            value={this.state.subject}
            onChange={this.onSubjectChange}
          />

          <textarea
            id="message"
            placeholder="Enter your message..."
            required
            value={this.state.message}
            onChange={this.onMsgChange}
            className="form__input"
          />

          <input className="button " type="submit" value="send message" />
        </form>
        <EmailConfirmation
          emailStatus={this.state.emailStatus}
          handleClearEmailStatus={this.handleClearEmailStatus}
          confirmation={this.state.confirmation}
        />
      </div>
    )
  }
}

export default ContactForm

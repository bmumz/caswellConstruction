import React, { Component } from "react"
import axios from "axios"
import ContactInput from "./contactInput"
import EmailConfirmation from "./emailConfirmation"

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
      .post("https://caswell-construction-server.herokuapp.com/contact", {
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
          action="https://caswell-construction-server.herokuapp.com/contact"
          method="POST"
        >
          <ContactInput
            id="name"
            inputType="Name"
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
            inputType="Subject"
            value={this.state.subject}
            onChange={this.onSubjectChange}
          />

          <label htmlFor="Message" className="form__inputs form__label">
            Your Message:
            <textarea
              id="Message"
              placeholder="Enter your message..."
              required
              value={this.state.message}
              onChange={this.onMsgChange}
              className="form__input"
            />
          </label>

          <input
            className="button form__button"
            type="submit"
            value="let's talk!"
          />
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

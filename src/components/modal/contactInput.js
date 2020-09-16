import React, { Component } from "react"
import contactStyles from "../contact/contact.module.scss"

class ContactInput extends Component {
  render() {
    let { inputType, onChange } = this.props

    return (
      <div>
        <label className={contactStyles.label} htmlFor={inputType}>
          {inputType}
          <input
            required
            type={inputType}
            name={inputType}
            id={inputType}
            onChange={onChange}
            className={contactStyles.input}
          />
        </label>
      </div>
    )
  }
}

export default ContactInput
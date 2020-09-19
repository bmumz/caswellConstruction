import React, { Component } from "react"
import contactStyles from "../contact/contact.module.scss"

class ContactInput extends Component {
  render() {
    let { inputType, onChange } = this.props

    return (
      <div className={contactStyles.form}>
        {/* <label className={contactStyles.label} htmlFor={inputType}> */}
        {/* {inputType} */}
        <input
          required
          placeholder={inputType}
          type={inputType}
          name={inputType}
          id={inputType}
          onChange={onChange}
          className={contactStyles.input}
        />
        {/* </label> */}
      </div>
    )
  }
}

export default ContactInput

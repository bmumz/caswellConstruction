import React, { Component } from "react"

class ContactInput extends Component {
  render() {
    let { inputType, onChange } = this.props

    return (
      <div>
        <input
          required
          type={inputType}
          name={inputType}
          id={inputType}
          onChange={onChange}
          className="form__input"
        />
      </div>
    )
  }
}

export default ContactInput

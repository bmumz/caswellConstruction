import React, { Component } from "react"

class ContactInput extends Component {
  render() {
    let { inputType, id, onChange } = this.props

    return (
      <div>
        <label htmlFor={inputType} id={id} className="form__inputs form__label">
          {inputType}

          <input
            type="text"
            required
            placeholder={inputType}
            name={inputType}
            id={inputType}
            onChange={onChange}
            className="form__input"
          />
        </label>
      </div>
    )
  }
}

export default ContactInput

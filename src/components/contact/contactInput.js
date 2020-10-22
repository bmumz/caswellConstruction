import React, { Component } from "react"

class ContactInput extends Component {
  render() {
    let { inputType, id, onChange } = this.props

    return (
      <div>
        <label htmlFor={inputType} id={id} className="form__inputs">
          <p className="form__label">{inputType}</p>

          <input
            required
            placeholder={inputType}
            type={inputType}
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

import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

export default class MenuItem extends Component {
  render() {
    let { link, title } = this.props
    return <AnchorLink href={link}>{title}</AnchorLink>
  }
}

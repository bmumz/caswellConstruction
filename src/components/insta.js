import React, { Component } from "react"
import InstagramEmbed from "react-instagram-embed"

export default class Insta extends Component {
  render() {
    let { postUrl } = this.props
    return (
      <div>
        <InstagramEmbed
          className="instaPost"
          url={postUrl}
          maxWidth={320}
          hideCaption={true}
          containerTagName="div"
        />
      </div>
    )
  }
}

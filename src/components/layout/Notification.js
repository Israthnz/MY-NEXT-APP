import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Notification extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <h2>This is a Heading</h2>
        <p>This is a paragraph</p>
      </div>
    )
  }
}

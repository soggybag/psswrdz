import React, { Component } from 'react'

class PasswordView extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h1>{this.props.password}</h1>
      </div>
    )
  }
}

export default PasswordView

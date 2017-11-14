import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = { label: "", password: "" }
  }

  render() {
    return (
      <div>

        <label for="name-input">Name</label>
        <input
          id="name-input"
          placeholder="Name"
          type="text"
          onChange={(e) => {
            this.setState({ name: e.target.value })
          }}
          value={this.state.name} />

        <label for="password-input">Password</label>
        <input
          id="password-input"
          placeholder="Password"
          type="password"
          onChange={(e) => {
            this.setState({ password: e.target.value })
          }}
          value={this.state.password} />

        <button onClick={(e) => {

        }}>Save</button>
      </div>
    )
  }
}

export default Input

import React, { Component } from 'react';
import { connect } from 'react-redux'

import { generatePassword } from '../utils'
import { addPassword } from '../actions'

class PasswordGen extends Component {
  constructor(props) {
    super(props)
    this.state = { password: '', name: '', message: '' }
  }

  validateAndSubmit() {
    let message = ''
    let isValid = true
    if (this.state.password.length < 6) {
      isValid = false
      message += "Passwords should be at least 6 character\n"
    }
    if (this.state.name.length === 0) {
      isValid = false
      message += "You must enter a name"
    }
    if (isValid) {
      this.props.addPassword(this.state.name, this.state.password)
    }
    this.setState({ message })
  }

  render() {
    return (
      <div>

        <div>
          <input
            placeholder="name"
            onChange={(e) => {
              this.setState({ name: e.target.value })
            }}
            value={this.state.name}
          />
        </div>

        <div>
          <input
            placeholder="password"
            onChange={(e) => {
              this.setState({ password: e.target.value })
            }}
            value={this.state.password}
          />
        </div>

        <div><button onClick={(e) => {
          this.setState({ password: generatePassword() })
        }}>Generate</button></div>

        <div><button onClick={(e) => {
          this.validateAndSubmit()
        }}>Save</button></div>

        <div>
          {this.state.message}
        </div>

      </div>
    )
  }
}

// export default PasswordGen

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = () => {
  return {
    addPassword
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(PasswordGen)

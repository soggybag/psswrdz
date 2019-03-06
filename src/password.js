import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPassword } from './actions/'
import './password.css'

function random(n) {
  return Math.floor(Math.random() * n)
}

function randomChar() {
  var str = 'abcdefghijklmnopqrstuvwxyz';
  return str[random(str.length)];
}

function randomPassword(l) {
  let str = ''
  for (let i = 0; i < l; i++) {
    str += randomChar()
  }
  return str
}

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      password: 'p@ssw0rd', 
      name: 'My Password' 
    }
  }

  generatePassword() {
    const password = randomPassword(8)
    this.setState({ password })
  }

  render() {
    return (
      <div className="password">
        <div className="password-inputs">
          <input
            className="password-input"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            className="password-input"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="password-buttons">
          <button 
            className="password-button"
            onClick={(e) => {
              this.generatePassword()
            }}>Generate</button>
          <button 
            className="password-button"
            onClick={(e) => {
              this.props.addPassword(this.state.name, this.state.password)
            }}>
            Save
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = () => {
  return {
    addPassword
  }
}

export default connect(undefined, mapDispatchToProps())(Password)
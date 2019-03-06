import React, { Component } from 'react'
import { connect } from 'react-redux'
import './password-list.css'

class PasswordList extends Component {

  getList() {
    return this.props.passwords.map((pass, index) => {
      return (
        <div key={index} className="password-list-item">
          <div>name: <span className="password-list-item-name">{pass.name}</span></div> 
          <div><span className="password-list-item-password">{pass.password}</span></div>
        </div>)
    })
  }

  render() {
    return (
      <div className="password-list">
        {this.getList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    passwords: state.passwords
  }
}

export default connect(mapStateToProps)(PasswordList)
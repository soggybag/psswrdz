import React, { Component } from 'react'
import { connect } from 'react-redux'

import PasswordView from './password-view'

class PasswordList extends Component {

  getList() {
    return this.props.passwords.map((pass, index) => {
      return <PasswordView name={pass.name} password={pass.password} key={index} />
    })
  }

  render() {
    return (
      <div>
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

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps())(PasswordList)

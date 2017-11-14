import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Input from './input'
import PasswordGen from './password-gen'
import PasswordList from './password-list'


class RootNavigator extends Component {
  render () {
    return (
      <div>
        <h1>Psswrdz</h1>
        <PasswordGen />
        <PasswordList />
      </div>
    )
  }
}

export default RootNavigator

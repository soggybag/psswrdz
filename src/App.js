import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import { loadState, saveState } from './utils'

import RootNavigator from './components/root-navigator'

import './App.css'

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(() => {
  saveState(store.getState())
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </div>
    );
  }
}

export default App;

import { combineReducers } from 'redux'

import passwordReducer from './password-reducers'

export default combineReducers({
  passwords: passwordReducer
})

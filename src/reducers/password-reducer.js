import { ADD_PASSWORD, REMOVE_PASSWORD, UPDATE_PASSWORD } from '../actions'

import PasswordItem from '../models/password-item'

const passwordReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_PASSWORD:
      const { name, password } = action.payload
      return [...state, new PasswordItem(name, password)]

    case REMOVE_PASSWORD:
      const { index } = action.payload
      return [...state.slice(0, index), ...state.slice(index + 1)]

    case UPDATE_PASSWORD:
      return state.map((item, index) => {
        if (index !== action.payload.index) {
          return item
        }
        return { ...item, ...action.payload }
      })

    default:
      return state
  }
}

export default passwordReducer


let joe = { name:"joe", age:33 }
let newJoe = { age:34 }
let j2 = {...joe, ...newJoe} // { name:"joe", age:34 }

//
// // {name:"joe", age:33}
//
// function copyMatic(obj) {
//   let newObj = {}
//   for (let key in obj) {
//     if (typeof obj[key] === 'Object') {
//
//     }
//     newObj[key] = obj[key]
//   }
//
//   return newObj
// }

export const ADD_PASSWORD     = "ADD_PASSWORD"
export const REMOVE_PASSWORD  = "REMOVE_PASSWORD"
export const UPDATE_PASSWORD  = "UPDATE_PASSWORD"
export const SELECT_PASSWORD  = "SELECT_PASSWORD"

export const addPassword = (name, password) => {
  return {
    type: ADD_PASSWORD,
    payload: { name, password }
  }
}

export const removePassword = (index) => {
  return {
    type: REMOVE_PASSWORD,
    payload: { index }
  }
}

export const updatePassword = (index, name, password) => {
  return {
    type: UPDATE_PASSWORD,
    payload: { index, name, password }
  }
}

export const selectPassword = (index) => {
  return {
    type: SELECT_PASSWORD,
    payload: { index }
  }
}






//

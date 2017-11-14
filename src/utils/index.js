
// Random
export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

// Generate Password
export const generatePassword = (length = 9, block = 3) => {
  const minchar = 33
  const maxchar = 126
  let password = ""

  for (var i = 1; i <= length; ++i) {
    const c = String.fromCharCode(random(minchar, maxchar));
    password += c
    if (i % block === 0) {
      password += "-"
    }
  }

  return password;
}

// Pad With Zero
export const padWithZero = (n) => {
  return n > 9 ? `${n}` : `0${n}`
}

// Format Time
export const formatTime = (time) => {
  const secs = Math.floor(time / 1000)
  const mins = Math.floor(secs / 60)
  const hrs = Math.floor(mins / 60)

  const s = padWithZero(secs % 60)
  const m = padWithZero(mins % 60)
  const h = padWithZero(hrs % 60)
  return `${h}:${m}:${s}`
}

// Local Storage Constant
const PSSWRDZ_STATE = "PSSWRDZ_STATE"

// Load State
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(PSSWRDZ_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

// Save State
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(PSSWRDZ_STATE, serializedState)
  } catch(err) {
    // ...
  }
}

import { atom } from 'recoil'

const darkModeState = atom({
  key: 'darkMode',
  default: true,
})

export default darkModeState

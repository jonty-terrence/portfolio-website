import { MENU_CHOICE } from '../actions'

export default function menuChoice (state = null, action) {
  switch (action.type) {
    case MENU_CHOICE:
      return action.choice
    default:
      return state
  }
}

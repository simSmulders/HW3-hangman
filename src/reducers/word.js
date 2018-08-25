
import { NEW_GAME } from '../actions/newGame'
import { randomWord }  from '../lib/game'

export default (state = [], action = {}) => {
  switch(action.actiontype) {
    case NEW_GAME :
      return randomWord()
    default :
      return state
  }
}
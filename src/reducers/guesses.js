import { GUESS_LETTER } from '../actions/guessLetter'
import { NEW_GAME } from '../actions/newGame'


export default (state = [], { action } = {}) => {
  switch(action.type) {
    case NEW_GAME :
      return state = []
    case GUESS_LETTER :
      return state.concat(payload)
    default :
      return state
  }
}
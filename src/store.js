import reducer  from './reducers/word'
import { createStore } from 'redux'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, enhancer)

export default store

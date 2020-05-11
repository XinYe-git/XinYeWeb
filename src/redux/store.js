import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReduer from './reducer/index'
export default createStore(rootReduer,applyMiddleware(thunk))

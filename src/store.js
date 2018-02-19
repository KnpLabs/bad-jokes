import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics/index'
import { rootReducer } from './reducers/index'

const epicMiddleware = createEpicMiddleware(rootEpic)

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

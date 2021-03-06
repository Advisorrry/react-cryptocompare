import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './auth'

const rootReducer = combineReducers({
    authState: authReducer,
})

export default rootReducer

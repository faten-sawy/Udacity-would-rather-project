import { combineReducers } from 'redux'
import  questions  from './Questions'
import  users  from './Users'
import authedUser from './AuthedUser'

export default combineReducers({
    questions,
    users,
    authedUser,
})
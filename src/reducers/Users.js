
import { RECEIVE_USERS, ADD_USER_QUESTION, USER_ANSWER_QUESTION } from '../actions/users'

export default function users(state = {} ,action) {
    switch(action.type){
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            };        
        
        case ADD_USER_QUESTION :
            return{
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat([action.qid])
                }
            };
        case USER_ANSWER_QUESTION :
            const { authedUser, qid, Option } = action ;
            
            return{
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]:Option
                    }
                }
            }

        default:
            return state
        
                
    }
}
import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions(state = {}, action){
    switch( action.type ) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.question
            }

        case ADD_QUESTION :
            const { question } = action
            return {
                ...state,
                [question.id]: question

            };
        case SAVE_QUESTION_ANSWER :
            const { authedUser, qid, answer} = action 
            return{
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concate([authedUser])
                    }
                }

            };

        default :
            return state
    }
}
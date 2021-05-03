import { getInitialData } from '../utils/api'
import { receiveUsers, addUserQuestion,saveUserAnswer } from './users'
import { receiveQuestions,addQuestion ,saveAnswer } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'


export function handleInitialData() {
    return (dispatch) =>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading ())
        })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText){
    return(dispatch, getState) => {
        const { authedUser } = getState();
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => {
            dispatch(addQuestion(question));
            dispatch(addUserQuestion(authedUser, question.id))
        })

    }
}

export function handleQuestionAnswer(authedUser, qid, option)
{   return dispatch => {
    dispatch(saveUserAnswer(authedUser, qid, option))
    dispatch(saveAnswer(authedUser, qid, option))
    return _saveQuestionAnswer(authedUser, qid ,option)
}
}

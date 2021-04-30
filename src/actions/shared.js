import { getInitialData } from '../utils/api'
import { receiveUsers, addUserQuestion } from './users'
import { receiveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { addQuestion } from './questions'
import { _saveQuestion } from '../utils/_DATA'


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

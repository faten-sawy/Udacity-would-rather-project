export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS' 

export function receiveQuestions(question){
    return{
        type : RECEIVE_QUESTIONS ,
        question
    }
}
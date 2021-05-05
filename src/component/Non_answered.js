import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class NoneAnswered extends Component {   
    render(){
        const {questions, questionIds,authedUser} = this.props
        console.log(authedUser)
        console.log(questionIds)
       
        return(
            <div>
                <ul>
                    {}
                    {questionIds.map((id) => {
                        console.log(questions[id].optionOne)
                        console.log(questions[id].optionOne.votes)
                        if (
                            (!questions[id].optionOne.votes.includes(authedUser))&& 
                            (!questions[id].optionTwo.votes.includes(authedUser))&&
                            (questions[id].author !== authedUser))
                          {     
                            return(
                                <li key = {id}>
                                    <Question id ={id}/>
                                </li>
                                )
                            }
                            return(
                                console.log("Done None answered")
                            )     
                    })    
                    }
                </ul>
            </div>
        )
    }
}
function mapStateToProps({questions,authedUser}){
    //console.log(questions)  
    
    return{
        authedUser,
        questions,
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        
    }
}




export default connect(mapStateToProps)(NoneAnswered)
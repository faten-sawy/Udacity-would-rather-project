import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Answered extends Component {   
    render(){
        const {questions, questionIds,authedUser} = this.props
        return(
            <div>
                <ul>
                    {questionIds.map((id) => {
                        console.log(questions[id].optionOne.votes.length)
                        if  ((questions[id].author !== authedUser) &&
                            ((questions[id].optionOne.votes.includes(authedUser))|| 
                            (questions[id].optionTwo.votes.includes(authedUser))))
                            {
                                return(
                                    <li key = {id}>
                                      <Question id ={id}/>
                                    </li>
                                )
                            }
                            return(
                                console.log("Done")
                            )
                    })         
                }        
                </ul>
            </div>
        )
    }
}
function mapStateToProps({questions,authedUser}){
    console.log(questions)   
    return{
        authedUser,
        questions,
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        
    }
}

export default connect(mapStateToProps)(Answered)
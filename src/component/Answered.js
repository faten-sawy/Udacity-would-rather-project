import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Answered extends Component {   
    render(){
        const {questions, questionIds} = this.props
        return(
            <div>
                <ul>
                    {questionIds.map((id) => {
                        console.log(questions[id].optionOne.votes.length)
                        if  ((questions[id].optionOne.votes.length !==0 )|| 
                            (questions[id].optionTwo.votes.length !==0 ))
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
function mapStateToProps({questions}){
    console.log(questions)   
    return{
        questions,
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        
    }
}

export default connect(mapStateToProps)(Answered)
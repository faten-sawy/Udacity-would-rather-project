import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { Avatar } from '@material-ui/core'

class Question extends Component {
    render(){
    //console.log(this.props)
    const { question, user } = this.props
   // const answerOne = question.optionOne.votes
    //const answerTwo = question.optionTwo.votes
   // console.log(user)
   // console.log(answerOne,answerTwo)
        return(
            <div className="question"> 
                <div className="avatar">
                    <p>{user.name}</p>    
                    <img src={user.avatarURL} 
                            alt="this is avatar"
                            className="avatar-img"/> 
                </div>                    
                <div className="info">  
                    <h1>Would You Rather</h1>
                    
                    <p>{question.optionOne.text}...</p>
                    <button>Go to voting</button>
                </div> 
            </div>
        )
    }
}

function mapStateToProps({users,questions},{id}){
    const question = questions[id]
    const user =users[question.author]
    
    return{
        question,
        user,    
    }
}

export default connect(mapStateToProps)(Question)
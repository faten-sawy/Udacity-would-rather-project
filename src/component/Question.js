import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/shared'
import PropTypes from 'prop-types';

import{ Link ,Route,Redirect } from 'react-router-dom'
import Voting from './Voting'

import '../css/question.css'
import { saveAnswer } from '../actions/questions';

class Question extends Component {
    state = {
        viewVoting : false
    }
    handle =() => {
        this.setState({
            viewVoting: true
        })
    }
    
    render(){
    const { question, user} = this.props
    console.log(question)
    if (this.state.viewVoting===true) {
        return(           
            <Redirect to ={{
                pathname: `/voting/${question.id}`,
                state: {question : question}
            }}/>    
        )
    }

    
        return(
            <div className="question"> 
                <div className="avatar">      
                    <img src={user.avatarURL} 
                            alt="this is avatar"
                            className="avatar-img"/>
                    <p>{user.name}</p> 
                </div>
                <div className="space"></div>                    
                <div className="info">  
                    <h1>Would You Rather</h1>
                    
                    <p>A: {question.optionOne.text}</p>
                    <p>B: {question.optionTwo.text}</p>
                    <button onClick={this.handle} >Go to voting</button>
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
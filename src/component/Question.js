import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/question.css'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
    render(){
    const { question, user} = this.props
    //console.log(question)
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
                <Link to={`/questions/${question.id}`}>Go to voting</Link>
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

export default withRouter(connect(mapStateToProps)(Question))
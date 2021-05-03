import React, { Component } from 'react'
import { connect } from 'react-redux'
import Voting from './Voting'
import '../css/question.css'

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
                <button onClick={this.handle}>Go to voting</button>
            </div>
            {this.state.viewVoting===true ?
            <Voting id ={question.id}/> : null}
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
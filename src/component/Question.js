import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/_DATA'
//import { Avatar } from '@material-ui/core'

class Question extends Component {
    render(){
    //console.log(this.props)
    const { question, user, id } = this.props
    const question_id = id
        return(
            <div>    
                <div>
                    <img src={user.avatarURL}alt="this is avatar"/>                    
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
        user
    }
}

export default connect(mapStateToProps)(Question)
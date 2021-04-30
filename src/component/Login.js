import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

class Login extends Component {
    render(){
        const { userIds} = this.props
        return(
            <div className="loginContainer">
                <h1>Login As...</h1>
                <div className="loginUsers">
                    {userIds.map((id) => (
                        <div key={id}>
                            <User id={id} />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    console.log(users)
    return{
        userIds: Object.keys(users)
    }   
}

export default connect(mapStateToProps)(Login)
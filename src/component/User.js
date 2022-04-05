import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class User extends Component {
    state = {
        flag: false
    }

    handelLogin(id){

        this.props.dispatch(setAuthedUser(id))
        this.setState({
            flag: true
        })
    }
    render(){
        const { user, users} = this.props
        const { flag } = this.state

        if( flag === true){
            return(
                <Redirect to="/"/>
            )
        }
        return(           
                <Fragment>
                    <div className="user">
                        <img src ={users[user.id].avatarURL}
                            alt = "This is avatar"
                            className="avatarImg"/>
                        <h2>{users[user.id].name}</h2>
                        <button onClick={() => this.handelLogin(users[user.id].id)} >
                            log-in
                        </button>    
                    </div>
                </Fragment>
           
        )
    }
}

function mapStateToProps({users},{id}){
    const user = users[id]
    return{
        user,
        users,
    }

}

export default connect(mapStateToProps)(User)
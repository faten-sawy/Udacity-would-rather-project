import React ,{ Component } from 'react'
import { connect } from 'react-redux'
class Voting extends Component {
    render(){
        const {questions , users, authedUser} = this.props
        console.log(questions,users,authedUser)
        return(
            <div>
                Starter code
            </div>
        )
    }
}
function mapStateToProps({questions, users, authedUser}){
    return {
        questions,
        users,
        authedUser
    }   
}

export default connect(mapStateToProps)(Voting)
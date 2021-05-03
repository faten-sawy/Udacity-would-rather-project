import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/leaderboard.css'

class LeaderBoard extends Component {
    render(){
        console.log("hi")
        const { users } = this.props
        console.log(users)

        return(
            <div>
                {users.map((user) => (
                    <div className="leaderBoard" key={user.id}>
                        <img src={user.avatarURL} alt={`this is avatar of ${user.name}`}/>
                        <div className="info">
                            <h2>User</h2>
                            <p>@{user.name}</p>
                            <h2>Total Qiestion Asked</h2>
                            <p>{user.questions.length}</p>
                            <h2>Total Questions Answered</h2>
                            <p>{Object.keys(user.answers).length}</p>


                        </div>

                        
                    
                    </div>
                ))}

            </div>
        )
    }
}
const mapStateToProps = ({ users }) => {
    const total = user =>
      Object.keys(user.answers).length + user.questions.length;
    return {
      users: Object.values(users).sort((first, second) => total(second) - total(first))
    }
  };

export default connect(mapStateToProps)(LeaderBoard)
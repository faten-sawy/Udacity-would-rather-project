import React, { Component } from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

import '../css/navbar.css'
class Navbar extends Component {
    render(){
        const{ authedUser } = this.props
        console.log(authedUser)
        return(    
            <header>
                <nav>
                <ul>
                    <li><NavLink to='/' exact >Home</NavLink></li>
                    <li><NavLink to='/add'>New Question</NavLink></li>
                    <li><NavLink to="/leaderboard"> Leader Board</NavLink></li>
                    {authedUser ?
                    <li>Hi,{authedUser}</li> :
                    null
                    }
                    
                    
                    </ul>
                </nav>
            </header>            
        )
    }
}
function mapStateToProps({authedUser}){    
    return{
        authedUser
    }
}

export default connect(mapStateToProps)(Navbar)
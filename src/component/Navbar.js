import React, { Component } from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'


import '../css/navbar.css'
import NewQuestion from './NewQuestion'


class Navbar extends Component {
    render(){
        const{ authedUser } = this.props
        console.log(authedUser)
      //  console.log(id)
       
        return(    
            <header>
                <nav>
                    <ul>
                    <li><NavLink to='/' exact >Home</NavLink></li>
                    <li><NavLink to='/newQuestion'>New Question</NavLink></li>
                    {authedUser ?
                    <li>Hi,{authedUser}</li> :
                    null
                    }
                    {/* //render={() => <NewQuestion/>} */}
                    
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
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


import '../css/navbar.css'


class Navbar extends Component {
    render(){
        const{ authedUser } = this.props
        console.log(authedUser)
      //  console.log(id)
       
        return(    
            <header>
                <nav>
                    <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/new-question'>New Question</Link></li>
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
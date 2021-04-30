import React, { Component } from 'react'
import { BrowserRouter as Router ,Link } from 'react-router-dom'


class Navbar extends Component {
    render(){
        return(
            <Router>
                <div>
                <nav>
                    <Link to='/' >Home</Link>
                    <Link to='/new-question'>New Question</Link>
                </nav>

            </div>

            </Router>
            
        )
    }
}
export default Navbar
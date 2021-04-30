import React,{ Component } from 'react'
import { BrowserRouter as Router ,Link } from 'react-router-dom'

import Answered from './Answered'
import NoneAnswered from './Non_answered'
import Navbar from './Navbar'

class Dashboard extends Component{
   constructor(){
       super()
       this.state = {
           showAnswered : true ,
           showNonAnswered : false ,
       }
   }
   showAnsweredList(){
       this.setState(()=>({
           showAnswered: true,
           showNonAnswered: false
       }))
   }

   showNonAnswerdList(){
       this.setState((state) =>({
           showAnswered: false,
           showNonAnswered: true
       }))
   }
    render(){      
        return(
            <Router>
                <Navbar/>
                <div className="dashContainer">
                    <div className="dashLink">
                    <Link to ='/answered'
                         className="btnAns"
                        onClick={() =>this.showAnsweredList()}>
                            Answered Questions
                        </Link>
                <Link to='/non-answered'
                        className="btnNonAns"
                        onClick={()=> this.showNonAnswerdList()}>
                            Non-Answered Questions
                        </Link>

                    </div>
                <div className="dashBoard">
                

                {this.state.showAnswered?
                <Answered/> :
                null}

                {this.state.showNonAnswered?
                <NoneAnswered/> :
                null}                
            </div>
            </div>

            </Router>
            
        )
    }
}
export default Dashboard
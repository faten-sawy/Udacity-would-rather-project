import React,{ Component } from 'react'
import Answered from './Answered'
import NoneAnswered from './Non_answered'


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
            <div className="dashContainer">
                <div className="dashLink">
                <button to ='/answered'
                        className="btnAns"
                    onClick={() =>this.showAnsweredList()}>
                        Answered Questions
                    </button>
            <button to='/non-answered'
                    className="btnNonAns"
                    onClick={()=> this.showNonAnswerdList()}>
                        Non-Answered Questions
                    </button>

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
 )
    }
}
export default Dashboard
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import{ Redirect } from 'react-router-dom'
import Navbar from './Navbar'

import '../css/newQuestion.css'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        flag: false
    }

    handelChangeOptionOne = (e) => {
        e.preventDefault()
        const option = e.target.value
        this.setState({
            optionOne: option
        })
    }
    handelChangeOptionTwo = (e) => {
        e.preventDefault()
        const option = e.target.value
        this.setState({
            optionTwo: option
        })
    }
    handelSubmit = (e) =>{
        e.preventDefault()
        const { optionOne, optionTwo } = this.state 
        this.props.addQuestion(optionOne,optionTwo)
        this.setState({flag : true})
    }

    render(){
        const { optionOne, optionTwo } = this.state    
        if(this.state.flag){
          return  <Redirect to='/' />
        }
        return(
            <div>
                <Navbar/>
            
            <div className="formContainer">
                
                <h1>Would You Rather... ?</h1>
                <form onSubmit={this.handelSubmit}
                        className="qustionForm">
                    <label htmlFor="optionOne">A :</label>
                    <input type="text"
                            onChange={this.handelChangeOptionOne}
                            value={optionOne}
                            name="optionOne"  
                           placeholder="Enter option one for Your question "/>
                    <label htmlFor="optionTwo">B :</label>
                    <input type="text"
                            onChange={this.handelChangeOptionTwo}
                            value={optionTwo}
                            name="optionTwo"
                            placeholder="Enter option two for Your question "/>
                    <button  disabled={optionOne === '' || optionTwo === ''}>
                        Submit
                    </button>
                </form>

            </div>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        addQuestion:(optionOne, optionTwo) => {
            dispatch(handleAddQuestion(optionOne,optionTwo))
        }
        
    }
}

export default connect(null,mapDispatchToProps)(NewQuestion)
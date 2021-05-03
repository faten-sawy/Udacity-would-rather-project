import React ,{ Component } from 'react'
import { connect } from 'react-redux'
class Voting extends Component {
    componentDidMount(props){
       
         console.log("property_id",this.props.location.state.property_id);}

    render(){
        const {questions , users, authedUser} = this.props
       // console.log(questions,users,authedUser)
        

        return(
            <div>
                <div onChange={this.changeValue} className="voting">
                    {/* <h2>Choose between option A or option B</h2>
                    <label htmlFor="optionOne"> {question.optionOne.text}</label>
                    <input type="radio" value="optionOne" name="option"/>
                    <label htmlFor="optionTwo"> {question.optionTwo.text}</label>
                    <input type="radio" value="optionTwo" name="option"/> 
                    <button on onClick={this.SubmitValue(question.id)}>Submit</button> */}
                    </div>
                    <h1> H1</h1>
            </div>
        )
    }
}


export default connect()(Voting)
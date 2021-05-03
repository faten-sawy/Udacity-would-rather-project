import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/shared'


class Voting extends Component {
    state = {
        optionValue :'',
        showResult : false
    }
    onChange = (e) =>{
        let val = e.target.value
        this.setState({
            optionValue: val
        })
    }

    
    SubmitValue = (e) => {
        console.log("SubmitValue")
        if (this.state.optionValue !== ''){
            const { authedUser, question, handleQuestionAnswer } = this.props;
            console.log(authedUser)
            handleQuestionAnswer(authedUser,question.id, this.state.optionValue)
        }
        this.setState({
            showResult : true
        })
        console.log(this.state.showResult) ;
    }   
    render(){
        const { question } = this.props;
        console.log(question)
        let max = question.optionOne.votes.length +question.optionTwo.votes.length
        let optionOnePercent = (question.optionOne.votes.length / max) *100
        let optionTwoPercent = (question.optionTwo.votes.length / max) * 100
        console.log(max)
        console.log(optionOnePercent)
        return(
            <div>
                <h1>Choose between 2 options</h1>

                <div  className="voting">
                    <h2>Choose between option A or option B</h2>
                    <label htmlFor="optionOne" > {question.optionOne.text}</label>
                    <input type="radio" value="optionOne" name="option" onChange={this.changeValue}/>
                    <label htmlFor="optionTwo" > {question.optionTwo.text}</label>
                    <input type="radio" value="optionTwo" name="option" onChange={this.changeValue}/> 
                    <button type="submit" onClick={this.SubmitValue}>Submit</button>
                </div>
                {this.state.showResult === true ?
                  <div> 
                      <div className="progress">
                    <div className="progress-one" style={{ width: `${optionOnePercent}%` }}>{`${optionOnePercent}%`}</div>
                    <div className="progress-two" style={{ width: `${optionTwoPercent}%` }}>{`${optionTwoPercent}%`}</div>
                  </div>
                  <p>Total numbers Voting {max}</p>
    
                  </div>:null}
                  
                    
            </div>
        )
    }
}
function mapStateToProps({questions ,authedUser},{id}){
    const question = questions[id]
    return{
        question,
        authedUser
    }

}


export default connect(mapStateToProps,{handleQuestionAnswer})(Voting)
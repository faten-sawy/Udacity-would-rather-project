import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/shared'
import '../css/voting.css'


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
    const { question,user } = this.props;
    console.log(question)
    let max = question.optionOne.votes.length +question.optionTwo.votes.length
    let optionOnePercent = (question.optionOne.votes.length / max) *100
    let optionTwoPercent = (question.optionTwo.votes.length / max) * 100
    console.log(user)
    console.log(optionOnePercent)
    return(
        <div className="votingContainer">
            <h1>Would You Rather</h1>
            <img src={user.avatarURL} alt={`This is avata of ${user.name}`}/>

            <div  className="voting">
            <input type="radio" value="optionOne" name="option" onChange={this.changeValue}/>
                <label htmlFor="optionOne" >A :{question.optionOne.text}</label>
                <input type="radio" value="optionTwo" name="option" onChange={this.changeValue}/> 
                <label htmlFor="optionTwo" >B : {question.optionTwo.text}</label>                <button type="submit" onClick={this.SubmitValue}>Submit</button>
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
function mapStateToProps({questions ,authedUser,users},{match}){
  const { qid } =match.params
  const question = questions[qid]
  const user =users[question.author]
return{
    question,
    authedUser,
    user
}
}


export default connect(mapStateToProps,{handleQuestionAnswer})(Voting)
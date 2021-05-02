import React, { Component } from 'react'
import Fragment from 'render-fragment'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter, Route} from 'react-router-dom'
//import { LoadingBar } from 'react-redux-loading';
import Navbar from './Navbar'
import Routing from './Routing'
import Voting from './Voting'
import '../App.css';




class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render(){
    const { logginFlag } = this.props
    console.log(logginFlag)
    return (
      <BrowserRouter>
       <Fragment>
        <Navbar/>
        <Routing logginFlag={logginFlag}/>
       </Fragment>  
      </BrowserRouter>
      /* <div>
        <Voting/>
      </div> */
    );
  }
}
function mapStateToProps ({ authedUser }) {
  return {
    authedUser,
    logginFlag: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
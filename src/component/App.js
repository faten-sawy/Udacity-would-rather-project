import React, { Component } from 'react'

import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router} from 'react-router-dom'
//import { LoadingBar } from 'react-redux-loading';

import Routing from './Routing'

import '../App.css';




class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render(){
    const { logginFlag } = this.props
    console.log(logginFlag)
    return (
      <Router>
        <Routing logginFlag={logginFlag}/>      
      </Router>
      
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router} from 'react-router-dom'
//import { LoadingBar } from 'react-redux-loading';
import Navbar from './Navbar'
import Routing from './Routing'
import '../App.css';
import { Fragment } from 'react'



class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render(){
    const { logginFlag } = this.props
    console.log(logginFlag)
    return (
      <Router>
        <Fragment>
          <Navbar/>
          <Routing logginFlag={logginFlag}/>
        </Fragment>
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
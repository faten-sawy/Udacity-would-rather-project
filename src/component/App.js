import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
/* import { Route} from 'react-router-dom'
//import { LoadingBar } from 'react-redux-loading';
import Routing from './Routing'
import Login from './Login'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'

import Navbar from './Navbar' */

import Dashboard from './Dashboard'


import '../App.css';
import NewQuestion from './NewQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render(){
   // const { logginFlag } = this.props
    return (
      <div>
        {/* <Dashboard/> */}
      <NewQuestion/>
      </div>
      
      
    );
  }
}
function mapStateToProps ({ authedUser }) {
  return {
    logginFlag: authedUser === null
  }
}

export default connect(mapStateToProps,)(App);
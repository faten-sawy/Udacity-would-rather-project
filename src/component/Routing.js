import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Fragment from 'render-fragment'

import Login from './Login'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import LeaderBoard from './Leaderboard'
import Navbar from './Navbar'


function Routing(props) {
    const { logginFlag } = props
    return(
        <div>
            {!logginFlag && <Navbar/>}
            <Switch>
            
                { logginFlag ?
                    <Route exact component={Login}/> :

                    <Fragment>
                        
                        <Route path='/' exact component={Dashboard}/>
                        <Route path="/newQuestion" component={NewQuestion}/>
                        <Route path="/leaderBoard" component={LeaderBoard}/>
                        {/* <Route path="/voting/:qid" render={(props) => <Voting {...props}/>} /> */}        
                    </Fragment> 
                    
                }
            </Switch>
        </div>

    )
}

export default Routing
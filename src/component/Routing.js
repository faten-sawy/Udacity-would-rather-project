import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Fragment from 'render-fragment'

import Login from './Login'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import LeaderBoard from './Leaderboard'
import Navbar from './Navbar'
import Voting from './Voting'


function Routing(props) {
    const { logginFlag } = props
    return(
        <div>
            {!logginFlag && <Navbar/>}
            <Switch>
                { logginFlag ?
                    <Route  exact component={Login}/> :
                    <Fragment>   
                        <Route path='/' exact component={Dashboard}/>
                        <Route path ="/questions/:qid" component={Voting}/>
                        <Route path="/add" component={NewQuestion}/>
                        <Route path="/leaderboard" component={LeaderBoard}/>
                        {/* <Route path ="/questions/:qid" component={Voting}/> */}
                    </Fragment>       
                }
            </Switch>
        </div>

    )
}

export default Routing
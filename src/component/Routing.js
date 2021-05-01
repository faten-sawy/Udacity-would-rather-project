import React, { Fragment } from 'react'
import { Switch, Route} from 'react-router-dom'

import Login from './Login'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Voting from './Voting'

function Routing(props) {
    const { logginFlag } = props
    return(
        <div>
            <Switch>
                {
                    logginFlag ?
                    <Route path='/' exact component={Login}/> :

                    <Fragment>
                        <Route path='/' exact component={Dashboard}/>
                        <Route  path ="/newQuestion" render={() => (
                            <NewQuestion/>
                        )}/>
                        <Route path='/voting' render={() =>(
                            <Voting/>

                        )}></Route>
                    </Fragment> 
                    
                }
            </Switch>
        </div>

    )
}

export default Routing
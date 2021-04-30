import React, { Fragment } from 'react'
import { Switch, Route} from 'react-router-dom'

import Login from './Login'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'

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
                        <Route exact path ='/new-question' component={NewQuestion}/>
                    </Fragment> 
                    
                }
            </Switch>
        </div>

    )
}

export default Routing
import React, { Fragment } from 'react'
import { Switch, Route} from 'react-router-dom'

import Login from './Login'
import Dashboard from './Dashboard'

function Routing(props) {
    return(
        <div>
            <Switch>
                {
                    props.logginFlag ?
                    <Fragment>
                        <Route path='/' exact component={Dashboard}/>
                    </Fragment> :
                    <Route path='/' exact component={Login}/>
                }
            </Switch>
        </div>

    )
}

export default Routing
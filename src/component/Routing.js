import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Fragment from 'render-fragment'

import Login from './Login'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Voting from './Voting'

function Routing(props) {
    const { logginFlag } = props
    return(
        <div>
            <Switch>
                { logginFlag ?
                    <Route exact component={Login}/> :

                    <Fragment>
                        <Route path='/' exact component={Dashboard}/>
                        <Route path="/newQuestion" component={NewQuestion}/>
                        <Route path="/voting/:qid" render={(props) => <Voting {...props}/>} />        
                    </Fragment> 
                    
                }
            </Switch>
        </div>

    )
}

export default Routing
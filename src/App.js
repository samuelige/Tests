import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './Main'


const App = () => {
    return (
        <div className="app">
            {/* <Switch>
                <Route exact path='/home' component={Main}/>
            </Switch> */}
            <Main/>
        </div>
    )
}

export default App
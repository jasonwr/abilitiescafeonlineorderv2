import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { firebaseDB, userRef } from './firebase'
import { Products } from './components/'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <h1>This is the home page</h1>
                </Route>
                <Route exact path='/products'>
                    <Products/>
                </Route>
            </Switch>
        </Router>
    )
}
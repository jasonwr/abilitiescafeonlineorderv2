import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Products from './css/Products.css'
import { firebaseDB, userRef } from './firebase';
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
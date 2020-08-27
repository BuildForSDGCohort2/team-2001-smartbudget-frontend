import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Landing from './routes/landing';
import SignIn from './routes/signin';
import Dashboard from './routes/Dashboard';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/signup" component={SignIn}/>
                <Route exact path="/Dashboard" component={Dashboard}/>
              
            </Switch>
        </Router>
    )
}

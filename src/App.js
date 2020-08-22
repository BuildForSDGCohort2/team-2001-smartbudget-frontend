import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Landing from './routes/landing';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/" component={Landing}/>
              
            </Switch>
        </Router>
    )
}

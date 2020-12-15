import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MyFirstComponent from "./component/myFirstComponent";
import DigitalClock from "./digitalClock";
import ApiCall from "./apiCall";

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                        <Switch>
                            <Route path="/" exact>
                                <MyFirstComponent/>
                            </Route>
                            <Route path="/clock" exact>
                                <DigitalClock/>
                            </Route>
                            <Route path="/api-call" exact>
                                <ApiCall/>
                            </Route>
                        </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;
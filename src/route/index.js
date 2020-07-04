import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/login/index';
import Home from '../pages/home/index';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/home'component={Home} />
                <Redirect from='*' to='/' />
            </Switch>
        </Router>
    )
};

export default Routers;

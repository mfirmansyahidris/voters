import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import AdminLayout from "./layouts/Admin"
import AuthLayout from "./layouts/Auth"

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/admin" render={props => <AdminLayout {...props} />}/>
            <Route path="/auth" render={props => <AuthLayout {...props} />}/>
            <Redirect from="/" to="/admin" />
        </Switch>
    </BrowserRouter>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
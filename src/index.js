import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from './App';
import TransactionDetails from './transaction/tx_details'
ReactDOM.render(
    <BrowserRouter>
    <Route path="/" exact component={App} />
    <Route path="/activity/payment" exact component={TransactionDetails} />

    </BrowserRouter>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

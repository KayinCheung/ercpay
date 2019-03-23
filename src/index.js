import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma';
import Web3 from 'web3';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from './App';
import TransactionDetails from './transaction/tx_details'

import Header from './common/header.js'



window.addEventListener('load', function() {

    const web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
    console.log(web3.currentProvider);
    if(!web3.isConnected) {
        console.error("Not connected");

    }

});


ReactDOM.render(
    <BrowserRouter>
    <Route path="/" exact component={App} />
    <Route path="/activity/payment" exact component={TransactionDetails} />

    </BrowserRouter>

    , document.getElementById('root'));

ReactDOM.render(
    
    <Header/>
    ,document.getElementById('header'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

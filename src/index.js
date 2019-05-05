import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma';
import Web3 from 'web3';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch , Link} from "react-router-dom";

import App from './App';
import TransactionDetails from './transaction/tx_details'
import Home from './home/home';
import Fees from './pages/fees';
import Login from './getstarted/login';

import CreateInvoice from './transaction/create_invoice';

import SendPayment from './transaction/send_payment';
import SendPaymentConfirm from './transaction/send_payment_confirm';
import ProfilePage from './profile/profile_page';
import SetProfile from './dashboard/set_profile';





    
ReactDOM.render(
    <BrowserRouter>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" exact component={App} />

    <Route path="/fees" exact component={Fees} />
    <Route path="/login" exact component={Login} />

    <Route path="/activity/transaction/:type/:id" exact component={TransactionDetails} />

    <Route path="/activity/create_invoice/:address" exact component={CreateInvoice} />
    <Route path="/activity/send_payment" exact component={SendPayment} />
    <Route path="/activity/confirm_payment" exact component={SendPaymentConfirm} />
    <Route path="/activity/set_profile" exact component={SetProfile} />

    <Route path="/profile/:address" exact component={ProfilePage} />





    </BrowserRouter>

    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

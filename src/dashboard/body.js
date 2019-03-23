import React, { Component } from 'react';
import '../App.css';

import Table from './table.js';

class Dashboard extends Component {

  render() {
    return (
      <section class="section">
      
     
      <div className="container" style={{width: 960}}>
      <div className="columns">
      <div className="column is-one-third">
        
        <FundsAvailable/>
        <FundsReceivable/>
        <SendPayment/>
        <CreateInvoice/>
        </div>
        
        <div className="column">
        <div className="box">


       
        <Table/>
        </div>
        </div>
        </div>
        </div>
        
        </section>
        
    );
  }
}

class FundsAvailable extends Component {

  render() {
    return (
      <div className="box">
        <p className="is-size-4 has-text-weight-semibold">Funds Available</p>
        <br/>
        <p>Wallet Balance: 81 DAI</p>
        <p>ERCPay Balance: 192 DAI</p>
        <br/>
        <a className="button is-primary">Withdraw DAI</a>
        </div>

    );
  }
}

class FundsReceivable extends Component {

  render() {
    return (
      <div className="box">
      <p className="is-size-4 has-text-weight-semibold">Funds Receivable</p> 
      <br/>
      <p>Funds Receivable: 81 DAI</p>
   
      <br/>
      <a className="button is-primary">View Receivables</a>
      </div>
 

    );
  }
}

class SendPayment extends Component {

  render() {
    return (
      <div className="box">

      <p className="is-size-4 has-text-weight-semibold">Payments</p><br/>
      <p>Send payment for goods or services with buyer protection.</p><br/>
      <a className="button is-primary">Send Payment</a>
      </div>
 

    );
  }
}

class CreateInvoice extends Component {

  render() {
    return (
      <div className="box">

        <p className="is-size-4 has-text-weight-semibold">Invoicing</p><br/>
        <p>Your customers can pay your invoice through the invoice link you send them.</p><br/>
        <a className="button is-primary">Create Invoice</a>
        </div>
 

    );
  }
}

export default Dashboard;

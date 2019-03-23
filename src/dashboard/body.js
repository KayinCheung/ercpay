import React, { Component } from 'react';
import '../App.css';
import container from 'react-bulma-components/lib/components/container';
import tile from 'react-bulma-components/lib/components/tile';
import box from 'react-bulma-components/lib/components/box';
import button from 'react-bulma-components/lib/components/button';
import section from 'react-bulma-components/lib/components/section';

import columns from 'react-bulma-components/lib/components/columns';
import Table from './table.js';

class Dashboard extends Component {

  render() {
    return (
      <section class="section">
      
     
      <div className="container" style={{width: 960}}>
      <div className="columns">
      <div className="column is-one-third">
        <div className="box">
        <h2 className="title">Funds Available</h2>
        
        <p>Wallet Balance: 81 DAI</p>
        <p>ERCPay Balance: 192 DAI</p>

        <a className="button is-primary">Withdraw DAI</a>
        </div>
        
        <div className="box">
        <h2>Funds Receivable</h2> 
        <p>81 DAI</p>
   
        <a className="button is-primary">View Receivables</a>

        <p>Funds in escrow will be available to withdraw once your customer release funds, or 30 days after invoice payment.</p>    
        </div>
   
        <div className="box">

        <p className="title">Pay</p>
        <p>Send payment for goods or services with buyer protection.</p>
        <a className="button is-primary">Send Payment</a>
</div>
<div className="box">

        <p className="title">Invoicing</p>
        <p>Your customers can pay your invoice through the invoice link you send them.</p>
        <a className="button is-primary">Create Invoice</a>
        </div>
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

export default Dashboard;

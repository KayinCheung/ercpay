import React, { Component } from 'react';
import '../App.css';

import Header from '../common/header.js'

class TransactionDetails extends Component {

  render() {
    const user = 'userrr';
    const amount = '217';
    const role = 'Buyer';
    let TransactionAction;
    if (role === 'Buyer'){
      TransactionAction = <TxActionBuyer/>
    } else {
      TransactionAction = <TxActionSeller/>
    }

    return (
      <div>
        <Header/>
        
      <section className="section">
      <div className="container" style={{width:790}}>
      <a className="has-text-left" onClick={() => window.history.back()}>&larr; Back to Dashboard</a>
      </div>
      
      <br/>

      <div className="container box" style={{width:800}}>
      
      <nav className="level">
      <div className="level-left">
        <div className="level-item">
        <p>Transaction Details</p>
        
        </div>
        </div>
        <div className="level-right">
        <div className="level-item">
        <p>Payment sent 20/2/2019 8.56pm</p>
        
        </div>
        </div>
        </nav>
        <hr></hr>
        <p className="has-text-centered is-size-3">217.50 DAI</p>

        <div className="columns">

        <div className="column has-text-left">
       
        <b>Payment from</b>
        <p>{user}</p>
        <p>88 completed payments</p>
        </div>
        <div className="column is-narrow"><br/>
          <span className="icon">
          <i className="fas fa-arrow-right"></i>
          </span>
          </div>
        <div className="column has-text-right"> 
        <b>Payment to</b>
        <p>{user}</p>
        <p>57 completed transactions</p>
        </div>
        </div>

        <div className="has-text-centered">
        <b>Escrowed By</b>
        <p>ERCPAY</p>
        <p>1385 transactions escrowed</p>
        </div>
        <br/>
        <div className="buttons is-centered">
        <a className="button is-primary">
          <span className="icon">
          <i className="far fa-user"></i>
          </span>
          <span>View Buyer Profile</span>
        </a>
        <a className="button is-primary">
          <span className="icon">
          <i className="far fa-user"></i>
          </span>
          <span>View Seller Profile</span>
        </a>
        <a className="button is-primary">
          <span className="icon">
          <i className="far fa-user"></i>
          </span>
          <span>View Escrow Profile</span>
        </a>
        </div>

        <hr></hr>

        <b>Payment Details</b><br/><br/>


    
        <table className="table">
          <tr>
          <th style={{width:150}}>Gross Amount</th>
          <td>{amount} DAI</td>
          </tr>
          <tr>
          <th>Fee</th>
          <td>2 DAI</td>
          </tr>
      
          <tr>
          <th>Net amount</th>
          <td>{amount-2} DAI</td>
          </tr>

          
          <tr>
          <th>Note from buyer</th>
          <td>limit to 100 charlimit to 100 charlimit to 100 charlimit to 100 charlimit to 100 charlimit to 100 charlimit to 100 charlimit to 100 charlimit to 100 charlimit to 100 charlimit to 100 char</td>
          </tr>
          </table>
        <hr/>
       
       
        <p className="has-text-left">Transaction Status</p>
       <br/>
       <p className="buttons is-centered">
        <a className="button is-primary is-large">
          <span className="icon">
          <i className="fas fa-plane"></i>
          </span>
          <span>In Escrow</span>
        </a>
        </p>
        <hr/>
        {TransactionAction}

        </div>
   
        
        </section>
      
        </div>
        
    );
  }
}

export default TransactionDetails;


class TxActionSeller extends Component {

  render() {
    return (
      <div>
      <p className="has-text-left">Transaction Action</p>
      <br/>
      <p className="buttons is-centered">
      <a className="button is-primary">
         <span className="icon">
         <i class="fas fa-dollar-sign"></i>
         </span>
         <span>Claim Funds</span>
       </a>
       </p>
     
      <p className="buttons is-centered">
     
       <a className="button is-info">
         <span className="icon">
         <i class="fas fa-undo-alt"></i>
         </span>
         <span>Refund</span>
       </a>

       <a className="button is-info">
         <span className="icon">
         <i class="fas fa-phone"></i>
         </span>
         <span>Contact Us</span>
       </a>
       </p>
      </div>
    );
  }
}

class TxActionBuyer extends Component {

  render() {
    return (
      <div>
      <p className="has-text-left">Transaction Action</p>
      <br/>
      <p className="buttons is-centered">
      <a className="button is-primary">
         <span className="icon">
         <i class="fas fa-dollar-sign"></i>
         </span>
         <span>Release Funds</span>
       </a>
 
       <a className="button is-info">
         <span className="icon">
         <i class="fas fa-phone"></i>
         </span>
         <span>Contact Us</span>
       </a>
       </p>
      </div>
    );
  }
}
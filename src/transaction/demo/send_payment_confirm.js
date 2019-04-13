import React, { Component } from 'react';
import '../App.css';

import Header from '../common/header.js'
import { Link } from "react-router-dom";
import Web3 from 'web3';

class SendPaymentConfirm extends Component {

  
  constructor(props){
    super(props)
    this.state = {
        address: ''
    }
}

componentDidMount(){
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try { 
           window.ethereum.enable().then(() => {
               // User has allowed account access to DApp...
              this.setState({address: web3.eth.accounts[0]})
              setInterval(() => {
                if (web3.eth.accounts[0] !== this.state.address) {
                    window.location.href = "/login"
                }
              }, 100);
           });
           
        } catch(e) {
           // User has denied account access to DApp...
        }
     }

     else {
        window.location.href = "/login";
     }

}

  render() {
    const user = 'userrr';
    const amount = '217';
    const role = 'Buyer';
   

    return (
      <div>
        <Header/>
        
      <section className="section">
      <div className="container" style={{width:790}}>
      <a className="has-text-left" onClick={() => window.history.back()}>&larr; Back</a>
      </div>
      
      <br/>

      <div className="container box" style={{width:800}}>
      
      <nav className="level">
      <div className="level-left">
        <div className="level-item">
        <p>Confirm Payment</p>
        
        </div>
        </div>
        <div className="level-right">
        <div className="level-item">
        <p></p>
        
        </div>
        </div>
        </nav>
      

  
        <hr></hr>
        <p className="has-text-centered is-size-4">You are sending</p><br/>

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
          <span>Confirm and Send payment</span>
        </a>
       
        </div>
     
        
</div>

        </section>
      
        </div>
        
    );
  }
}

export default SendPaymentConfirm;


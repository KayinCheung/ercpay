import React, { Component } from 'react';
import '../App.css';

import Table from './table.js';
import Header from '../common/header.js'
import { Link } from "react-router-dom";
import Web3 from 'web3';
import constants from '../common/constants'
class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
        address: '',
        balance: 0
    }
}

componentDidMount(){
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try { 
           window.ethereum.enable().then(() => {
               // User has allowed account access to DApp...
            const contract = web3.eth.contract(constants.abi).at(constants.address)
            console.log(contract)
             this.setState({address: web3.eth.accounts[0]})
             web3.eth.getBalance(web3.eth.accounts[0], (error, result) => {
                this.setState({balance: web3.fromWei(result, "ether").toNumber()})
                
             });




              setInterval(() => {
                if (web3.eth.accounts[0] !== this.state.address) {
                  window.location.reload();
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
    return (
      <div>
      <Header/>
      <section class="section">
      
     
      <div className="container" style={{width: 960}}>
      <div className="columns">
      <div className="column is-one-third">
        
        <FundsAvailable balance={this.state.balance}/>
        <FundsReceivable/>
        <Profile/>
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
        </div>
        
    );
  }
}

class Profile extends Component {

  render() {
    return (
      <div className="box">
        <p className="is-size-4 has-text-weight-semibold">Your Profile</p>
        <br/>
        <p>Username222</p>
        <p>Optional Description</p>
        <p>Update profile</p>
        <br/>
        <a className="button is-primary" href="/activity/set_profile">Update Profile</a>
        </div>

    );
  }
}

class FundsAvailable extends Component {

  
  render() {
    return (
      <div className="box">
        <p className="is-size-4 has-text-weight-semibold">Address Balance</p>
        <br/>
        <p className="is-size-3">{this.props.balance} ETH</p>
        <br/>
        </div>

    );
  }
}

class FundsReceivable extends Component {

  render() {
    return (
      <div className="box">
      <p className="is-size-4 has-text-weight-semibold">ERCPay Funds</p> 
      <br/>
      <p className="is-size-3">1.2412 ETH</p>
   
      <br/>
      <a className="button is-primary">Withdraw Funds</a>
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
      <Link to="/activity/send_payment"><p className="button is-primary">Send Payment</p></Link>
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

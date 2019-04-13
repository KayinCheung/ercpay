import React, { Component } from 'react';
import '../App.css';

import Table from './table.js';
import Header from '../common/header.js'
import { Link } from "react-router-dom";
import Web3 from 'web3';

import constants from '../common/constant.js'
import returnTxMap from '../common/formula.js'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
        address: '',
        balance: 'Loading...',
        customerLedger: [],
        merchantLedger: [],
        customerLedgerLength: 0,
        merchantLedgerLength: 0,
        funds: 'Loading...'
    }
}

componentDidMount(){
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try { 
           window.ethereum.enable().then(() => {
               // User has allowed account access to DApp...

              //Load contract
             const contract = web3.eth.contract(constants.abi).at(constants.address)
              
             //Get ETH balance of address
             web3.eth.getBalance(web3.eth.accounts[0], (error, result) => {
                this.setState({balance: web3.fromWei(result, "ether").toNumber()})
             });



             contract.EscrowFee.call(web3.eth.accounts[0], (error, result) => {
              this.setState({fee: result/10.0})
              console.log(`fee ${result}`)
            });

            
            contract.Funds.call(web3.eth.accounts[0], (error, result) => {
              this.setState({funds: result/(10**18)})
              console.log(`funds ${result}`)
            });

            //Get length of customer ledger
            contract.getCustomerLedgerLength.call(web3.eth.accounts[0], (error, result) => {
              console.log(`customer ledger length ${result}`)
              this.setState({customerLedgerLength: result});
            //Loop through customer ledger from the end of list, get individual transaction id
            for (let i = 0; i < this.state.customerLedgerLength; i++){
              contract.CustomerLedger.call(web3.eth.accounts[0],i, (error, result) => {
                console.log(result)

                //For individual transaction id, get the transaction from TransactionLedger
                contract.getTransaction.call(result, (error, result) => {
                  const tx = returnTxMap(result)
                  console.log(tx);
                  let newLedger = this.state.customerLedger;
                  newLedger.push(tx);
                  this.setState({customerLedger: newLedger})
                  //console.log(web3.fromWei(tx['value'], 'ether'))
                })
              })
            }
            });

            //Get length of merchant ledger
            contract.getMerchantLedgerLength.call(web3.eth.accounts[0], (error, result) => {
              console.log(`merchant ledger length ${result}`)
              this.setState({merchantLedgerLength: result});
            //Loop through merchant ledger from the end of list, get individual transaction id
            for (let i = 0; i < this.state.merchantLedgerLength; i++){
              contract.MerchantLedger.call(web3.eth.accounts[0],i, (error, result) => {
                console.log(result)

                //For individual transaction id, get the transaction from TransactionLedger
                contract.getTransaction.call(result, (error, result) => {
                  const tx = returnTxMap(result)
                  console.log(tx);
                  let newLedger = this.state.merchantLedger;
                  newLedger.push(tx);
                  this.setState({merchantLedger: newLedger})
                  //console.log(web3.fromWei(tx['value'], 'ether'))
                })
              })
            }
            });


            //Save state
             this.setState({
              address: web3.eth.accounts[0],
              contract: contract
            })

            //On address change, reload page.
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
        <FundsReceivable funds={this.state.funds}/>
        <Profile/>
        <SendPayment/>
        <CreateInvoice/>
        </div>
        
        <div className="column">



        <div className="box">


       
        <Table customerLedger={this.state.customerLedger} merchantLedger={this.state.merchantLedger}/>
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
      <p className="is-size-3">{this.props.funds} ETH</p>
   
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

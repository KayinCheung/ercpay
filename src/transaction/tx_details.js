import React, { Component } from 'react';
import '../App.css';

import Header from '../common/header.js'
import Web3 from 'web3';
import { Link } from "react-router-dom";

import constants from '../common/constant.js'
import util from '../common/util.js'
class TransactionDetails extends Component {

  constructor(props){
    super(props)
    this.state = {
      buyerName: '',
      sellerName: '',
      escrowName: '',
      tx: new util.txTemplate(),
      txid: 0,
      buyerTxCount: '',
      sellerTxCount: '',
      escrowTxCount: '',
      ledgerid: 0
    }
}

componentDidMount(){
  console.log(this.props.match.params.id) 
  this.setState({
    txid: this.props.match.params.id,
    type: this.props.match.params.type
  })
  if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try { 
         window.ethereum.enable().then(() => {
             // User has allowed account access to DApp...
            const contract = web3.eth.contract(constants.abi).at(constants.address)
            const profile_contract = web3.eth.contract(constants.profile_abi).at(constants.profile_address)
             
            this.setState({
              address: web3.eth.accounts[0],
              contract: contract,
              profile_contract: profile_contract
            })

            console.log(web3.eth.accounts[0])
            console.log(this.props.match.params.id)
            
              contract.CustomerLedger.call(web3.eth.accounts[0],this.props.match.params.id, (error, id) => {

                //For individual transaction id, get the transaction from TransactionLedger
                contract.getTransaction.call(id, (error, result) => {
                console.log(result)
                const tx = util.returnTxMap(id,result)
                this.setState({
                  tx: tx,
                  ledgerid: id
                })

                console.log(tx)
                this.loadProfileName('buyer', tx.buyer)
                this.loadProfileName('seller', tx.seller)
                this.loadProfileName('escrow', tx.escrow)
                this.loadCount(tx.buyer, tx.seller, tx.escrow)

              
                })
              })

            setInterval(() => {
              if (web3.eth.accounts[0] !== this.state.address) {
                  window.location.reload()
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

  loadProfileName(userType,address){
    this.state.profile_contract.getProfileLength.call(address, (error, result) => {
      if (parseInt(result) === 0){
        
        return
      }
      this.state.profile_contract.ProfileDB.call(address, (result - 1), (error, result) => {
        switch(userType){
          case 'buyer': 
              this.setState({buyerName: result})
              break
          case 'seller':
              this.setState({sellerName: result})
              break
          case 'escrow':
              this.setState({escrowName: result})
              break
          default:
            break
        }
      })
    })
  }

  loadCount(buyer, seller, escrow){
    this.state.contract.getCustomerLedgerLength.call(buyer, (error, result) => {
      this.setState({buyerTxCount: parseInt(result)})
    })
    this.state.contract.getMerchantLedgerLength.call(seller, (error, result) => {
      this.setState({sellerTxCount: parseInt(result)})
    })
    this.state.contract.getEscrowLedgerLength.call(escrow, (error, result) => {
      this.setState({escrowTxCount: parseInt(result)})
    })
  }

  render() {
    console.log(this.state.txid)
  
   
    let TransactionAction;
    if (this.state.type === 'buyer'){
      TransactionAction = <TxActionBuyer 
      contract={this.state.contract}
      address={this.state.address}
      ledgerid={this.state.ledgerid}
      tx={this.state.tx}
      />
    } else {
      TransactionAction = <TxActionSeller 
      contract={this.state.contract}
      address={this.state.address}
      ledgerid={this.state.ledgerid}
      tx={this.state.tx}
      />
    }

    const buyer_profile_url = `/profile?address=${this.state.tx['buyer']}`
    const seller_profile_url = `/profile?address=${this.state.tx['seller']}`

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
        <p className="has-text-centered is-size-3">{this.state.tx.value} ETH</p>

        <div className="columns">

        <div className="column has-text-left">
       
        <b>Payment from</b>
        <p>{this.state.buyerName[0]}</p>
        <p>{this.state.buyerTxCount} completed payments</p>
        </div>
        <div className="column is-narrow"><br/>
          <span className="icon">
          <i className="fas fa-arrow-right"></i>
          </span>
          </div>
        <div className="column has-text-right"> 
        <b>Payment to</b>
        <p>{this.state.sellerName[0]}</p>
        <p>{this.state.sellerTxCount} completed transactions</p>
        </div>
        </div>

        <div className="has-text-centered">
        <b>Escrowed By</b>
        <p>{this.state.escrowName[0]}</p>
        <p>{this.state.escrowTxCount} transactions escrowed</p>
        </div>
        <br/>
        <div className="buttons is-centered">
        <Link to={buyer_profile_url}><p className="button is-primary">
          <span className="icon">
          <i className="far fa-user"></i>
          </span>
          <span>View Buyer Profile</span>
        </p></Link>
        &nbsp;
        <Link to={seller_profile_url}>
        <p className="button is-primary">
          <span className="icon">
          <i className="far fa-user"></i>
          </span>
          <span>View Seller Profile</span>
        </p></Link>
      
        </div>

        <hr></hr>

        <b>Payment Details</b><br/><br/>


    
        <table className="table">
          <tbody>
          <tr>
          <th style={{width:150}}>Gross Amount</th>
          <td>{this.state.tx.value} ETH</td>
          </tr>
          <tr>
          <th>Fee</th>
          <td>{this.state.tx.fee} ETH</td>
          </tr>
      
          <tr>
          <th>Net amount</th>
          <td>{this.state.tx.value - this.state.tx.fee} ETH</td>
          </tr>

          
          <tr>
          <th>Note from buyer</th>
          <td>
            {this.state.tx.notes}
          </td>
          </tr>
          </tbody>
          </table>
        <hr/>
       
       
        <p className="has-text-left">Transaction Status</p>
       <br/>
       <p className="buttons is-centered">
        <button className="button is-primary is-large">
          <span className="icon">
          <i className="fas fa-plane"></i>
          </span>
          <span>{this.state.tx.status}</span>
        </button>
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
      <RefundButton 
      contract={this.props.contract}
      address={this.props.address}
      txid={this.props.ledgerid}
      tx={this.props.tx}/>

      <RaiseDisputeButton
       contract={this.props.contract} 
       address={this.props.address} 
       txid={this.props.ledgerid}
       tx={this.props.tx}/>

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
      <ReleaseFundsButton 
      contract={this.props.contract}
      address={this.props.address}
      txid={this.props.ledgerid}
      tx={this.props.tx}
      />
      <RaiseDisputeButton 
      contract={this.props.contract}
      address={this.props.address}
      txid={this.props.ledgerid}
      tx={this.props.tx}
      />

       </p>
      </div>
    );
  }
}

class ReleaseFundsButton extends Component {
  releaseFunds(){
    const web3 = new Web3(window.ethereum)
    const contract = web3.eth.contract(constants.abi).at(constants.address)
    console.log(this.props.txid)
    contract.releaseFunds.sendTransaction(
      this.props.txid,
      {
        from: this.props.address
      },
      (error, result) => {
        console.log(result)
      }
    )
  }
  
    render() {

      if (this.props.tx.status === util.status()[0] || this.props.tx.status === util.status()[3]){
        return (
          <button className="button is-primary" onClick={this.releaseFunds.bind(this)}>
          <span className="icon">
          <i className="fas fa-dollar-sign"></i>
          </span>
          <span>Release Funds</span>
          </button>
        );
      }

      else{
        return (
          <button className="button is-primary" disabled>
          <span className="icon">
          <i className="fas fa-dollar-sign"></i>
          </span>
          <span>Release Funds</span>
          </button>
        );
      }

     
    }
  }

  class RefundButton extends Component {
    refund(){
      const web3 = new Web3(window.ethereum)
      const contract = web3.eth.contract(constants.abi).at(constants.address)
      console.log(this.props.txid)
      contract.refundCustomer.sendTransaction(
        this.props.txid,
        {
          from: this.props.address
        },
        (error, result) => {
          console.log(result)
        }
      )
    }
    
      render() {

        if (this.props.tx.status === util.status()[0] || this.props.tx.status === util.status()[3]){
          return (
            <a className="button is-primary" onClick={this.refund.bind(this)}>
            <span className="icon">
            <i className="fas fa-dollar-sign"></i>
            </span>
            <span>Refund Buyer</span>
            </a>
          );
        }

        else{
          return (
            <a className="button is-primary" disabled>
            <span className="icon">
            <i className="fas fa-dollar-sign"></i>
            </span>
            <span>Refund Buyer</span>
            </a>
          );
        }


      }
    }

class RaiseDisputeButton extends Component {
    raiseDispute(){
      const web3 = new Web3(window.ethereum)
      const contract = web3.eth.contract(constants.abi).at(constants.address)
      console.log(this.props.txid)
      contract.raiseDispute.sendTransaction(
        this.props.txid,
        {
          from: this.props.address
        },
        (error, result) => {
          console.log(result)
        }
      )
    }
    
      render() {

        if (this.props.tx.status === util.status()[0] || this.props.tx.status === util.status()[3]){
          return ( 
            <a className="button is-info" onClick={this.raiseDispute.bind(this)}>
            <span className="icon">
            <i className="fas fa-phone"></i>
            </span>
            <span>Raise Dispute</span>
            </a>
          );
        }
        
        else{
          return ( 
            <a className="button is-info" disabled>
            <span className="icon">
            <i className="fas fa-phone"></i>
            </span>
            <span>Raise Dispute</span>
            </a>
          );
        }
        
      }
    }
import React, { Component } from 'react';
import '../App.css';
import '../index.css';

import Table from './table.js';
import Header from '../common/header.js'
import { Link } from "react-router-dom";
import Web3 from 'web3';

import constants from '../common/constant.js'
import util from '../common/util.js'
import TxConfirmation from '../common/txconfirmation.js'
import _ from 'lodash'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
        address: '',
        balance: 0,
        customerLedger: [],
        merchantLedger: [],
        customerLedgerLength: 0,
        merchantLedgerLength: 0,
        funds: 0,

        profileName: 'Loading...',
        profileInfo: 'Loading...',

        customerLedgerName: [],
        merchantLedgerName: [],

        customerStart: 0,
        merchantStart: 0,
        customerEnd: 0,
        merchantEnd: 0,

        sentid: null,
        receiveid: null
    }
}

componentDidMount(){
    const urlParams = new URLSearchParams(window.location.search);
    const sentid = urlParams.get('sent');
    const receiveid = urlParams.get('receive');
    const popup = urlParams.get('popup');

    console.log(sentid)
    this.setState({
      sentid: sentid,
      receiveid: receiveid
    })
  
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try { 
           window.ethereum.enable().then(() => {
               // User has allowed account access to DApp...

              //Load contract
            const contract = web3.eth.contract(constants.abi).at(constants.address)
            const profile_contract = web3.eth.contract(constants.profile_abi).at(constants.profile_address)
            //Save state
            this.setState({
              address: web3.eth.accounts[0],
              contract: contract,
              profile_contract: profile_contract
            })
            
             //Get ETH balance of address
            web3.eth.getBalance(web3.eth.accounts[0], (error, result) => {
                this.setState({balance: web3.fromWei(result, "ether").toNumber()})
             });



             //get the profile info of address
            profile_contract.getProfileLength.call(web3.eth.accounts[0], (error, result) => {
              //console.log(`Length of profile info ${result}`);
              if (parseInt(result) === 0){
                this.setState({
                  profileName: 'Empty',
                  profileInfo: ''
                })
                return
              }
              //Then load profile info. Get last profile from array 
              profile_contract.ProfileDB.call(web3.eth.accounts[0], (result - 1), (error, result) => {
                this.setState({
                  profileName: result[0],
                  profileInfo: result[1]
                })
              })
            })

            contract.EscrowFee.call(web3.eth.accounts[0], (error, result) => {
              this.setState({fee: result/10.0})
              //console.log(`fee ${result}`)
            });

            
            contract.Funds.call(web3.eth.accounts[0], (error, result) => {
              this.setState({funds: result/(10**18)})
              //console.log(`funds ${result}`)
            });

          //Get length of customer ledger
          this.state.contract.getCustomerLedgerLength.call(web3.eth.accounts[0], (error, result) => {
            //console.log(`customer ledger length ${result}`)
            let customerStart
            if (sentid !== null && parseInt(sentid) < parseInt(result)){
              console.log(sentid)
              
              this.setState({
                customerLedgerLength: parseInt(result),
                customerStart: parseInt(sentid),
              });
              customerStart = parseInt(sentid)
            }

            else{
              this.setState({
                customerLedgerLength: parseInt(result),
                customerStart: parseInt(result) - 1,
              });

              customerStart = parseInt(result) - 1
            }

            this.loadCustomerLedger(customerStart)
            })

            //Get length of merchant ledger
            contract.getMerchantLedgerLength.call(web3.eth.accounts[0], (error, result) => {
              //console.log(`merchant ledger length ${result}`)
              if (receiveid !== null && parseInt(receiveid) < parseInt(result)){
                this.setState({
                  merchantLedgerLength: parseInt(result),
                  merchantStart: parseInt(receiveid),
                });
              }
  
              else{
                this.setState({
                  merchantLedgerLength: parseInt(result),
                  merchantStart: parseInt(result) - 1,
                });
              }

              
            this.loadMerchantLedger()
            });



            //On address change, reload page.
              setInterval(() => {
                if (web3.eth.accounts[0] !== this.state.address) {
                  window.location.href = '/dashboard';
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

  loadMerchantLedger(){
    const web3 = new Web3(window.ethereum);
    this.setState({
      merchantEnd: (this.state.merchantStart + 1 - constants.page_size) < 0 ? 0 : (this.state.merchantStart + 1 - constants.page_size)
    })
    
    //Loop through customer ledger from the end of list, get individual transaction id
    this.setState({
    merchantLedger: [],
    merchantLedgerName: []
  })
    
    for (let i = this.state.merchantStart; i >= this.state.merchantEnd; i--){
      this.state.contract.MerchantLedger.call(web3.eth.accounts[0],i, (error, id) => {
        //console.log(i)

        //For individual transaction id, get the transaction from TransactionLedger
        this.state.contract.getTransaction.call(id, (error, result) => {

          const tx = util.returnTxMap(i,result)
          let newLedger = this.state.merchantLedger;
          newLedger.push(tx);
          

          //After loading the final tx, sort the tx array 
          if (newLedger.length === (1 + this.state.merchantStart - this.state.merchantEnd)){
            //console.log(newLedger.length)
            // newLedger = _.sortBy(newLedger, "id").reverse()
            //Run another function to add names to the transaction array object
            this.setState({merchantLedger: newLedger})
            console.log('load name' + newLedger.length)
 
            this.loadBuyerUserNames()
            
          }
        })
      })
    }
            
  }

  loadCustomerLedger(customerStart){
    const web3 = new Web3(window.ethereum);
    this.setState({
      customerEnd: (customerStart + 1 - constants.page_size) < 0 ? 0 : (this.state.customerStart + 1 - constants.page_size)
    })
    let customerEnd = (customerStart + 1 - constants.page_size) < 0 ? 0 : (this.state.customerStart + 1 - constants.page_size)
    console.log(customerStart)
    console.log(customerEnd)
    
    //Loop through customer ledger from the end of list, get individual transaction id
    this.setState({
    customerLedger: [],
    customerLedgerName: []
    })
    
    
    for (let i = customerStart; i >= customerEnd; i--){
      this.state.contract.CustomerLedger.call(web3.eth.accounts[0],i, (error, id) => {
        //console.log(id)

        //For individual transaction id, get the transaction from TransactionLedger
        this.state.contract.getTransaction.call(id, (error, result) => {

          const tx = util.returnTxMap(i,result)
          let newLedger = this.state.customerLedger;
          newLedger.push(tx);
          

          //After loading the final tx, sort the tx array 
          if (newLedger.length === (1 + customerStart - customerEnd)){
            //console.log(newLedger.length)
            // newLedger = _.sortBy(newLedger, "id").reverse()
            //Run another function to add names to the transaction array object
            this.setState({customerLedger: newLedger})
            console.log('load name' + newLedger.length)
        
            this.loadSellerUserNames()
            
          }
        })
      })
    }
            
  }

  loadBuyerUserNames222(){
    console.log('tx len' + this.state.merchantLedger.length)
   // console.log(txs)
    for (let i = 0; i < this.state.merchantLedger.length; i++){

    //get the profile info of address
    this.state.profile_contract.getProfileLength.call(this.state.merchantLedger[i].seller, (error, result) => {
    //console.log(`Length of profile info ${result}`);
    if (parseInt(result) === 0)
      {
        this.state.merchantLedger[i].sellerName = '';
        let a = this.state.merchantLedgerName.push(this.state.merchantLedger[i])
        console.log(a)
      }
    
    else {
    //Then load profile info. Get last profile from array 
    this.state.profile_contract.ProfileDB.call(this.state.merchantLedger[i].seller, (result - 1), (error, result) => {
      this.state.merchantLedger[i].sellerName = result[0]
      let a = this.state.merchantLedgerName
      a.push(this.state.merchantLedger[i])
      this.setState({
        merchantLedgerName: a
      })
      console.log('setname runs')
      if (this.state.merchantLedgerName.length === this.state.merchantLedger.length){
        let newLedger = _.sortBy(this.state.merchantLedgerName, "id").reverse()
        this.setState({
          merchantLedgerName: newLedger
        })
      }  
    })
    }

    })
  }
}


  loadSellerUserNames(){
    console.log('tx len' + this.state.customerLedger.length)
   // console.log(txs)
    for (let i = 0; i < this.state.customerLedger.length; i++){

    //get the profile info of address
    this.state.profile_contract.getProfileLength.call(this.state.customerLedger[i].seller, (error, result) => {
    //console.log(`Length of profile info ${result}`);
    if (parseInt(result) === 0)
      {
        this.state.customerLedger[i].sellerName = '';
        let a = this.state.customerLedgerName.push(this.state.customerLedger[i])
        console.log(a)
      }
    
    else {
    //Then load profile info. Get last profile from array 
    this.state.profile_contract.ProfileDB.call(this.state.customerLedger[i].seller, (result - 1), (error, result) => {
      this.state.customerLedger[i].sellerName = result[0]
      let a = this.state.customerLedgerName
      a.push(this.state.customerLedger[i])
      this.setState({
        customerLedgerName: a
      })
      console.log('setname runs')
      if (this.state.customerLedgerName.length === this.state.customerLedger.length){
        let newLedger = _.sortBy(this.state.customerLedgerName, "id").reverse()
        this.setState({
          customerLedgerName: newLedger
        })
      }  
    })
    }

    })
  }
}


loadBuyerUserNames(){
  for (let i = 0; i < this.state.merchantLedger.length; i++){

  //get the profile info of address
  this.state.profile_contract.getProfileLength.call(this.state.merchantLedger[i].buyer, (error, result) => {
  //console.log(`Length of profile info ${result}`);
  if (parseInt(result) === 0)
    {
      this.state.merchantLedger[i].buyerName = '';
      let a = this.state.merchantLedgerName.push(this.state.merchantLedger[i])
      console.log(a)
    }
  
  else {
  //Then load profile info. Get last profile from array 
  this.state.profile_contract.ProfileDB.call(this.state.merchantLedger[i].buyer, (result - 1), (error, result) => {
    this.state.merchantLedger[i].buyerName = result[0]
    let a = this.state.merchantLedgerName
    a.push(this.state.merchantLedger[i])
    this.setState({
      merchantLedgerName: a
    })

    if (this.state.merchantLedgerName.length === this.state.merchantLedger.length){
      let newLedger = _.sortBy(this.state.merchantLedgerName, "id").reverse()
      this.setState({
        merchantLedgerName: newLedger
      })
    }
  })
  }
  })
}
}


  render() {
   // console.log(this.state.customerLedger)
   // console.log(this.state.customerLedgerName)
    let sentNext
    (this.state.customerStart - constants.page_size) <= 0 ? 
    sentNext = this.state.customerStart : 
    sentNext = this.state.customerStart - constants.page_size

    let sentPrev
    (this.state.customerStart + constants.page_size) >= this.state.customerLedgerLength ? 
    sentPrev = this.state.customerLedgerLength - 1 : 
    sentPrev = this.state.customerStart + constants.page_size

    let receiveNext
    (this.state.merchantStart - constants.page_size) <= 0 ? 
    receiveNext = this.state.merchantStart : 
    receiveNext = this.state.merchantStart - constants.page_size

    let receivePrev
    (this.state.merchantStart + constants.page_size) >= this.state.merchantLedgerLength ? 
    receivePrev = this.state.merchantLedgerLength - 1 : 
    receivePrev = this.state.merchantStart + constants.page_size

    const sentNextUrl = `/dashboard?sent=${sentNext}&receive=${this.state.merchantStart}`
    const sentPrevUrl = `/dashboard?sent=${sentPrev}&receive=${this.state.merchantStart}`
    const receiveNextUrl = `/dashboard?receive=${receiveNext}&sent=${this.state.customerStart}`
    const receivePrevUrl = `/dashboard?receive=${receivePrev}&sent=${this.state.customerStart}`

    return (
      <div>
      <Header/>
      <section className="section">
      
     
      <div className="container" style={{width: 960}}>
      <div className="columns">
      <div className="column is-one-third">
        
        <FundsAvailable balance={this.state.balance}/>
        <WithdrawFunds funds={this.state.funds} contract={this.state.contract} address={this.state.address}/>
        <Profile profileName={this.state.profileName} profileInfo={this.state.profileInfo} address={this.state.address}/>
        <SendPayment disabled={this.state.profileName === 'Empty' ? true : false}/>
        </div>
        
        <div className="column">



        <div className="box">


       
        <Table customerLedger={this.state.customerLedgerName} merchantLedger={this.state.merchantLedgerName} type={'sent'}/>
        <br/>
        <nav className="pagination is-centered is-small" role="navigation" aria-label="pagination">
        <Link to={sentPrevUrl} onClick={() => 
          {
            setTimeout(() => {
              this.componentDidMount()
            }, 100)
          }
          }><a className="pagination-previous">Previous</a></Link>
        <Link to={sentNextUrl} onClick={() => 
          {
            setTimeout(() => {
              this.componentDidMount()
            }, 100)
          }
          }><a className="button pagination-next">Next page</a></Link>
  
        </nav>
        </div>


        <div className="box">


       
        <Table customerLedger={this.state.customerLedgerName} merchantLedger={this.state.merchantLedgerName} type={'received'}/>
        <br/>
        <nav className="pagination is-centered is-small" role="navigation" aria-label="pagination">
        <Link to={receivePrevUrl} onClick={() => {
            setTimeout(() => {
              this.componentDidMount()
            }, 100)
          }}><a className="pagination-previous">Previous</a></Link>
        <Link to={receiveNextUrl} onClick={() => {
            setTimeout(() => {
              this.componentDidMount()
            }, 100)
          }}><a className="pagination-next">Next page</a></Link>
  
        </nav>
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
    const profile_link = `/profile/${this.props.address}`
    return (
      <div className="box">
        <p className="is-size-4 has-text-weight-semibold">Your Profile</p>
        <br/>
        <p>{this.props.profileName}</p>
        <p>{this.props.profileInfo}</p>
        <br/>
        <p className="buttons is-centered">
        <Link to="/activity/set_profile"><p className="button is-primary">Update Profile</p></Link>
        &nbsp;
        <Link to={profile_link}><p className="button is-primary">View Profile</p></Link>
        </p>
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
        <p className="is-size-3"><a className="has-text-dark" href="#" title={this.props.balance}>
          {+(this.props.balance).toFixed(10)}</a> ETH</p>
        <br/>
        </div>

    );
  }
}

class WithdrawFunds extends Component {


  render() {


    return (
      <div className="box">
      <p className="is-size-4 has-text-weight-semibold">ERCPay Funds</p> 
      <br/>
      <p className="is-size-3"><a className="has-text-dark" href="#" title={this.props.funds}>
        {+(this.props.funds).toFixed(10)}</a> ETH</p>
      <br/>
      <a className="button is-primary" onClick={() => {
        this.props.contract.withdraw.sendTransaction({
          from: this.props.address
        },
        (error, result) => {
          

          //console.log(result)
        })}}>
        Withdraw Funds</a>
      </div>
    );
  }
}

class SendPayment extends Component {

  render() {

    if (this.props.disabled === true){
      return (
        <div className="box">
  
        <p className="is-size-4 has-text-weight-semibold">Payments</p><br/>
        <p>Send payment for goods or services with buyer protection.</p><br/>
        <Link to="/activity/send_payment"><button className="button is-primary" disabled>Send Payment</button></Link>
        <p className="is-size-7">Please set your profile info to use ERCPay</p>
        </div>
   
  
      );
    }

    else{
      return (
        <div className="box">
  
        <p className="is-size-4 has-text-weight-semibold">Payments</p><br/>
        <p>Send payment for goods or services with buyer protection.</p><br/>
        <Link to="/activity/send_payment"><p className="button is-primary">Send Payment</p></Link>
        </div>
   
  
      );
    }


  }
}

class CreateInvoice extends Component {

  render() {
    const url = `/activity/create_invoice/${this.props.address}`
    return (
      <div className="box">

        <p className="is-size-4 has-text-weight-semibold">Invoicing</p><br/>
        <p>Your customers can pay you through the invoice link you send them.</p><br/>
        <Link to={url}><p className="button is-primary">Create Invoice</p></Link>
        </div>
 

    );
  }
}



export default Dashboard;
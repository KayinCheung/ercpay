import React, { Component } from 'react';
import '../App.css';

import Header from '../common/header.js'
import { Link } from "react-router-dom";
import Web3 from 'web3';
import constants from '../common/constant.js'

class SendPayment extends Component {

    constructor(props){
        super(props)
        this.state = {
            ethPrice: 'Loading...',
            address: '',
            ethInputText: <p className="help"></p>,
            currency: 'eth',
            modal: '',
            ethAmount: 0,
            sellerAddress: '',
            addressInputText: <p className="help"></p>
        }
        this.LoadEthPrice = this.LoadEthPrice.bind(this);
        this.updateAmountInputText = this.updateAmountInputText.bind(this);
    }

    componentDidMount(){
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try { 
               window.ethereum.enable().then(() => {
                   // User has allowed account access to DApp...
                  const contract = web3.eth.contract(constants.abi).at(constants.address)


                  this.setState({address: web3.eth.accounts[0]})
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

        this.LoadEthPrice();
    }

  LoadEthPrice(){
    
    fetch('https://api.gemini.com/v1/book/ethusd?limit_bids=1&limit_asks=1')
    .then(response => response.json())
    .then(data => {
      const price = Math.round((parseFloat(data['bids'][0]['price']) + parseFloat(data['asks'][0]['price']))/2*100)/100
      this.setState({ethPrice: price});
    })
    .catch(error => console.error(error))
  }

  updateAmountInputText(){
    const input = document.getElementById("amount").value
    if (this.checkAmountInputText()){

    if (this.state.currency === 'eth'){
        this.setState({
            ethInputText: <p className="help">{input} ETH = US$ {Math.round(input * this.state.ethPrice*100)/100}</p>,
            ethAmount: parseFloat(input)
        })

    //Convert usd to eth
    } else if (this.state.currency === 'usd'){

    let ethAmount = Math.round(input/this.state.ethPrice*10000000)/10000000
        this.setState({
            ethInputText: <p className="help">{ethAmount} ETH = US$ {input}</p>,
            ethAmount: parseFloat(ethAmount)
        })
    }

    } 
  }

  checkAmountInputText(){
    const input = document.getElementById("amount").value
    if (String(parseFloat(input)) === input && String(parseFloat(input)) > 0){
        return true
    }
    else {

        return false
    } 
  }

  activateModal(){
    //First check eth inputs
    if (this.checkAmountInputText() === false){
        //set error msg, return
        this.setState({
            ethInputText: <p className="help is-danger">Input should be a positive number</p>,
        })
        return
    }

    //Then check address input
    const web3 = new Web3(window.ethereum);    
    const address = document.getElementById('selleraddress').value
    if (web3.isAddress(address) === false){
        console.log('address invalid')
        this.setState({
            addressInputText: <p className="help is-danger">Invalid ETH address</p>
        })
        return
    }

    this.setState({
        modal: 'is-active',
        sellerAddress: document.getElementById('selleraddress').value
    })
  }


  render() {


    return (
      <div>
        <Header/>
        
        <div className={`modal ${this.state.modal}`}>
        <div className="modal-background" onClick={() => this.setState({modal: ''})}></div>
        <div className="modal-content">
            <SendPaymentConfirm 
            address={this.state.address}
            ethAmount={this.state.ethAmount}
            sellerAddress={this.state.sellerAddress}
            />
        </div>
        <button className="modal-close is-large" onClick={() => this.setState({modal: ''})}></button>
        </div>


      <section className="section">
      <div className="container" style={{width:790}}>
      <a className="has-text-left" onClick={() => window.history.back()}>&larr; Back</a>
      </div>
      
      <br/>

      <div className="container box" style={{width:800}}>
      
      <nav className="level">
      <div className="level-left">
        <div className="level-item">
        <p>Send ETH Payment</p>
        
        </div>
        </div>
        <div className="level-right">
        <div className="level-item">
        <p>1 ETH = US$ {this.state.ethPrice}</p>
        
        </div>
        </div>
        </nav>
        <hr></hr>

    <label className="label">Payment Amount</label>
    <div className="field has-addons">

    <div className="control">
        <span className="select">
        <select id="currency" name="currency"
        onChange={() => 
        {
            this.setState({
                currency: document.getElementById('currency').value,
                ethInputText: <p className="help"></p>
                })
            document.getElementById('amount').value = ''
        
        }}>
            <option value="eth">ETH</option>
            <option value="usd">USD</option>
        </select>
        </span>
    </div>
    
    <div className="control">
        <input className="input" type="text" placeholder="Amount" id="amount" onChange={this.updateAmountInputText}/>
    </div>
    
    </div>
    {this.state.ethInputText}
    <br/>


    <div className="field">
    <label className="label">Pay To Address</label>
    <div className="control has-icons-left has-icons-right" style={{width:500}}>
        <input className="input" type="text" placeholder="0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359" id='selleraddress'/>
        <span className="icon is-small is-left">
        <i className="fas fa-user"></i>
        </span>
        
    </div>
    {this.state.addressInputText}
    <br/>
    <a className="button is-primary is-small">
          <span className="icon">
          <i className="far fa-user"></i>
          </span>
          <span>View Bulma's Profile</span>
        </a>
    </div>
    <br/>
    <div className="buttons is-centered">
        
        <p className="button is-primary" onClick={() => this.activateModal()}>
          <span className="icon">
          <i className="far fa-user"></i>
          </span>
          <span>Next</span>
        </p>
       
        </div>
        <p className="has-text-centered is-size-7">You will be asked to confirm your payment on the next page</p>

       
        
</div>

        </section>
      
        </div>
        
    );
  }
}



export default SendPayment;


class SendPaymentConfirm extends Component {

  
  constructor(props){
    super(props)
    this.state = {
    }
}

componentDidMount(){
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try { 
           window.ethereum.enable().then(() => {
               // User has allowed account access to DApp...
              const contract = web3.eth.contract(constants.abi).at(constants.address)

              this.setState({
                contract: contract
              })
           
           });
           
        } catch(e) {
           // User has denied account access to DApp...
        }
     }

     else {
        window.location.href = "/login";
     }

}

SendPayment(){
  this.state.contract.createPayment.sendTransaction(
    this.props.selleraddress,
    constants.escrowAddress,
    'a', //notes. leave empty for now
    {
      from: this.props.address,
      value: this.props.ethAmount*(10**18),
      gas: 350000
    },

    (error, result) => {
      console.log(result)
    }
  )
}

  render() {
    const user = 'userrr';
    const amount = '217';
    const role = 'Buyer';
   

    return (
      <div>
      <br/>
      <div className="container box" style={{width:850}}>
      
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

        <p className="has-text-centered is-size-3">{this.props.ethAmount} ETH</p>
        <div className="columns">

        <div className="column has-text-left">
       
        <b>Payment from</b>
        <p className="is-size-7">{this.props.address}</p>
        <p>88 completed payments</p>
        </div>
        <div className="column is-narrow"><br/>
          <span className="icon">
          <i className="fas fa-arrow-right"></i>
          </span>
          </div>
        <div className="column has-text-right"> 
        <b>Payment to</b>
        <p className="is-size-7">{this.props.sellerAddress}</p>
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
        
        <a className="button is-primary" onClick={() => this.SendPayment()}>
          <span className="icon">
          <i className="far fa-user"></i>
          </span>
          <span>Confirm and Send payment</span>
        </a>
       
        </div>
        <hr/>
        <p className="is-size-7">
            After payment, funds will be locked in escrow<br/>
            When your item is received, please release funds to seller in your dashboard<br/>
            If you require assistance, contact us at hello@ercpay.com
            </p>
        </div>
        </div>
        
    );
  }
}

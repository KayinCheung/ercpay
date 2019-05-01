import React, { Component } from 'react';
import '../App.css';

import Header from '../common/header.js'
import { Link } from "react-router-dom";
import Web3 from 'web3';

class SendPayment extends Component {

    constructor(props){
        super(props)
        this.state = {
            ethPrice: 'Loading...',
            address: '',
            ethInputText: <p className="help"></p>,
            currency: 'eth'
        }
        this.LoadEthPrice = this.LoadEthPrice.bind(this);
        this.updateEthInputText = this.updateEthInputText.bind(this);
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
                        //window.location.href = "/login"
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

  updateEthInputText(){
    const input = document.getElementById("ethAmount").value
    if (String(parseFloat(input)) === input){
        this.setState({ethInputText: <p className="help">{input} ETH = US$ {Math.round(input * this.state.ethPrice*100)/100}</p>})
    } 
  }


  render() {


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
        <span className="select" id="currency">
        <select onChange={() => this.setState({currency: this.value})}>
            <option value="eth">ETH</option>
            <option value="usd">USD</option>
        </select>
        </span>
    </div>
    
    <div className="control">
        <input className="input" type="text" placeholder="Amount" id="ethAmount" onChange={this.updateEthInputText}/>
    </div>
    
    </div>
    {this.state.ethInputText}
{this.state.currency}
    <br/>


    <div className="field">
    <label className="label">Pay To Address</label>
    <div className="control has-icons-left has-icons-right" style={{width:500}}>
        <input className="input" type="text" placeholder="0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"/>
        <span className="icon is-small is-left">
        <i className="fas fa-user"></i>
        </span>
        
    </div>
    <p className="help is-success">Bulma: Registred on 21/2/2018. 57 confirmed transactions as Seller. 54 confirmed transactions as Buyer</p>
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
        
        <Link to="/activity/confirm_payment"><p className="button is-primary">
          <span className="icon">
          <i className="far fa-user"></i>
          </span>
          <span>Next</span>
        </p>
        </Link>
       
        </div>
        <p className="has-text-centered is-size-7">You will be asked to confirm your payment on the next page</p>

       
        
</div>

        </section>
      
        </div>
        
    );
  }
}

export default SendPayment;


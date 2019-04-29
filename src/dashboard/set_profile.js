import React, { Component } from 'react';
import '../App.css';
import Web3 from 'web3';
import constants from '../common/constant.js'

import Header from '../common/header.js'

class SetProfile extends Component {


  render() {

    return (
      <div>
        <Header/>
        <br/>
        <div className="container" style={{width:800}}>
        <h1 className="is-size-3 has-text-centered">Setup ERCPay Profile</h1>
        </div>
        <br/>
        <InitializeProfile/>
        <br/>
        
        <br/>
        <div className="has-text-centered">
          <a className="button is-primary" href="/dashboard">Back to Dashboard</a><br/><br/>
        </div>
       
        </div>
        
    );
  }
}

export default SetProfile;

class InitializeProfile extends Component {
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
              const contract = web3.eth.contract(constants.profile_abi).at(constants.profile_address)
              const profile_contract = web3.eth.contract(constants.profile_abi).at(constants.profile_address)
              
              this.setState({
                address: web3.eth.accounts[0],
                contract: contract,
                profile_contract: profile_contract
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

  SetProfile(){
    const name = document.getElementById('nameinput').value
    const info = document.getElementById('infoinput').value

    
    this.state.profile_contract.SetProfile.sendTransaction(
      name,
      info,
      {
        from: this.state.address,
        gas: 350000
      },
      (error, result) => {
        console.log(result)
      }
    )
    }

    render() {

      return (
        <div>
         
          <div className="container box" style={{width:800}}>
          <div className="has-text-centered">
          
          <b>Setup</b>
          </div>
          <br/>
          <p>Add name and information to your ERCPay profile for customers and sellers to identify you.</p>
          <br/>
          <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">Your address</label>
    </div>
    <div className="field-body">
      <div className="field">
        <p className="control">
          <input className="input is-static" type="email" value={this.state.address} readOnly/>
        </p>
      </div>
    </div>
  </div>
          <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">Name</label>
    </div>
    <div className="field-body">
      <div className="field">
        <p className="control">
          <input className="input" type="text" placeholder="*Required" id="nameinput"></input>
        </p>
      </div>
    </div>
  </div>
  
  <div className="field is-horizontal">
    <div className="field-label is-normal">
      <label className="label">Info</label>
    </div>
    <div className="field-body">
      <div className="field">
        <p className="control">
        <textarea className="textarea"
        id="infoinput"
        placeholder="Optional. More about yourself. You may place contact information here, such as a link to your forum profile."></textarea>
        </p>
      </div>
    </div>
  </div>
  
          <br/>
          <div className="has-text-centered">
          <button className="button is-primary" onClick={() => this.SetProfile()}>Update Profile</button>
          </div>
          </div>
          
          </div>
          
      );
    }
  }
  
  class Authorize extends Component {

    render() {

      return (
        
        <div className="container box" style={{width:800}}>
        <div className="has-text-centered">
        <b>Authorize DAI payments</b>
        </div>
        <br/>
        <p>DAI Stablecoin requires an authorization before an address can send DAI to a smart contract. 
            This step is optional if you plan to only receive and not send DAI payments. 
            You can always authorize at a later date.</p>
        <br/>
        <div className="has-text-centered">
        
        <a className="button is-primary">
    
        <span>Authorize ERCPay</span>
        </a>


        </div>
        </div>
          
      );
    }
  }

    
  
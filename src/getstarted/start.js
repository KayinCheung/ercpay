import React, { Component } from 'react';
import '../App.css';

import Header from '../common/header.js'

class Start extends Component {

  render() {


    return (
      <div>
        <Header/>
        <br/>
        <div className="container" style={{width:800}}>
        <h1 className="is-size-3 has-text-centered">Activate your account</h1>
        <p className="has-text-left">* Required</p>
        </div>
        <br/>
        <MetamaskPermission/>
        <Authorize/>
        <InitializeProfile/>
        <br/>
        <div class="has-text-centered">
          <button className="button is-primary is-large">Finish Setup</button><br/><br/>
        </div>
       
        </div>
        
    );
  }
}

export default Start;

class InitializeProfile extends Component {

    render() {

      return (
        <div>
         
          <div className="container box" style={{width:800}}>
          <div class="has-text-centered">
          <b>Step 3*</b>
          <br/><br/>
          <p>Setup ERCPay Profile</p>
          </div>
          <br/>
          
          <p>Add name and information to your ERCPay profile for your customers and merchants to identify you.</p>
          <br/>
          <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Your address</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input class="input is-static" type="email" value="me@example.com" readonly/>
        </p>
      </div>
    </div>
  </div>
          <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Name</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input class="input" type="text" placeholder=""></input>
        </p>
      </div>
    </div>
  </div>
  
  <div class="field is-horizontal">
    <div class="field-label is-normal">
      <label class="label">Info</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
        <textarea class="textarea" placeholder="Place contact information here, such as a link to your forum profile."></textarea>
        </p>
      </div>
    </div>
  </div>
  
          <br/>
          <div class="has-text-centered">
          <button className="button is-primary">Update Profile</button>
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
        <div class="has-text-centered">
        <b>Step 2</b>
        </div>
        <br/>
        <p>DAI Stablecoin requires an authorization before an address can send DAI to a smart contract. 
            This step is optional if you plan to only receive and not send DAI payments. 
            You can always authorize at a later date.</p>
        <br/>
        <div class="has-text-centered">
        
        <a class="button is-primary">
    
        <span>Authorize ERCPay</span>
        </a>


        </div>
        </div>
          
      );
    }
  }

    
  class MetamaskPermission extends Component {

    render() {

      return (
        
  
        <div className="container box" style={{width:800}}>
        <div class="has-text-centered">
        <b>Step 1*</b>
        </div>
        <br/>
        <p>Allow ERCPay to read your Metamask address</p>
        <br/>
        <div class="has-text-centered">
        <a class="button is-primary">
      
        <span>Grant Permission</span>
        </a>
      
        </div>
        </div>
          
      );
    }
  }

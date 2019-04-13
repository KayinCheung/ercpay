import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Web3 from 'web3';


class Header extends Component {
    
  render() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
          </a>
      
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            DAI
          </a>
  
          <div className="navbar-dropdown">
            <a className="navbar-item">
              DAI
            </a>
            <a className="navbar-item">
              USDC (coming soon)
            </a>
            <a className="navbar-item">
              GUSD (coming soon)
            </a>
            
          </div>
        </div>
      
            <a className="navbar-item" href="/dashboard">
            Dashboard
            </a>
      
           
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <AddressDropdown onAddressChange={this.handleAddress}/>
            </div>
            <a className="navbar-item" href="/">
             Logout
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

class AddressDropdown extends Component {

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

    render(){

    return (
        <div className="navbar-item">
              {this.state.address}
        </div>
    );
  }
}


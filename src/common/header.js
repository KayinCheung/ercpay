import React, { Component } from 'react';
import AddressDropdown from './address_dropdown.js'
import { Link } from "react-router-dom";

class Header extends Component {

    handleAddress = (address) => {
        this.props.onAddressChange(address);
    }
    
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
      
            <a className="navbar-item">
              Get Started
            </a>
      
           
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <AddressDropdown onAddressChange={this.handleAddress}/>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;



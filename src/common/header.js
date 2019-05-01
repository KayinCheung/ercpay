import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Web3 from 'web3';


class Header extends Component {
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
  render() {
    const profile_url = `/profile/${this.state.address}`
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" >
        <div className="navbar-brand">
          <Link to="/"><p className="navbar-item">
            ERCPAY
          </p></Link>
      
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
         
      
          <Link to="/dashboard"><p className="navbar-item">
            Dashboard
            </p></Link>

            <div className="navbar-item has-dropdown is-hoverable">
            <Link to={profile_url}><p className="navbar-link">
            View Profile
          </p></Link>
  
          <div className="navbar-dropdown">
          <Link to="/activity/set_profile"><a className="navbar-item">
              Update Profile
            </a></Link>     
          </div>
      </div>
      <Link to="/activity/send_payment">
      <p className="navbar-item">
            Send Payment
            </p></Link>  



           
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <AddressDropdown address={this.state.address}/>
            </div>
            <Link to="/">
            <p className="navbar-item">
             Logout
            </p>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

class AddressDropdown extends Component {
    render(){

    return (
        <div className="navbar-item">
              {this.props.address}
        </div>
    );
  }
}


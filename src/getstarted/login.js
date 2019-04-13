import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import Web3 from 'web3';
import Header from '../common/header.js'

class Login extends Component { 
    
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
                        this.setState({address: web3.eth.accounts[0]})
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

    let profile_created = true;
    let authorized = true;
    let acc_status = [];

    let profile_text;
    profile_created === true ? profile_text = <p>Profile Created<span class="icon has-text-success"><i class="fas fa-check-square"></i></span></p> :
    profile_text = <p>Profile Created<span class="icon has-text-warning"><i class="fas fa-exclamation-triangle"></i></span></p>

    let authorized_text;
    authorized === true ? authorized_text = <p>ERCPay Authorized<span class="icon has-text-success"><i class="fas fa-check-square"></i></span></p> :
    authorized_text = <p>ERCPay Authorized<span class="icon has-text-warning"><i class="fas fa-exclamation-triangle"></i></span></p>

    let signup_text;
    if ((authorized && profile_created) === true){
        
        signup_text = <p>Signup Complete<span class="icon has-text-success"><i class="fas fa-check-square"></i></span></p>

    } else{

        signup_text = <p>Signup Complete<span class="icon has-text-warning"><i class="fas fa-exclamation-triangle"></i></span></p>

    }
    


    return (
        <div>
            
        <section class="hero is-fullheight"><Header/>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Login</h3>
                    <p class="subtitle has-text-grey">Login to access your dashboard</p>
                    <div class="box">
                        <figure class="avatar">
                            <img src="https://placehold.it/55x55"/>
                        </figure>
                        <br/>
                        
                     
                            <p className="has-text-centered">{this.state.address}</p>
                    
                            <br/>

                            {profile_text}
                            {authorized_text}
                            {signup_text}

                            <br/>
                            <Link to="/dashboard"><button class="button is-block is-info is-large is-fullwidth">Login</button></Link>
                       
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Sign Up</a>
                      
                    </p>
                </div>
            </div>
        </div>
        </section>
        </div>
    );
  }
}

export default Login;
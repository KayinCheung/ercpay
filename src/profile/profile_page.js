import React, { Component } from 'react';
import '../App.css';

import Header from '../common/header.js'
import Web3 from 'web3';

class ProfilePage extends Component {

    
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
            
         }

        
    }

  render() {
    let username;
    this.props.user === "" ? username = "Your" : username = "actualusername"
    let info = "Phil on bitcointalk forum, you can contact me here: profile url"
   
    return (
      <div>
        <Header/>
        
      <section className="section">
      <div className="container" style={{width:790}}>
      <a className="has-text-left" onClick={() => window.history.back()}>&larr; Back</a>
      </div>
      
      <br/>

      <div className="container box" style={{width:800}}>
      
     
        <p className="has-text-centered is-size-3">{username}'s profile</p>
        <p className="has-text-centered">Joined 20/2/2019</p>
        <br/>
        <p className="has-text-centered">{info}</p>
        <hr></hr>
        <p className="has-text-centered">Lifetime transactions</p>
        <div className="columns">

        <div className="column has-text-left">
       
        <b>Buyer History</b>
        <p>Total spent: 219 ETH</p>
        <p>Tx Completed: 88</p>
        <p>Funds Released Early: 21</p>
        <p>Disputes: 1</p>



        </div>
        <div className="column is-narrow"><br/>
         
          </div>
        <div className="column has-text-right"> 
       
        <b>Seller History</b>
        <p>Total received: 219 ETH</p>
        <p>Tx Completed: 88</p>
        <p>Disputes: 1</p>
        </div>
        </div>

      
        <br/>
       

        <hr></hr>

       
       
     
       <p className="has-text-centered">Past 90 days transactions</p>
        <div className="columns">

        <div className="column has-text-left">
       
        <b>Buyer History</b>
        <p>Total spent: 219 ETH</p>
        <p>Tx Completed: 88</p>
        <p>Funds Released Early: 21</p>
        <p>Disputes: 1</p>



        </div>
        <div className="column is-narrow"><br/>
         
          </div>
        <div className="column has-text-right"> 
       
        <b>Seller History</b>
        <p>Total received: 219 ETH</p>
        <p>Tx Completed: 88</p>
        <p>Disputes: 1</p>
        </div>
        </div>

      
        <br/>
        <hr></hr>
        <p className="is-size-7 has-text-right"></p>
       

        </div>
   
        
        </section>
      
        </div>
        
    );
  }
}

export default ProfilePage;


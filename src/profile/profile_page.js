import React, { Component } from 'react';
import '../App.css';

import Header from '../common/header.js'
import Web3 from 'web3';
import constants from '../common/constant.js'
import util from '../common/util.js'
class ProfilePage extends Component {

    
    constructor(props){
        super(props)
        this.state = {
          address: '',
          name: '',
          info: '',


          totalPurchaseComplete: 0,
          totalPurchaseEth: 0,
          
          totalPurchaseInEscrow: 0,          
          totalPurchaseInEscrowEth: 0,          
          
          totalSalesEth: 0,          
          totalSalesComplete: 0,   

          totalSalesInEscrow: 0,          
          totalSalesInEscrowEth: 0,

          customerLedgerLength: 0,
          customerLedger: [],

          merchantLedgerLength: 0,
          merchantLedger: []
        }
       
    }

    componentDidMount(){
      var url_string = window.location.href;
      var url = new URL(url_string);
      const address = url.searchParams.get("address");


      //const address = this.props.match.params.address
      this.setState({
        address: address
      })
      if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          try { 
             window.ethereum.enable().then(() => {
                 // User has allowed account access to DApp...
                 const contract = web3.eth.contract(constants.abi).at(constants.address)
                 const profile_contract = web3.eth.contract(constants.profile_abi).at(constants.profile_address)
                
                this.setState({
                  contract: contract,
                  profile_contract: profile_contract
                })

                //Load tx history

                
                this.loadProfileInfo()


            //Get length of customer ledger
            contract.getCustomerLedgerLength.call(address, (error, result) => {
              this.setState({customerLedgerLength: parseInt(result)});
              
            //Loop through customer ledger from the end of list, get individual transaction id
            for (let i = 0; i < this.state.customerLedgerLength; i++){
              contract.CustomerLedger.call(address,i, (error, id) => {

                //For individual transaction id, get the transaction from TransactionLedger
                contract.getTransaction.call(id, (error, result) => {

                  const tx = util.returnTxMap(id,result)
                  let newLedger = this.state.customerLedger;
                  newLedger.push(tx);
                  
                  this.setState({customerLedger: newLedger})

                  //After loading the final tx
                  if (newLedger.length === this.state.customerLedgerLength){
                   //Compute the totals
                   let total_completed_eth = 0
                   let total_completed_tx = 0
                   let total_inescrow_eth = 0
                   let total_inescrow_tx = 0
                    for (let i = 0; i < this.state.customerLedgerLength; i++){

                      //If tx in escrow and incomplete
                      if (this.state.customerLedger[i]["status"] === util.status()[0] ||
                          this.state.customerLedger[i]["status"] === util.status()[3])
                      {
                          total_inescrow_tx++
                          total_inescrow_eth += this.state.customerLedger[i]["value"]
                      }

                      else{
                        total_completed_tx++
                        total_completed_eth += this.state.customerLedger[i]["value"]
                      }
                    }

                  this.setState({
                    totalPurchaseEth: total_completed_eth,
                    totalPurchaseComplete: total_completed_tx,

                    totalPurchaseInEscrowEth: total_inescrow_eth,
                    totalPurchaseInEscrow: total_inescrow_tx
                  })

                  }
                })
              })
            }
            });

            //Get length of merchant ledger
            contract.getMerchantLedgerLength.call(address, (error, result) => {
              //console.log(`merchant ledger length ${result}`)
              this.setState({merchantLedgerLength: parseInt(result)});
            //Loop through merchant ledger from the end of list, get individual transaction id
            for (let i = 0; i < this.state.merchantLedgerLength; i++){
              contract.MerchantLedger.call(address,i, (error, id) => {
                //console.log(id)

                //For individual transaction id, get the transaction from TransactionLedger
                contract.getTransaction.call(id, (error, result) => {
                  const tx = util.returnTxMap(id,result)
                  //console.log(tx);
                  let newLedger = this.state.merchantLedger;
                  newLedger.push(tx);

                  this.setState({merchantLedger: newLedger})
                  //After loading the final tx
                  if (newLedger.length === this.state.merchantLedgerLength){
                    //Compute the totals
                    let total_completed_eth = 0
                    let total_completed_tx = 0
                    let total_inescrow_eth = 0
                    let total_inescrow_tx = 0
                      for (let i = 0; i < this.state.merchantLedgerLength; i++){
  
                        //If tx in escrow and incomplete
                        if (this.state.merchantLedger[i]["status"] === util.status()[0] ||
                            this.state.merchantLedger[i]["status"] === util.status()[3])
                        {
                            total_inescrow_tx++
                            total_inescrow_eth += this.state.merchantLedger[i]["value"]
                        }
  
                        else{
                          total_completed_tx++
                          total_completed_eth += this.state.merchantLedger[i]["value"]
                        }
                      }
  
                    this.setState({
                      totalSalesEth: total_completed_eth,
                      totalSalesComplete: total_completed_tx,
  
                      totalSalesInEscrowEth: total_inescrow_eth,
                      totalSalesInEscrow: total_inescrow_tx
                    })
  
                    }
                })
              })
            }
            });

          
             });
             
          } catch(e) {
             // User has denied account access to DApp...
          }
       }
  
       else {
          window.location.href = "/login";
       }
  }

  loadProfileInfo(){
//Load profile info
this.state.profile_contract.getProfileLength.call(this.state.address, (error, result) => {
  //console.log(`Length of profile info ${result}`);
  if (parseInt(result) === 0)
    {
      this.setState({
      name: '',
      info: ''})
    }
  
  else {
  //Then load profile info. Get last profile from array 
  this.state.profile_contract.ProfileDB.call(this.state.address, (result - 1), (error, result) => {
    this.setState({
      name: result[0],
      info: result[1]
    })
  })
  }
  })
  }

  render() {
    let username = this.state.name;
    let info = this.state.info
   
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
        <p>Total ETH spent: {this.state.totalPurchaseEth} ETH</p>
        <p>Transactions Completed: {this.state.totalPurchaseComplete}</p>

        </div>
        <div className="column is-narrow"><br/>
         
          </div>
        <div className="column has-text-right"> 
       
        <b>Seller History</b>
        <p>Total ETH received: {this.state.totalSalesEth} ETH</p>
        <p>Transactions Completed: {this.state.totalSalesComplete}</p>
        </div>
        </div>

        <hr/>
        <p className="has-text-centered">Current in escrow transactions</p>

        <div className="columns">

        <div className="column has-text-left">
       
        <b>Buyer</b>
        <p>Amount unreleased: {this.state.totalPurchaseInEscrowEth} ETH</p>
        <p>Transactions In Escrow: {this.state.totalPurchaseInEscrow}</p>
        
        </div>
        <div className="column is-narrow"><br/>
         
        </div>
        <div className="column has-text-right"> 
       
        <b>Seller</b>
        <p>Amount receivable: {this.state.totalSalesInEscrowEth} ETH</p>
        <p>Transactions in Escrow: {this.state.totalSalesInEscrow}</p>
        </div>
        </div>

        </div>        
        </section>
      
        </div>
        
    );
  }
}

export default ProfilePage;


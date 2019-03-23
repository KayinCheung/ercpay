import React, { Component } from 'react';
import '../App.css';


class TransactionDetails extends Component {

  render() {
    const user = 'userrr';
    const amount = '217';
    return (
        <div className="App">
        
        
      <section class="section">
      
      <div className="container box" style={{width:800}}>
      
      <nav className="level">
      <div className="level-left">
        <div className="level-item">
        <p>Transaction Details</p>
        
        </div>
        </div>
        <div className="level-right">
        <div className="level-item">
        <p>Payment sent 20/2/2019 8.56pm</p>
        
        </div>
        </div>
        </nav>
        <hr></hr>
        

        <div className="columns">
        <div className="column is-narrow"> 
        <p>Payment from {user}</p>
        <p>Amount: 217 DAI</p>
        </div>
        <div className="column"> 
        <p>Transaction ID: 0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359</p>
        <p>Etherscan Link</p>
        </div>
        </div>

        <hr></hr>

        <p className="has-text-left">Payment Details</p><br/>
    
        <table className="table is-borderless">
          <tr>
          <th>Gross Amount</th>
          <td>{amount} DAI</td>
          </tr>
          <tr>
          <th>Fee</th>
          <td>2 DAI</td>
          </tr>
      
          <tr>
          <th>Net amount</th>
          <td>{amount-2} DAI</td>
          </tr>

          <tr>
          <th>Paid By</th>
          <td>Buyer name<br/>
          0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359<br/></td>
          </tr>

          <tr>
          <th>Buyer info</th>
          <td>description of buyer here, limit to 100 char</td>
          </tr>

          <tr>
          <th>Note from buyer</th>
          <td>limit to 100 char</td>
          </tr>
          </table>
        <hr/>
        <p className="has-text-left">Transaction Status</p>
       <br/>
        <a class="button is-primary is-large">
          <span class="icon">
          <i class="fas fa-plane"></i>
          </span>
          <span>In Escrow</span>
        </a>
        <hr/>
        <p className="has-text-left">Transaction Action</p>
       <br/>
       <p class="buttons">
        <a class="button is-info is-large">
          <span class="icon">
          <i class="fas fa-plane"></i>
          </span>
          <span>Refund</span>
        </a>

        <a class="button is-info is-large">
          <span class="icon">
          <i class="fas fa-plane"></i>
          </span>
          <span>Contact Us</span>
        </a>
        </p>

        </div>
   
        
        </section>
        </div>
        
    );
  }
}

export default TransactionDetails;

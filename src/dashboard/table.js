import React, { Component } from 'react';
import '../App.css';

import { Link } from "react-router-dom";

class Table extends Component {
  constructor(props){
    super(props)
    this.state = {
        //0: customer ledger, 1: merchant ledger
        display: 0
    }
  }


  render() {

    let tableRows = []


    if (this.props.type === 'sent'){
      for (let i = 0; i < this.props.customerLedger.length; i++){
        const url = `/activity/transaction/buyer/${this.props.customerLedger[i]['id']}`
        
        tableRows.push(
          <tr key={this.props.customerLedger[i]['id']}>
            <td>{this.props.customerLedger[i]['id']}</td>
            <td><Link to={url}>Payment to {this.props.customerLedger[i]['sellerName']}</Link>
            <p className="is-size-7">{this.props.customerLedger[i]['seller']}</p>
            {this.props.customerLedger[i]['status']}
            </td>
            <td>{this.props.customerLedger[i]['value']} ETH</td>
          </tr>
        )
      }
    } else {
      for (let i = 0; i < this.props.merchantLedger.length; i++){
        const url = `/activity/transaction/seller/${this.props.merchantLedger[i]['id']}`
        tableRows.push(
          <tr key={this.props.merchantLedger[i]['id']}>
            <td>{this.props.merchantLedger[i]['id']}</td>
            <td><Link to={url}>Payment from {this.props.merchantLedger[i]['buyerName']}</Link>
            <p className="is-size-7">{this.props.merchantLedger[i]['buyer']}</p>
            {this.props.merchantLedger[i]['status']}
            </td>
            <td>{this.props.merchantLedger[i]['value']} ETH</td>
          </tr>
        )
    }
  }


  let tx_type;
  this.props.type === 'sent' ? tx_type = 'Transaction History (Sent)' : tx_type = 'Transaction History (Received)'


    return (
        <div>
 
        <div>
      <nav className="level">
      <div className="level-left">
        <div className="level-item">
        <p>{tx_type}</p>
        </div>
        </div>
        </nav>
        
        </div>


        <br/>

        <table className="table is-fullwidth is-hoverable is-striped">
        <thead>
        <td>Txid</td>
        <td>Info</td>
        <td>Amount</td>
        </thead>
        <tfoot>
        </tfoot>

        <tbody>
            {tableRows}
        </tbody>
        </table>

</div>
        
    );
  }
}

export default Table;

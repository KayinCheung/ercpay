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


    if (this.state.display === 0){
      for (let i = 0; i < this.props.customerLedger.length; i++){
        tableRows.push(
          <tr>
            <td>{this.props.customerLedger[i]['id']}</td>
            <td>Payment to <br/>{this.props.customerLedger[i]['seller']}<br/>
            {this.props.customerLedger[i]['status']}
            </td>
            <td>{this.props.customerLedger[i]['value']} ETH</td>
          </tr>
        )
      }
    } else {
      for (let i = 0; i < this.props.merchantLedger.length; i++){
        tableRows.push(
          <tr>
            <td>{this.props.merchantLedger[i]['id']}</td>
            <td>Payment from <br/>{this.props.merchantLedger[i]['buyer']}<br/>
            {this.props.merchantLedger[i]['status']}
            </td>
            <td>{this.props.merchantLedger[i]['value']} ETH</td>
          </tr>
        )
    }
  }


  let tx_type;
  this.state.display === 0 ? tx_type = 'Transaction History (Sent)' : tx_type = 'Transaction History (Received)'


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
        <nav className="level">

        <div className="level-item has-text-centered">
          <a className="link is-info" onClick={() => this.setState({display: 0})}>Payments Sent</a>
        </div>

        <div className="level-item has-text-centered">
          <a className="link is-info" onClick={() => this.setState({display: 1})}>Payments Received</a>
        </div>

        </nav>
        </div>


        <br/>

        <table className="table is-fullwidth is-hoverable is-striped">
        <thead>

        </thead>
        <tfoot>
        </tfoot>
        <tbody>
            {tableRows}
        </tbody>
        </table>
        <nav className="pagination is-centered is-small" role="navigation" aria-label="pagination">
  <a className="pagination-previous">Previous</a>
  <a className="pagination-next">Next page</a>
  <ul className="pagination-list">
    <a className="pagination-link" aria-label="Goto page 1">1</a>
    <span className="pagination-ellipsis">&hellip;</span>
    <a className="pagination-link" aria-label="Goto page 45">45</a>
    <a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
    <a className="pagination-link" aria-label="Goto page 47">47</a>
    <span className="pagination-ellipsis">&hellip;</span>
    <a className="pagination-link" aria-label="Goto page 86">86</a>
  </ul>
</nav>
</div>
        
    );
  }
}

export default Table;

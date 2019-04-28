import React, { Component } from 'react';

import { Link } from "react-router-dom";
import Web3 from 'web3';


class TxConfirmation extends Component {
    
  render() {
    let content = ''
    for (let i = 0; i < this.props.content.length; i++){
      content = `${content} <br/> ${this.props.content[i]}`
    }

    return (
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{this.props.title}</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      Your transaction has been sent to the blockchain and is pending confirmation. <br/>
      When confirmed refresh your browser to view the updates.<br/><br/>
      Transaction id: {this.props.txid}
      {content}
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">View in Etherscan</button>
      <button class="button">Close</button>
    </footer>
  </div>
</div>
    );
  }
}

export default TxConfirmation;

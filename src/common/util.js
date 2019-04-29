import Web3 from 'web3';
import constants from '../common/constant.js'
import React, { Component } from 'react';

const status = ['Funds In Escrow', 'Funds Released', 'Refunded', 'Awaiting Resolution']
const web3 = new Web3(window.ethereum);


class StatusButton extends Component {
    render(){
    return (
        <button>{this.props.text}</button>
    );
  }
}

const util = {
    returnTxMap: (id,tx) => {  
        
        return {
            id: parseInt(id),
            buyer: tx[0],
            seller: tx[1],
            escrow: tx[2],
            fee: tx[3]/(10**18),
            value: tx[4]/(10**18),
            status: status[parseInt(tx[5])],
            notes: tx[6]
        }
    },

    sortTx: txs => {
        return txs.sort((a,b) => a.id - b.id)
    },

    txTemplate: () => {
        return{
        id: '',
        buyer: '',
        seller: '',
        escrow: '',
        fee: '',
        value: '',
        status: '',
        notes: ''
    }
    },

    status: () => {
        return status
    },

    statusButton: (size, type, icon) => {
        return(
        <StatusButton text='aaa'/>
        )
    }
}

export default util;

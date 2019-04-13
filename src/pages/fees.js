import React, { Component } from 'react';
import '../App.css';


class Fees extends Component {

  render() {


    return (
        <div>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                    Fees & Info
                    </h1>
                    <h2 class="subtitle">
                    How fees and escrow fund release works
                    </h2>
                </div>
            </div>
            <div class="tabs is-boxed is-centered main-menu" id="nav">
                <ul>
                    <li data-target="pane-1" id="1">
                        <a>
                            <span class="icon is-small"><i class="fa fa-image"></i></span>
                            <span>Home</span>
                        </a>
                    </li>
                    <li data-target="pane-2" id="2" class="is-active">
                        <a>
                            <span class="icon is-small"><i class="fab fa-empire"></i></span>
                            <span>Fees & Rebate</span>
                        </a>
                    </li>
                    <li data-target="pane-3" id="3">
                        <a>
                            <span class="icon is-small"><i class="fab fa-superpowers"></i></span>
                            <span>Buyer Security</span>
                        </a>
                    </li>
                    <li data-target="pane-4" id="4">
                        <a>
                            <span class="icon is-small"><i class="fa fa-film"></i></span>
                            <span>Seller Security</span>
                        </a>
                    </li>
                </ul>
            </div>
            
    </section>
    <div class="content container" style={{width:800}}>
    <br/>
    <h1>Seller Fees</h1>
    <p>Flat 1.5% fee for all transactions.</p>


    <h1>Rebate</h1>
    <p>If buyer released funds to seller within 30 days of transaction, buyer and seller each receive 0.25% rebate on the transaction amount.</p>

    <h3>Example</h3>
    <p>Buyer pays 1000 DAI<br/>
    Buyer releases payment on the 29th day after payment<br/>
    Buyer receives 2.5 DAI rebate<br/>
    Seller receives 985 DAI after fees, plus 2.5 DAI rebate for a total of 987.5 DAI</p>


    <h1>Escrow duration</h1>
    <p>Funds from buyer are held in escrow and will be automatically released 30 days after the transaction is made, or buyer released funds early.</p>
    <p>If buyer raised dispute, funds will be held in escrow until issue is resolved.</p>


    <h1>Dispute resolution</h1>
    <p>Buyers can raise a dispute before 30 days since transaction was made if item has not arrived, or did not arrive as described.</p>
    </div>
    
    </div>
    );
  }
}

export default Fees;

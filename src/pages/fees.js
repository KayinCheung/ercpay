import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";


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
                       <Link to="/"> <p>
                            <span class="icon is-small"><i class="fa fa-image"></i></span>
                            <span>Home</span>
                        </p>
                        </Link>
                    </li>
                    <li data-target="pane-2" id="2" class="is-active">
                        <a>
                            <span class="icon is-small"><i class="fab fa-empire"></i></span>
                            <span>Fees & Info</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
            
    </section>
    <div class="content container" style={{width:800}}>
    <br/>
    <h1>Seller Fees</h1>
    <p>Flat 1% fee for all transactions.</p>

    <h1>Buyer Fees</h1>
    <p>None. Gas fees from creating transactions on the blockchain only, usually less than 1 cent.</p>

    <h1>Escrow duration</h1>
    <p>Funds from buyer are held in escrow once transaction is created.
    Buyer should release funds after confirming receiving of working product.</p>
    
    <h1></h1>


    <h1>Dispute resolution</h1>
    <p>Buyers should raise a dispute if item has not arrived in 30 days, or did not arrive as described.<br/>
    Sellers should raise a dispute if buyer refuses to release funds after 30 days and the product is received.</p>

    <br/>
    We will review evidence provided by both parties and get in touch. 
    We may require proof of address before starting the dispute resolution process;
     it involves sending an empty message (or sending a 0 Ether transaction) to an address we specify.

    <h1>Transaction process</h1>
    For stronger protection against fradulent buyers and sellers, please involve ERCPAY in your conversations with the buyer or seller.
    <br/>
    <br/>
    <h4>If you are communicating by email</h4>
    CC ercpayescrow@gmail.com in all emails
    <br/>
    <br/>
    <h4>If you are communicating on Reddit</h4>
    Create a group chat, and add <a href="https://www.reddit.com/user/Arrow222/" target="_blank">/u/Arrow222</a>

    <br/>
    <br/>
    <h4>If you are communicating on Telegram</h4>
    Create a group chat, and @kayin1

    <br/>
    <br/>
    <h4>If you are communicating on other channels</h4>
    If it has a group chat feature, let us know and we will create an account. Contact us at ercpayescrow@gmail.com


<br/><br/>
    <b>
    This allows us to get a full transcript of evidence and greatly accelerates the dispute resolution process.
    </b>


    </div>
    <br/>
    
    <br/>
    <br/>
    </div>
    );
  }
}

export default Fees;

import React, { Component } from 'react';
import '../App.css';


class Buyer_Security extends Component {

  render() {


    return (
        <div>
        <section class="hero is-info">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                    Buyer Security
                    </h1>
                    <h2 class="subtitle">
                    Follow these guidelines to enhance security and buyer protection.
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
                    <li data-target="pane-2" id="2">
                        <a>
                            <span class="icon is-small"><i class="fab fa-empire"></i></span>
                            <span>Fees & Rebate</span>
                        </a>
                    </li>
                    <li data-target="pane-3" id="3" class="is-active">
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
   
    <h1>Guidelines</h1>
    <p>We recommend following as many of these these guidelines as possible when transacting on ERCPay to enhance security and escrow protection.</p>

    <h1>Communication</h1>
    <p>Include ERCPay in your communications with the seller. For email communication, CC escrow@ercpay.com. 
    For reddit transactions, instead of private message, create a group chat with yourself, the seller and /u/ERCPay_KY.</p>
    <p>Having an unmodified transcript of communications provides a trail of evidence that greatly helps in case of disputes.</p>

    <h1>Confirming the product (Used electronics)</h1>
    <p>Ask the seller to provide photos of the used product beforehand, including serial numbers of the product.</p>

    <h1>Package opening</h1>
    <p>Take a photo before opening the package that clearly shows your address.
    If possible, take an unboxing video.</p>

    <h1>If more help is needed</h1>
    <p>Feel free to contact us at @ercpay.com, or message /u/ERCPay_Kayin on reddit.<br/>
    </p>
   
    <h1>When to raise a dispute</h1>
    <p>
    - If the seller is uncommunicative or there's an issue with the transaction<br/>
    - If it's close to 30 days since transaction was made, raise a dispute on the transaction to prevent auto-release of funds.</p>
    </div>
    
    </div>
    );
  }
}

export default Buyer_Security;

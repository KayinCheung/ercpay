import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import Footer from "../common/footer"

class Home extends Component {

  render() {


    return (
        <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="../">
            <img src="../images/bulma.png" alt="Logo"/>
          </a>
                        <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
                        <span></span>
                        <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end">
                            <div className="tabs is-right">
                                <ul>
                                    <li className="is-active"><Link to="/">Home</Link></li>
                                    <li><Link to="/dashboard">About</Link></li>
                                    <li><Link to="/dashboard">Get Started</Link></li>
                                    <li><Link to="/fees">Fees & Info</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>  
        <Section1/>

        <Section2/>

        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>

      
    </section>
        
    );
  }
}

export default Home;

class Section1 extends Component {

    render() {
  
  
      return (
        <div className="hero-body">
        <div className="container has-text-centered">
            <div className="columns is-vcentered">
                <div className="column is-5">
                    <figure className="image is-4by3">
                        <img src="https://picsum.photos/800/600/?random" alt="Description"/>
                    </figure>
                </div>
                <div className="column is-6 is-offset-1">
            
                    <h1 className="subtitle is-3">
                        Transact with ETH and Stablecoins<br/>with escrow protection.
                    </h1>
                  <p>Login using your Ethereum address with metamask.</p><br/>
                    <p className="has-text-centered">
                    
                        <a className="button is-medium is-info is-outlined" href="/login">
                    Login
                    </a>
 
                    </p>
                </div>
            </div>
        </div>
    </div>
      );
    }
    
}

class Section2 extends Component {

    render() {
  
  
      return (
        <section className="container">
        <div className="content has-text-centered"><h1>Benefits of ERCPay</h1></div>
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-paw"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Secure Crypto Payments</h4>
                            <p>
                                Payment with crypto is safer than ever. Unlike normal crypto transactions,
                                payments are held in escrow using an Ethereum smart contract.
                                <br/><br/>
                                

                                Funds from transactions are released after 30 days if there are no disputes. You can also release funds early to earn a rebate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-empire"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Low fees</h4>
                            <p>Flat 1% for sellers<br/><br/>
                            Because we leverage the Ethereum Blockchain for our back-end systems instead of expensive datacenters, the savings are passed on to sellers on ERCPay.
                            <br/><br/>
                            We hope lower fees for sellers indirectly translate to lower prices for buyers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                        <i className="fa fa-apple"></i>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Your Address, Your Funds</h4>
                            <p>
                                Your funds, even funds within the smart contract, can only be controlled with your Ethereum address.<br/><br/>
                                This means no entity can ever withhold your funds or freeze your account.<br/><br/>
                                Read the open source escrow smart contract on Etherscan.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        </section>
      );
    }
    
}

class Section3 extends Component {

    render() {
  
  
      return (
        <div className="hero-body">
        <div className="container has-text-centered">
            <div className="columns is-vcentered">
                <div className="column is-7">
                <h1 className="title is-3">
                        How we started
                    </h1>
                    <h2 className="subtitle is-5">
                        <br/>
                    </h2>
                    <p>We were founded because we could not find good solutions for transacting safely with cryptocurrency.
                        Before ERCPay, crypto payments require the buyer to first send payment to the merchant, with no way to get money back if seller does not deliver. </p><br/>
                    <p>Some escrow solutions exist; on Bitcointalk, buyers to first send payment to an escrow agent. The escrow agent then tells the sellers that funds are received,
                        and to deliver the goods. This process can easily take more than a day due to different timezones.<br/><br/>

                        Imaging paying $10 of crypto for a game product key, and only getting the key after a day with multiple back and forth communications.
                        Or imagine being the seller, where you will only get that $10 an additional day after the buyer gets his key.
                        
                        <br/><br/>
                        There is also counterparty risk; the escrow agent could lose the funds or his private keys.<br/><br/>

                    Hence we built ERCPay, to provide a platform for honest merchants and buyers to transact with a peace of mind.
                     Crypto payments can now be sent with escrow protection, and displayed on the seller's dashboard within 15 seconds.

                    <br/>
                    

                        
                    </p>

<br/>
                    
                </div>
                <div className="column is-6 is-offset-1">
                <figure className="image is-4by3">
                        <img src="https://picsum.photos/800/600/?random" alt="Description"/>
                    </figure>
                   
                </div>
            </div>
        </div>
    </div>
      );
    }
    
}


class Section4 extends Component {

    render() {
  
  
      return (
        <div className="hero-body">
        <div className="container has-text-centered">
            <div className="columns is-vcentered">
            <div className="column">
            <h1 className="title is-2">Intuitive dashboard</h1>
            <p>Simple and familar to use.</p><br/>
          
            <figure className="image is-4by3">
                        <img src="https://picsum.photos/800/600/?random" alt="Description"/>
                    </figure><br/>
                    
                    <p className="buttons is-centered">
                    <a className="button is-info is-outlined">
            Login
          </a>
          <a className="button is-info is-outlined">
            View Demo
          </a>
          </p>
                    
            </div>
            </div>
        </div>
    </div>
      );
    }
    
}

class Section5 extends Component {

    render() {
  
  
      return (
        <div className="hero-body">
        <div className="container has-text-centered">
        <h1 className="subtitle is-3">
            Contact Us
        </h1>
        <p>Feel free to reach out if you have any questions, feedback or suggestion. Reach us at: </p>
                    <br/>
                    <p className="buttons is-centered">
                        <a className="button is-info is-outlined">
            Reddit
          </a>
          <a className="button is-info is-outlined">
            Bitcointalk
          </a>
          <a className="button is-info is-outlined">
            Email
          </a>
                    </p>
        </div>
    </div>
      );
    }
    
}

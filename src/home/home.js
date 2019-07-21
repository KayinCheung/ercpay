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
                        <p className="navbar-item">
            ERCPAY
          </p>
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
                               
                                    <li><Link to="/info">Fees & Info</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>  
        <Section1/>

     

        <Section3/>
        <Section4/>
        <Section2/>
      
        <Section6/>
        <DevSection/>
        <Section5/>

      
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
                    <figure className="image">
                        <img src="https://user-images.githubusercontent.com/24837709/57173766-65caff00-6e67-11e9-9060-52b7a65e5dce.jpg" alt="Description"/>
                    </figure>
                </div>
                <div className="column is-6 is-offset-1">
            
                    <h1 className="subtitle is-3">
                        Send and receive ETH <br/>with escrow protection
                    </h1>
                  <p>Login using your Ethereum address with <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">metamask</a>.<br/>No signup required. </p><br/>
                    <p className="has-text-centered">
                    
                    <Link to="/login">
                    <p className="button is-medium is-info is-outlined">
                    Login
                    </p></Link>
 
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
            <br/>
            <br/>
        <div className="content has-text-centered"><h1>Benefits of ERCPay</h1></div>
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Secure Crypto Payments</h4>
                            <p>
                                Payment with crypto is safer than ever. Unlike normal crypto transactions,
                                payments are held in escrow using an Ethereum smart contract.
                                <br/><br/>
                                
                                Funds from transactions are released by the buyer once product is received. 
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>1% transaction fee</h4>
                            <p>
                            We leverage the Ethereum Blockchain for our back-end systems. <br/><br/>
                            Because we don't incur costs of inter-bank transfers and expensive datacenters, our fees are the industry's lowest, at just 1%.
                            <br/><br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-image has-text-centered">
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h4>Secure fund ownership</h4>
                            <p>
                                Your funds, even funds within the smart contract, can only be controlled with your Ethereum address.<br/><br/>
                                This means no entity can ever withhold your funds or freeze your account.<br/><br/>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <br/>
        </section>
      );
    }
    
}

/*<p>We were founded because we could not find good solutions for transacting safely with cryptocurrency.
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

*/

class Section3 extends Component {

    render() {
  
  
      return (
        <div className="hero-body">
        <div className="container has-text-centered">
            <div className="columns is-vcentered is-centered">
                <div className="column is-7">
                <h1 className="title is-3">
                        About ERCPay
                    </h1>
                    <h2 className="subtitle is-5">
                    </h2>
                    <p>ERCPay is the world's first payment processor built on Ethereum smart contracts.
                    We leverage blockchain technology to offer the industry's lowest transaction fee and highest funds security.
                    </p>

             
                    
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
            <div className="columns is-vcentered is-centered">
            <div className="column is-7">
            <h1 className="title is-2">Intuitive dashboard</h1>
          
            <figure className="image">
                        <img src="https://user-images.githubusercontent.com/24837709/56896130-87219900-6abd-11e9-87db-c79b5642e21b.png" alt=""/>
                    </figure><br/>
                    <p>  ERCPay is designed to be simple and intuitive for users familar with traditional payment processors, such as Paypal and Stripe. 
                Currently we support ETH payments, and stablecoin payments are coming soon.<br/><br/>
                You can also test sending and receiving of payments on the Ropsten testnet.
               </p>
                <br/>
                    <p className="buttons is-centered">
                    <Link to="/login"><p className="button is-info is-outlined">
            View Dashboard
          </p></Link>
          
          </p>
         
          <p className="is-size-7">Login with <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank">metamask</a> to view the dashboard. No signup required.</p>


                    
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
        <div className="hero-body bg-lb">
        <div className="container has-text-centered">
        <h1 className="title is-3">
            Contact Us
        </h1>
        <p>Feel free to reach out if you have any questions, feedback or suggestion. Reach us at: </p>
<<<<<<< HEAD
                    <br/>
                    <p className="buttons is-centered">
                        <a className="button is-info is-outlined">
            Reddit
          </a>
          <a className="button is-info is-outlined" href="https://bitcointalk.org/index.php?action=profile;u=960616" target="_blank">
            Bitcointalk
          </a>
          <a className="button is-info is-outlined">
          Email
        </a>          
        <a className="button is-info is-outlined" href="https://www.linkedin.com/in/cheung-ka-yin-7b058180/" target="_blank">
            Linkedin
          </a>
                    </p>
=======
        <br/>
        <b>Email</b><br/> ercpayescrow@gmail.com
        <br/>
        <br/>
        <b>Reddit</b><br/>
        https://www.reddit.com/r/ERCPay
        <br/>
        <br/>
        <b>Telegram</b><br/>
        https://t.me/ercpay
        <br/><br/>

                    
>>>>>>> origin/master
        </div>
    </div>
      );
    }
    
}


class DevSection extends Component {

    render() {
  
  
      return (
        <div className="hero-body">
        <div className="container has-text-centered">
        <h1 className="title is-3">
            Developers Section
        </h1>
        <p>View our open sourced smart contracts and technical documents.</p>
        <br/>
        <p><b>ERCPay</b><br/>Mainnet | <a href="https://ropsten.etherscan.io/address/0xa4f1032d9b1485b9384f7061d95c732edb9c1527" target="_blank">Ropsten</a></p><br/>
        <p><b>ERCPay Profile</b><br/>Mainnet | <a href="https://ropsten.etherscan.io/address/0xe54c0168d2e75c7f68fcf40b0ab5793115dd2a92" target="_blank">Ropsten</a></p><br/>
        <p><b>Github</b></p>
        </div>
    </div>
      );
    }
    
}

class Section6 extends Component {
    
        render() {
      
      
          return (
            <div className="hero-body bg-lb">
            <div className="container has-text-centered">
                <div className="columns is-centered">
                    <div className="column is-7">
                    <h1 className="title is-3">
                How ERCPay Works
            </h1>
            <p>
               
              
                Buyer first makes payment on ERCPay's platform, either by sending payment to an Ethereum address in the dashboard,
                or paying via a invoice link provided by seller.<br/><br/>
                

                The payment is held in escrow in our Ethereum smart contract. 
                When the seller fulfills his obligations, the buyer can release funds to the seller. 
                The seller also has the ability to refund the buyer.
                <br/><br/>
                If a dispute occurs, either party can contact us for dispute resolution. 
                For further info on dispute resolution process, visit our <Link to="/login">fees & info page</Link>.
            </p>
                    </div>
                </div>

                <img src="https://user-images.githubusercontent.com/24837709/30773541-3d81c506-a0a5-11e7-9e4c-28e322cdc5b8.png" width="800"/>
            
                        <br/>
                       
            </div>
        </div>
        );
        }
        
    }
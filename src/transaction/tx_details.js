import React, { Component } from 'react';
import '../App.css';
import container from 'react-bulma-components/lib/components/container';
import tile from 'react-bulma-components/lib/components/tile';
import box from 'react-bulma-components/lib/components/box';
import button from 'react-bulma-components/lib/components/button';
import section from 'react-bulma-components/lib/components/section';


class TransactionDetails extends Component {

  render() {
    return (
        <div className="App">
      <section class="section">
      <div className="container box" style={{width:800}}>
      <nav className="level">
      <div className="level-left">
        <div className="level-item">
        <a className="link is-info">Transaction Details</a>
        </div>
        </div>
        </nav>
            </div>
   
        
        </section>
        </div>
        
    );
  }
}

export default TransactionDetails;

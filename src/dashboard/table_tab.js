import React, { Component } from 'react';
import '../App.css';

class TableTab extends Component {

  render() {
    return (
      <div>
      <nav className="level">
      <div className="level-left">
<div className="level-item">
<p>Transaction History</p>
</div>
</div>
</nav>
<nav className="level">
<div className="level-item has-text-centered">
  <a className="link is-info">Overview</a>
</div>
<div className="level-item has-text-centered">
  <a className="link is-info">Payments Sent</a>
</div>

<div className="level-item has-text-centered">
  <a className="link is-info">Payments Received</a>
</div>
<div className="level-item has-text-centered">
  <a className="link is-info">Payments In Escrow</a>
</div>
</nav>
        </div>
    );
  }
}

export default TableTab;

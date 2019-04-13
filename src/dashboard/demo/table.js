import React, { Component } from 'react';
import '../App.css';

import TableTab from './table_tab.js';
import { Link } from "react-router-dom";

class Table extends Component {

  render() {

    return (
        <div>

        <TableTab/>
        <br/>

        <table className="table is-fullwidth is-hoverable is-striped">
        <thead>

        </thead>
        <tfoot>
        </tfoot>
        <tbody>
            <tr>
            <td>21/09/2018</td>
            <td><Link to="/activity/payment">Payment from ShoukoChan<br/>
            Completed</Link></td>
            <td>$76.29</td>
        </tr>
        <tr>
            <td>21/09/2018</td>
            <td>Payment from ShoukoChan<br/>
            Completed</td>
            <td>$76.29</td>
          </tr>
          <tr>
            <td>21/09/2018</td>
            <td>Payment from ShoukoChan<br/>
            Completed</td>
            <td>$76.29</td>
          </tr>
          <tr>
            <td>21/09/2018</td>
            <td>Payment from ShoukoChan<br/>
            Completed</td>
            <td>$76.29</td>
          </tr>
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

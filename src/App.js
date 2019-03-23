import React, { Component } from 'react';
import './App.css';

import Dashboard from './dashboard/body.js'

class App extends Component {
  
  handleAddress = (address) => {
    this.setState({address: address});
  }

  render() {
    return (
      <div className="App">
        
        <Dashboard/>
      </div>
    );
  }
}

export default App;

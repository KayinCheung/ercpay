import React, { Component } from 'react';
import './App.css';
import Header from './common/header.js'
import Dashboard from './dashboard/body.js'

class App extends Component {
  
  handleAddress = (address) => {
    this.setState({address: address});
  }

  render() {
    return (
      <div className="App">
        <Header onAddressChange={this.handleAddress}/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;

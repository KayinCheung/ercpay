import React, { Component } from 'react';

class AddressDropdown extends Component {

    handleAddressChange = address => {
        this.props.onAddressChange(address);            
    }

    render(){

        const addresses = [
            {name: "kayin", add: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"},
            {name: "kawai", add: "0x99924a6b4ccb1b6faa2625fe562bdd9a23260359"}]
        const DropdownAddress = data => (
        <a className="navbar-item">
            {data.name}<br/>
            {data.add}
        </a>)
      
  
    return (
        <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
            
              0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359
              </a>
      
              <div className="navbar-dropdown is-right">
                  {addresses.map(DropdownAddress)}

                <hr className="navbar-divider"/>
                <a className="navbar-item">
                  Log Out
                </a>
        </div>
        </div>
    );
  }
}

export default AddressDropdown;

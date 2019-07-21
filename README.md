# ercpay

# ERCPay - The Paypal Dapp
ERCPay is the world's first payment processor built on Ethereum smart contracts. We leverage blockchain technology to offer the industry's lowest transaction fee and highest funds security.

Deployed at: https://ercpay.github.io/

## To use ERCPay 

Install Ethereum node software (Required):

- [Metamask Chrome Extension](https://metamask.io/)

We suggest Metamask as they provide a fully synced Ethereum node and only takes 3 mins to setup. 

The Dapp is developed on Google chrome and Metamask. Other ethereum node and browser combinations may work, but are untested and unsupported. Once metamask is installed and your wallet is created, you can access the dashboard and try sending, receiving, releasing and refunding transactions on the Ropsten testnet.


## How the smart contract works

Buyer initiates a transaction, specifying a seller and escrow agent address. On ERCPay's dashboard, the escrow agent address is hardcoded to our address and not available to edit on the dashboard.

After transaction creation, the transaction is "In Escrow". Afterwards,

- Buyer or Escrow can release funds, transaction is considered complete. Tx state will be frozen.
- Seller or Escrow can refund buyer, transaction is considered complete. Tx state will be frozen.
- Buyer or Seller can raise dispute resolution. Raising dispute resolution is for records purpose (we can track % of disputes for each buyer/seller). 
- No other party can modify state of transaction.


Funds when released or refunded, is moved under the seller/buyer's ownership respectively. Fees are moved to escrow agent's ownership. They can withdraw funds they own.


# Run the source code locally

Download the repo, run ```npm install```,  then ```npm start```

# Core logic

Core logic of displaying the dashboard is under ```src > dashboard > body.js```

Core logic of sending escrow transactions is under ```src > transaction > send_payment.js```

Core logic of interacting with existing transactions, including viewing the transaction, funds release, refund or opening disputes is under  ```src > transaction > tx_details.js```


## Smart Contract Changelog

* v0.1 Ropsten - 11 May 2019
  - Main smart contract: https://ropsten.etherscan.io/address/0xa4f1032d9b1485b9384f7061d95c732edb9c1527
  - Profile info: https://ropsten.etherscan.io/address/0xe54c0168d2e75c7f68fcf40b0ab5793115dd2a92

 

## Authors

Cheung Ka Yin 

Contact: escrowmyether@gmail.com

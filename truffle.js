require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = process.env.MNEMONIC
const infuraUrl = process.env.INFURA_GOERLI_URL


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, infuraUrl),
      network_id: 5,       // Goerli's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      //gas: 30000000,
      // gasPrice: 100000000
      gasPrice: 50000000000
      // confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  }
};
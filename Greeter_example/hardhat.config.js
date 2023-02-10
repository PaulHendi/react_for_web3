require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "fantom_testnet",
  networks : {
    // hardhat: {
    //   chainID: 31337,
    // },
    fantom_testnet: {
      url: "https://rpc.ankr.com/fantom_testnet",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  path : {
    artifacts : "./src/artifacts",
  }
};

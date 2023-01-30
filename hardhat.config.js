require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  network : {
    hardhat: {
      chainID: 31337,
    }
  },
  path : {
    artifacts : "./src/artifacts",
  }
};

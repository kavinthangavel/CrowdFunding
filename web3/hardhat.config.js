/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    defaultNetwork: "mumbai",
    networks: {
      hardhat: {},
      mumbai: {
        url: 'https://mumbai.rpc.thirdweb.com/d391b93f5f62d9c15f67142e43841acc/?bundleId=undefined',
        accounts : ['0x${process.env.PRIVATE_KEY}']
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

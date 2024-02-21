require('dotenv').config();
require('@nomicfoundation/hardhat-toolbox')

const { MUMBAI, MATIC } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        mumbai: {
            url: 'https://rpc-mumbai.maticvigil.com/',
            chainId: 80001,
            accounts: [MUMBAI]
        },
        matic: {
            url: 'https://rpc-mainnet.maticvigil.com/',
            chainId: 137,
            accounts: [MATIC]
        }
    }
};

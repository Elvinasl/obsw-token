const {ethers} = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log('Deploying contracts with the account:', deployer.address);
    console.log('Account balance:', (await deployer.getBalance()).toString());

    // Deploy Main Token
    const OBSWToken = await ethers.getContractFactory('OBSWToken');
    const token = await OBSWToken.deploy(); // Deploy new
    // const token = await OBSWToken.attach('0x9DC458CE770517c9B62b47288E3401A71553aA29'); // Bind existing
    await token.deployed();
    console.log('Token contract deployed at address:', token.address);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })

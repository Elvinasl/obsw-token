const { ethers } = require('hardhat');
const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { expect } = require('chai');

describe('OBSWorld Token Contract', () => {
    async function deployTokenFixture() {
        const OBSWToken = await ethers.getContractFactory('OBSWToken');
        const [owner, addr1, addr2] = await ethers.getSigners();

        const contract = await OBSWToken.deploy();
        await contract.deployed();

        return { OBSWToken, contract, owner, addr1, addr2 };
    }

    describe('Deployment', function() {
        it('Mints initial tokens to deployer', async function() {
            const { contract, owner } = await loadFixture(deployTokenFixture);
            const expectedBalance = BigInt("5000000000000000000000000000");
            expect(await contract.balanceOf(owner.address)).eq(expectedBalance)
        })
    });
});

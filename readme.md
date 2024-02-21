# OBS Smart Contracts Setup Guide

## Setting Up on macOS

1. **Install Homebrew**: Download Homebrew from their official site and follow the installation instructions.

2. **Install Node.js**: Use Homebrew to install Node.js by running the following command in your terminal:

    ```bash
    brew install node
    ```

3. **Verify Node.js Installation**: Ensure Node.js is installed correctly by checking its version:

    ```bash
    npm -v
    ```

Congratulations! You're now equipped to execute scripts required for this repository.

## Getting Started

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Install Dependencies**: Navigate into the cloned repository directory and install the required dependencies using npm:

    ```bash
    npm install
    ```

3. **Run Tests**: Execute the tests to ensure everything is set up properly:

    ```bash
    npx hardhat test
    ```

## Deploying to Testnet (Mumbai)

To deploy your smart contracts to the Mumbai testnet, run the following command:

```bash
npx hardhat run scripts/deploy.js --network mumbai
```

This command will utilize the account configured in `hardhat.config.js`.

Note: Each deployment will recreate the contracts from scratch. Customize the deployment script in `scripts/deploy.js` to align with your specific requirements before executing.

## Deploying to Mainnet

Before deploying to the mainnet, ensure you have a secure environment and sufficient Matic tokens in your wallet to cover gas fees. Follow these steps:

1. **Install Dependencies**: If not done already, install the necessary dependencies:

    ```bash
    npm install
    ```

2. **Run Tests**: Execute the tests to validate the setup:

    ```bash
    npx hardhat test
    ```

3. **Update Configuration**: Update `hardhat.config.js` with your wallet's private key, network URL (`https://polygon-rpc.com/`), and chain ID (`137`).

4. **Deploy Contracts**: Deploy your contracts to the Matic mainnet by running:

    ```bash
    npx hardhat run scripts/deploy.js --network matic
    ```

Similar to deploying to the testnet, each deployment recreates the contracts. Customize the deployment script as needed before execution.

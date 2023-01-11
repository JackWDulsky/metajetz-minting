/**
 *  This script will calculate the constructor arguments for MetaJetzSparrow977.sol and deploy it.
 *  After deploying, you can access the contract on etherscan.io with the deployed contract address.
 */

const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')

const BASE_URI = 'ipfs://QmZMg69srMf49eETR1uCEttrFguXbmaziHU8YA4U7snTV4/' // Done
const proxyRegistryAddressGoerli = '0x43fA1CFCacAe71492A36198EDAE602Fe80DdcA63' // Maybe Done
const proxyRegistryAddressMainnet = '0xa5409ec958c83c3f309868babaca7c86dcb077c1' // Done

async function main() {
  // Calculate merkle root from the whitelist array
  const leafNodes = whitelist.map((addr) => keccak256(addr))
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
  const root = merkleTree.getRoot()

  // Deploy the contract
  const MetaJetzSparrow977 = await hre.ethers.getContractFactory('MetaJetzSparrow977')

  const gasPrice = await MetaJetzSparrow977.signer.getGasPrice();
  console.log(`Current gas price: ${gasPrice}`);

  const estimatedGas = await MetaJetzSparrow977.signer.estimateGas(
    MetaJetzSparrow977.getDeployTransaction(    BASE_URI,
      root,
      proxyRegistryAddressMainnet),
  );
  console.log(`Estimated gas: ${estimatedGas}`);

  const deploymentPrice = gasPrice.mul(estimatedGas);
  const deployerBalance = await MetaJetzSparrow977.signer.getBalance();
  console.log(`Deployer balance:  ${ethers.utils.formatEther(deployerBalance)}`);
  console.log(`Deployment price:  ${ethers.utils.formatEther(deploymentPrice)}`);
  if (deployerBalance.lt(deploymentPrice)) {
    throw new Error(
      `Insufficient funds. Top up your account balance by ${ethers.utils.formatEther(
        deploymentPrice.sub(deployerBalance),
      )}`,
    );
  }

  const metaJetzSparrow977 = await MetaJetzSparrow977.deploy(
    BASE_URI,
    root,
    proxyRegistryAddressMainnet
  )

  await metaJetzSparrow977.deployed()

  console.log('MetaJetzSparrow977 deployed to:', metaJetzSparrow977.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

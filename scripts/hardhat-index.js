const hre = require("hardhat");

async function main() {
  console.log("Attaching the contract....");
  const factory = await hre.ethers.getContractFactory("ContractMediator");
  const contractMediator = await factory.attach(
    process.env.CONTRACT_MEDIATOR_ADDRESS
  );
  const callMethodInBytes = hre.ethers.toUtf8Bytes("attempt()");
  const methodSignature = hre.ethers.keccak256(callMethodInBytes);
  const tx = await contractMediator.relayCalldata(
    process.env.CONTRACT_ADDRESS,
    methodSignature
  );
  console.log("Tx from interacting with the contract:", tx);
}

main()
  .then(() => console.log("The contract has been successfully deployed!"))
  .catch((error) => console.log("Unexpectedly found an error", error));

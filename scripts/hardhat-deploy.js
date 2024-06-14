const hre = require("hardhat");

async function main() {
  console.log("Deploying a contract....");
  const factory = await hre.ethers.getContractFactory("ContractMediator");
  const contractMediator = await factory.deploy();
  console.log(
    "The contract has been deployed successfully!",
    await contractMediator.getAddress()
  );
}

main()
  .then(() => console.log("The contract has been successfully deployed!"))
  .catch((error) => console.log("Unexpectedly found an error", error));

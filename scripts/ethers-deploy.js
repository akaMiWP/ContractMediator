require("dotenv").config();
const ethers = require("ethers");
const ContractJSON = require("../artifacts/contracts/Contract.sol/Contract.json");

async function main() {
  console.log("Deploying a contract.....");
  const provider = new ethers.AlchemyProvider(
    "sepolia",
    process.env.ALCHEMY_SEPOLIA_API_KEY
  );

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const factory = new ethers.ContractFactory(
    ContractJSON.abi,
    ContractJSON.bytecode,
    wallet
  );

  const tx = await factory.deploy();
  console.log("The contract has been deployed", await tx.getAddress());
}

main()
  .then(() => console.log("The contract has been deployed successfully!"))
  .catch((error) => console.log("Unexpectedly received the error", error));

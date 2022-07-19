require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/R0f25wTnlacGMaH0fGFavyLMj_O1fP7z",
      accounts: ["7df2e7aa2cbbf04d06c3b3b0422929712f3bb7a88ee5d6a925ad3ce162eb540d"]
    },
    mainnet: {
      chainId: 1,
      url: "https://eth-rinkeby.alchemyapi.io/v2/R0f25wTnlacGMaH0fGFavyLMj_O1fP7z",
      accounts: ["7df2e7aa2cbbf04d06c3b3b0422929712f3bb7a88ee5d6a925ad3ce162eb540d"],
    }
  },
};

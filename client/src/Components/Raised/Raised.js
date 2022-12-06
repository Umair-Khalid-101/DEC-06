import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const Raised = () => {
  const [balance, setBalance] = useState(null);
  const provider = new ethers.providers.EtherscanProvider("goerli");
  const address = "0xB06d7D2eDf91dD26A9C65f91eb014F3875c26603";

  useEffect(() => {
    provider.getBalance(address).then((balance) => {
      // convert a currency unit from wei to ether
      const balanceInEth = ethers.utils.formatEther(balance);
      console.log(`balance: ${balanceInEth} ETH`);
      setBalance(balanceInEth);
    });
  }, []);

  return (
    <>
      <div>{balance ? <div>Raised: {balance} </div> : <div>Error</div>}</div>
    </>
  );
};

export default Raised;

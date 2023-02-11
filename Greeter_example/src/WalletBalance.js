import React, { useState, useEffect } from 'react';
import { utils } from 'ethers';

export default  function WalletBalance({provider, address }) {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchBalance() {
      if (!address || !provider) {
        return;
      }
      const balance = await provider.getBalance(address);
      setBalance(utils.formatEther(balance));
    }

    fetchBalance();
  }, [address]);

  return (
    <div>
      <h1>Balance: {balance} ETH</h1>
    </div>
  );
}



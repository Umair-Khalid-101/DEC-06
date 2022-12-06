import React, { useEffect, useState } from "react";
import axios from "axios";
let balance;

const EtherScan = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "/api?module=account&action=balance&address=0xB06d7D2eDf91dD26A9C65f91eb014F3875c26603&tag=latest&apikey=1DWRED6I53RQBVTGUG9TKUC1GG8TTTIH25"
      )
      .then((res) => {
        const data = res.data;
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("Data: ", data);
  balance = data.result / 1000000000000000000;
  return (
    <>
      <h1>EtherScan</h1>
      <h2>Balance: {balance} Eth</h2>
    </>
  );
};

export default EtherScan;

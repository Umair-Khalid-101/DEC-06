const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy(
      "/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=1DWRED6I53RQBVTGUG9TKUC1GG8TTTIH25"
    ),
    {
      target: "https://api-goerli.etherscan.io/",
      changeOrigin: true,
    }
  );
};
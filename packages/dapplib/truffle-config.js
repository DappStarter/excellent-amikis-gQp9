require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn promote hope ensure surge trap'; 
let testAccounts = [
"0x4ca6bd0f90e6f6b6fd692a773ab914ef8d792bcfd619e8605618480f50847745",
"0xee002b3d1bc897a74c43e4783144cc41e3d46daec09e407f493cfdfe2cc23d5e",
"0x11f115f3638da278a4a79072c30f93086dccb5cc296059c76942cc5bb36a1b29",
"0xd1b7abb2e4e38f79429a97a211acc6d360d9fb1e07499eb174dc8a45447d4443",
"0xde6212c0a89685f237a3dba0d61475d47317cccedd4d4478cb5ec9550b45da09",
"0x5224100b8f3bdcd61cef18f1d4a59d1e0389f2fe4187151ca77da90d97bd43c7",
"0x0e684840f44afe210744dd683051fdf02234c9f7828e186b78987e89417bc912",
"0x4da48da8044d1ec61612a61bcbbbbefcb9423204f52a6d5af0631cd71bfb344b",
"0x201920aa2e1398507642b33dd7b6d044e1fcf9d9fe67bd48ce252df23afe1be8",
"0x6035ec9f92e791ec8558fc13087713976a876af725b45d54ce82c3006c0b20c4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


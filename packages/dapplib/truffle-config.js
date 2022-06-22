require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe stone rice rifle update harvest define army gift'; 
let testAccounts = [
"0x9a8af8edb5af6cb78e16db751ecfe0e3cb3c06e6370b9f318e0bc1fb1f670988",
"0x73de0a5d95be4c12a7b73125309311b211f7eb2cf1538b71fa1bcf438e6e6b4d",
"0xa047a297e5074188fa32a27ddc615e871899511226e4f6ba915ecb2a4ecbbe56",
"0x863b33e7775bd1b7d54437d60a5df797897467cfd2f935e56c4cc11103fbdbf8",
"0xb91f754a326f5689e496eaa22f033650f7aec840f6a576c721caf5bb5660b0d5",
"0xe49c000f75a9c8bb4cca3380807d5ff3e81eeb5eed89bd9643fd4205fbeb822c",
"0x3e4fc46e11aee15f7ddc0c6c9b7185928048714613099446d246d1a0595f7292",
"0xfdbb9c85491cbed2ec7abf0898e0d4658e75dc813d63a6b2d617adae85c9a522",
"0x3f385165d422730ea0fea441ba88c480f4ef59d5a4e69566a61ed057ede07c36",
"0x547d660e48c310fb6b50eafaddfe73aac71baf07fdc435297b9c85e78c34fb3f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


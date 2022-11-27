import { TezosToolkit } from '@taquito/taquito';

const Tezos = new TezosToolkit('https://ghostnet.ecadinfra.com/');

Tezos.contract.at("KT1HR7fV8vSJ38EKzWKEiknYwHfCBWP964S3")
.then((contract) => {
    return contract.methods.message("Hello World :)");
})
.then((op) => {
    println(`Waiting for ${op.hash} to be confirmed...`);
    return op.confirmation(1).then(() => op.hash);
  })
  .then((hash) => console.log(`Operation injected: https://ghostnet.tzstats.com/${hash}`))
  .catch((error) => console.log(error));
import { TezosToolkit } from '@taquito/taquito';

const Tezos = new TezosToolkit('https://ghostnet.ecadinfra.com');


Tezos.tz.getBalance("tz1URwsY4kgH4gkhxbnVeV7Tc3RvzaSvHGhx").then((balance) => console.log(`${balance.toNumber() / 1000000} tz`))

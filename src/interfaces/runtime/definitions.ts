import substrateRuntime from '@polkadot/types/interfaces/runtime/definitions';

export default {
  rpc: {},
  types: {
    ...substrateRuntime,
    OracleKey: 'CurrencyId',
    OracleValue: 'Price',
    AsOriginId: 'AuthoritysOriginId',
    ProxyType: {
      _enum: ['Any', 'CancelProxy', 'Governance', 'Auction', 'Swap', 'Loan']
    },
    AtLeast64BitUnsigned: 'u128',
    StableAssetPoolId: 'u32',
    RelayChainBlockNumberOf: 'RelayChainBlockNumber'
  }
};

import substrateRuntimeDefs from '@polkadot/types/interfaces/runtime/definitions';

const acalaRuntimeDefs = {
  rpc: {},
  types: {
    OracleKey: 'CurrencyId',
    OracleValue: 'Price',
    AsOriginId: 'AuthoritysOriginId',
    ProxyType: {
      _enum: ['Any', 'CancelProxy', 'Governance', 'Auction', 'Swap', 'Loan']
    },
    AtLeast64BitUnsigned: 'u128',
    StableAssetPoolId: 'u32',
    RelayChainBlockNumberOf: 'RelayChainBlockNumber'
  },
  runtime: {},   // TODO: add runtime here?
};

export default {
  rpc: {
    ...substrateRuntimeDefs.rpc,
    ...acalaRuntimeDefs.rpc,
  },
  types: {
    ...substrateRuntimeDefs.types,
    ...acalaRuntimeDefs.types,
  },
  runtime: {
    ...substrateRuntimeDefs.runtime,
    ...acalaRuntimeDefs.runtime,
  },
};

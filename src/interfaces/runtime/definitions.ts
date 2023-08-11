import type { Definitions } from '@polkadot/types/types';
import substrateRuntimeDefs from '@polkadot/types/interfaces/runtime/definitions';

const acalaRuntimeDefs: Definitions = {
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
  runtime: {
    EVMRuntimeRPCApi: [
      {
        version: 2,
        methods: {
          call: {
            description: 'call evm contract',
            params: [
              {
                name: 'from',
                type: 'H160'
              },
              {
                name: 'to',
                type: 'H160'
              },
              {
                name: 'data',
                type: 'Vec<u8>'
              },
              {
                name: 'value',
                type: 'Balance'
              },
              {
                name: 'gas_limit',
                type: 'u64'
              },
              {
                name: 'storage_limit',
                type: 'u32'
              },
              {
                name: 'access_list',
                type: 'Option<Vec<EthereumTransactionAccessListItem>>'
              },
              {
                name: 'estimate',
                type: 'bool'
              }
            ],
            type: 'Result<CallInfo, sp_runtime::DispatchError>'
          },
          create: {
            description: 'create evm contract',
            params: [
              {
                name: 'from',
                type: 'H160'
              },
              {
                name: 'data',
                type: 'Vec<u8>'
              },
              {
                name: 'value',
                type: 'Balance'
              },
              {
                name: 'gas_limit',
                type: 'u64'
              },
              {
                name: 'storage_limit',
                type: 'u32'
              },
              {
                name: 'access_list',
                type: 'Option<Vec<EthereumTransactionAccessListItem>>'
              },
              {
                name: 'estimate',
                type: 'bool'
              }
            ],
            type: 'Result<CreateInfo, sp_runtime::DispatchError>'
          },
          block_limits: {
            description: 'evm block limits',
            params: [],
            type: 'BlockLimits'
          }
        }
      }
    ]
  },
};

/* ---------------
   runtime types are sepcial:
   - we need to merge substrate runtime types manually
   - we need to manually declare runtime api definitions
                                         --------------- */
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

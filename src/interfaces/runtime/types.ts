// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AuthoritysOriginId, CurrencyId } from '@acala-network/types/interfaces/primitives';
import type { Price } from '@acala-network/types/interfaces/support';
import type { Enum, u128, u32 } from '@polkadot/types-codec';
import type { RelayChainBlockNumber } from '@polkadot/types/interfaces/parachains';

/** @name AsOriginId */
export interface AsOriginId extends AuthoritysOriginId {}

/** @name AtLeast64BitUnsigned */
export interface AtLeast64BitUnsigned extends u128 {}

/** @name OracleKey */
export interface OracleKey extends CurrencyId {}

/** @name OracleValue */
export interface OracleValue extends Price {}

/** @name ProxyType */
export interface ProxyType extends Enum {
  readonly isAny: boolean;
  readonly isCancelProxy: boolean;
  readonly isGovernance: boolean;
  readonly isAuction: boolean;
  readonly isSwap: boolean;
  readonly isLoan: boolean;
  readonly type: 'Any' | 'CancelProxy' | 'Governance' | 'Auction' | 'Swap' | 'Loan';
}

/** @name RelayChainBlockNumberOf */
export interface RelayChainBlockNumberOf extends RelayChainBlockNumber {}

/** @name StableAssetPoolId */
export interface StableAssetPoolId extends u32 {}

export type PHANTOM_RUNTIME = 'runtime';

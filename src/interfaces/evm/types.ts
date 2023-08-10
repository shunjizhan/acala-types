// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, Text, U128, U256, Vec, bool, i32, u256, u32, u64, u8 } from '@polkadot/types-codec';

/** @name BlockLimits */
export interface BlockLimits extends Struct {
  readonly maxGasLimit: u64;
  readonly maxStorageLimit: u32;
}

/** @name CallInfo */
export interface CallInfo extends Struct {
  readonly exit_reason: ExitReason;
  readonly value: Bytes;
  readonly used_gas: U256;
  readonly used_storage: i32;
  readonly logs: Vec<EthereumLog>;
}

/** @name CallRequest */
export interface CallRequest extends Struct {
  readonly from: Option<H160>;
  readonly to: Option<H160>;
  readonly gasLimit: Option<u32>;
  readonly storageLimit: Option<u32>;
  readonly value: Option<U128>;
  readonly data: Option<Bytes>;
}

/** @name CodeInfo */
export interface CodeInfo extends Struct {
  readonly codeSize: u32;
  readonly refCount: u32;
}

/** @name CreateInfo */
export interface CreateInfo extends Struct {
  readonly exit_reason: ExitReason;
  readonly value: H160;
  readonly used_gas: U256;
  readonly used_storage: i32;
  readonly logs: Vec<EthereumLog>;
}

/** @name Erc20Info */
export interface Erc20Info extends Struct {
  readonly address: EvmAddress;
  readonly name: Bytes;
  readonly symbol: Bytes;
  readonly decimals: u8;
}

/** @name EstimateResourcesResponse */
export interface EstimateResourcesResponse extends Struct {
  readonly gas: u256;
  readonly storage: i32;
  readonly weightFee: u256;
}

/** @name EthereumLog */
export interface EthereumLog extends Struct {
  readonly address: H160;
  readonly topics: Vec<H256>;
  readonly data: Bytes;
}

/** @name EvmAccountInfo */
export interface EvmAccountInfo extends Struct {
  readonly nonce: Index;
  readonly contractInfo: Option<EvmContractInfo>;
}

/** @name EvmAddress */
export interface EvmAddress extends H160 {}

/** @name EvmContractInfo */
export interface EvmContractInfo extends Struct {
  readonly codeHash: H256;
  readonly maintainer: H160;
  readonly deployed: bool;
}

/** @name ExitError */
export interface ExitError extends Enum {
  readonly isStackUnderflow: boolean;
  readonly isStackOverflow: boolean;
  readonly isInvalidJump: boolean;
  readonly isInvalidRange: boolean;
  readonly isDesignatedInvalid: boolean;
  readonly isCallTooDeep: boolean;
  readonly isCreateCollision: boolean;
  readonly isCreateContractLimit: boolean;
  readonly isOutOfOffset: boolean;
  readonly isOutOfGas: boolean;
  readonly isOutOfFund: boolean;
  readonly isPcUnderflow: boolean;
  readonly isCreateEmpty: boolean;
  readonly isOther: boolean;
  readonly asOther: Text;
  readonly isInvalidCode: boolean;
  readonly asInvalidCode: u8;
  readonly type: 'StackUnderflow' | 'StackOverflow' | 'InvalidJump' | 'InvalidRange' | 'DesignatedInvalid' | 'CallTooDeep' | 'CreateCollision' | 'CreateContractLimit' | 'OutOfOffset' | 'OutOfGas' | 'OutOfFund' | 'PcUnderflow' | 'CreateEmpty' | 'Other' | 'InvalidCode';
}

/** @name ExitFatal */
export interface ExitFatal extends Enum {
  readonly isNotSupported: boolean;
  readonly isUnhandledInterrupt: boolean;
  readonly isCallErrorAsFatal: boolean;
  readonly asCallErrorAsFatal: ExitError;
  readonly isOther: boolean;
  readonly asOther: Text;
  readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
}

/** @name ExitReason */
export interface ExitReason extends Enum {
  readonly isSucceed: boolean;
  readonly asSucceed: ExitSucceed;
  readonly isError: boolean;
  readonly asError: ExitError;
  readonly isRevert: boolean;
  readonly asRevert: ExitRevert;
  readonly isFatal: boolean;
  readonly asFatal: ExitFatal;
  readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
}

/** @name ExitRevert */
export interface ExitRevert extends Enum {
  readonly isReverted: boolean;
  readonly type: 'Reverted';
}

/** @name ExitSucceed */
export interface ExitSucceed extends Enum {
  readonly isStopped: boolean;
  readonly isReturned: boolean;
  readonly isSuicided: boolean;
  readonly type: 'Stopped' | 'Returned' | 'Suicided';
}

export type PHANTOM_EVM = 'evm';

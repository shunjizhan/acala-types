// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, bool, i128, i32, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H160, H256, MultiAddress, Percent } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (8) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (9) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (14) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (16) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (19) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (21) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (22) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (23) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (24) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (25) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable';
  }

  /** @name SpRuntimeModuleError (26) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (27) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable';
  }

  /** @name SpArithmeticArithmeticError (28) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (29) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletSchedulerEvent (30) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallUnavailable' | 'PeriodicFailed' | 'PermanentlyOverweight';
  }

  /** @name ModuleTransactionPauseModuleEvent (35) */
  interface ModuleTransactionPauseModuleEvent extends Enum {
    readonly isTransactionPaused: boolean;
    readonly asTransactionPaused: {
      readonly palletNameBytes: Bytes;
      readonly functionNameBytes: Bytes;
    } & Struct;
    readonly isTransactionUnpaused: boolean;
    readonly asTransactionUnpaused: {
      readonly palletNameBytes: Bytes;
      readonly functionNameBytes: Bytes;
    } & Struct;
    readonly isEvmPrecompilePaused: boolean;
    readonly asEvmPrecompilePaused: {
      readonly address: H160;
    } & Struct;
    readonly isEvmPrecompileUnpaused: boolean;
    readonly asEvmPrecompileUnpaused: {
      readonly address: H160;
    } & Struct;
    readonly type: 'TransactionPaused' | 'TransactionUnpaused' | 'EvmPrecompilePaused' | 'EvmPrecompileUnpaused';
  }

  /** @name PalletPreimageEvent (38) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PalletBalancesEvent (39) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (40) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name OrmlTokensModuleEvent (41) */
  interface OrmlTokensModuleEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly status: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isTotalIssuanceSet: boolean;
    readonly asTotalIssuanceSet: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly freeAmount: u128;
      readonly reservedAmount: u128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockSet: boolean;
    readonly asLockSet: {
      readonly lockId: U8aFixed;
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockRemoved: boolean;
    readonly asLockRemoved: {
      readonly lockId: U8aFixed;
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Locked' | 'Unlocked';
  }

  /** @name AcalaPrimitivesCurrencyCurrencyId (42) */
  interface AcalaPrimitivesCurrencyCurrencyId extends Enum {
    readonly isToken: boolean;
    readonly asToken: AcalaPrimitivesCurrencyTokenSymbol;
    readonly isDexShare: boolean;
    readonly asDexShare: ITuple<[AcalaPrimitivesCurrencyDexShare, AcalaPrimitivesCurrencyDexShare]>;
    readonly isErc20: boolean;
    readonly asErc20: H160;
    readonly isStableAssetPoolToken: boolean;
    readonly asStableAssetPoolToken: u32;
    readonly isLiquidCrowdloan: boolean;
    readonly asLiquidCrowdloan: u32;
    readonly isForeignAsset: boolean;
    readonly asForeignAsset: u16;
    readonly type: 'Token' | 'DexShare' | 'Erc20' | 'StableAssetPoolToken' | 'LiquidCrowdloan' | 'ForeignAsset';
  }

  /** @name AcalaPrimitivesCurrencyTokenSymbol (43) */
  interface AcalaPrimitivesCurrencyTokenSymbol extends Enum {
    readonly isAca: boolean;
    readonly isAusd: boolean;
    readonly isDot: boolean;
    readonly isLdot: boolean;
    readonly isTap: boolean;
    readonly isKar: boolean;
    readonly isKusd: boolean;
    readonly isKsm: boolean;
    readonly isLksm: boolean;
    readonly isTai: boolean;
    readonly isBnc: boolean;
    readonly isVsksm: boolean;
    readonly isPha: boolean;
    readonly isKint: boolean;
    readonly isKbtc: boolean;
    readonly type: 'Aca' | 'Ausd' | 'Dot' | 'Ldot' | 'Tap' | 'Kar' | 'Kusd' | 'Ksm' | 'Lksm' | 'Tai' | 'Bnc' | 'Vsksm' | 'Pha' | 'Kint' | 'Kbtc';
  }

  /** @name AcalaPrimitivesCurrencyDexShare (44) */
  interface AcalaPrimitivesCurrencyDexShare extends Enum {
    readonly isToken: boolean;
    readonly asToken: AcalaPrimitivesCurrencyTokenSymbol;
    readonly isErc20: boolean;
    readonly asErc20: H160;
    readonly isLiquidCrowdloan: boolean;
    readonly asLiquidCrowdloan: u32;
    readonly isForeignAsset: boolean;
    readonly asForeignAsset: u16;
    readonly isStableAssetPoolToken: boolean;
    readonly asStableAssetPoolToken: u32;
    readonly type: 'Token' | 'Erc20' | 'LiquidCrowdloan' | 'ForeignAsset' | 'StableAssetPoolToken';
  }

  /** @name ModuleCurrenciesModuleEvent (47) */
  interface ModuleCurrenciesModuleEvent extends Enum {
    readonly isTransferred: boolean;
    readonly asTransferred: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDustSwept: boolean;
    readonly asDustSwept: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transferred' | 'Withdrawn' | 'Deposited' | 'DustSwept';
  }

  /** @name OrmlVestingModuleEvent (48) */
  interface OrmlVestingModuleEvent extends Enum {
    readonly isVestingScheduleAdded: boolean;
    readonly asVestingScheduleAdded: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly vestingSchedule: OrmlVestingVestingSchedule;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isVestingSchedulesUpdated: boolean;
    readonly asVestingSchedulesUpdated: {
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'VestingScheduleAdded' | 'Claimed' | 'VestingSchedulesUpdated';
  }

  /** @name OrmlVestingVestingSchedule (49) */
  interface OrmlVestingVestingSchedule extends Struct {
    readonly start: u32;
    readonly period: u32;
    readonly periodCount: u32;
    readonly perPeriod: Compact<u128>;
  }

  /** @name ModuleTransactionPaymentModuleEvent (51) */
  interface ModuleTransactionPaymentModuleEvent extends Enum {
    readonly isChargeFeePoolEnabled: boolean;
    readonly asChargeFeePoolEnabled: {
      readonly subAccount: AccountId32;
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly exchangeRate: u128;
      readonly poolSize: u128;
      readonly swapThreshold: u128;
    } & Struct;
    readonly isChargeFeePoolSwapped: boolean;
    readonly asChargeFeePoolSwapped: {
      readonly subAccount: AccountId32;
      readonly supplyCurrencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly oldExchangeRate: u128;
      readonly swapExchangeRate: u128;
      readonly newExchangeRate: u128;
      readonly newPoolSize: u128;
    } & Struct;
    readonly isChargeFeePoolDisabled: boolean;
    readonly asChargeFeePoolDisabled: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly foreignAmount: u128;
      readonly nativeAmount: u128;
    } & Struct;
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly actualTip: u128;
      readonly actualSurplus: u128;
    } & Struct;
    readonly type: 'ChargeFeePoolEnabled' | 'ChargeFeePoolSwapped' | 'ChargeFeePoolDisabled' | 'TransactionFeePaid';
  }

  /** @name PalletTreasuryEvent (53) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
  }

  /** @name PalletBountiesEvent (54) */
  interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: {
      readonly index: u32;
    } & Struct;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: {
      readonly index: u32;
      readonly bond: u128;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: {
      readonly index: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
    } & Struct;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: {
      readonly index: u32;
    } & Struct;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended';
  }

  /** @name PalletTipsEvent (55) */
  interface PalletTipsEvent extends Enum {
    readonly isNewTip: boolean;
    readonly asNewTip: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosing: boolean;
    readonly asTipClosing: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipClosed: boolean;
    readonly asTipClosed: {
      readonly tipHash: H256;
      readonly who: AccountId32;
      readonly payout: u128;
    } & Struct;
    readonly isTipRetracted: boolean;
    readonly asTipRetracted: {
      readonly tipHash: H256;
    } & Struct;
    readonly isTipSlashed: boolean;
    readonly asTipSlashed: {
      readonly tipHash: H256;
      readonly finder: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'NewTip' | 'TipClosing' | 'TipClosed' | 'TipRetracted' | 'TipSlashed';
  }

  /** @name PalletUtilityEvent (56) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletMultisigEvent (57) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (58) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletRecoveryEvent (59) */
  interface PalletRecoveryEvent extends Enum {
    readonly isRecoveryCreated: boolean;
    readonly asRecoveryCreated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRecoveryInitiated: boolean;
    readonly asRecoveryInitiated: {
      readonly lostAccount: AccountId32;
      readonly rescuerAccount: AccountId32;
    } & Struct;
    readonly isRecoveryVouched: boolean;
    readonly asRecoveryVouched: {
      readonly lostAccount: AccountId32;
      readonly rescuerAccount: AccountId32;
      readonly sender: AccountId32;
    } & Struct;
    readonly isRecoveryClosed: boolean;
    readonly asRecoveryClosed: {
      readonly lostAccount: AccountId32;
      readonly rescuerAccount: AccountId32;
    } & Struct;
    readonly isAccountRecovered: boolean;
    readonly asAccountRecovered: {
      readonly lostAccount: AccountId32;
      readonly rescuerAccount: AccountId32;
    } & Struct;
    readonly isRecoveryRemoved: boolean;
    readonly asRecoveryRemoved: {
      readonly lostAccount: AccountId32;
    } & Struct;
    readonly type: 'RecoveryCreated' | 'RecoveryInitiated' | 'RecoveryVouched' | 'RecoveryClosed' | 'AccountRecovered' | 'RecoveryRemoved';
  }

  /** @name PalletProxyEvent (60) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: RuntimeCommonProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: RuntimeCommonProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: RuntimeCommonProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name RuntimeCommonProxyType (61) */
  interface RuntimeCommonProxyType extends Enum {
    readonly isAny: boolean;
    readonly isCancelProxy: boolean;
    readonly isGovernance: boolean;
    readonly isAuction: boolean;
    readonly isSwap: boolean;
    readonly isLoan: boolean;
    readonly isDexLiquidity: boolean;
    readonly isStableAssetSwap: boolean;
    readonly isStableAssetLiquidity: boolean;
    readonly isHoma: boolean;
    readonly type: 'Any' | 'CancelProxy' | 'Governance' | 'Auction' | 'Swap' | 'Loan' | 'DexLiquidity' | 'StableAssetSwap' | 'StableAssetLiquidity' | 'Homa';
  }

  /** @name ModuleIdleSchedulerModuleEvent (62) */
  interface ModuleIdleSchedulerModuleEvent extends Enum {
    readonly isTaskDispatched: boolean;
    readonly asTaskDispatched: {
      readonly taskId: u32;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isTaskAdded: boolean;
    readonly asTaskAdded: {
      readonly taskId: u32;
      readonly task: MandalaRuntimeScheduledTasks;
    } & Struct;
    readonly type: 'TaskDispatched' | 'TaskAdded';
  }

  /** @name MandalaRuntimeScheduledTasks (63) */
  interface MandalaRuntimeScheduledTasks extends Enum {
    readonly isEvmTask: boolean;
    readonly asEvmTask: ModuleEvmEvmTask;
    readonly type: 'EvmTask';
  }

  /** @name ModuleEvmEvmTask (64) */
  interface ModuleEvmEvmTask extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly from: H160;
      readonly target: H160;
      readonly input: Bytes;
      readonly value: u128;
      readonly gasLimit: u64;
      readonly storageLimit: u32;
    } & Struct;
    readonly isRemove: boolean;
    readonly asRemove: {
      readonly caller: H160;
      readonly contract: H160;
      readonly maintainer: H160;
    } & Struct;
    readonly type: 'Schedule' | 'Remove';
  }

  /** @name MandalaRuntimeRuntime (65) */
  type MandalaRuntimeRuntime = Null;

  /** @name PalletIndicesEvent (66) */
  interface PalletIndicesEvent extends Enum {
    readonly isIndexAssigned: boolean;
    readonly asIndexAssigned: {
      readonly who: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly isIndexFreed: boolean;
    readonly asIndexFreed: {
      readonly index: u32;
    } & Struct;
    readonly isIndexFrozen: boolean;
    readonly asIndexFrozen: {
      readonly index: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen';
  }

  /** @name PalletCollectiveEvent (67) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletMembershipEvent (69) */
  interface PalletMembershipEvent extends Enum {
    readonly isMemberAdded: boolean;
    readonly isMemberRemoved: boolean;
    readonly isMembersSwapped: boolean;
    readonly isMembersReset: boolean;
    readonly isKeyChanged: boolean;
    readonly isDummy: boolean;
    readonly type: 'MemberAdded' | 'MemberRemoved' | 'MembersSwapped' | 'MembersReset' | 'KeyChanged' | 'Dummy';
  }

  /** @name OrmlAuthorityModuleEvent (76) */
  interface OrmlAuthorityModuleEvent extends Enum {
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly origin: MandalaRuntimeOriginCaller;
      readonly index: u32;
    } & Struct;
    readonly isFastTracked: boolean;
    readonly asFastTracked: {
      readonly origin: MandalaRuntimeOriginCaller;
      readonly index: u32;
      readonly when: u32;
    } & Struct;
    readonly isDelayed: boolean;
    readonly asDelayed: {
      readonly origin: MandalaRuntimeOriginCaller;
      readonly index: u32;
      readonly when: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly origin: MandalaRuntimeOriginCaller;
      readonly index: u32;
    } & Struct;
    readonly isAuthorizedCall: boolean;
    readonly asAuthorizedCall: {
      readonly hash_: H256;
      readonly caller: Option<AccountId32>;
    } & Struct;
    readonly isRemovedAuthorizedCall: boolean;
    readonly asRemovedAuthorizedCall: {
      readonly hash_: H256;
    } & Struct;
    readonly isTriggeredCallBy: boolean;
    readonly asTriggeredCallBy: {
      readonly hash_: H256;
      readonly caller: AccountId32;
    } & Struct;
    readonly type: 'Dispatched' | 'Scheduled' | 'FastTracked' | 'Delayed' | 'Cancelled' | 'AuthorizedCall' | 'RemovedAuthorizedCall' | 'TriggeredCallBy';
  }

  /** @name MandalaRuntimeOriginCaller (77) */
  interface MandalaRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isGeneralCouncil: boolean;
    readonly asGeneralCouncil: PalletCollectiveRawOrigin;
    readonly isFinancialCouncil: boolean;
    readonly asFinancialCouncil: PalletCollectiveRawOrigin;
    readonly isHomaCouncil: boolean;
    readonly asHomaCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly isAuthority: boolean;
    readonly asAuthority: OrmlAuthorityDelayedOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'GeneralCouncil' | 'FinancialCouncil' | 'HomaCouncil' | 'TechnicalCommittee' | 'Authority' | 'PolkadotXcm' | 'CumulusXcm';
  }

  /** @name FrameSupportDispatchRawOrigin (78) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (79) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name OrmlAuthorityDelayedOrigin (83) */
  interface OrmlAuthorityDelayedOrigin extends Struct {
    readonly delay: u32;
    readonly origin: MandalaRuntimeOriginCaller;
  }

  /** @name PalletXcmOrigin (84) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: XcmV3MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: XcmV3MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name XcmV3MultiLocation (85) */
  interface XcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV3Junctions;
  }

  /** @name XcmV3Junctions (86) */
  interface XcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV3Junction (87) */
  interface XcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV3JunctionBodyId;
      readonly part: XcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: XcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name XcmV3JunctionNetworkId (90) */
  interface XcmV3JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
  }

  /** @name XcmV3JunctionBodyId (91) */
  interface XcmV3JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isMoniker: boolean;
    readonly asMoniker: U8aFixed;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV3JunctionBodyPart (92) */
  interface XcmV3JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name CumulusPalletXcmOrigin (93) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name SpCoreVoid (95) */
  type SpCoreVoid = Null;

  /** @name PalletElectionsPhragmenEvent (97) */
  interface PalletElectionsPhragmenEvent extends Enum {
    readonly isNewTerm: boolean;
    readonly asNewTerm: {
      readonly newMembers: Vec<ITuple<[AccountId32, u128]>>;
    } & Struct;
    readonly isEmptyTerm: boolean;
    readonly isElectionError: boolean;
    readonly isMemberKicked: boolean;
    readonly asMemberKicked: {
      readonly member: AccountId32;
    } & Struct;
    readonly isRenounced: boolean;
    readonly asRenounced: {
      readonly candidate: AccountId32;
    } & Struct;
    readonly isCandidateSlashed: boolean;
    readonly asCandidateSlashed: {
      readonly candidate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSeatHolderSlashed: boolean;
    readonly asSeatHolderSlashed: {
      readonly seatHolder: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NewTerm' | 'EmptyTerm' | 'ElectionError' | 'MemberKicked' | 'Renounced' | 'CandidateSlashed' | 'SeatHolderSlashed';
  }

  /** @name PalletDemocracyEvent (100) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u32;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataTransferred: boolean;
    readonly asMetadataTransferred: {
      readonly prevOwner: PalletDemocracyMetadataOwner;
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled' | 'MetadataSet' | 'MetadataCleared' | 'MetadataTransferred';
  }

  /** @name PalletDemocracyVoteThreshold (101) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (102) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletDemocracyMetadataOwner (104) */
  interface PalletDemocracyMetadataOwner extends Enum {
    readonly isExternal: boolean;
    readonly isProposal: boolean;
    readonly asProposal: u32;
    readonly isReferendum: boolean;
    readonly asReferendum: u32;
    readonly type: 'External' | 'Proposal' | 'Referendum';
  }

  /** @name OrmlOracleModuleEvent (105) */
  interface OrmlOracleModuleEvent extends Enum {
    readonly isNewFeedData: boolean;
    readonly asNewFeedData: {
      readonly sender: AccountId32;
      readonly values: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>>;
    } & Struct;
    readonly type: 'NewFeedData';
  }

  /** @name OrmlAuctionModuleEvent (109) */
  interface OrmlAuctionModuleEvent extends Enum {
    readonly isBid: boolean;
    readonly asBid: {
      readonly auctionId: u32;
      readonly bidder: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Bid';
  }

  /** @name ModulePricesModuleEvent (110) */
  interface ModulePricesModuleEvent extends Enum {
    readonly isLockPrice: boolean;
    readonly asLockPrice: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly lockedPrice: u128;
    } & Struct;
    readonly isUnlockPrice: boolean;
    readonly asUnlockPrice: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly type: 'LockPrice' | 'UnlockPrice';
  }

  /** @name ModuleDexModuleEvent (111) */
  interface ModuleDexModuleEvent extends Enum {
    readonly isAddProvision: boolean;
    readonly asAddProvision: {
      readonly who: AccountId32;
      readonly currency0: AcalaPrimitivesCurrencyCurrencyId;
      readonly contribution0: u128;
      readonly currency1: AcalaPrimitivesCurrencyCurrencyId;
      readonly contribution1: u128;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly who: AccountId32;
      readonly currency0: AcalaPrimitivesCurrencyCurrencyId;
      readonly pool0: u128;
      readonly currency1: AcalaPrimitivesCurrencyCurrencyId;
      readonly pool1: u128;
      readonly shareIncrement: u128;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly who: AccountId32;
      readonly currency0: AcalaPrimitivesCurrencyCurrencyId;
      readonly pool0: u128;
      readonly currency1: AcalaPrimitivesCurrencyCurrencyId;
      readonly pool1: u128;
      readonly shareDecrement: u128;
    } & Struct;
    readonly isSwap: boolean;
    readonly asSwap: {
      readonly trader: AccountId32;
      readonly path: Vec<AcalaPrimitivesCurrencyCurrencyId>;
      readonly liquidityChanges: Vec<u128>;
    } & Struct;
    readonly isEnableTradingPair: boolean;
    readonly asEnableTradingPair: {
      readonly tradingPair: AcalaPrimitivesTradingPair;
    } & Struct;
    readonly isListProvisioning: boolean;
    readonly asListProvisioning: {
      readonly tradingPair: AcalaPrimitivesTradingPair;
    } & Struct;
    readonly isDisableTradingPair: boolean;
    readonly asDisableTradingPair: {
      readonly tradingPair: AcalaPrimitivesTradingPair;
    } & Struct;
    readonly isProvisioningToEnabled: boolean;
    readonly asProvisioningToEnabled: {
      readonly tradingPair: AcalaPrimitivesTradingPair;
      readonly pool0: u128;
      readonly pool1: u128;
      readonly shareAmount: u128;
    } & Struct;
    readonly isRefundProvision: boolean;
    readonly asRefundProvision: {
      readonly who: AccountId32;
      readonly currency0: AcalaPrimitivesCurrencyCurrencyId;
      readonly contribution0: u128;
      readonly currency1: AcalaPrimitivesCurrencyCurrencyId;
      readonly contribution1: u128;
    } & Struct;
    readonly isProvisioningAborted: boolean;
    readonly asProvisioningAborted: {
      readonly tradingPair: AcalaPrimitivesTradingPair;
      readonly accumulatedProvision0: u128;
      readonly accumulatedProvision1: u128;
    } & Struct;
    readonly type: 'AddProvision' | 'AddLiquidity' | 'RemoveLiquidity' | 'Swap' | 'EnableTradingPair' | 'ListProvisioning' | 'DisableTradingPair' | 'ProvisioningToEnabled' | 'RefundProvision' | 'ProvisioningAborted';
  }

  /** @name AcalaPrimitivesTradingPair (114) */
  interface AcalaPrimitivesTradingPair extends ITuple<[AcalaPrimitivesCurrencyCurrencyId, AcalaPrimitivesCurrencyCurrencyId]> {}

  /** @name ModuleAuctionManagerModuleEvent (115) */
  interface ModuleAuctionManagerModuleEvent extends Enum {
    readonly isNewCollateralAuction: boolean;
    readonly asNewCollateralAuction: {
      readonly auctionId: u32;
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly collateralAmount: u128;
      readonly targetBidPrice: u128;
    } & Struct;
    readonly isCancelAuction: boolean;
    readonly asCancelAuction: {
      readonly auctionId: u32;
    } & Struct;
    readonly isCollateralAuctionDealt: boolean;
    readonly asCollateralAuctionDealt: {
      readonly auctionId: u32;
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly collateralAmount: u128;
      readonly winner: AccountId32;
      readonly paymentAmount: u128;
    } & Struct;
    readonly isDexTakeCollateralAuction: boolean;
    readonly asDexTakeCollateralAuction: {
      readonly auctionId: u32;
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly collateralAmount: u128;
      readonly supplyCollateralAmount: u128;
      readonly targetStableAmount: u128;
    } & Struct;
    readonly isCollateralAuctionAborted: boolean;
    readonly asCollateralAuctionAborted: {
      readonly auctionId: u32;
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly collateralAmount: u128;
      readonly targetStableAmount: u128;
      readonly refundRecipient: AccountId32;
    } & Struct;
    readonly type: 'NewCollateralAuction' | 'CancelAuction' | 'CollateralAuctionDealt' | 'DexTakeCollateralAuction' | 'CollateralAuctionAborted';
  }

  /** @name ModuleLoansModuleEvent (116) */
  interface ModuleLoansModuleEvent extends Enum {
    readonly isPositionUpdated: boolean;
    readonly asPositionUpdated: {
      readonly owner: AccountId32;
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly collateralAdjustment: i128;
      readonly debitAdjustment: i128;
    } & Struct;
    readonly isConfiscateCollateralAndDebit: boolean;
    readonly asConfiscateCollateralAndDebit: {
      readonly owner: AccountId32;
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly confiscatedCollateralAmount: u128;
      readonly deductDebitAmount: u128;
    } & Struct;
    readonly isTransferLoan: boolean;
    readonly asTransferLoan: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly type: 'PositionUpdated' | 'ConfiscateCollateralAndDebit' | 'TransferLoan';
  }

  /** @name ModuleHonzonModuleEvent (118) */
  interface ModuleHonzonModuleEvent extends Enum {
    readonly isAuthorization: boolean;
    readonly asAuthorization: {
      readonly authorizer: AccountId32;
      readonly authorizee: AccountId32;
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly isUnAuthorization: boolean;
    readonly asUnAuthorization: {
      readonly authorizer: AccountId32;
      readonly authorizee: AccountId32;
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly isUnAuthorizationAll: boolean;
    readonly asUnAuthorizationAll: {
      readonly authorizer: AccountId32;
    } & Struct;
    readonly isTransferDebit: boolean;
    readonly asTransferDebit: {
      readonly fromCurrency: AcalaPrimitivesCurrencyCurrencyId;
      readonly toCurrency: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Authorization' | 'UnAuthorization' | 'UnAuthorizationAll' | 'TransferDebit';
  }

  /** @name ModuleCdpTreasuryModuleEvent (119) */
  interface ModuleCdpTreasuryModuleEvent extends Enum {
    readonly isExpectedCollateralAuctionSizeUpdated: boolean;
    readonly asExpectedCollateralAuctionSizeUpdated: {
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly newSize: u128;
    } & Struct;
    readonly isDebitOffsetBufferUpdated: boolean;
    readonly asDebitOffsetBufferUpdated: {
      readonly amount: u128;
    } & Struct;
    readonly type: 'ExpectedCollateralAuctionSizeUpdated' | 'DebitOffsetBufferUpdated';
  }

  /** @name ModuleCdpEngineModuleEvent (120) */
  interface ModuleCdpEngineModuleEvent extends Enum {
    readonly isLiquidateUnsafeCDP: boolean;
    readonly asLiquidateUnsafeCDP: {
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly owner: AccountId32;
      readonly collateralAmount: u128;
      readonly badDebtValue: u128;
      readonly targetAmount: u128;
    } & Struct;
    readonly isSettleCDPInDebit: boolean;
    readonly asSettleCDPInDebit: {
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly owner: AccountId32;
    } & Struct;
    readonly isCloseCDPInDebitByDEX: boolean;
    readonly asCloseCDPInDebitByDEX: {
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly owner: AccountId32;
      readonly soldCollateralAmount: u128;
      readonly refundCollateralAmount: u128;
      readonly debitValue: u128;
    } & Struct;
    readonly isInterestRatePerSecUpdated: boolean;
    readonly asInterestRatePerSecUpdated: {
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly newInterestRatePerSec: Option<u128>;
    } & Struct;
    readonly isLiquidationRatioUpdated: boolean;
    readonly asLiquidationRatioUpdated: {
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly newLiquidationRatio: Option<u128>;
    } & Struct;
    readonly isLiquidationPenaltyUpdated: boolean;
    readonly asLiquidationPenaltyUpdated: {
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly newLiquidationPenalty: Option<u128>;
    } & Struct;
    readonly isRequiredCollateralRatioUpdated: boolean;
    readonly asRequiredCollateralRatioUpdated: {
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly newRequiredCollateralRatio: Option<u128>;
    } & Struct;
    readonly isMaximumTotalDebitValueUpdated: boolean;
    readonly asMaximumTotalDebitValueUpdated: {
      readonly collateralType: AcalaPrimitivesCurrencyCurrencyId;
      readonly newTotalDebitValue: u128;
    } & Struct;
    readonly isLiquidationContractRegistered: boolean;
    readonly asLiquidationContractRegistered: {
      readonly address: H160;
    } & Struct;
    readonly isLiquidationContractDeregistered: boolean;
    readonly asLiquidationContractDeregistered: {
      readonly address: H160;
    } & Struct;
    readonly type: 'LiquidateUnsafeCDP' | 'SettleCDPInDebit' | 'CloseCDPInDebitByDEX' | 'InterestRatePerSecUpdated' | 'LiquidationRatioUpdated' | 'LiquidationPenaltyUpdated' | 'RequiredCollateralRatioUpdated' | 'MaximumTotalDebitValueUpdated' | 'LiquidationContractRegistered' | 'LiquidationContractDeregistered';
  }

  /** @name ModuleEmergencyShutdownModuleEvent (122) */
  interface ModuleEmergencyShutdownModuleEvent extends Enum {
    readonly isShutdown: boolean;
    readonly asShutdown: {
      readonly blockNumber: u32;
    } & Struct;
    readonly isOpenRefund: boolean;
    readonly asOpenRefund: {
      readonly blockNumber: u32;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly who: AccountId32;
      readonly stableCoinAmount: u128;
      readonly refundList: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>>;
    } & Struct;
    readonly type: 'Shutdown' | 'OpenRefund' | 'Refund';
  }

  /** @name ModuleNomineesElectionModuleEvent (125) */
  interface ModuleNomineesElectionModuleEvent extends Enum {
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Rebond';
  }

  /** @name ModuleHomaModuleEvent (126) */
  interface ModuleHomaModuleEvent extends Enum {
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly minter: AccountId32;
      readonly stakingCurrencyAmount: u128;
      readonly liquidAmountReceived: u128;
      readonly liquidAmountAddedToVoid: u128;
    } & Struct;
    readonly isRequestedRedeem: boolean;
    readonly asRequestedRedeem: {
      readonly redeemer: AccountId32;
      readonly liquidAmount: u128;
      readonly allowFastMatch: bool;
    } & Struct;
    readonly isRedeemRequestCancelled: boolean;
    readonly asRedeemRequestCancelled: {
      readonly redeemer: AccountId32;
      readonly cancelledLiquidAmount: u128;
    } & Struct;
    readonly isRedeemedByFastMatch: boolean;
    readonly asRedeemedByFastMatch: {
      readonly redeemer: AccountId32;
      readonly matchedLiquidAmount: u128;
      readonly feeInLiquid: u128;
      readonly redeemedStakingAmount: u128;
    } & Struct;
    readonly isRedeemedByUnbond: boolean;
    readonly asRedeemedByUnbond: {
      readonly redeemer: AccountId32;
      readonly eraIndexWhenUnbond: u32;
      readonly liquidAmount: u128;
      readonly unbondingStakingAmount: u128;
    } & Struct;
    readonly isWithdrawRedemption: boolean;
    readonly asWithdrawRedemption: {
      readonly redeemer: AccountId32;
      readonly redemptionAmount: u128;
    } & Struct;
    readonly isCurrentEraBumped: boolean;
    readonly asCurrentEraBumped: {
      readonly newEraIndex: u32;
    } & Struct;
    readonly isCurrentEraReset: boolean;
    readonly asCurrentEraReset: {
      readonly newEraIndex: u32;
    } & Struct;
    readonly isLedgerBondedReset: boolean;
    readonly asLedgerBondedReset: {
      readonly subAccountIndex: u16;
      readonly newBondedAmount: u128;
    } & Struct;
    readonly isLedgerUnlockingReset: boolean;
    readonly asLedgerUnlockingReset: {
      readonly subAccountIndex: u16;
      readonly newUnlocking: Vec<ModuleHomaModuleUnlockChunk>;
    } & Struct;
    readonly isSoftBondedCapPerSubAccountUpdated: boolean;
    readonly asSoftBondedCapPerSubAccountUpdated: {
      readonly capAmount: u128;
    } & Struct;
    readonly isEstimatedRewardRatePerEraUpdated: boolean;
    readonly asEstimatedRewardRatePerEraUpdated: {
      readonly rewardRate: u128;
    } & Struct;
    readonly isCommissionRateUpdated: boolean;
    readonly asCommissionRateUpdated: {
      readonly commissionRate: u128;
    } & Struct;
    readonly isFastMatchFeeRateUpdated: boolean;
    readonly asFastMatchFeeRateUpdated: {
      readonly fastMatchFeeRate: u128;
    } & Struct;
    readonly isLastEraBumpedBlockUpdated: boolean;
    readonly asLastEraBumpedBlockUpdated: {
      readonly lastEraBumpedBlock: u32;
    } & Struct;
    readonly isBumpEraFrequencyUpdated: boolean;
    readonly asBumpEraFrequencyUpdated: {
      readonly frequency: u32;
    } & Struct;
    readonly type: 'Minted' | 'RequestedRedeem' | 'RedeemRequestCancelled' | 'RedeemedByFastMatch' | 'RedeemedByUnbond' | 'WithdrawRedemption' | 'CurrentEraBumped' | 'CurrentEraReset' | 'LedgerBondedReset' | 'LedgerUnlockingReset' | 'SoftBondedCapPerSubAccountUpdated' | 'EstimatedRewardRatePerEraUpdated' | 'CommissionRateUpdated' | 'FastMatchFeeRateUpdated' | 'LastEraBumpedBlockUpdated' | 'BumpEraFrequencyUpdated';
  }

  /** @name ModuleHomaModuleUnlockChunk (128) */
  interface ModuleHomaModuleUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name ModuleXcmInterfaceModuleEvent (129) */
  interface ModuleXcmInterfaceModuleEvent extends Enum {
    readonly isXcmDestWeightUpdated: boolean;
    readonly asXcmDestWeightUpdated: {
      readonly xcmOperation: ModuleXcmInterfaceModuleXcmInterfaceOperation;
      readonly newXcmDestWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isXcmFeeUpdated: boolean;
    readonly asXcmFeeUpdated: {
      readonly xcmOperation: ModuleXcmInterfaceModuleXcmInterfaceOperation;
      readonly newXcmDestWeight: u128;
    } & Struct;
    readonly type: 'XcmDestWeightUpdated' | 'XcmFeeUpdated';
  }

  /** @name ModuleXcmInterfaceModuleXcmInterfaceOperation (130) */
  interface ModuleXcmInterfaceModuleXcmInterfaceOperation extends Enum {
    readonly isXtokensTransfer: boolean;
    readonly isHomaWithdrawUnbonded: boolean;
    readonly isHomaBondExtra: boolean;
    readonly isHomaUnbond: boolean;
    readonly isParachainFee: boolean;
    readonly asParachainFee: XcmV3MultiLocation;
    readonly isProxyReserveTransferAssets: boolean;
    readonly type: 'XtokensTransfer' | 'HomaWithdrawUnbonded' | 'HomaBondExtra' | 'HomaUnbond' | 'ParachainFee' | 'ProxyReserveTransferAssets';
  }

  /** @name ModuleIncentivesModuleEvent (131) */
  interface ModuleIncentivesModuleEvent extends Enum {
    readonly isDepositDexShare: boolean;
    readonly asDepositDexShare: {
      readonly who: AccountId32;
      readonly dexShareType: AcalaPrimitivesCurrencyCurrencyId;
      readonly deposit: u128;
    } & Struct;
    readonly isWithdrawDexShare: boolean;
    readonly asWithdrawDexShare: {
      readonly who: AccountId32;
      readonly dexShareType: AcalaPrimitivesCurrencyCurrencyId;
      readonly withdraw: u128;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly asClaimRewards: {
      readonly who: AccountId32;
      readonly pool: ModuleSupportIncentivesPoolId;
      readonly rewardCurrencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly actualAmount: u128;
      readonly deductionAmount: u128;
    } & Struct;
    readonly isIncentiveRewardAmountUpdated: boolean;
    readonly asIncentiveRewardAmountUpdated: {
      readonly pool: ModuleSupportIncentivesPoolId;
      readonly rewardCurrencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly rewardAmountPerPeriod: u128;
    } & Struct;
    readonly isClaimRewardDeductionRateUpdated: boolean;
    readonly asClaimRewardDeductionRateUpdated: {
      readonly pool: ModuleSupportIncentivesPoolId;
      readonly deductionRate: u128;
    } & Struct;
    readonly type: 'DepositDexShare' | 'WithdrawDexShare' | 'ClaimRewards' | 'IncentiveRewardAmountUpdated' | 'ClaimRewardDeductionRateUpdated';
  }

  /** @name ModuleSupportIncentivesPoolId (132) */
  interface ModuleSupportIncentivesPoolId extends Enum {
    readonly isLoans: boolean;
    readonly asLoans: AcalaPrimitivesCurrencyCurrencyId;
    readonly isDex: boolean;
    readonly asDex: AcalaPrimitivesCurrencyCurrencyId;
    readonly isEarning: boolean;
    readonly asEarning: AcalaPrimitivesCurrencyCurrencyId;
    readonly type: 'Loans' | 'Dex' | 'Earning';
  }

  /** @name ModuleNftModuleEvent (133) */
  interface ModuleNftModuleEvent extends Enum {
    readonly isCreatedClass: boolean;
    readonly asCreatedClass: {
      readonly owner: AccountId32;
      readonly classId: u32;
    } & Struct;
    readonly isMintedToken: boolean;
    readonly asMintedToken: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly classId: u32;
      readonly quantity: u32;
    } & Struct;
    readonly isTransferredToken: boolean;
    readonly asTransferredToken: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly classId: u32;
      readonly tokenId: u64;
    } & Struct;
    readonly isBurnedToken: boolean;
    readonly asBurnedToken: {
      readonly owner: AccountId32;
      readonly classId: u32;
      readonly tokenId: u64;
    } & Struct;
    readonly isBurnedTokenWithRemark: boolean;
    readonly asBurnedTokenWithRemark: {
      readonly owner: AccountId32;
      readonly classId: u32;
      readonly tokenId: u64;
      readonly remarkHash: H256;
    } & Struct;
    readonly isDestroyedClass: boolean;
    readonly asDestroyedClass: {
      readonly owner: AccountId32;
      readonly classId: u32;
    } & Struct;
    readonly type: 'CreatedClass' | 'MintedToken' | 'TransferredToken' | 'BurnedToken' | 'BurnedTokenWithRemark' | 'DestroyedClass';
  }

  /** @name ModuleAssetRegistryModuleEvent (134) */
  interface ModuleAssetRegistryModuleEvent extends Enum {
    readonly isForeignAssetRegistered: boolean;
    readonly asForeignAssetRegistered: {
      readonly assetId: u16;
      readonly assetAddress: XcmV3MultiLocation;
      readonly metadata: AcalaPrimitivesCurrencyAssetMetadata;
    } & Struct;
    readonly isForeignAssetUpdated: boolean;
    readonly asForeignAssetUpdated: {
      readonly assetId: u16;
      readonly assetAddress: XcmV3MultiLocation;
      readonly metadata: AcalaPrimitivesCurrencyAssetMetadata;
    } & Struct;
    readonly isAssetRegistered: boolean;
    readonly asAssetRegistered: {
      readonly assetId: AcalaPrimitivesCurrencyAssetIds;
      readonly metadata: AcalaPrimitivesCurrencyAssetMetadata;
    } & Struct;
    readonly isAssetUpdated: boolean;
    readonly asAssetUpdated: {
      readonly assetId: AcalaPrimitivesCurrencyAssetIds;
      readonly metadata: AcalaPrimitivesCurrencyAssetMetadata;
    } & Struct;
    readonly type: 'ForeignAssetRegistered' | 'ForeignAssetUpdated' | 'AssetRegistered' | 'AssetUpdated';
  }

  /** @name AcalaPrimitivesCurrencyAssetMetadata (135) */
  interface AcalaPrimitivesCurrencyAssetMetadata extends Struct {
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly decimals: u8;
    readonly minimalBalance: u128;
  }

  /** @name AcalaPrimitivesCurrencyAssetIds (136) */
  interface AcalaPrimitivesCurrencyAssetIds extends Enum {
    readonly isErc20: boolean;
    readonly asErc20: H160;
    readonly isStableAssetId: boolean;
    readonly asStableAssetId: u32;
    readonly isForeignAssetId: boolean;
    readonly asForeignAssetId: u16;
    readonly isNativeAssetId: boolean;
    readonly asNativeAssetId: AcalaPrimitivesCurrencyCurrencyId;
    readonly type: 'Erc20' | 'StableAssetId' | 'ForeignAssetId' | 'NativeAssetId';
  }

  /** @name ModuleLiquidCrowdloanModuleEvent (137) */
  interface ModuleLiquidCrowdloanModuleEvent extends Enum {
    readonly isRedeemed: boolean;
    readonly asRedeemed: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly isTransferFromCrowdloanVaultRequested: boolean;
    readonly asTransferFromCrowdloanVaultRequested: {
      readonly amount: u128;
    } & Struct;
    readonly isRedeemCurrencyIdUpdated: boolean;
    readonly asRedeemCurrencyIdUpdated: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly type: 'Redeemed' | 'TransferFromCrowdloanVaultRequested' | 'RedeemCurrencyIdUpdated';
  }

  /** @name CumulusPalletXcmpQueueEvent (138) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean;
    readonly asSuccess: {
      readonly messageHash: Option<U8aFixed>;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isFail: boolean;
    readonly asFail: {
      readonly messageHash: Option<U8aFixed>;
      readonly error: XcmV3TraitsError;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isBadVersion: boolean;
    readonly asBadVersion: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isBadFormat: boolean;
    readonly asBadFormat: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly index: u64;
      readonly required: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly index: u64;
      readonly used: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name XcmV3TraitsError (139) */
  interface XcmV3TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isLocationFull: boolean;
    readonly isLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isExpectationFalse: boolean;
    readonly isPalletNotFound: boolean;
    readonly isNameMismatch: boolean;
    readonly isVersionIncompatible: boolean;
    readonly isHoldingWouldOverflow: boolean;
    readonly isExportError: boolean;
    readonly isReanchorFailed: boolean;
    readonly isNoDeal: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockError: boolean;
    readonly isNoPermission: boolean;
    readonly isUnanchored: boolean;
    readonly isNotDepositable: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: SpWeightsWeightV2Weight;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name PalletXcmEvent (140) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: XcmV3TraitsOutcome;
    readonly isSent: boolean;
    readonly asSent: ITuple<[XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isResponseReady: boolean;
    readonly asResponseReady: ITuple<[u64, XcmV3Response]>;
    readonly isNotified: boolean;
    readonly asNotified: ITuple<[u64, u8, u8]>;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: ITuple<[u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: ITuple<[u64, u8, u8]>;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: ITuple<[u64, u8, u8]>;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: ITuple<[XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: u64;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: ITuple<[XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: ITuple<[XcmV3MultiLocation, u32]>;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: ITuple<[XcmV3MultiLocation, u64, XcmV3TraitsError]>;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: ITuple<[XcmVersionedMultiLocation, u64]>;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: ITuple<[XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
  }

  /** @name XcmV3TraitsOutcome (141) */
  interface XcmV3TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: SpWeightsWeightV2Weight;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, XcmV3TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV3TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name XcmV3Xcm (142) */
  interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

  /** @name XcmV3Instruction (144) */
  interface XcmV3Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV3Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly beneficiary: XcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: XcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV3Junctions;
    readonly isReportError: boolean;
    readonly asReportError: XcmV3QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly beneficiary: XcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV3MultiassetMultiAssetFilter;
      readonly want: XcmV3MultiassetMultiAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly reserve: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: XcmV3QueryResponseInfo;
      readonly assets: XcmV3MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV3MultiAsset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV3Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV3Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly ticket: XcmV3MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<XcmV3MultiLocation>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: XcmV3QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: XcmV3QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: XcmV3Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: XcmV3JunctionNetworkId;
      readonly destination: XcmV3Junctions;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly unlocker: XcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly target: XcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: XcmV3MultiAsset;
      readonly owner: XcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: XcmV3MultiAsset;
      readonly locker: XcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: XcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name XcmV3MultiassetMultiAssets (145) */
  interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

  /** @name XcmV3MultiAsset (147) */
  interface XcmV3MultiAsset extends Struct {
    readonly id: XcmV3MultiassetAssetId;
    readonly fun: XcmV3MultiassetFungibility;
  }

  /** @name XcmV3MultiassetAssetId (148) */
  interface XcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV3MultiassetFungibility (149) */
  interface XcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3MultiassetAssetInstance (150) */
  interface XcmV3MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name XcmV3Response (152) */
  interface XcmV3Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV3MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<XcmV3PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name XcmV3PalletInfo (156) */
  interface XcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name XcmV3MaybeErrorCode (159) */
  interface XcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name XcmV2OriginKind (162) */
  interface XcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (163) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV3QueryResponseInfo (164) */
  interface XcmV3QueryResponseInfo extends Struct {
    readonly destination: XcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name XcmV3MultiassetMultiAssetFilter (165) */
  interface XcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV3MultiassetWildMultiAsset (166) */
  interface XcmV3MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name XcmV3MultiassetWildFungibility (167) */
  interface XcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3WeightLimit (168) */
  interface XcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmVersionedMultiAssets (169) */
  interface XcmVersionedMultiAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetMultiAssets;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2MultiassetMultiAssets (170) */
  interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {}

  /** @name XcmV2MultiAsset (172) */
  interface XcmV2MultiAsset extends Struct {
    readonly id: XcmV2MultiassetAssetId;
    readonly fun: XcmV2MultiassetFungibility;
  }

  /** @name XcmV2MultiassetAssetId (173) */
  interface XcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV2MultiLocation (174) */
  interface XcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV2MultilocationJunctions;
  }

  /** @name XcmV2MultilocationJunctions (175) */
  interface XcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV2Junction (176) */
  interface XcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV2NetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV2BodyId;
      readonly part: XcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV2NetworkId (177) */
  interface XcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV2BodyId (179) */
  interface XcmV2BodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV2BodyPart (180) */
  interface XcmV2BodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmV2MultiassetFungibility (181) */
  interface XcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2MultiassetAssetInstance (182) */
  interface XcmV2MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name XcmVersionedMultiLocation (183) */
  interface XcmVersionedMultiLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiLocation;
    readonly type: 'V2' | 'V3';
  }

  /** @name CumulusPalletXcmEvent (184) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, XcmV3TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name CumulusPalletDmpQueueEvent (185) */
  interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: {
      readonly messageId: U8aFixed;
      readonly outcome: XcmV3TraitsOutcome;
    } & Struct;
    readonly isWeightExhausted: boolean;
    readonly asWeightExhausted: {
      readonly messageId: U8aFixed;
      readonly remainingWeight: SpWeightsWeightV2Weight;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly messageId: U8aFixed;
      readonly overweightIndex: u64;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly overweightIndex: u64;
      readonly weightUsed: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isMaxMessagesExhausted: boolean;
    readonly asMaxMessagesExhausted: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced' | 'MaxMessagesExhausted';
  }

  /** @name OrmlXtokensModuleEvent (186) */
  interface OrmlXtokensModuleEvent extends Enum {
    readonly isTransferredMultiAssets: boolean;
    readonly asTransferredMultiAssets: {
      readonly sender: AccountId32;
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly fee: XcmV3MultiAsset;
      readonly dest: XcmV3MultiLocation;
    } & Struct;
    readonly type: 'TransferredMultiAssets';
  }

  /** @name OrmlUnknownTokensModuleEvent (187) */
  interface OrmlUnknownTokensModuleEvent extends Enum {
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly asset: XcmV3MultiAsset;
      readonly who: XcmV3MultiLocation;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly asset: XcmV3MultiAsset;
      readonly who: XcmV3MultiLocation;
    } & Struct;
    readonly type: 'Deposited' | 'Withdrawn';
  }

  /** @name OrmlXcmModuleEvent (188) */
  interface OrmlXcmModuleEvent extends Enum {
    readonly isSent: boolean;
    readonly asSent: {
      readonly to: XcmV3MultiLocation;
      readonly message: XcmV3Xcm;
    } & Struct;
    readonly type: 'Sent';
  }

  /** @name ModuleEvmModuleEvent (189) */
  interface ModuleEvmModuleEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly from: H160;
      readonly contract: H160;
      readonly logs: Vec<EthereumLog>;
      readonly usedGas: u64;
      readonly usedStorage: i32;
    } & Struct;
    readonly isCreatedFailed: boolean;
    readonly asCreatedFailed: {
      readonly from: H160;
      readonly contract: H160;
      readonly exitReason: EvmCoreErrorExitReason;
      readonly logs: Vec<EthereumLog>;
      readonly usedGas: u64;
      readonly usedStorage: i32;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly from: H160;
      readonly contract: H160;
      readonly logs: Vec<EthereumLog>;
      readonly usedGas: u64;
      readonly usedStorage: i32;
    } & Struct;
    readonly isExecutedFailed: boolean;
    readonly asExecutedFailed: {
      readonly from: H160;
      readonly contract: H160;
      readonly exitReason: EvmCoreErrorExitReason;
      readonly output: Bytes;
      readonly logs: Vec<EthereumLog>;
      readonly usedGas: u64;
      readonly usedStorage: i32;
    } & Struct;
    readonly isTransferredMaintainer: boolean;
    readonly asTransferredMaintainer: {
      readonly contract: H160;
      readonly newMaintainer: H160;
    } & Struct;
    readonly isContractDevelopmentEnabled: boolean;
    readonly asContractDevelopmentEnabled: {
      readonly who: AccountId32;
    } & Struct;
    readonly isContractDevelopmentDisabled: boolean;
    readonly asContractDevelopmentDisabled: {
      readonly who: AccountId32;
    } & Struct;
    readonly isContractPublished: boolean;
    readonly asContractPublished: {
      readonly contract: H160;
    } & Struct;
    readonly isContractSetCode: boolean;
    readonly asContractSetCode: {
      readonly contract: H160;
    } & Struct;
    readonly isContractSelfdestructed: boolean;
    readonly asContractSelfdestructed: {
      readonly contract: H160;
    } & Struct;
    readonly type: 'Created' | 'CreatedFailed' | 'Executed' | 'ExecutedFailed' | 'TransferredMaintainer' | 'ContractDevelopmentEnabled' | 'ContractDevelopmentDisabled' | 'ContractPublished' | 'ContractSetCode' | 'ContractSelfdestructed';
  }

  /** @name EthereumLog (191) */
  interface EthereumLog extends Struct {
    readonly address: H160;
    readonly topics: Vec<H256>;
    readonly data: Bytes;
  }

  /** @name EvmCoreErrorExitReason (194) */
  interface EvmCoreErrorExitReason extends Enum {
    readonly isSucceed: boolean;
    readonly asSucceed: EvmCoreErrorExitSucceed;
    readonly isError: boolean;
    readonly asError: EvmCoreErrorExitError;
    readonly isRevert: boolean;
    readonly asRevert: EvmCoreErrorExitRevert;
    readonly isFatal: boolean;
    readonly asFatal: EvmCoreErrorExitFatal;
    readonly type: 'Succeed' | 'Error' | 'Revert' | 'Fatal';
  }

  /** @name EvmCoreErrorExitSucceed (195) */
  interface EvmCoreErrorExitSucceed extends Enum {
    readonly isStopped: boolean;
    readonly isReturned: boolean;
    readonly isSuicided: boolean;
    readonly type: 'Stopped' | 'Returned' | 'Suicided';
  }

  /** @name EvmCoreErrorExitError (196) */
  interface EvmCoreErrorExitError extends Enum {
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

  /** @name EvmCoreErrorExitRevert (200) */
  interface EvmCoreErrorExitRevert extends Enum {
    readonly isReverted: boolean;
    readonly type: 'Reverted';
  }

  /** @name EvmCoreErrorExitFatal (201) */
  interface EvmCoreErrorExitFatal extends Enum {
    readonly isNotSupported: boolean;
    readonly isUnhandledInterrupt: boolean;
    readonly isCallErrorAsFatal: boolean;
    readonly asCallErrorAsFatal: EvmCoreErrorExitError;
    readonly isOther: boolean;
    readonly asOther: Text;
    readonly type: 'NotSupported' | 'UnhandledInterrupt' | 'CallErrorAsFatal' | 'Other';
  }

  /** @name ModuleEvmAccountsModuleEvent (202) */
  interface ModuleEvmAccountsModuleEvent extends Enum {
    readonly isClaimAccount: boolean;
    readonly asClaimAccount: {
      readonly accountId: AccountId32;
      readonly evmAddress: H160;
    } & Struct;
    readonly type: 'ClaimAccount';
  }

  /** @name ModuleCollatorSelectionEvent (203) */
  interface ModuleCollatorSelectionEvent extends Enum {
    readonly isNewInvulnerables: boolean;
    readonly asNewInvulnerables: {
      readonly newInvulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isNewDesiredCandidates: boolean;
    readonly asNewDesiredCandidates: {
      readonly newDesiredCandidates: u32;
    } & Struct;
    readonly isNewCandidacyBond: boolean;
    readonly asNewCandidacyBond: {
      readonly newCandidacyBond: u128;
    } & Struct;
    readonly isCandidateAdded: boolean;
    readonly asCandidateAdded: {
      readonly who: AccountId32;
      readonly bond: u128;
    } & Struct;
    readonly isCandidateRemoved: boolean;
    readonly asCandidateRemoved: {
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'NewInvulnerables' | 'NewDesiredCandidates' | 'NewCandidacyBond' | 'CandidateAdded' | 'CandidateRemoved';
  }

  /** @name PalletSessionEvent (205) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name ModuleSessionManagerModuleEvent (206) */
  interface ModuleSessionManagerModuleEvent extends Enum {
    readonly isScheduledSessionDuration: boolean;
    readonly asScheduledSessionDuration: {
      readonly blockNumber: u32;
      readonly sessionIndex: u32;
      readonly sessionDuration: u32;
    } & Struct;
    readonly type: 'ScheduledSessionDuration';
  }

  /** @name NutsfinanceStableAssetEvent (207) */
  interface NutsfinanceStableAssetEvent extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly poolId: u32;
      readonly a: u128;
      readonly swapId: AccountId32;
      readonly palletId: AccountId32;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly minter: AccountId32;
      readonly poolId: u32;
      readonly a: u128;
      readonly inputAmounts: Vec<u128>;
      readonly minOutputAmount: u128;
      readonly balances: Vec<u128>;
      readonly totalSupply: u128;
      readonly feeAmount: u128;
      readonly outputAmount: u128;
    } & Struct;
    readonly isTokenSwapped: boolean;
    readonly asTokenSwapped: {
      readonly swapper: AccountId32;
      readonly poolId: u32;
      readonly a: u128;
      readonly inputAsset: AcalaPrimitivesCurrencyCurrencyId;
      readonly outputAsset: AcalaPrimitivesCurrencyCurrencyId;
      readonly inputAmount: u128;
      readonly minOutputAmount: u128;
      readonly balances: Vec<u128>;
      readonly totalSupply: u128;
      readonly outputAmount: u128;
    } & Struct;
    readonly isRedeemedProportion: boolean;
    readonly asRedeemedProportion: {
      readonly redeemer: AccountId32;
      readonly poolId: u32;
      readonly a: u128;
      readonly inputAmount: u128;
      readonly minOutputAmounts: Vec<u128>;
      readonly balances: Vec<u128>;
      readonly totalSupply: u128;
      readonly feeAmount: u128;
      readonly outputAmounts: Vec<u128>;
    } & Struct;
    readonly isRedeemedSingle: boolean;
    readonly asRedeemedSingle: {
      readonly redeemer: AccountId32;
      readonly poolId: u32;
      readonly a: u128;
      readonly inputAmount: u128;
      readonly outputAsset: AcalaPrimitivesCurrencyCurrencyId;
      readonly minOutputAmount: u128;
      readonly balances: Vec<u128>;
      readonly totalSupply: u128;
      readonly feeAmount: u128;
      readonly outputAmount: u128;
    } & Struct;
    readonly isRedeemedMulti: boolean;
    readonly asRedeemedMulti: {
      readonly redeemer: AccountId32;
      readonly poolId: u32;
      readonly a: u128;
      readonly outputAmounts: Vec<u128>;
      readonly maxInputAmount: u128;
      readonly balances: Vec<u128>;
      readonly totalSupply: u128;
      readonly feeAmount: u128;
      readonly inputAmount: u128;
    } & Struct;
    readonly isBalanceUpdated: boolean;
    readonly asBalanceUpdated: {
      readonly poolId: u32;
      readonly oldBalances: Vec<u128>;
      readonly newBalances: Vec<u128>;
    } & Struct;
    readonly isYieldCollected: boolean;
    readonly asYieldCollected: {
      readonly poolId: u32;
      readonly a: u128;
      readonly oldTotalSupply: u128;
      readonly newTotalSupply: u128;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFeeCollected: boolean;
    readonly asFeeCollected: {
      readonly poolId: u32;
      readonly a: u128;
      readonly oldBalances: Vec<u128>;
      readonly newBalances: Vec<u128>;
      readonly oldTotalSupply: u128;
      readonly newTotalSupply: u128;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAModified: boolean;
    readonly asAModified: {
      readonly poolId: u32;
      readonly value: u128;
      readonly time: u32;
    } & Struct;
    readonly isFeeModified: boolean;
    readonly asFeeModified: {
      readonly poolId: u32;
      readonly mintFee: u128;
      readonly swapFee: u128;
      readonly redeemFee: u128;
    } & Struct;
    readonly isRecipientModified: boolean;
    readonly asRecipientModified: {
      readonly poolId: u32;
      readonly feeRecipient: AccountId32;
      readonly yieldRecipient: AccountId32;
    } & Struct;
    readonly type: 'CreatePool' | 'Minted' | 'TokenSwapped' | 'RedeemedProportion' | 'RedeemedSingle' | 'RedeemedMulti' | 'BalanceUpdated' | 'YieldCollected' | 'FeeCollected' | 'AModified' | 'FeeModified' | 'RecipientModified';
  }

  /** @name OrmlPaymentsEvent (208) */
  interface OrmlPaymentsEvent extends Enum {
    readonly isPaymentCreated: boolean;
    readonly asPaymentCreated: {
      readonly from: AccountId32;
      readonly asset: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: u128;
      readonly remark: Option<Bytes>;
    } & Struct;
    readonly isPaymentReleased: boolean;
    readonly asPaymentReleased: {
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isPaymentCancelled: boolean;
    readonly asPaymentCancelled: {
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isPaymentResolved: boolean;
    readonly asPaymentResolved: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly recipientShare: Percent;
    } & Struct;
    readonly isPaymentCreatorRequestedRefund: boolean;
    readonly asPaymentCreatorRequestedRefund: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly expiry: u32;
    } & Struct;
    readonly isPaymentRefundDisputed: boolean;
    readonly asPaymentRefundDisputed: {
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isPaymentRequestCreated: boolean;
    readonly asPaymentRequestCreated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly isPaymentRequestCompleted: boolean;
    readonly asPaymentRequestCompleted: {
      readonly from: AccountId32;
      readonly to: AccountId32;
    } & Struct;
    readonly type: 'PaymentCreated' | 'PaymentReleased' | 'PaymentCancelled' | 'PaymentResolved' | 'PaymentCreatorRequestedRefund' | 'PaymentRefundDisputed' | 'PaymentRequestCreated' | 'PaymentRequestCompleted';
  }

  /** @name ModuleEarningModuleEvent (212) */
  interface ModuleEarningModuleEvent extends Enum {
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isInstantUnbonded: boolean;
    readonly asInstantUnbonded: {
      readonly who: AccountId32;
      readonly amount: u128;
      readonly fee: u128;
    } & Struct;
    readonly isRebonded: boolean;
    readonly asRebonded: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Bonded' | 'Unbonded' | 'InstantUnbonded' | 'Rebonded' | 'Withdrawn';
  }

  /** @name CumulusPalletParachainSystemEvent (213) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
    } & Struct;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
  }

  /** @name PalletSudoEvent (214) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name FrameSystemPhase (215) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (217) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (218) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (222) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (223) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (224) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (226) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (227) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (228) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (229) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (233) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (234) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletSchedulerScheduled (237) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: MandalaRuntimeOriginCaller;
  }

  /** @name FrameSupportPreimagesBounded (238) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name PalletSchedulerCall (240) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name ModuleTransactionPauseModuleCall (242) */
  interface ModuleTransactionPauseModuleCall extends Enum {
    readonly isPauseTransaction: boolean;
    readonly asPauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly isUnpauseTransaction: boolean;
    readonly asUnpauseTransaction: {
      readonly palletName: Bytes;
      readonly functionName: Bytes;
    } & Struct;
    readonly isPauseEvmPrecompile: boolean;
    readonly asPauseEvmPrecompile: {
      readonly address: H160;
    } & Struct;
    readonly isUnpauseEvmPrecompile: boolean;
    readonly asUnpauseEvmPrecompile: {
      readonly address: H160;
    } & Struct;
    readonly type: 'PauseTransaction' | 'UnpauseTransaction' | 'PauseEvmPrecompile' | 'UnpauseEvmPrecompile';
  }

  /** @name PalletPreimageCall (243) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage';
  }

  /** @name PalletBalancesCall (244) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalanceDeprecated: boolean;
    readonly asSetBalanceDeprecated: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly oldReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'SetBalanceDeprecated' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'Transfer' | 'ForceSetBalance';
  }

  /** @name ModuleCurrenciesModuleCall (246) */
  interface ModuleCurrenciesModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferNativeCurrency: boolean;
    readonly asTransferNativeCurrency: {
      readonly dest: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUpdateBalance: boolean;
    readonly asUpdateBalance: {
      readonly who: MultiAddress;
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: i128;
    } & Struct;
    readonly isSweepDust: boolean;
    readonly asSweepDust: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly accounts: Vec<AccountId32>;
    } & Struct;
    readonly isForceSetLock: boolean;
    readonly asForceSetLock: {
      readonly who: MultiAddress;
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: Compact<u128>;
      readonly lockId: U8aFixed;
    } & Struct;
    readonly isForceRemoveLock: boolean;
    readonly asForceRemoveLock: {
      readonly who: MultiAddress;
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly lockId: U8aFixed;
    } & Struct;
    readonly type: 'Transfer' | 'TransferNativeCurrency' | 'UpdateBalance' | 'SweepDust' | 'ForceSetLock' | 'ForceRemoveLock';
  }

  /** @name OrmlVestingModuleCall (247) */
  interface OrmlVestingModuleCall extends Enum {
    readonly isClaim: boolean;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly dest: MultiAddress;
      readonly schedule: OrmlVestingVestingSchedule;
    } & Struct;
    readonly isUpdateVestingSchedules: boolean;
    readonly asUpdateVestingSchedules: {
      readonly who: MultiAddress;
      readonly vestingSchedules: Vec<OrmlVestingVestingSchedule>;
    } & Struct;
    readonly isClaimFor: boolean;
    readonly asClaimFor: {
      readonly dest: MultiAddress;
    } & Struct;
    readonly type: 'Claim' | 'VestedTransfer' | 'UpdateVestingSchedules' | 'ClaimFor';
  }

  /** @name ModuleTransactionPaymentModuleCall (249) */
  interface ModuleTransactionPaymentModuleCall extends Enum {
    readonly isSetAlternativeFeeSwapPath: boolean;
    readonly asSetAlternativeFeeSwapPath: {
      readonly feeSwapPath: Option<Vec<AcalaPrimitivesCurrencyCurrencyId>>;
    } & Struct;
    readonly isEnableChargeFeePool: boolean;
    readonly asEnableChargeFeePool: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly poolSize: u128;
      readonly swapThreshold: u128;
    } & Struct;
    readonly isDisableChargeFeePool: boolean;
    readonly asDisableChargeFeePool: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly isWithFeePath: boolean;
    readonly asWithFeePath: {
      readonly feeSwapPath: Vec<AcalaPrimitivesCurrencyCurrencyId>;
      readonly call: Call;
    } & Struct;
    readonly isWithFeeCurrency: boolean;
    readonly asWithFeeCurrency: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly call: Call;
    } & Struct;
    readonly isWithFeePaidBy: boolean;
    readonly asWithFeePaidBy: {
      readonly call: Call;
      readonly payerAddr: AccountId32;
      readonly payerSig: SpRuntimeMultiSignature;
    } & Struct;
    readonly isWithFeeAggregatedPath: boolean;
    readonly asWithFeeAggregatedPath: {
      readonly feeAggregatedPath: Vec<ModuleSupportDexAggregatedSwapPath>;
      readonly call: Call;
    } & Struct;
    readonly type: 'SetAlternativeFeeSwapPath' | 'EnableChargeFeePool' | 'DisableChargeFeePool' | 'WithFeePath' | 'WithFeeCurrency' | 'WithFeePaidBy' | 'WithFeeAggregatedPath';
  }

  /** @name SpRuntimeMultiSignature (251) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (252) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreSr25519Signature (254) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (255) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name ModuleSupportDexAggregatedSwapPath (258) */
  interface ModuleSupportDexAggregatedSwapPath extends Enum {
    readonly isDex: boolean;
    readonly asDex: Vec<AcalaPrimitivesCurrencyCurrencyId>;
    readonly isTaiga: boolean;
    readonly asTaiga: ITuple<[u32, u32, u32]>;
    readonly type: 'Dex' | 'Taiga';
  }

  /** @name PalletTreasuryCall (259) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
  }

  /** @name PalletBountiesCall (260) */
  interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
  }

  /** @name PalletTipsCall (261) */
  interface PalletTipsCall extends Enum {
    readonly isReportAwesome: boolean;
    readonly asReportAwesome: {
      readonly reason: Bytes;
      readonly who: MultiAddress;
    } & Struct;
    readonly isRetractTip: boolean;
    readonly asRetractTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isTipNew: boolean;
    readonly asTipNew: {
      readonly reason: Bytes;
      readonly who: MultiAddress;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isTip: boolean;
    readonly asTip: {
      readonly hash_: H256;
      readonly tipValue: Compact<u128>;
    } & Struct;
    readonly isCloseTip: boolean;
    readonly asCloseTip: {
      readonly hash_: H256;
    } & Struct;
    readonly isSlashTip: boolean;
    readonly asSlashTip: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ReportAwesome' | 'RetractTip' | 'TipNew' | 'Tip' | 'CloseTip' | 'SlashTip';
  }

  /** @name PalletUtilityCall (262) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: MandalaRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name PalletMultisigCall (264) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: Call;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletRecoveryCall (266) */
  interface PalletRecoveryCall extends Enum {
    readonly isAsRecovered: boolean;
    readonly asAsRecovered: {
      readonly account: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly isSetRecovered: boolean;
    readonly asSetRecovered: {
      readonly lost: MultiAddress;
      readonly rescuer: MultiAddress;
    } & Struct;
    readonly isCreateRecovery: boolean;
    readonly asCreateRecovery: {
      readonly friends: Vec<AccountId32>;
      readonly threshold: u16;
      readonly delayPeriod: u32;
    } & Struct;
    readonly isInitiateRecovery: boolean;
    readonly asInitiateRecovery: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isVouchRecovery: boolean;
    readonly asVouchRecovery: {
      readonly lost: MultiAddress;
      readonly rescuer: MultiAddress;
    } & Struct;
    readonly isClaimRecovery: boolean;
    readonly asClaimRecovery: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isCloseRecovery: boolean;
    readonly asCloseRecovery: {
      readonly rescuer: MultiAddress;
    } & Struct;
    readonly isRemoveRecovery: boolean;
    readonly isCancelRecovered: boolean;
    readonly asCancelRecovered: {
      readonly account: MultiAddress;
    } & Struct;
    readonly type: 'AsRecovered' | 'SetRecovered' | 'CreateRecovery' | 'InitiateRecovery' | 'VouchRecovery' | 'ClaimRecovery' | 'CloseRecovery' | 'RemoveRecovery' | 'CancelRecovered';
  }

  /** @name PalletProxyCall (267) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<RuntimeCommonProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: RuntimeCommonProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: RuntimeCommonProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: RuntimeCommonProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: RuntimeCommonProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<RuntimeCommonProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name ModuleIdleSchedulerModuleCall (269) */
  interface ModuleIdleSchedulerModuleCall extends Enum {
    readonly isScheduleTask: boolean;
    readonly asScheduleTask: {
      readonly task: MandalaRuntimeScheduledTasks;
    } & Struct;
    readonly type: 'ScheduleTask';
  }

  /** @name PalletIndicesCall (270) */
  interface PalletIndicesCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly index: u32;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isFree: boolean;
    readonly asFree: {
      readonly index: u32;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
      readonly freeze: bool;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze';
  }

  /** @name PalletCollectiveCall (271) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletMembershipCall (272) */
  interface PalletMembershipCall extends Enum {
    readonly isAddMember: boolean;
    readonly asAddMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isSwapMember: boolean;
    readonly asSwapMember: {
      readonly remove: MultiAddress;
      readonly add: MultiAddress;
    } & Struct;
    readonly isResetMembers: boolean;
    readonly asResetMembers: {
      readonly members: Vec<AccountId32>;
    } & Struct;
    readonly isChangeKey: boolean;
    readonly asChangeKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetPrime: boolean;
    readonly asSetPrime: {
      readonly who: MultiAddress;
    } & Struct;
    readonly isClearPrime: boolean;
    readonly type: 'AddMember' | 'RemoveMember' | 'SwapMember' | 'ResetMembers' | 'ChangeKey' | 'SetPrime' | 'ClearPrime';
  }

  /** @name OrmlAuthorityModuleCall (279) */
  interface OrmlAuthorityModuleCall extends Enum {
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: AcalaPrimitivesAuthoritysOriginId;
      readonly call: Call;
    } & Struct;
    readonly isScheduleDispatch: boolean;
    readonly asScheduleDispatch: {
      readonly when: FrameSupportScheduleDispatchTime;
      readonly priority: u8;
      readonly withDelayedOrigin: bool;
      readonly call: Call;
    } & Struct;
    readonly isFastTrackScheduledDispatch: boolean;
    readonly asFastTrackScheduledDispatch: {
      readonly initialOrigin: MandalaRuntimeOriginCaller;
      readonly taskId: u32;
      readonly when: FrameSupportScheduleDispatchTime;
    } & Struct;
    readonly isDelayScheduledDispatch: boolean;
    readonly asDelayScheduledDispatch: {
      readonly initialOrigin: MandalaRuntimeOriginCaller;
      readonly taskId: u32;
      readonly additionalDelay: u32;
    } & Struct;
    readonly isCancelScheduledDispatch: boolean;
    readonly asCancelScheduledDispatch: {
      readonly initialOrigin: MandalaRuntimeOriginCaller;
      readonly taskId: u32;
    } & Struct;
    readonly isAuthorizeCall: boolean;
    readonly asAuthorizeCall: {
      readonly call: Call;
      readonly caller: Option<AccountId32>;
    } & Struct;
    readonly isRemoveAuthorizedCall: boolean;
    readonly asRemoveAuthorizedCall: {
      readonly hash_: H256;
    } & Struct;
    readonly isTriggerCall: boolean;
    readonly asTriggerCall: {
      readonly hash_: H256;
      readonly callWeightBound: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'DispatchAs' | 'ScheduleDispatch' | 'FastTrackScheduledDispatch' | 'DelayScheduledDispatch' | 'CancelScheduledDispatch' | 'AuthorizeCall' | 'RemoveAuthorizedCall' | 'TriggerCall';
  }

  /** @name AcalaPrimitivesAuthoritysOriginId (280) */
  interface AcalaPrimitivesAuthoritysOriginId extends Enum {
    readonly isRoot: boolean;
    readonly isTreasury: boolean;
    readonly isHonzonTreasury: boolean;
    readonly isHomaTreasury: boolean;
    readonly isTreasuryReserve: boolean;
    readonly type: 'Root' | 'Treasury' | 'HonzonTreasury' | 'HomaTreasury' | 'TreasuryReserve';
  }

  /** @name FrameSupportScheduleDispatchTime (281) */
  interface FrameSupportScheduleDispatchTime extends Enum {
    readonly isAt: boolean;
    readonly asAt: u32;
    readonly isAfter: boolean;
    readonly asAfter: u32;
    readonly type: 'At' | 'After';
  }

  /** @name PalletElectionsPhragmenCall (282) */
  interface PalletElectionsPhragmenCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly votes: Vec<AccountId32>;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isRemoveVoter: boolean;
    readonly isSubmitCandidacy: boolean;
    readonly asSubmitCandidacy: {
      readonly candidateCount: Compact<u32>;
    } & Struct;
    readonly isRenounceCandidacy: boolean;
    readonly asRenounceCandidacy: {
      readonly renouncing: PalletElectionsPhragmenRenouncing;
    } & Struct;
    readonly isRemoveMember: boolean;
    readonly asRemoveMember: {
      readonly who: MultiAddress;
      readonly slashBond: bool;
      readonly rerunElection: bool;
    } & Struct;
    readonly isCleanDefunctVoters: boolean;
    readonly asCleanDefunctVoters: {
      readonly numVoters: u32;
      readonly numDefunct: u32;
    } & Struct;
    readonly type: 'Vote' | 'RemoveVoter' | 'SubmitCandidacy' | 'RenounceCandidacy' | 'RemoveMember' | 'CleanDefunctVoters';
  }

  /** @name PalletElectionsPhragmenRenouncing (283) */
  interface PalletElectionsPhragmenRenouncing extends Enum {
    readonly isMember: boolean;
    readonly isRunnerUp: boolean;
    readonly isCandidate: boolean;
    readonly asCandidate: Compact<u32>;
    readonly type: 'Member' | 'RunnerUp' | 'Candidate';
  }

  /** @name PalletDemocracyCall (284) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u32;
      readonly delay: u32;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: MultiAddress;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal' | 'SetMetadata';
  }

  /** @name PalletDemocracyConviction (285) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name OrmlOracleModuleCall (288) */
  interface OrmlOracleModuleCall extends Enum {
    readonly isFeedValues: boolean;
    readonly asFeedValues: {
      readonly values: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>>;
    } & Struct;
    readonly type: 'FeedValues';
  }

  /** @name OrmlAuctionModuleCall (291) */
  interface OrmlAuctionModuleCall extends Enum {
    readonly isBid: boolean;
    readonly asBid: {
      readonly id: u32;
      readonly value: Compact<u128>;
    } & Struct;
    readonly type: 'Bid';
  }

  /** @name OrmlRewardsModuleCall (292) */
  type OrmlRewardsModuleCall = Null;

  /** @name ModulePricesModuleCall (293) */
  interface ModulePricesModuleCall extends Enum {
    readonly isLockPrice: boolean;
    readonly asLockPrice: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly isUnlockPrice: boolean;
    readonly asUnlockPrice: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly type: 'LockPrice' | 'UnlockPrice';
  }

  /** @name ModuleDexModuleCall (294) */
  interface ModuleDexModuleCall extends Enum {
    readonly isSwapWithExactSupply: boolean;
    readonly asSwapWithExactSupply: {
      readonly path: Vec<AcalaPrimitivesCurrencyCurrencyId>;
      readonly supplyAmount: Compact<u128>;
      readonly minTargetAmount: Compact<u128>;
    } & Struct;
    readonly isSwapWithExactTarget: boolean;
    readonly asSwapWithExactTarget: {
      readonly path: Vec<AcalaPrimitivesCurrencyCurrencyId>;
      readonly targetAmount: Compact<u128>;
      readonly maxSupplyAmount: Compact<u128>;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
      readonly maxAmountA: Compact<u128>;
      readonly maxAmountB: Compact<u128>;
      readonly minShareIncrement: Compact<u128>;
      readonly stakeIncrementShare: bool;
    } & Struct;
    readonly isAddProvision: boolean;
    readonly asAddProvision: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
      readonly amountA: Compact<u128>;
      readonly amountB: Compact<u128>;
    } & Struct;
    readonly isClaimDexShare: boolean;
    readonly asClaimDexShare: {
      readonly owner: AccountId32;
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
      readonly removeShare: Compact<u128>;
      readonly minWithdrawnA: Compact<u128>;
      readonly minWithdrawnB: Compact<u128>;
      readonly byUnstake: bool;
    } & Struct;
    readonly isListProvisioning: boolean;
    readonly asListProvisioning: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
      readonly minContributionA: Compact<u128>;
      readonly minContributionB: Compact<u128>;
      readonly targetProvisionA: Compact<u128>;
      readonly targetProvisionB: Compact<u128>;
      readonly notBefore: Compact<u32>;
    } & Struct;
    readonly isUpdateProvisioningParameters: boolean;
    readonly asUpdateProvisioningParameters: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
      readonly minContributionA: Compact<u128>;
      readonly minContributionB: Compact<u128>;
      readonly targetProvisionA: Compact<u128>;
      readonly targetProvisionB: Compact<u128>;
      readonly notBefore: Compact<u32>;
    } & Struct;
    readonly isEndProvisioning: boolean;
    readonly asEndProvisioning: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly isEnableTradingPair: boolean;
    readonly asEnableTradingPair: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly isDisableTradingPair: boolean;
    readonly asDisableTradingPair: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly isRefundProvision: boolean;
    readonly asRefundProvision: {
      readonly owner: AccountId32;
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly isAbortProvisioning: boolean;
    readonly asAbortProvisioning: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly type: 'SwapWithExactSupply' | 'SwapWithExactTarget' | 'AddLiquidity' | 'AddProvision' | 'ClaimDexShare' | 'RemoveLiquidity' | 'ListProvisioning' | 'UpdateProvisioningParameters' | 'EndProvisioning' | 'EnableTradingPair' | 'DisableTradingPair' | 'RefundProvision' | 'AbortProvisioning';
  }

  /** @name ModuleDexOracleModuleCall (295) */
  interface ModuleDexOracleModuleCall extends Enum {
    readonly isEnableAveragePrice: boolean;
    readonly asEnableAveragePrice: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
      readonly interval: u64;
    } & Struct;
    readonly isDisableAveragePrice: boolean;
    readonly asDisableAveragePrice: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly isUpdateAveragePriceInterval: boolean;
    readonly asUpdateAveragePriceInterval: {
      readonly currencyIdA: AcalaPrimitivesCurrencyCurrencyId;
      readonly currencyIdB: AcalaPrimitivesCurrencyCurrencyId;
      readonly newInterval: u64;
    } & Struct;
    readonly type: 'EnableAveragePrice' | 'DisableAveragePrice' | 'UpdateAveragePriceInterval';
  }

  /** @name ModuleAggregatedDexModuleCall (296) */
  interface ModuleAggregatedDexModuleCall extends Enum {
    readonly isSwapWithExactSupply: boolean;
    readonly asSwapWithExactSupply: {
      readonly paths: Vec<ModuleSupportDexAggregatedSwapPath>;
      readonly supplyAmount: Compact<u128>;
      readonly minTargetAmount: Compact<u128>;
    } & Struct;
    readonly isSwapWithExactTarget: boolean;
    readonly asSwapWithExactTarget: {
      readonly paths: Vec<ModuleSupportDexAggregatedSwapPath>;
      readonly targetAmount: Compact<u128>;
      readonly maxSupplyAmount: Compact<u128>;
    } & Struct;
    readonly isUpdateAggregatedSwapPaths: boolean;
    readonly asUpdateAggregatedSwapPaths: {
      readonly updates: Vec<ITuple<[ITuple<[AcalaPrimitivesCurrencyCurrencyId, AcalaPrimitivesCurrencyCurrencyId]>, Option<Vec<ModuleSupportDexAggregatedSwapPath>>]>>;
    } & Struct;
    readonly type: 'SwapWithExactSupply' | 'SwapWithExactTarget' | 'UpdateAggregatedSwapPaths';
  }

  /** @name ModuleAuctionManagerModuleCall (301) */
  interface ModuleAuctionManagerModuleCall extends Enum {
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly id: u32;
    } & Struct;
    readonly type: 'Cancel';
  }

  /** @name ModuleLoansModuleCall (302) */
  type ModuleLoansModuleCall = Null;

  /** @name ModuleHonzonModuleCall (303) */
  interface ModuleHonzonModuleCall extends Enum {
    readonly isAdjustLoan: boolean;
    readonly asAdjustLoan: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly collateralAdjustment: i128;
      readonly debitAdjustment: i128;
    } & Struct;
    readonly isCloseLoanHasDebitByDex: boolean;
    readonly asCloseLoanHasDebitByDex: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly maxCollateralAmount: Compact<u128>;
    } & Struct;
    readonly isTransferLoanFrom: boolean;
    readonly asTransferLoanFrom: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly from: MultiAddress;
    } & Struct;
    readonly isAuthorize: boolean;
    readonly asAuthorize: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly to: MultiAddress;
    } & Struct;
    readonly isUnauthorize: boolean;
    readonly asUnauthorize: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly to: MultiAddress;
    } & Struct;
    readonly isUnauthorizeAll: boolean;
    readonly isExpandPositionCollateral: boolean;
    readonly asExpandPositionCollateral: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly increaseDebitValue: u128;
      readonly minIncreaseCollateral: u128;
    } & Struct;
    readonly isShrinkPositionDebit: boolean;
    readonly asShrinkPositionDebit: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly decreaseCollateral: u128;
      readonly minDecreaseDebitValue: u128;
    } & Struct;
    readonly isAdjustLoanByDebitValue: boolean;
    readonly asAdjustLoanByDebitValue: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly collateralAdjustment: i128;
      readonly debitValueAdjustment: i128;
    } & Struct;
    readonly isTransferDebit: boolean;
    readonly asTransferDebit: {
      readonly fromCurrency: AcalaPrimitivesCurrencyCurrencyId;
      readonly toCurrency: AcalaPrimitivesCurrencyCurrencyId;
      readonly debitTransfer: u128;
    } & Struct;
    readonly type: 'AdjustLoan' | 'CloseLoanHasDebitByDex' | 'TransferLoanFrom' | 'Authorize' | 'Unauthorize' | 'UnauthorizeAll' | 'ExpandPositionCollateral' | 'ShrinkPositionDebit' | 'AdjustLoanByDebitValue' | 'TransferDebit';
  }

  /** @name ModuleCdpTreasuryModuleCall (304) */
  interface ModuleCdpTreasuryModuleCall extends Enum {
    readonly isExtractSurplusToTreasury: boolean;
    readonly asExtractSurplusToTreasury: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isAuctionCollateral: boolean;
    readonly asAuctionCollateral: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: Compact<u128>;
      readonly target: Compact<u128>;
      readonly splited: bool;
    } & Struct;
    readonly isExchangeCollateralToStable: boolean;
    readonly asExchangeCollateralToStable: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly swapLimit: ModuleSupportDexSwapLimit;
    } & Struct;
    readonly isSetExpectedCollateralAuctionSize: boolean;
    readonly asSetExpectedCollateralAuctionSize: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly size_: Compact<u128>;
    } & Struct;
    readonly isSetDebitOffsetBuffer: boolean;
    readonly asSetDebitOffsetBuffer: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly type: 'ExtractSurplusToTreasury' | 'AuctionCollateral' | 'ExchangeCollateralToStable' | 'SetExpectedCollateralAuctionSize' | 'SetDebitOffsetBuffer';
  }

  /** @name ModuleSupportDexSwapLimit (305) */
  interface ModuleSupportDexSwapLimit extends Enum {
    readonly isExactSupply: boolean;
    readonly asExactSupply: ITuple<[u128, u128]>;
    readonly isExactTarget: boolean;
    readonly asExactTarget: ITuple<[u128, u128]>;
    readonly type: 'ExactSupply' | 'ExactTarget';
  }

  /** @name ModuleCdpEngineModuleCall (306) */
  interface ModuleCdpEngineModuleCall extends Enum {
    readonly isLiquidate: boolean;
    readonly asLiquidate: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: MultiAddress;
    } & Struct;
    readonly isSettle: boolean;
    readonly asSettle: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly who: MultiAddress;
    } & Struct;
    readonly isSetCollateralParams: boolean;
    readonly asSetCollateralParams: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly interestRatePerSec: OrmlTraitsChangeOption;
      readonly liquidationRatio: OrmlTraitsChangeOption;
      readonly liquidationPenalty: OrmlTraitsChangeOption;
      readonly requiredCollateralRatio: OrmlTraitsChangeOption;
      readonly maximumTotalDebitValue: OrmlTraitsChangeU128;
    } & Struct;
    readonly isRegisterLiquidationContract: boolean;
    readonly asRegisterLiquidationContract: {
      readonly address: H160;
    } & Struct;
    readonly isDeregisterLiquidationContract: boolean;
    readonly asDeregisterLiquidationContract: {
      readonly address: H160;
    } & Struct;
    readonly type: 'Liquidate' | 'Settle' | 'SetCollateralParams' | 'RegisterLiquidationContract' | 'DeregisterLiquidationContract';
  }

  /** @name OrmlTraitsChangeOption (307) */
  interface OrmlTraitsChangeOption extends Enum {
    readonly isNoChange: boolean;
    readonly isNewValue: boolean;
    readonly asNewValue: Option<u128>;
    readonly type: 'NoChange' | 'NewValue';
  }

  /** @name OrmlTraitsChangeU128 (308) */
  interface OrmlTraitsChangeU128 extends Enum {
    readonly isNoChange: boolean;
    readonly isNewValue: boolean;
    readonly asNewValue: u128;
    readonly type: 'NoChange' | 'NewValue';
  }

  /** @name ModuleEmergencyShutdownModuleCall (309) */
  interface ModuleEmergencyShutdownModuleCall extends Enum {
    readonly isEmergencyShutdown: boolean;
    readonly isOpenCollateralRefund: boolean;
    readonly isRefundCollaterals: boolean;
    readonly asRefundCollaterals: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly type: 'EmergencyShutdown' | 'OpenCollateralRefund' | 'RefundCollaterals';
  }

  /** @name ModuleNomineesElectionModuleCall (310) */
  interface ModuleNomineesElectionModuleCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly targets: Vec<AccountId32>;
    } & Struct;
    readonly isChill: boolean;
    readonly type: 'Bond' | 'Unbond' | 'Rebond' | 'WithdrawUnbonded' | 'Nominate' | 'Chill';
  }

  /** @name ModuleHomaModuleCall (311) */
  interface ModuleHomaModuleCall extends Enum {
    readonly isMint: boolean;
    readonly asMint: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isRequestRedeem: boolean;
    readonly asRequestRedeem: {
      readonly amount: Compact<u128>;
      readonly allowFastMatch: bool;
    } & Struct;
    readonly isFastMatchRedeems: boolean;
    readonly asFastMatchRedeems: {
      readonly redeemerList: Vec<AccountId32>;
    } & Struct;
    readonly isClaimRedemption: boolean;
    readonly asClaimRedemption: {
      readonly redeemer: AccountId32;
    } & Struct;
    readonly isUpdateHomaParams: boolean;
    readonly asUpdateHomaParams: {
      readonly softBondedCapPerSubAccount: Option<u128>;
      readonly estimatedRewardRatePerEra: Option<u128>;
      readonly commissionRate: Option<u128>;
      readonly fastMatchFeeRate: Option<u128>;
    } & Struct;
    readonly isUpdateBumpEraParams: boolean;
    readonly asUpdateBumpEraParams: {
      readonly lastEraBumpedBlock: Option<u32>;
      readonly frequency: Option<u32>;
    } & Struct;
    readonly isResetLedgers: boolean;
    readonly asResetLedgers: {
      readonly updates: Vec<ITuple<[u16, Option<u128>, Option<Vec<ModuleHomaModuleUnlockChunk>>]>>;
    } & Struct;
    readonly isResetCurrentEra: boolean;
    readonly asResetCurrentEra: {
      readonly eraIndex: u32;
    } & Struct;
    readonly isForceBumpCurrentEra: boolean;
    readonly asForceBumpCurrentEra: {
      readonly bumpAmount: u32;
    } & Struct;
    readonly isFastMatchRedeemsCompletely: boolean;
    readonly asFastMatchRedeemsCompletely: {
      readonly redeemerList: Vec<AccountId32>;
    } & Struct;
    readonly type: 'Mint' | 'RequestRedeem' | 'FastMatchRedeems' | 'ClaimRedemption' | 'UpdateHomaParams' | 'UpdateBumpEraParams' | 'ResetLedgers' | 'ResetCurrentEra' | 'ForceBumpCurrentEra' | 'FastMatchRedeemsCompletely';
  }

  /** @name ModuleXcmInterfaceModuleCall (316) */
  interface ModuleXcmInterfaceModuleCall extends Enum {
    readonly isUpdateXcmDestWeightAndFee: boolean;
    readonly asUpdateXcmDestWeightAndFee: {
      readonly updates: Vec<ITuple<[ModuleXcmInterfaceModuleXcmInterfaceOperation, Option<SpWeightsWeightV2Weight>, Option<u128>]>>;
    } & Struct;
    readonly type: 'UpdateXcmDestWeightAndFee';
  }

  /** @name ModuleIncentivesModuleCall (319) */
  interface ModuleIncentivesModuleCall extends Enum {
    readonly isDepositDexShare: boolean;
    readonly asDepositDexShare: {
      readonly lpCurrencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isWithdrawDexShare: boolean;
    readonly asWithdrawDexShare: {
      readonly lpCurrencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly asClaimRewards: {
      readonly poolId: ModuleSupportIncentivesPoolId;
    } & Struct;
    readonly isUpdateIncentiveRewards: boolean;
    readonly asUpdateIncentiveRewards: {
      readonly updates: Vec<ITuple<[ModuleSupportIncentivesPoolId, Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>>]>>;
    } & Struct;
    readonly isUpdateClaimRewardDeductionRates: boolean;
    readonly asUpdateClaimRewardDeductionRates: {
      readonly updates: Vec<ITuple<[ModuleSupportIncentivesPoolId, u128]>>;
    } & Struct;
    readonly type: 'DepositDexShare' | 'WithdrawDexShare' | 'ClaimRewards' | 'UpdateIncentiveRewards' | 'UpdateClaimRewardDeductionRates';
  }

  /** @name ModuleNftModuleCall (324) */
  interface ModuleNftModuleCall extends Enum {
    readonly isCreateClass: boolean;
    readonly asCreateClass: {
      readonly metadata: Bytes;
      readonly properties: u8;
      readonly attributes: BTreeMap<Bytes, Bytes>;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly to: MultiAddress;
      readonly classId: u32;
      readonly metadata: Bytes;
      readonly attributes: BTreeMap<Bytes, Bytes>;
      readonly quantity: Compact<u32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly to: MultiAddress;
      readonly token: ITuple<[u32, u64]>;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly token: ITuple<[u32, u64]>;
    } & Struct;
    readonly isBurnWithRemark: boolean;
    readonly asBurnWithRemark: {
      readonly token: ITuple<[u32, u64]>;
      readonly remark: Bytes;
    } & Struct;
    readonly isDestroyClass: boolean;
    readonly asDestroyClass: {
      readonly classId: u32;
      readonly dest: MultiAddress;
    } & Struct;
    readonly isUpdateClassProperties: boolean;
    readonly asUpdateClassProperties: {
      readonly classId: u32;
      readonly properties: u8;
    } & Struct;
    readonly type: 'CreateClass' | 'Mint' | 'Transfer' | 'Burn' | 'BurnWithRemark' | 'DestroyClass' | 'UpdateClassProperties';
  }

  /** @name AcalaPrimitivesNftClassProperty (326) */
  interface AcalaPrimitivesNftClassProperty extends Enum {
    readonly isTransferable: boolean;
    readonly isBurnable: boolean;
    readonly isMintable: boolean;
    readonly isClassPropertiesMutable: boolean;
    readonly type: 'Transferable' | 'Burnable' | 'Mintable' | 'ClassPropertiesMutable';
  }

  /** @name ModuleAssetRegistryModuleCall (329) */
  interface ModuleAssetRegistryModuleCall extends Enum {
    readonly isRegisterForeignAsset: boolean;
    readonly asRegisterForeignAsset: {
      readonly location: XcmVersionedMultiLocation;
      readonly metadata: AcalaPrimitivesCurrencyAssetMetadata;
    } & Struct;
    readonly isUpdateForeignAsset: boolean;
    readonly asUpdateForeignAsset: {
      readonly foreignAssetId: u16;
      readonly location: XcmVersionedMultiLocation;
      readonly metadata: AcalaPrimitivesCurrencyAssetMetadata;
    } & Struct;
    readonly isRegisterStableAsset: boolean;
    readonly asRegisterStableAsset: {
      readonly metadata: AcalaPrimitivesCurrencyAssetMetadata;
    } & Struct;
    readonly isUpdateStableAsset: boolean;
    readonly asUpdateStableAsset: {
      readonly stableAssetId: u32;
      readonly metadata: AcalaPrimitivesCurrencyAssetMetadata;
    } & Struct;
    readonly isRegisterErc20Asset: boolean;
    readonly asRegisterErc20Asset: {
      readonly contract: H160;
      readonly minimalBalance: u128;
    } & Struct;
    readonly isUpdateErc20Asset: boolean;
    readonly asUpdateErc20Asset: {
      readonly contract: H160;
      readonly metadata: AcalaPrimitivesCurrencyAssetMetadata;
    } & Struct;
    readonly isRegisterNativeAsset: boolean;
    readonly asRegisterNativeAsset: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly metadata: AcalaPrimitivesCurrencyAssetMetadata;
    } & Struct;
    readonly isUpdateNativeAsset: boolean;
    readonly asUpdateNativeAsset: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly metadata: AcalaPrimitivesCurrencyAssetMetadata;
    } & Struct;
    readonly type: 'RegisterForeignAsset' | 'UpdateForeignAsset' | 'RegisterStableAsset' | 'UpdateStableAsset' | 'RegisterErc20Asset' | 'UpdateErc20Asset' | 'RegisterNativeAsset' | 'UpdateNativeAsset';
  }

  /** @name ModuleLiquidCrowdloanModuleCall (330) */
  interface ModuleLiquidCrowdloanModuleCall extends Enum {
    readonly isRedeem: boolean;
    readonly asRedeem: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferFromCrowdloanVault: boolean;
    readonly asTransferFromCrowdloanVault: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isSetRedeemCurrencyId: boolean;
    readonly asSetRedeemCurrencyId: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
    } & Struct;
    readonly type: 'Redeem' | 'TransferFromCrowdloanVault' | 'SetRedeemCurrencyId';
  }

  /** @name CumulusPalletXcmpQueueCall (331) */
  interface CumulusPalletXcmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSuspendXcmExecution: boolean;
    readonly isResumeXcmExecution: boolean;
    readonly isUpdateSuspendThreshold: boolean;
    readonly asUpdateSuspendThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateDropThreshold: boolean;
    readonly asUpdateDropThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateResumeThreshold: boolean;
    readonly asUpdateResumeThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateThresholdWeight: boolean;
    readonly asUpdateThresholdWeight: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUpdateWeightRestrictDecay: boolean;
    readonly asUpdateWeightRestrictDecay: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUpdateXcmpMaxIndividualWeight: boolean;
    readonly asUpdateXcmpMaxIndividualWeight: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
  }

  /** @name PalletXcmCall (332) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: XcmVersionedMultiLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: XcmVersionedXcm;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: XcmV3MultiLocation;
      readonly xcmVersion: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isForceSuspension: boolean;
    readonly asForceSuspension: {
      readonly suspended: bool;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension';
  }

  /** @name XcmVersionedXcm (333) */
  interface XcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: XcmV3Xcm;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2Xcm (334) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (336) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV2OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV2MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV2MultiassetMultiAssetFilter;
      readonly receive: XcmV2MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly reserve: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV2MultiAsset;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly ticket: XcmV2MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV2Response (337) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV2MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV2TraitsError (340) */
  interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name XcmV2MultiassetMultiAssetFilter (341) */
  interface XcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV2MultiassetWildMultiAsset (342) */
  interface XcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV2MultiassetAssetId;
      readonly fun: XcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV2MultiassetWildFungibility (343) */
  interface XcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (344) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name CumulusPalletDmpQueueCall (353) */
  interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight';
  }

  /** @name OrmlXtokensModuleCall (354) */
  interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiasset: boolean;
    readonly asTransferMultiasset: {
      readonly asset: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferWithFee: boolean;
    readonly asTransferWithFee: {
      readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: u128;
      readonly fee: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassetWithFee: boolean;
    readonly asTransferMultiassetWithFee: {
      readonly asset: XcmVersionedMultiAsset;
      readonly fee: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMulticurrencies: boolean;
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[AcalaPrimitivesCurrencyCurrencyId, u128]>>;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassets: boolean;
    readonly asTransferMultiassets: {
      readonly assets: XcmVersionedMultiAssets;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
  }

  /** @name XcmVersionedMultiAsset (355) */
  interface XcmVersionedMultiAsset extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiAsset;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiAsset;
    readonly type: 'V2' | 'V3';
  }

  /** @name OrmlXcmModuleCall (356) */
  interface OrmlXcmModuleCall extends Enum {
    readonly isSendAsSovereign: boolean;
    readonly asSendAsSovereign: {
      readonly dest: XcmVersionedMultiLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly type: 'SendAsSovereign';
  }

  /** @name ModuleEvmModuleCall (357) */
  interface ModuleEvmModuleCall extends Enum {
    readonly isEthCall: boolean;
    readonly asEthCall: {
      readonly action: EthereumTransactionTransactionAction;
      readonly input: Bytes;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
      readonly accessList: Vec<EthereumTransactionAccessListItem>;
      readonly validUntil: Compact<u32>;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly target: H160;
      readonly input: Bytes;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
      readonly accessList: Vec<EthereumTransactionAccessListItem>;
    } & Struct;
    readonly isScheduledCall: boolean;
    readonly asScheduledCall: {
      readonly from: H160;
      readonly target: H160;
      readonly input: Bytes;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
      readonly accessList: Vec<EthereumTransactionAccessListItem>;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly input: Bytes;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
      readonly accessList: Vec<EthereumTransactionAccessListItem>;
    } & Struct;
    readonly isCreate2: boolean;
    readonly asCreate2: {
      readonly input: Bytes;
      readonly salt: H256;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
      readonly accessList: Vec<EthereumTransactionAccessListItem>;
    } & Struct;
    readonly isCreateNftContract: boolean;
    readonly asCreateNftContract: {
      readonly input: Bytes;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
      readonly accessList: Vec<EthereumTransactionAccessListItem>;
    } & Struct;
    readonly isCreatePredeployContract: boolean;
    readonly asCreatePredeployContract: {
      readonly target: H160;
      readonly input: Bytes;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
      readonly accessList: Vec<EthereumTransactionAccessListItem>;
    } & Struct;
    readonly isTransferMaintainer: boolean;
    readonly asTransferMaintainer: {
      readonly contract: H160;
      readonly newMaintainer: H160;
    } & Struct;
    readonly isPublishContract: boolean;
    readonly asPublishContract: {
      readonly contract: H160;
    } & Struct;
    readonly isPublishFree: boolean;
    readonly asPublishFree: {
      readonly contract: H160;
    } & Struct;
    readonly isEnableContractDevelopment: boolean;
    readonly isDisableContractDevelopment: boolean;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly contract: H160;
      readonly code: Bytes;
    } & Struct;
    readonly isSelfdestruct: boolean;
    readonly asSelfdestruct: {
      readonly contract: H160;
    } & Struct;
    readonly isStrictCall: boolean;
    readonly asStrictCall: {
      readonly target: H160;
      readonly input: Bytes;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageLimit: Compact<u32>;
      readonly accessList: Vec<EthereumTransactionAccessListItem>;
    } & Struct;
    readonly isEthCallV2: boolean;
    readonly asEthCallV2: {
      readonly action: EthereumTransactionTransactionAction;
      readonly input: Bytes;
      readonly value: Compact<u128>;
      readonly gasPrice: Compact<u64>;
      readonly gasLimit: Compact<u64>;
      readonly accessList: Vec<EthereumTransactionAccessListItem>;
    } & Struct;
    readonly type: 'EthCall' | 'Call' | 'ScheduledCall' | 'Create' | 'Create2' | 'CreateNftContract' | 'CreatePredeployContract' | 'TransferMaintainer' | 'PublishContract' | 'PublishFree' | 'EnableContractDevelopment' | 'DisableContractDevelopment' | 'SetCode' | 'Selfdestruct' | 'StrictCall' | 'EthCallV2';
  }

  /** @name EthereumTransactionTransactionAction (358) */
  interface EthereumTransactionTransactionAction extends Enum {
    readonly isCall: boolean;
    readonly asCall: H160;
    readonly isCreate: boolean;
    readonly type: 'Call' | 'Create';
  }

  /** @name EthereumTransactionAccessListItem (360) */
  interface EthereumTransactionAccessListItem extends Struct {
    readonly address: H160;
    readonly storageKeys: Vec<H256>;
  }

  /** @name ModuleEvmAccountsModuleCall (361) */
  interface ModuleEvmAccountsModuleCall extends Enum {
    readonly isClaimAccount: boolean;
    readonly asClaimAccount: {
      readonly ethAddress: H160;
      readonly ethSignature: U8aFixed;
    } & Struct;
    readonly isClaimDefaultAccount: boolean;
    readonly type: 'ClaimAccount' | 'ClaimDefaultAccount';
  }

  /** @name ModuleCollatorSelectionCall (362) */
  interface ModuleCollatorSelectionCall extends Enum {
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly new_: Vec<AccountId32>;
    } & Struct;
    readonly isSetDesiredCandidates: boolean;
    readonly asSetDesiredCandidates: {
      readonly max: Compact<u32>;
    } & Struct;
    readonly isSetCandidacyBond: boolean;
    readonly asSetCandidacyBond: {
      readonly bond: Compact<u128>;
    } & Struct;
    readonly isRegisterAsCandidate: boolean;
    readonly isRegisterCandidate: boolean;
    readonly asRegisterCandidate: {
      readonly newCandidate: AccountId32;
    } & Struct;
    readonly isLeaveIntent: boolean;
    readonly isWithdrawBond: boolean;
    readonly type: 'SetInvulnerables' | 'SetDesiredCandidates' | 'SetCandidacyBond' | 'RegisterAsCandidate' | 'RegisterCandidate' | 'LeaveIntent' | 'WithdrawBond';
  }

  /** @name PalletSessionCall (363) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: MandalaRuntimeSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name MandalaRuntimeSessionKeys (364) */
  interface MandalaRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (365) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (366) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name ModuleSessionManagerModuleCall (367) */
  interface ModuleSessionManagerModuleCall extends Enum {
    readonly isScheduleSessionDuration: boolean;
    readonly asScheduleSessionDuration: {
      readonly startSession: Compact<u32>;
      readonly duration: Compact<u32>;
    } & Struct;
    readonly type: 'ScheduleSessionDuration';
  }

  /** @name NutsfinanceStableAssetCall (368) */
  interface NutsfinanceStableAssetCall extends Enum {
    readonly isCreatePool: boolean;
    readonly asCreatePool: {
      readonly poolAsset: AcalaPrimitivesCurrencyCurrencyId;
      readonly assets: Vec<AcalaPrimitivesCurrencyCurrencyId>;
      readonly precisions: Vec<u128>;
      readonly mintFee: u128;
      readonly swapFee: u128;
      readonly redeemFee: u128;
      readonly initialA: u128;
      readonly feeRecipient: AccountId32;
      readonly yieldRecipient: AccountId32;
      readonly precision: u128;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly poolId: u32;
      readonly amounts: Vec<u128>;
      readonly minMintAmount: u128;
    } & Struct;
    readonly isSwap: boolean;
    readonly asSwap: {
      readonly poolId: u32;
      readonly i: u32;
      readonly j: u32;
      readonly dx: u128;
      readonly minDy: u128;
      readonly assetLength: u32;
    } & Struct;
    readonly isRedeemProportion: boolean;
    readonly asRedeemProportion: {
      readonly poolId: u32;
      readonly amount: u128;
      readonly minRedeemAmounts: Vec<u128>;
    } & Struct;
    readonly isRedeemSingle: boolean;
    readonly asRedeemSingle: {
      readonly poolId: u32;
      readonly amount: u128;
      readonly i: u32;
      readonly minRedeemAmount: u128;
      readonly assetLength: u32;
    } & Struct;
    readonly isRedeemMulti: boolean;
    readonly asRedeemMulti: {
      readonly poolId: u32;
      readonly amounts: Vec<u128>;
      readonly maxRedeemAmount: u128;
    } & Struct;
    readonly isModifyA: boolean;
    readonly asModifyA: {
      readonly poolId: u32;
      readonly a: u128;
      readonly futureABlock: u32;
    } & Struct;
    readonly isModifyFees: boolean;
    readonly asModifyFees: {
      readonly poolId: u32;
      readonly mintFee: Option<u128>;
      readonly swapFee: Option<u128>;
      readonly redeemFee: Option<u128>;
    } & Struct;
    readonly isModifyRecipients: boolean;
    readonly asModifyRecipients: {
      readonly poolId: u32;
      readonly feeRecipient: Option<AccountId32>;
      readonly yieldRecipient: Option<AccountId32>;
    } & Struct;
    readonly type: 'CreatePool' | 'Mint' | 'Swap' | 'RedeemProportion' | 'RedeemSingle' | 'RedeemMulti' | 'ModifyA' | 'ModifyFees' | 'ModifyRecipients';
  }

  /** @name OrmlPaymentsCall (369) */
  interface OrmlPaymentsCall extends Enum {
    readonly isPay: boolean;
    readonly asPay: {
      readonly recipient: AccountId32;
      readonly asset: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: Compact<u128>;
      readonly remark: Option<Bytes>;
    } & Struct;
    readonly isRelease: boolean;
    readonly asRelease: {
      readonly to: AccountId32;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly creator: AccountId32;
    } & Struct;
    readonly isResolvePayment: boolean;
    readonly asResolvePayment: {
      readonly from: AccountId32;
      readonly recipient: AccountId32;
      readonly recipientShare: Percent;
    } & Struct;
    readonly isRequestRefund: boolean;
    readonly asRequestRefund: {
      readonly recipient: AccountId32;
    } & Struct;
    readonly isDisputeRefund: boolean;
    readonly asDisputeRefund: {
      readonly creator: AccountId32;
    } & Struct;
    readonly isRequestPayment: boolean;
    readonly asRequestPayment: {
      readonly from: AccountId32;
      readonly asset: AcalaPrimitivesCurrencyCurrencyId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isAcceptAndPay: boolean;
    readonly asAcceptAndPay: {
      readonly to: AccountId32;
    } & Struct;
    readonly type: 'Pay' | 'Release' | 'Cancel' | 'ResolvePayment' | 'RequestRefund' | 'DisputeRefund' | 'RequestPayment' | 'AcceptAndPay';
  }

  /** @name ModuleEarningModuleCall (370) */
  interface ModuleEarningModuleCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUnbondInstant: boolean;
    readonly asUnbondInstant: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly type: 'Bond' | 'Unbond' | 'UnbondInstant' | 'Rebond' | 'WithdrawUnbonded';
  }

  /** @name CumulusPalletParachainSystemCall (371) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly isEnactAuthorizedUpgrade: boolean;
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (372) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV4PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotPrimitivesV4PersistedValidationData (373) */
  interface PolkadotPrimitivesV4PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name SpTrieStorageProof (375) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (378) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (381) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name PalletSudoCall (384) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name PalletSchedulerError (387) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name ModuleTransactionPauseModuleError (388) */
  interface ModuleTransactionPauseModuleError extends Enum {
    readonly isCannotPause: boolean;
    readonly isInvalidCharacter: boolean;
    readonly type: 'CannotPause' | 'InvalidCharacter';
  }

  /** @name PalletPreimageRequestStatus (389) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (393) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name PalletBalancesBalanceLock (395) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (396) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (399) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: AcalaPrimitivesReserveIdentifier;
    readonly amount: u128;
  }

  /** @name AcalaPrimitivesReserveIdentifier (400) */
  interface AcalaPrimitivesReserveIdentifier extends Enum {
    readonly isCollatorSelection: boolean;
    readonly isEvmStorageDeposit: boolean;
    readonly isEvmDeveloperDeposit: boolean;
    readonly isHonzon: boolean;
    readonly isNft: boolean;
    readonly isTransactionPayment: boolean;
    readonly isTransactionPaymentDeposit: boolean;
    readonly isCount: boolean;
    readonly type: 'CollatorSelection' | 'EvmStorageDeposit' | 'EvmDeveloperDeposit' | 'Honzon' | 'Nft' | 'TransactionPayment' | 'TransactionPaymentDeposit' | 'Count';
  }

  /** @name PalletBalancesIdAmount (406) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletBalancesError (408) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes';
  }

  /** @name OrmlTokensBalanceLock (411) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (413) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (415) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: AcalaPrimitivesReserveIdentifier;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (417) */
  interface OrmlTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isMaxLocksExceeded: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name ModuleCurrenciesModuleError (418) */
  interface ModuleCurrenciesModuleError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isBalanceTooLow: boolean;
    readonly isErc20InvalidOperation: boolean;
    readonly isEvmAccountNotFound: boolean;
    readonly isRealOriginNotFound: boolean;
    readonly isDepositFailed: boolean;
    readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'Erc20InvalidOperation' | 'EvmAccountNotFound' | 'RealOriginNotFound' | 'DepositFailed';
  }

  /** @name OrmlVestingModuleError (420) */
  interface OrmlVestingModuleError extends Enum {
    readonly isZeroVestingPeriod: boolean;
    readonly isZeroVestingPeriodCount: boolean;
    readonly isInsufficientBalanceToLock: boolean;
    readonly isTooManyVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isMaxVestingSchedulesExceeded: boolean;
    readonly type: 'ZeroVestingPeriod' | 'ZeroVestingPeriodCount' | 'InsufficientBalanceToLock' | 'TooManyVestingSchedules' | 'AmountLow' | 'MaxVestingSchedulesExceeded';
  }

  /** @name FrameSupportPalletId (422) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name ModuleTransactionPaymentModuleError (423) */
  interface ModuleTransactionPaymentModuleError extends Enum {
    readonly isInvalidSwapPath: boolean;
    readonly isInvalidBalance: boolean;
    readonly isInvalidRate: boolean;
    readonly isInvalidToken: boolean;
    readonly isDexNotAvailable: boolean;
    readonly isChargeFeePoolAlreadyExisted: boolean;
    readonly type: 'InvalidSwapPath' | 'InvalidBalance' | 'InvalidRate' | 'InvalidToken' | 'DexNotAvailable' | 'ChargeFeePoolAlreadyExisted';
  }

  /** @name PalletTreasuryProposal (424) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name PalletTreasuryError (428) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletBountiesBounty (429) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (430) */
  interface PalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
      readonly updateDue: u32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletBountiesError (432) */
  interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyQueued: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
  }

  /** @name PalletTipsOpenTip (433) */
  interface PalletTipsOpenTip extends Struct {
    readonly reason: H256;
    readonly who: AccountId32;
    readonly finder: AccountId32;
    readonly deposit: u128;
    readonly closes: Option<u32>;
    readonly tips: Vec<ITuple<[AccountId32, u128]>>;
    readonly findersFee: bool;
  }

  /** @name PalletTipsError (434) */
  interface PalletTipsError extends Enum {
    readonly isReasonTooBig: boolean;
    readonly isAlreadyKnown: boolean;
    readonly isUnknownTip: boolean;
    readonly isNotFinder: boolean;
    readonly isStillOpen: boolean;
    readonly isPremature: boolean;
    readonly type: 'ReasonTooBig' | 'AlreadyKnown' | 'UnknownTip' | 'NotFinder' | 'StillOpen' | 'Premature';
  }

  /** @name PalletUtilityError (435) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletMultisigMultisig (437) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (439) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletRecoveryRecoveryConfig (440) */
  interface PalletRecoveryRecoveryConfig extends Struct {
    readonly delayPeriod: u32;
    readonly deposit: u128;
    readonly friends: Vec<AccountId32>;
    readonly threshold: u16;
  }

  /** @name PalletRecoveryActiveRecovery (443) */
  interface PalletRecoveryActiveRecovery extends Struct {
    readonly created: u32;
    readonly deposit: u128;
    readonly friends: Vec<AccountId32>;
  }

  /** @name PalletRecoveryError (444) */
  interface PalletRecoveryError extends Enum {
    readonly isNotAllowed: boolean;
    readonly isZeroThreshold: boolean;
    readonly isNotEnoughFriends: boolean;
    readonly isMaxFriends: boolean;
    readonly isNotSorted: boolean;
    readonly isNotRecoverable: boolean;
    readonly isAlreadyRecoverable: boolean;
    readonly isAlreadyStarted: boolean;
    readonly isNotStarted: boolean;
    readonly isNotFriend: boolean;
    readonly isDelayPeriod: boolean;
    readonly isAlreadyVouched: boolean;
    readonly isThreshold: boolean;
    readonly isStillActive: boolean;
    readonly isAlreadyProxy: boolean;
    readonly isBadState: boolean;
    readonly type: 'NotAllowed' | 'ZeroThreshold' | 'NotEnoughFriends' | 'MaxFriends' | 'NotSorted' | 'NotRecoverable' | 'AlreadyRecoverable' | 'AlreadyStarted' | 'NotStarted' | 'NotFriend' | 'DelayPeriod' | 'AlreadyVouched' | 'Threshold' | 'StillActive' | 'AlreadyProxy' | 'BadState';
  }

  /** @name PalletProxyProxyDefinition (447) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: RuntimeCommonProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (451) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (453) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletIndicesError (455) */
  interface PalletIndicesError extends Enum {
    readonly isNotAssigned: boolean;
    readonly isNotOwner: boolean;
    readonly isInUse: boolean;
    readonly isNotTransfer: boolean;
    readonly isPermanent: boolean;
    readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
  }

  /** @name PalletCollectiveVotes (457) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (458) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
  }

  /** @name PalletMembershipError (460) */
  interface PalletMembershipError extends Enum {
    readonly isAlreadyMember: boolean;
    readonly isNotMember: boolean;
    readonly isTooManyMembers: boolean;
    readonly type: 'AlreadyMember' | 'NotMember' | 'TooManyMembers';
  }

  /** @name OrmlAuthorityModuleError (468) */
  interface OrmlAuthorityModuleError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isFailedToCancel: boolean;
    readonly isFailedToFastTrack: boolean;
    readonly isFailedToDelay: boolean;
    readonly isCallNotAuthorized: boolean;
    readonly isTriggerCallNotPermitted: boolean;
    readonly isWrongCallWeightBound: boolean;
    readonly type: 'FailedToSchedule' | 'FailedToCancel' | 'FailedToFastTrack' | 'FailedToDelay' | 'CallNotAuthorized' | 'TriggerCallNotPermitted' | 'WrongCallWeightBound';
  }

  /** @name PalletElectionsPhragmenSeatHolder (470) */
  interface PalletElectionsPhragmenSeatHolder extends Struct {
    readonly who: AccountId32;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenVoter (471) */
  interface PalletElectionsPhragmenVoter extends Struct {
    readonly votes: Vec<AccountId32>;
    readonly stake: u128;
    readonly deposit: u128;
  }

  /** @name PalletElectionsPhragmenError (472) */
  interface PalletElectionsPhragmenError extends Enum {
    readonly isUnableToVote: boolean;
    readonly isNoVotes: boolean;
    readonly isTooManyVotes: boolean;
    readonly isMaximumVotesExceeded: boolean;
    readonly isLowBalance: boolean;
    readonly isUnableToPayBond: boolean;
    readonly isMustBeVoter: boolean;
    readonly isDuplicatedCandidate: boolean;
    readonly isTooManyCandidates: boolean;
    readonly isMemberSubmit: boolean;
    readonly isRunnerUpSubmit: boolean;
    readonly isInsufficientCandidateFunds: boolean;
    readonly isNotMember: boolean;
    readonly isInvalidWitnessData: boolean;
    readonly isInvalidVoteCount: boolean;
    readonly isInvalidRenouncing: boolean;
    readonly isInvalidReplacement: boolean;
    readonly type: 'UnableToVote' | 'NoVotes' | 'TooManyVotes' | 'MaximumVotesExceeded' | 'LowBalance' | 'UnableToPayBond' | 'MustBeVoter' | 'DuplicatedCandidate' | 'TooManyCandidates' | 'MemberSubmit' | 'RunnerUpSubmit' | 'InsufficientCandidateFunds' | 'NotMember' | 'InvalidWitnessData' | 'InvalidVoteCount' | 'InvalidRenouncing' | 'InvalidReplacement';
  }

  /** @name PalletDemocracyReferendumInfo (477) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (478) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (479) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (480) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (484) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (485) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyError (488) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow' | 'PreimageNotExist';
  }

  /** @name OrmlOracleModuleTimestampedValue (489) */
  interface OrmlOracleModuleTimestampedValue extends Struct {
    readonly value: u128;
    readonly timestamp: u64;
  }

  /** @name OrmlUtilitiesOrderedSet (490) */
  interface OrmlUtilitiesOrderedSet extends Vec<AccountId32> {}

  /** @name OrmlOracleModuleError (492) */
  interface OrmlOracleModuleError extends Enum {
    readonly isNoPermission: boolean;
    readonly isAlreadyFeeded: boolean;
    readonly type: 'NoPermission' | 'AlreadyFeeded';
  }

  /** @name OrmlTraitsAuctionAuctionInfo (495) */
  interface OrmlTraitsAuctionAuctionInfo extends Struct {
    readonly bid: Option<ITuple<[AccountId32, u128]>>;
    readonly start: u32;
    readonly end: Option<u32>;
  }

  /** @name OrmlAuctionModuleError (496) */
  interface OrmlAuctionModuleError extends Enum {
    readonly isAuctionNotExist: boolean;
    readonly isAuctionNotStarted: boolean;
    readonly isBidNotAccepted: boolean;
    readonly isInvalidBidPrice: boolean;
    readonly isNoAvailableAuctionId: boolean;
    readonly type: 'AuctionNotExist' | 'AuctionNotStarted' | 'BidNotAccepted' | 'InvalidBidPrice' | 'NoAvailableAuctionId';
  }

  /** @name OrmlRewardsPoolInfo (497) */
  interface OrmlRewardsPoolInfo extends Struct {
    readonly totalShares: u128;
    readonly rewards: BTreeMap<AcalaPrimitivesCurrencyCurrencyId, ITuple<[u128, u128]>>;
  }

  /** @name OrmlRewardsModuleError (505) */
  interface OrmlRewardsModuleError extends Enum {
    readonly isPoolDoesNotExist: boolean;
    readonly isShareDoesNotExist: boolean;
    readonly isCanSplitOnlyLessThanShare: boolean;
    readonly type: 'PoolDoesNotExist' | 'ShareDoesNotExist' | 'CanSplitOnlyLessThanShare';
  }

  /** @name OrmlNftClassInfo (506) */
  interface OrmlNftClassInfo extends Struct {
    readonly metadata: Bytes;
    readonly totalIssuance: u64;
    readonly owner: AccountId32;
    readonly data: ModuleNftClassData;
  }

  /** @name ModuleNftClassData (507) */
  interface ModuleNftClassData extends Struct {
    readonly deposit: u128;
    readonly properties: u8;
    readonly attributes: BTreeMap<Bytes, Bytes>;
  }

  /** @name OrmlNftTokenInfo (509) */
  interface OrmlNftTokenInfo extends Struct {
    readonly metadata: Bytes;
    readonly owner: AccountId32;
    readonly data: ModuleNftTokenData;
  }

  /** @name ModuleNftTokenData (510) */
  interface ModuleNftTokenData extends Struct {
    readonly deposit: u128;
    readonly attributes: BTreeMap<Bytes, Bytes>;
  }

  /** @name OrmlNftModuleError (512) */
  interface OrmlNftModuleError extends Enum {
    readonly isNoAvailableClassId: boolean;
    readonly isNoAvailableTokenId: boolean;
    readonly isTokenNotFound: boolean;
    readonly isClassNotFound: boolean;
    readonly isNoPermission: boolean;
    readonly isCannotDestroyClass: boolean;
    readonly isMaxMetadataExceeded: boolean;
    readonly type: 'NoAvailableClassId' | 'NoAvailableTokenId' | 'TokenNotFound' | 'ClassNotFound' | 'NoPermission' | 'CannotDestroyClass' | 'MaxMetadataExceeded';
  }

  /** @name ModulePricesModuleError (513) */
  interface ModulePricesModuleError extends Enum {
    readonly isAccessPriceFailed: boolean;
    readonly isNoLockedPrice: boolean;
    readonly type: 'AccessPriceFailed' | 'NoLockedPrice';
  }

  /** @name ModuleDexTradingPairStatus (514) */
  interface ModuleDexTradingPairStatus extends Enum {
    readonly isDisabled: boolean;
    readonly isProvisioning: boolean;
    readonly asProvisioning: ModuleDexProvisioningParameters;
    readonly isEnabled: boolean;
    readonly type: 'Disabled' | 'Provisioning' | 'Enabled';
  }

  /** @name ModuleDexProvisioningParameters (515) */
  interface ModuleDexProvisioningParameters extends Struct {
    readonly minContribution: ITuple<[u128, u128]>;
    readonly targetProvision: ITuple<[u128, u128]>;
    readonly accumulatedProvision: ITuple<[u128, u128]>;
    readonly notBefore: u32;
  }

  /** @name ModuleDexModuleError (518) */
  interface ModuleDexModuleError extends Enum {
    readonly isAlreadyEnabled: boolean;
    readonly isMustBeEnabled: boolean;
    readonly isMustBeProvisioning: boolean;
    readonly isMustBeDisabled: boolean;
    readonly isNotAllowedList: boolean;
    readonly isInvalidContributionIncrement: boolean;
    readonly isInvalidLiquidityIncrement: boolean;
    readonly isInvalidCurrencyId: boolean;
    readonly isInvalidTradingPathLength: boolean;
    readonly isInsufficientTargetAmount: boolean;
    readonly isExcessiveSupplyAmount: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isZeroSupplyAmount: boolean;
    readonly isZeroTargetAmount: boolean;
    readonly isUnacceptableShareIncrement: boolean;
    readonly isUnacceptableLiquidityWithdrawn: boolean;
    readonly isInvariantCheckFailed: boolean;
    readonly isUnqualifiedProvision: boolean;
    readonly isStillProvisioning: boolean;
    readonly isAssetUnregistered: boolean;
    readonly isInvalidTradingPath: boolean;
    readonly isNotAllowedRefund: boolean;
    readonly isCannotSwap: boolean;
    readonly type: 'AlreadyEnabled' | 'MustBeEnabled' | 'MustBeProvisioning' | 'MustBeDisabled' | 'NotAllowedList' | 'InvalidContributionIncrement' | 'InvalidLiquidityIncrement' | 'InvalidCurrencyId' | 'InvalidTradingPathLength' | 'InsufficientTargetAmount' | 'ExcessiveSupplyAmount' | 'InsufficientLiquidity' | 'ZeroSupplyAmount' | 'ZeroTargetAmount' | 'UnacceptableShareIncrement' | 'UnacceptableLiquidityWithdrawn' | 'InvariantCheckFailed' | 'UnqualifiedProvision' | 'StillProvisioning' | 'AssetUnregistered' | 'InvalidTradingPath' | 'NotAllowedRefund' | 'CannotSwap';
  }

  /** @name ModuleDexOracleModuleError (523) */
  interface ModuleDexOracleModuleError extends Enum {
    readonly isAveragePriceAlreadyEnabled: boolean;
    readonly isAveragePriceMustBeEnabled: boolean;
    readonly isInvalidPool: boolean;
    readonly isInvalidCurrencyId: boolean;
    readonly isIntervalIsZero: boolean;
    readonly type: 'AveragePriceAlreadyEnabled' | 'AveragePriceMustBeEnabled' | 'InvalidPool' | 'InvalidCurrencyId' | 'IntervalIsZero';
  }

  /** @name ModuleAggregatedDexModuleError (526) */
  interface ModuleAggregatedDexModuleError extends Enum {
    readonly isCannotSwap: boolean;
    readonly isInvalidPoolId: boolean;
    readonly isInvalidTokenIndex: boolean;
    readonly isInvalidSwapPath: boolean;
    readonly type: 'CannotSwap' | 'InvalidPoolId' | 'InvalidTokenIndex' | 'InvalidSwapPath';
  }

  /** @name ModuleAuctionManagerCollateralAuctionItem (527) */
  interface ModuleAuctionManagerCollateralAuctionItem extends Struct {
    readonly refundRecipient: AccountId32;
    readonly currencyId: AcalaPrimitivesCurrencyCurrencyId;
    readonly initialAmount: Compact<u128>;
    readonly amount: Compact<u128>;
    readonly target: Compact<u128>;
    readonly startTime: u32;
  }

  /** @name ModuleAuctionManagerModuleError (528) */
  interface ModuleAuctionManagerModuleError extends Enum {
    readonly isAuctionNotExists: boolean;
    readonly isInReverseStage: boolean;
    readonly isInvalidFeedPrice: boolean;
    readonly isMustAfterShutdown: boolean;
    readonly isInvalidBidPrice: boolean;
    readonly isInvalidAmount: boolean;
    readonly type: 'AuctionNotExists' | 'InReverseStage' | 'InvalidFeedPrice' | 'MustAfterShutdown' | 'InvalidBidPrice' | 'InvalidAmount';
  }

  /** @name AcalaPrimitivesPosition (530) */
  interface AcalaPrimitivesPosition extends Struct {
    readonly collateral: u128;
    readonly debit: u128;
  }

  /** @name ModuleLoansModuleError (531) */
  interface ModuleLoansModuleError extends Enum {
    readonly isAmountConvertFailed: boolean;
    readonly type: 'AmountConvertFailed';
  }

  /** @name ModuleHonzonModuleError (533) */
  interface ModuleHonzonModuleError extends Enum {
    readonly isNoPermission: boolean;
    readonly isAlreadyShutdown: boolean;
    readonly isAuthorizationNotExists: boolean;
    readonly isAlreadyAuthorized: boolean;
    readonly type: 'NoPermission' | 'AlreadyShutdown' | 'AuthorizationNotExists' | 'AlreadyAuthorized';
  }

  /** @name ModuleCdpTreasuryModuleError (534) */
  interface ModuleCdpTreasuryModuleError extends Enum {
    readonly isCollateralNotEnough: boolean;
    readonly isSurplusPoolNotEnough: boolean;
    readonly isDebitPoolNotEnough: boolean;
    readonly isCannotSwap: boolean;
    readonly isNotDexShare: boolean;
    readonly type: 'CollateralNotEnough' | 'SurplusPoolNotEnough' | 'DebitPoolNotEnough' | 'CannotSwap' | 'NotDexShare';
  }

  /** @name ModuleCdpEngineRiskManagementParams (535) */
  interface ModuleCdpEngineRiskManagementParams extends Struct {
    readonly maximumTotalDebitValue: u128;
    readonly interestRatePerSec: Option<u128>;
    readonly liquidationRatio: Option<u128>;
    readonly liquidationPenalty: Option<u128>;
    readonly requiredCollateralRatio: Option<u128>;
  }

  /** @name ModuleCdpEngineModuleError (540) */
  interface ModuleCdpEngineModuleError extends Enum {
    readonly isExceedDebitValueHardCap: boolean;
    readonly isBelowRequiredCollateralRatio: boolean;
    readonly isBelowLiquidationRatio: boolean;
    readonly isMustBeUnsafe: boolean;
    readonly isMustBeSafe: boolean;
    readonly isInvalidCollateralType: boolean;
    readonly isRemainDebitValueTooSmall: boolean;
    readonly isCollateralAmountBelowMinimum: boolean;
    readonly isInvalidFeedPrice: boolean;
    readonly isNoDebitValue: boolean;
    readonly isAlreadyShutdown: boolean;
    readonly isMustAfterShutdown: boolean;
    readonly isCollateralNotEnough: boolean;
    readonly isNotEnoughDebitDecrement: boolean;
    readonly isConvertDebitBalanceFailed: boolean;
    readonly isLiquidationFailed: boolean;
    readonly isTooManyLiquidationContracts: boolean;
    readonly isCollateralContractNotFound: boolean;
    readonly isInvalidRate: boolean;
    readonly type: 'ExceedDebitValueHardCap' | 'BelowRequiredCollateralRatio' | 'BelowLiquidationRatio' | 'MustBeUnsafe' | 'MustBeSafe' | 'InvalidCollateralType' | 'RemainDebitValueTooSmall' | 'CollateralAmountBelowMinimum' | 'InvalidFeedPrice' | 'NoDebitValue' | 'AlreadyShutdown' | 'MustAfterShutdown' | 'CollateralNotEnough' | 'NotEnoughDebitDecrement' | 'ConvertDebitBalanceFailed' | 'LiquidationFailed' | 'TooManyLiquidationContracts' | 'CollateralContractNotFound' | 'InvalidRate';
  }

  /** @name ModuleEmergencyShutdownModuleError (541) */
  interface ModuleEmergencyShutdownModuleError extends Enum {
    readonly isAlreadyShutdown: boolean;
    readonly isMustAfterShutdown: boolean;
    readonly isCanNotRefund: boolean;
    readonly isExistPotentialSurplus: boolean;
    readonly isExistUnhandledDebit: boolean;
    readonly type: 'AlreadyShutdown' | 'MustAfterShutdown' | 'CanNotRefund' | 'ExistPotentialSurplus' | 'ExistUnhandledDebit';
  }

  /** @name AcalaPrimitivesBondingLedgerBondingLedger (543) */
  interface AcalaPrimitivesBondingLedgerBondingLedger extends Struct {
    readonly total: u128;
    readonly active: u128;
    readonly unlocking: Vec<AcalaPrimitivesBondingLedgerUnlockChunk>;
  }

  /** @name AcalaPrimitivesBondingLedgerUnlockChunk (545) */
  interface AcalaPrimitivesBondingLedgerUnlockChunk extends Struct {
    readonly value: u128;
    readonly unlockAt: u32;
  }

  /** @name ModuleNomineesElectionModuleError (547) */
  interface ModuleNomineesElectionModuleError extends Enum {
    readonly isBelowMinBondThreshold: boolean;
    readonly isInvalidTargetsLength: boolean;
    readonly isMaxUnlockChunksExceeded: boolean;
    readonly isInvalidNominee: boolean;
    readonly isNominateesCountExceeded: boolean;
    readonly isNotBonded: boolean;
    readonly type: 'BelowMinBondThreshold' | 'InvalidTargetsLength' | 'MaxUnlockChunksExceeded' | 'InvalidNominee' | 'NominateesCountExceeded' | 'NotBonded';
  }

  /** @name ModuleHomaModuleStakingLedger (548) */
  interface ModuleHomaModuleStakingLedger extends Struct {
    readonly bonded: Compact<u128>;
    readonly unlocking: Vec<ModuleHomaModuleUnlockChunk>;
  }

  /** @name ModuleHomaModuleError (552) */
  interface ModuleHomaModuleError extends Enum {
    readonly isBelowMintThreshold: boolean;
    readonly isBelowRedeemThreshold: boolean;
    readonly isExceededStakingCurrencySoftCap: boolean;
    readonly isInsufficientUnclaimedRedemption: boolean;
    readonly isOutdatedEraIndex: boolean;
    readonly isFastMatchIsNotAllowed: boolean;
    readonly isCannotCompletelyFastMatch: boolean;
    readonly isInvalidRate: boolean;
    readonly isInvalidLastEraBumpedBlock: boolean;
    readonly type: 'BelowMintThreshold' | 'BelowRedeemThreshold' | 'ExceededStakingCurrencySoftCap' | 'InsufficientUnclaimedRedemption' | 'OutdatedEraIndex' | 'FastMatchIsNotAllowed' | 'CannotCompletelyFastMatch' | 'InvalidRate' | 'InvalidLastEraBumpedBlock';
  }

  /** @name ModuleXcmInterfaceModuleError (554) */
  interface ModuleXcmInterfaceModuleError extends Enum {
    readonly isXcmFailed: boolean;
    readonly type: 'XcmFailed';
  }

  /** @name ModuleIncentivesModuleError (556) */
  interface ModuleIncentivesModuleError extends Enum {
    readonly isNotEnough: boolean;
    readonly isInvalidCurrencyId: boolean;
    readonly isInvalidPoolId: boolean;
    readonly isInvalidRate: boolean;
    readonly type: 'NotEnough' | 'InvalidCurrencyId' | 'InvalidPoolId' | 'InvalidRate';
  }

  /** @name ModuleNftModuleError (557) */
  interface ModuleNftModuleError extends Enum {
    readonly isClassIdNotFound: boolean;
    readonly isTokenIdNotFound: boolean;
    readonly isNoPermission: boolean;
    readonly isInvalidQuantity: boolean;
    readonly isNonTransferable: boolean;
    readonly isNonBurnable: boolean;
    readonly isNonMintable: boolean;
    readonly isCannotDestroyClass: boolean;
    readonly isImmutable: boolean;
    readonly isAttributesTooLarge: boolean;
    readonly isIncorrectTokenId: boolean;
    readonly type: 'ClassIdNotFound' | 'TokenIdNotFound' | 'NoPermission' | 'InvalidQuantity' | 'NonTransferable' | 'NonBurnable' | 'NonMintable' | 'CannotDestroyClass' | 'Immutable' | 'AttributesTooLarge' | 'IncorrectTokenId';
  }

  /** @name ModuleAssetRegistryModuleError (558) */
  interface ModuleAssetRegistryModuleError extends Enum {
    readonly isBadLocation: boolean;
    readonly isMultiLocationExisted: boolean;
    readonly isAssetIdNotExists: boolean;
    readonly isAssetIdExisted: boolean;
    readonly type: 'BadLocation' | 'MultiLocationExisted' | 'AssetIdNotExists' | 'AssetIdExisted';
  }

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (560) */
  interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32;
    readonly state: CumulusPalletXcmpQueueInboundState;
    readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>>;
  }

  /** @name CumulusPalletXcmpQueueInboundState (561) */
  interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PolkadotParachainPrimitivesXcmpMessageFormat (564) */
  interface PolkadotParachainPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean;
    readonly isConcatenatedEncodedBlob: boolean;
    readonly isSignals: boolean;
    readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (567) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (568) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (570) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
    readonly thresholdWeight: SpWeightsWeightV2Weight;
    readonly weightRestrictDecay: SpWeightsWeightV2Weight;
    readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletXcmpQueueError (572) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean;
    readonly isBadXcmOrigin: boolean;
    readonly isBadXcm: boolean;
    readonly isBadOverweightIndex: boolean;
    readonly isWeightOverLimit: boolean;
    readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
  }

  /** @name PalletXcmQueryStatus (573) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: XcmVersionedMultiLocation;
      readonly maybeMatchQuerier: Option<XcmVersionedMultiLocation>;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u32;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: XcmVersionedMultiLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: XcmVersionedResponse;
      readonly at: u32;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name XcmVersionedResponse (577) */
  interface XcmVersionedResponse extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly isV3: boolean;
    readonly asV3: XcmV3Response;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletXcmVersionMigrationStage (583) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name XcmVersionedAssetId (586) */
  interface XcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetAssetId;
    readonly type: 'V3';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (587) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: XcmVersionedMultiLocation;
    readonly locker: XcmVersionedMultiLocation;
    readonly users: u32;
  }

  /** @name PalletXcmError (591) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly isInvalidAsset: boolean;
    readonly isLowBalance: boolean;
    readonly isTooManyLocks: boolean;
    readonly isAccountNotSovereign: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockNotFound: boolean;
    readonly isInUse: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
  }

  /** @name CumulusPalletXcmError (592) */
  type CumulusPalletXcmError = Null;

  /** @name CumulusPalletDmpQueueConfigData (593) */
  interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletDmpQueuePageIndexData (594) */
  interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32;
    readonly endUsed: u32;
    readonly overweightCount: u64;
  }

  /** @name CumulusPalletDmpQueueError (597) */
  interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean;
    readonly isOverLimit: boolean;
    readonly type: 'Unknown' | 'OverLimit';
  }

  /** @name OrmlXtokensModuleError (598) */
  interface OrmlXtokensModuleError extends Enum {
    readonly isAssetHasNoReserve: boolean;
    readonly isNotCrossChainTransfer: boolean;
    readonly isInvalidDest: boolean;
    readonly isNotCrossChainTransferableCurrency: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isXcmExecutionFailed: boolean;
    readonly isCannotReanchor: boolean;
    readonly isInvalidAncestry: boolean;
    readonly isInvalidAsset: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isBadVersion: boolean;
    readonly isDistinctReserveForAssetAndFee: boolean;
    readonly isZeroFee: boolean;
    readonly isZeroAmount: boolean;
    readonly isTooManyAssetsBeingSent: boolean;
    readonly isAssetIndexNonExistent: boolean;
    readonly isFeeNotEnough: boolean;
    readonly isNotSupportedMultiLocation: boolean;
    readonly isMinXcmFeeNotDefined: boolean;
    readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedMultiLocation' | 'MinXcmFeeNotDefined';
  }

  /** @name OrmlUnknownTokensModuleError (601) */
  interface OrmlUnknownTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isBalanceOverflow: boolean;
    readonly isUnhandledAsset: boolean;
    readonly type: 'BalanceTooLow' | 'BalanceOverflow' | 'UnhandledAsset';
  }

  /** @name OrmlXcmModuleError (602) */
  interface OrmlXcmModuleError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isBadVersion: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'BadVersion';
  }

  /** @name ModuleEvmModuleAccountInfo (603) */
  interface ModuleEvmModuleAccountInfo extends Struct {
    readonly nonce: u32;
    readonly contractInfo: Option<ModuleEvmModuleContractInfo>;
  }

  /** @name ModuleEvmModuleContractInfo (605) */
  interface ModuleEvmModuleContractInfo extends Struct {
    readonly codeHash: H256;
    readonly maintainer: H160;
    readonly published: bool;
  }

  /** @name ModuleEvmModuleCodeInfo (608) */
  interface ModuleEvmModuleCodeInfo extends Struct {
    readonly codeSize: u32;
    readonly refCount: u32;
  }

  /** @name ModuleEvmModuleError (609) */
  interface ModuleEvmModuleError extends Enum {
    readonly isAddressNotMapped: boolean;
    readonly isContractNotFound: boolean;
    readonly isNoPermission: boolean;
    readonly isContractDevelopmentNotEnabled: boolean;
    readonly isContractDevelopmentAlreadyEnabled: boolean;
    readonly isContractAlreadyPublished: boolean;
    readonly isContractExceedsMaxCodeSize: boolean;
    readonly isContractAlreadyExisted: boolean;
    readonly isOutOfStorage: boolean;
    readonly isChargeFeeFailed: boolean;
    readonly isCannotKillContract: boolean;
    readonly isReserveStorageFailed: boolean;
    readonly isUnreserveStorageFailed: boolean;
    readonly isChargeStorageFailed: boolean;
    readonly isInvalidDecimals: boolean;
    readonly isStrictCallFailed: boolean;
    readonly type: 'AddressNotMapped' | 'ContractNotFound' | 'NoPermission' | 'ContractDevelopmentNotEnabled' | 'ContractDevelopmentAlreadyEnabled' | 'ContractAlreadyPublished' | 'ContractExceedsMaxCodeSize' | 'ContractAlreadyExisted' | 'OutOfStorage' | 'ChargeFeeFailed' | 'CannotKillContract' | 'ReserveStorageFailed' | 'UnreserveStorageFailed' | 'ChargeStorageFailed' | 'InvalidDecimals' | 'StrictCallFailed';
  }

  /** @name ModuleEvmBridgeModuleError (610) */
  interface ModuleEvmBridgeModuleError extends Enum {
    readonly isExecutionFail: boolean;
    readonly isExecutionRevert: boolean;
    readonly isExecutionFatal: boolean;
    readonly isExecutionError: boolean;
    readonly isInvalidReturnValue: boolean;
    readonly type: 'ExecutionFail' | 'ExecutionRevert' | 'ExecutionFatal' | 'ExecutionError' | 'InvalidReturnValue';
  }

  /** @name ModuleEvmAccountsModuleError (611) */
  interface ModuleEvmAccountsModuleError extends Enum {
    readonly isAccountIdHasMapped: boolean;
    readonly isEthAddressHasMapped: boolean;
    readonly isBadSignature: boolean;
    readonly isInvalidSignature: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly type: 'AccountIdHasMapped' | 'EthAddressHasMapped' | 'BadSignature' | 'InvalidSignature' | 'NonZeroRefCount';
  }

  /** @name ModuleCollatorSelectionError (614) */
  interface ModuleCollatorSelectionError extends Enum {
    readonly isMaxCandidatesExceeded: boolean;
    readonly isBelowCandidatesMin: boolean;
    readonly isStillLocked: boolean;
    readonly isUnknown: boolean;
    readonly isPermission: boolean;
    readonly isAlreadyCandidate: boolean;
    readonly isNotCandidate: boolean;
    readonly isNotNonCandidate: boolean;
    readonly isNothingToWithdraw: boolean;
    readonly isRequireSessionKey: boolean;
    readonly isAlreadyInvulnerable: boolean;
    readonly isInvalidProof: boolean;
    readonly isMaxInvulnerablesExceeded: boolean;
    readonly type: 'MaxCandidatesExceeded' | 'BelowCandidatesMin' | 'StillLocked' | 'Unknown' | 'Permission' | 'AlreadyCandidate' | 'NotCandidate' | 'NotNonCandidate' | 'NothingToWithdraw' | 'RequireSessionKey' | 'AlreadyInvulnerable' | 'InvalidProof' | 'MaxInvulnerablesExceeded';
  }

  /** @name SpCoreCryptoKeyTypeId (618) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (619) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name ModuleSessionManagerModuleError (623) */
  interface ModuleSessionManagerModuleError extends Enum {
    readonly isInvalidSession: boolean;
    readonly isInvalidDuration: boolean;
    readonly isEstimateNextSessionFailed: boolean;
    readonly type: 'InvalidSession' | 'InvalidDuration' | 'EstimateNextSessionFailed';
  }

  /** @name NutsfinanceStableAssetStableAssetPoolInfo (624) */
  interface NutsfinanceStableAssetStableAssetPoolInfo extends Struct {
    readonly poolAsset: AcalaPrimitivesCurrencyCurrencyId;
    readonly assets: Vec<AcalaPrimitivesCurrencyCurrencyId>;
    readonly precisions: Vec<u128>;
    readonly mintFee: u128;
    readonly swapFee: u128;
    readonly redeemFee: u128;
    readonly totalSupply: u128;
    readonly a: u128;
    readonly aBlock: u32;
    readonly futureA: u128;
    readonly futureABlock: u32;
    readonly balances: Vec<u128>;
    readonly feeRecipient: AccountId32;
    readonly accountId: AccountId32;
    readonly yieldRecipient: AccountId32;
    readonly precision: u128;
  }

  /** @name NutsfinanceStableAssetError (625) */
  interface NutsfinanceStableAssetError extends Enum {
    readonly isInconsistentStorage: boolean;
    readonly isInvalidPoolAsset: boolean;
    readonly isArgumentsMismatch: boolean;
    readonly isArgumentsError: boolean;
    readonly isPoolNotFound: boolean;
    readonly isMath: boolean;
    readonly isInvalidPoolValue: boolean;
    readonly isMintUnderMin: boolean;
    readonly isSwapUnderMin: boolean;
    readonly isRedeemUnderMin: boolean;
    readonly isRedeemOverMax: boolean;
    readonly type: 'InconsistentStorage' | 'InvalidPoolAsset' | 'ArgumentsMismatch' | 'ArgumentsError' | 'PoolNotFound' | 'Math' | 'InvalidPoolValue' | 'MintUnderMin' | 'SwapUnderMin' | 'RedeemUnderMin' | 'RedeemOverMax';
  }

  /** @name OrmlPaymentsPaymentDetail (626) */
  interface OrmlPaymentsPaymentDetail extends Struct {
    readonly asset: AcalaPrimitivesCurrencyCurrencyId;
    readonly amount: Compact<u128>;
    readonly incentiveAmount: Compact<u128>;
    readonly state: OrmlPaymentsPaymentState;
    readonly resolverAccount: AccountId32;
    readonly feeDetail: Option<ITuple<[AccountId32, u128]>>;
  }

  /** @name OrmlPaymentsPaymentState (627) */
  interface OrmlPaymentsPaymentState extends Enum {
    readonly isCreated: boolean;
    readonly isNeedsReview: boolean;
    readonly isRefundRequested: boolean;
    readonly asRefundRequested: {
      readonly cancelBlock: u32;
    } & Struct;
    readonly isPaymentRequested: boolean;
    readonly type: 'Created' | 'NeedsReview' | 'RefundRequested' | 'PaymentRequested';
  }

  /** @name OrmlPaymentsScheduledTask (629) */
  interface OrmlPaymentsScheduledTask extends Struct {
    readonly task: OrmlPaymentsTask;
    readonly when: u32;
  }

  /** @name OrmlPaymentsTask (630) */
  interface OrmlPaymentsTask extends Enum {
    readonly isCancel: boolean;
    readonly type: 'Cancel';
  }

  /** @name OrmlPaymentsError (634) */
  interface OrmlPaymentsError extends Enum {
    readonly isInvalidPayment: boolean;
    readonly isPaymentAlreadyReleased: boolean;
    readonly isPaymentAlreadyInProcess: boolean;
    readonly isInvalidAction: boolean;
    readonly isPaymentNeedsReview: boolean;
    readonly isMathError: boolean;
    readonly isRefundNotRequested: boolean;
    readonly isDisputePeriodNotPassed: boolean;
    readonly isRefundQueueFull: boolean;
    readonly type: 'InvalidPayment' | 'PaymentAlreadyReleased' | 'PaymentAlreadyInProcess' | 'InvalidAction' | 'PaymentNeedsReview' | 'MathError' | 'RefundNotRequested' | 'DisputePeriodNotPassed' | 'RefundQueueFull';
  }

  /** @name ModuleEarningModuleError (638) */
  interface ModuleEarningModuleError extends Enum {
    readonly isBelowMinBondThreshold: boolean;
    readonly isMaxUnlockChunksExceeded: boolean;
    readonly isNotBonded: boolean;
    readonly isNotAllowed: boolean;
    readonly type: 'BelowMinBondThreshold' | 'MaxUnlockChunksExceeded' | 'NotBonded' | 'NotAllowed';
  }

  /** @name PolkadotPrimitivesV4UpgradeRestriction (640) */
  interface PolkadotPrimitivesV4UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (641) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueSize: ITuple<[u32, u32]>;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV4AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV4AbridgedHrmpChannel]>>;
  }

  /** @name PolkadotPrimitivesV4AbridgedHrmpChannel (644) */
  interface PolkadotPrimitivesV4AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV4AbridgedHostConfiguration (645) */
  interface PolkadotPrimitivesV4AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (651) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemCodeUpgradeAuthorization (652) */
  interface CumulusPalletParachainSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name CumulusPalletParachainSystemError (653) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name PalletSudoError (654) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name FrameSystemExtensionsCheckNonZeroSender (657) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (658) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (659) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (660) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name RuntimeCommonCheckNonce (663) */
  interface RuntimeCommonCheckNonce extends Struct {
    readonly nonce: Compact<u32>;
  }

  /** @name FrameSystemExtensionsCheckWeight (664) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name ModuleEvmSetEvmOrigin (665) */
  type ModuleEvmSetEvmOrigin = Null;

  /** @name ModuleTransactionPaymentChargeTransactionPayment (666) */
  interface ModuleTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name MandalaRuntimeStorageDepositPerByte (667) */
  type MandalaRuntimeStorageDepositPerByte = Null;

  /** @name MandalaRuntimeTxFeePerGas (668) */
  type MandalaRuntimeTxFeePerGas = Null;

  /** @name AcalaPrimitivesSignatureAcalaMultiSignature (670) */
  interface AcalaPrimitivesSignatureAcalaMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly isEthereum: boolean;
    readonly asEthereum: U8aFixed;
    readonly isEip1559: boolean;
    readonly asEip1559: U8aFixed;
    readonly isAcalaEip712: boolean;
    readonly asAcalaEip712: U8aFixed;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa' | 'Ethereum' | 'Eip1559' | 'AcalaEip712';
  }

} // declare module

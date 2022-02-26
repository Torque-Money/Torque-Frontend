/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ReserveTreasuryRedeemInterface extends utils.Interface {
  contractName: "ReserveTreasuryRedeem";
  functions: {
    "initializeReserveTreasuryCore(address,address)": FunctionFragment;
    "isApprovedReserveAsset(address)": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "redeemReserveToken(uint256,address)": FunctionFragment;
    "redeemReserveTokenAmount(uint256,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reserveToken()": FunctionFragment;
    "reserveTokenBackingPrice()": FunctionFragment;
    "setApprovedReserveToken(address[],bool[])": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "setReserveToken(address)": FunctionFragment;
    "totalAmountLocked(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "tvl()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initializeReserveTreasuryCore",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedReserveAsset",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeemReserveToken",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemReserveTokenAmount",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reserveToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reserveTokenBackingPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedReserveToken",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setReserveToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalAmountLocked",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "tvl", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "initializeReserveTreasuryCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedReserveAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemReserveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemReserveTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveTokenBackingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedReserveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReserveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAmountLocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tvl", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "RedeemReserveToken(address,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RedeemReserveToken"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type RedeemReserveTokenEvent = TypedEvent<
  [string, BigNumber, string, BigNumber],
  {
    account: string;
    amount: BigNumber;
    reserveAsset: string;
    reserveAssetAmount: BigNumber;
  }
>;

export type RedeemReserveTokenEventFilter =
  TypedEventFilter<RedeemReserveTokenEvent>;

export interface ReserveTreasuryRedeem extends BaseContract {
  contractName: "ReserveTreasuryRedeem";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReserveTreasuryRedeemInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    initializeReserveTreasuryCore(
      oracle_: string,
      reserveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApprovedReserveAsset(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    redeemReserveToken(
      amount_: BigNumberish,
      reserveAsset_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemReserveTokenAmount(
      amount_: BigNumberish,
      reserveAsset_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reserveToken(overrides?: CallOverrides): Promise<[string]>;

    reserveTokenBackingPrice(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    setApprovedReserveToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveToken(
      reserveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalAmountLocked(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "tvl()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    "tvl(address)"(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  initializeReserveTreasuryCore(
    oracle_: string,
    reserveToken_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApprovedReserveAsset(
    token_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  oracle(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  redeemReserveToken(
    amount_: BigNumberish,
    reserveAsset_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemReserveTokenAmount(
    amount_: BigNumberish,
    reserveAsset_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reserveToken(overrides?: CallOverrides): Promise<string>;

  reserveTokenBackingPrice(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  setApprovedReserveToken(
    token_: string[],
    approved_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    oracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveToken(
    reserveToken_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalAmountLocked(
    token_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "tvl()"(overrides?: CallOverrides): Promise<BigNumber>;

  "tvl(address)"(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    initializeReserveTreasuryCore(
      oracle_: string,
      reserveToken_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isApprovedReserveAsset(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    oracle(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    redeemReserveToken(
      amount_: BigNumberish,
      reserveAsset_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemReserveTokenAmount(
      amount_: BigNumberish,
      reserveAsset_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reserveToken(overrides?: CallOverrides): Promise<string>;

    reserveTokenBackingPrice(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    setApprovedReserveToken(
      token_: string[],
      approved_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(oracle_: string, overrides?: CallOverrides): Promise<void>;

    setReserveToken(
      reserveToken_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    totalAmountLocked(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "tvl()"(overrides?: CallOverrides): Promise<BigNumber>;

    "tvl(address)"(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "RedeemReserveToken(address,uint256,address,uint256)"(
      account?: string | null,
      amount?: null,
      reserveAsset?: null,
      reserveAssetAmount?: null
    ): RedeemReserveTokenEventFilter;
    RedeemReserveToken(
      account?: string | null,
      amount?: null,
      reserveAsset?: null,
      reserveAssetAmount?: null
    ): RedeemReserveTokenEventFilter;
  };

  estimateGas: {
    initializeReserveTreasuryCore(
      oracle_: string,
      reserveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApprovedReserveAsset(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    redeemReserveToken(
      amount_: BigNumberish,
      reserveAsset_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemReserveTokenAmount(
      amount_: BigNumberish,
      reserveAsset_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reserveToken(overrides?: CallOverrides): Promise<BigNumber>;

    reserveTokenBackingPrice(overrides?: CallOverrides): Promise<BigNumber>;

    setApprovedReserveToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveToken(
      reserveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalAmountLocked(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "tvl()"(overrides?: CallOverrides): Promise<BigNumber>;

    "tvl(address)"(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    initializeReserveTreasuryCore(
      oracle_: string,
      reserveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApprovedReserveAsset(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemReserveToken(
      amount_: BigNumberish,
      reserveAsset_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemReserveTokenAmount(
      amount_: BigNumberish,
      reserveAsset_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reserveToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reserveTokenBackingPrice(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setApprovedReserveToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveToken(
      reserveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalAmountLocked(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "tvl()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tvl(address)"(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

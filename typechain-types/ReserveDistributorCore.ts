/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
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

export interface ReserveDistributorCoreInterface extends utils.Interface {
  contractName: "ReserveDistributorCore";
  functions: {
    "accumulatedTime(address)": FunctionFragment;
    "accumulatedWeight(address)": FunctionFragment;
    "addStakeToken(address[])": FunctionFragment;
    "approveStakeToken(address[],bool[])": FunctionFragment;
    "initializeReserveCore(address,address,address,address)": FunctionFragment;
    "isApprovedStakeToken(address)": FunctionFragment;
    "isStakeToken(address)": FunctionFragment;
    "limboReserveTokens(address)": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reserveToken()": FunctionFragment;
    "reserveTokenWrapped()": FunctionFragment;
    "reserveTreasury()": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "setReserveToken(address)": FunctionFragment;
    "setReserveTokenWrapped(address)": FunctionFragment;
    "setReserveTreasury(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "accumulatedTime",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "accumulatedWeight",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addStakeToken",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "approveStakeToken",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeReserveCore",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedStakeToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isStakeToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "limboReserveTokens",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reserveToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reserveTokenWrapped",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "reserveTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setReserveToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveTokenWrapped",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setReserveTreasury",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "accumulatedTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accumulatedWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addStakeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveStakeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeReserveCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedStakeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isStakeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "limboReserveTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveTokenWrapped",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reserveTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReserveToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveTokenWrapped",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReserveTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AddStakeToken(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddStakeToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type AddStakeTokenEvent = TypedEvent<[string], { token: string }>;

export type AddStakeTokenEventFilter = TypedEventFilter<AddStakeTokenEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ReserveDistributorCore extends BaseContract {
  contractName: "ReserveDistributorCore";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReserveDistributorCoreInterface;

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
    accumulatedTime(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    accumulatedWeight(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    addStakeToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approveStakeToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeReserveCore(
      oracle_: string,
      reserveTreasury_: string,
      reserveToken_: string,
      reserveTokenWrapped_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApprovedStakeToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isStakeToken(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    limboReserveTokens(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reserveToken(overrides?: CallOverrides): Promise<[string]>;

    reserveTokenWrapped(overrides?: CallOverrides): Promise<[string]>;

    reserveTreasury(overrides?: CallOverrides): Promise<[string]>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveToken(
      reserveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveTokenWrapped(
      reserveTokenWrapped_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReserveTreasury(
      reserveTreasury_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accumulatedTime(
    token_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  accumulatedWeight(
    token_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  addStakeToken(
    token_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approveStakeToken(
    token_: string[],
    approved_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeReserveCore(
    oracle_: string,
    reserveTreasury_: string,
    reserveToken_: string,
    reserveTokenWrapped_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApprovedStakeToken(
    token_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isStakeToken(token_: string, overrides?: CallOverrides): Promise<boolean>;

  limboReserveTokens(
    token_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  oracle(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reserveToken(overrides?: CallOverrides): Promise<string>;

  reserveTokenWrapped(overrides?: CallOverrides): Promise<string>;

  reserveTreasury(overrides?: CallOverrides): Promise<string>;

  setOracle(
    oracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveToken(
    reserveToken_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveTokenWrapped(
    reserveTokenWrapped_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReserveTreasury(
    reserveTreasury_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accumulatedTime(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    accumulatedWeight(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addStakeToken(token_: string[], overrides?: CallOverrides): Promise<void>;

    approveStakeToken(
      token_: string[],
      approved_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    initializeReserveCore(
      oracle_: string,
      reserveTreasury_: string,
      reserveToken_: string,
      reserveTokenWrapped_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isApprovedStakeToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isStakeToken(token_: string, overrides?: CallOverrides): Promise<boolean>;

    limboReserveTokens(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reserveToken(overrides?: CallOverrides): Promise<string>;

    reserveTokenWrapped(overrides?: CallOverrides): Promise<string>;

    reserveTreasury(overrides?: CallOverrides): Promise<string>;

    setOracle(oracle_: string, overrides?: CallOverrides): Promise<void>;

    setReserveToken(
      reserveToken_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setReserveTokenWrapped(
      reserveTokenWrapped_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setReserveTreasury(
      reserveTreasury_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddStakeToken(address)"(token?: null): AddStakeTokenEventFilter;
    AddStakeToken(token?: null): AddStakeTokenEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    accumulatedTime(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    accumulatedWeight(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addStakeToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approveStakeToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeReserveCore(
      oracle_: string,
      reserveTreasury_: string,
      reserveToken_: string,
      reserveTokenWrapped_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApprovedStakeToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isStakeToken(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    limboReserveTokens(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reserveToken(overrides?: CallOverrides): Promise<BigNumber>;

    reserveTokenWrapped(overrides?: CallOverrides): Promise<BigNumber>;

    reserveTreasury(overrides?: CallOverrides): Promise<BigNumber>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveToken(
      reserveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveTokenWrapped(
      reserveTokenWrapped_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReserveTreasury(
      reserveTreasury_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accumulatedTime(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    accumulatedWeight(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addStakeToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approveStakeToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeReserveCore(
      oracle_: string,
      reserveTreasury_: string,
      reserveToken_: string,
      reserveTokenWrapped_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApprovedStakeToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isStakeToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    limboReserveTokens(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reserveToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reserveTokenWrapped(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reserveTreasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveToken(
      reserveToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveTokenWrapped(
      reserveTokenWrapped_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReserveTreasury(
      reserveTreasury_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

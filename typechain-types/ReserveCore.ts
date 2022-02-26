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

export interface ReserveCoreInterface extends utils.Interface {
  contractName: "ReserveCore";
  functions: {
    "initializeReserveCore(address,address,address,address)": FunctionFragment;
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
    functionFragment: "initializeReserveCore",
    values: [string, string, string, string]
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
    functionFragment: "initializeReserveCore",
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
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ReserveCore extends BaseContract {
  contractName: "ReserveCore";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReserveCoreInterface;

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
    initializeReserveCore(
      oracle_: string,
      reserveTreasury_: string,
      reserveToken_: string,
      reserveTokenWrapped_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

  initializeReserveCore(
    oracle_: string,
    reserveTreasury_: string,
    reserveToken_: string,
    reserveTokenWrapped_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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
    initializeReserveCore(
      oracle_: string,
      reserveTreasury_: string,
      reserveToken_: string,
      reserveTokenWrapped_: string,
      overrides?: CallOverrides
    ): Promise<void>;

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
    initializeReserveCore(
      oracle_: string,
      reserveTreasury_: string,
      reserveToken_: string,
      reserveTokenWrapped_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
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
    initializeReserveCore(
      oracle_: string,
      reserveTreasury_: string,
      reserveToken_: string,
      reserveTokenWrapped_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
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

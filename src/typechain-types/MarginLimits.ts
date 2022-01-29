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

export interface MarginLimitsInterface extends utils.Interface {
  contractName: "MarginLimits";
  functions: {
    "addBorrowedToken(address[])": FunctionFragment;
    "addCollateralToken(address[])": FunctionFragment;
    "borrowed(address,address)": FunctionFragment;
    "borrowedPrice(address)": FunctionFragment;
    "collateral(address,address)": FunctionFragment;
    "collateralPrice(address)": FunctionFragment;
    "initialBorrowPrice(address,address)": FunctionFragment;
    "initialBorrowTime(address,address)": FunctionFragment;
    "initializeMarginCore(address,address)": FunctionFragment;
    "initializeMarginLimits(uint256,uint256)": FunctionFragment;
    "interest(address)": FunctionFragment;
    "isApprovedBorrowedToken(address)": FunctionFragment;
    "isApprovedCollateralToken(address)": FunctionFragment;
    "isBorrowedToken(address)": FunctionFragment;
    "isBorrowing(address,address)": FunctionFragment;
    "isCollateralToken(address)": FunctionFragment;
    "leverageLevel(address)": FunctionFragment;
    "maxLeverage()": FunctionFragment;
    "maxLeverageReached(address)": FunctionFragment;
    "minCollateralPrice()": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "pool()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "resettable(address)": FunctionFragment;
    "setApprovedBorrowedToken(address[],bool[])": FunctionFragment;
    "setApprovedCollateralToken(address[],bool[])": FunctionFragment;
    "setMaxLeverage(uint256)": FunctionFragment;
    "setMinCollateralPrice(uint256)": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "setPool(address)": FunctionFragment;
    "sufficientCollateralPrice(address)": FunctionFragment;
    "totalBorrowed(address)": FunctionFragment;
    "totalCollateral(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addBorrowedToken",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addCollateralToken",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowed",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowedPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "collateral",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialBorrowPrice",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialBorrowTime",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeMarginCore",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeMarginLimits",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "interest", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isApprovedBorrowedToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedCollateralToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isBorrowedToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isBorrowing",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isCollateralToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "leverageLevel",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "maxLeverage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxLeverageReached",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "minCollateralPrice",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "resettable", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setApprovedBorrowedToken",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedCollateralToken",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxLeverage",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinCollateralPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(functionFragment: "setPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "sufficientCollateralPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalBorrowed",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalCollateral",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBorrowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCollateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrowed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowedPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "collateral", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialBorrowPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialBorrowTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeMarginCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeMarginLimits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "interest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedBorrowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedCollateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBorrowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBorrowing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCollateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "leverageLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxLeverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxLeverageReached",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minCollateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resettable", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedBorrowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedCollateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxLeverage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinCollateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sufficientCollateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalBorrowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AddBorrowedToken(address)": EventFragment;
    "AddCollateralToken(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddBorrowedToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddCollateralToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type AddBorrowedTokenEvent = TypedEvent<[string], { token: string }>;

export type AddBorrowedTokenEventFilter =
  TypedEventFilter<AddBorrowedTokenEvent>;

export type AddCollateralTokenEvent = TypedEvent<[string], { token: string }>;

export type AddCollateralTokenEventFilter =
  TypedEventFilter<AddCollateralTokenEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface MarginLimits extends BaseContract {
  contractName: "MarginLimits";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarginLimitsInterface;

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
    addBorrowedToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addCollateralToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    borrowed(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    borrowedPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collateral(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "initialBorrowPrice(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "initialBorrowPrice(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialBorrowTime(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initializeMarginCore(
      pool_: string,
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeMarginLimits(
      minCollateralPrice_: BigNumberish,
      maxLeverage_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "interest(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "interest(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isApprovedBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isApprovedCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isBorrowing(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isBorrowing(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    leverageLevel(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    maxLeverage(overrides?: CallOverrides): Promise<[BigNumber]>;

    maxLeverageReached(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    minCollateralPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pool(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    resettable(account_: string, overrides?: CallOverrides): Promise<[boolean]>;

    setApprovedBorrowedToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovedCollateralToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxLeverage(
      maxLeverage_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinCollateralPrice(
      minCollateralPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sufficientCollateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    totalBorrowed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalCollateral(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBorrowedToken(
    token_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addCollateralToken(
    token_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  borrowed(
    token_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  borrowedPrice(
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collateral(
    token_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collateralPrice(
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "initialBorrowPrice(address,address)"(
    token_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "initialBorrowPrice(address)"(
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialBorrowTime(
    token_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initializeMarginCore(
    pool_: string,
    oracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeMarginLimits(
    minCollateralPrice_: BigNumberish,
    maxLeverage_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "interest(address)"(
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "interest(address,address)"(
    token_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isApprovedBorrowedToken(
    token_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isApprovedCollateralToken(
    token_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isBorrowedToken(token_: string, overrides?: CallOverrides): Promise<boolean>;

  "isBorrowing(address,address)"(
    token_: string,
    account_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isBorrowing(address)"(
    account_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isCollateralToken(
    token_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  leverageLevel(
    account_: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  maxLeverage(overrides?: CallOverrides): Promise<BigNumber>;

  maxLeverageReached(
    account_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  minCollateralPrice(overrides?: CallOverrides): Promise<BigNumber>;

  oracle(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pool(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  resettable(account_: string, overrides?: CallOverrides): Promise<boolean>;

  setApprovedBorrowedToken(
    token_: string[],
    approved_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovedCollateralToken(
    token_: string[],
    approved_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxLeverage(
    maxLeverage_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinCollateralPrice(
    minCollateralPrice_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    oracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPool(
    pool_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sufficientCollateralPrice(
    account_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  totalBorrowed(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalCollateral(
    token_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBorrowedToken(
      token_: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addCollateralToken(
      token_: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    borrowed(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowedPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateral(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "initialBorrowPrice(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "initialBorrowPrice(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialBorrowTime(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializeMarginCore(
      pool_: string,
      oracle_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeMarginLimits(
      minCollateralPrice_: BigNumberish,
      maxLeverage_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "interest(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "interest(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isApprovedCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isBorrowing(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isBorrowing(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    leverageLevel(
      account_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    maxLeverage(overrides?: CallOverrides): Promise<BigNumber>;

    maxLeverageReached(
      account_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    minCollateralPrice(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pool(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    resettable(account_: string, overrides?: CallOverrides): Promise<boolean>;

    setApprovedBorrowedToken(
      token_: string[],
      approved_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovedCollateralToken(
      token_: string[],
      approved_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxLeverage(
      maxLeverage_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinCollateralPrice(
      minCollateralPrice_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(oracle_: string, overrides?: CallOverrides): Promise<void>;

    setPool(pool_: string, overrides?: CallOverrides): Promise<void>;

    sufficientCollateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalBorrowed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalCollateral(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddBorrowedToken(address)"(token?: null): AddBorrowedTokenEventFilter;
    AddBorrowedToken(token?: null): AddBorrowedTokenEventFilter;

    "AddCollateralToken(address)"(token?: null): AddCollateralTokenEventFilter;
    AddCollateralToken(token?: null): AddCollateralTokenEventFilter;

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
    addBorrowedToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addCollateralToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    borrowed(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    borrowedPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateral(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "initialBorrowPrice(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "initialBorrowPrice(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialBorrowTime(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initializeMarginCore(
      pool_: string,
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeMarginLimits(
      minCollateralPrice_: BigNumberish,
      maxLeverage_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "interest(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "interest(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isBorrowing(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isBorrowing(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    leverageLevel(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxLeverage(overrides?: CallOverrides): Promise<BigNumber>;

    maxLeverageReached(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minCollateralPrice(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    resettable(account_: string, overrides?: CallOverrides): Promise<BigNumber>;

    setApprovedBorrowedToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovedCollateralToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxLeverage(
      maxLeverage_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinCollateralPrice(
      minCollateralPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sufficientCollateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalBorrowed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalCollateral(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBorrowedToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addCollateralToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    borrowed(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowedPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateral(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "initialBorrowPrice(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "initialBorrowPrice(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialBorrowTime(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initializeMarginCore(
      pool_: string,
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeMarginLimits(
      minCollateralPrice_: BigNumberish,
      maxLeverage_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "interest(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "interest(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBorrowing(address,address)"(
      token_: string,
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isBorrowing(address)"(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    leverageLevel(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxLeverage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxLeverageReached(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minCollateralPrice(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    resettable(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setApprovedBorrowedToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovedCollateralToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxLeverage(
      maxLeverage_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinCollateralPrice(
      minCollateralPrice_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sufficientCollateralPrice(
      account_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalBorrowed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalCollateral(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

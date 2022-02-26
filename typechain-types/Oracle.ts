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

export interface OracleInterface extends utils.Interface {
  contractName: "Oracle";
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "ORACLE_ADMIN()": FunctionFragment;
    "amountMax(address,uint256)": FunctionFragment;
    "amountMin(address,uint256)": FunctionFragment;
    "decimals(address)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "initialize(address,uint256,uint256,uint256)": FunctionFragment;
    "initializeOracleCore(address,uint256,uint256,uint256)": FunctionFragment;
    "isApproved(address)": FunctionFragment;
    "isSupported(address)": FunctionFragment;
    "pool()": FunctionFragment;
    "priceDecimals()": FunctionFragment;
    "priceFeed(address)": FunctionFragment;
    "priceMax(address,uint256)": FunctionFragment;
    "priceMin(address,uint256)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setApprovedPriceFeed(address[],address[],uint256[],bool[])": FunctionFragment;
    "setPool(address)": FunctionFragment;
    "setPriceDecimals(uint256)": FunctionFragment;
    "setThreshold(uint256,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "threshold()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ORACLE_ADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "amountMax",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "amountMin",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initializeOracleCore",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isApproved", values: [string]): string;
  encodeFunctionData(functionFragment: "isSupported", values: [string]): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "priceFeed", values: [string]): string;
  encodeFunctionData(
    functionFragment: "priceMax",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceMin",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedPriceFeed",
    values: [string[], string[], BigNumberish[], boolean[]]
  ): string;
  encodeFunctionData(functionFragment: "setPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setPriceDecimals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setThreshold",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "threshold", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ORACLE_ADMIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "amountMax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "amountMin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initializeOracleCore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isApproved", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceMax", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceMin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPriceDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "threshold", data: BytesLike): Result;

  events: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  { role: string; previousAdminRole: string; newAdminRole: string }
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  { role: string; account: string; sender: string }
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface Oracle extends BaseContract {
  contractName: "Oracle";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleInterface;

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
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    ORACLE_ADMIN(overrides?: CallOverrides): Promise<[string]>;

    amountMax(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    amountMin(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decimals(token_: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    initialize(
      pool_: string,
      priceDecimals_: BigNumberish,
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initializeOracleCore(
      pool_: string,
      priceDecimals_: BigNumberish,
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApproved(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    isSupported(token_: string, overrides?: CallOverrides): Promise<[boolean]>;

    pool(overrides?: CallOverrides): Promise<[string]>;

    priceDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    priceFeed(token_: string, overrides?: CallOverrides): Promise<[string]>;

    priceMax(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    priceMin(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovedPriceFeed(
      token_: string[],
      priceFeed_: string[],
      correctDecimals_: BigNumberish[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPriceDecimals(
      priceDecimals_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setThreshold(
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    threshold(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  ORACLE_ADMIN(overrides?: CallOverrides): Promise<string>;

  amountMax(
    token_: string,
    price_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  amountMin(
    token_: string,
    price_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  initialize(
    pool_: string,
    priceDecimals_: BigNumberish,
    thresholdNumerator_: BigNumberish,
    thresholdDenominator_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initializeOracleCore(
    pool_: string,
    priceDecimals_: BigNumberish,
    thresholdNumerator_: BigNumberish,
    thresholdDenominator_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApproved(token_: string, overrides?: CallOverrides): Promise<boolean>;

  isSupported(token_: string, overrides?: CallOverrides): Promise<boolean>;

  pool(overrides?: CallOverrides): Promise<string>;

  priceDecimals(overrides?: CallOverrides): Promise<BigNumber>;

  priceFeed(token_: string, overrides?: CallOverrides): Promise<string>;

  priceMax(
    token_: string,
    amount_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  priceMin(
    token_: string,
    amount_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovedPriceFeed(
    token_: string[],
    priceFeed_: string[],
    correctDecimals_: BigNumberish[],
    approved_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPool(
    pool_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPriceDecimals(
    priceDecimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setThreshold(
    thresholdNumerator_: BigNumberish,
    thresholdDenominator_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  threshold(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    ORACLE_ADMIN(overrides?: CallOverrides): Promise<string>;

    amountMax(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amountMin(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initialize(
      pool_: string,
      priceDecimals_: BigNumberish,
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    initializeOracleCore(
      pool_: string,
      priceDecimals_: BigNumberish,
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isApproved(token_: string, overrides?: CallOverrides): Promise<boolean>;

    isSupported(token_: string, overrides?: CallOverrides): Promise<boolean>;

    pool(overrides?: CallOverrides): Promise<string>;

    priceDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed(token_: string, overrides?: CallOverrides): Promise<string>;

    priceMax(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceMin(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovedPriceFeed(
      token_: string[],
      priceFeed_: string[],
      correctDecimals_: BigNumberish[],
      approved_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setPool(pool_: string, overrides?: CallOverrides): Promise<void>;

    setPriceDecimals(
      priceDecimals_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setThreshold(
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    threshold(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
  };

  filters: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): RoleRevokedEventFilter;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    ORACLE_ADMIN(overrides?: CallOverrides): Promise<BigNumber>;

    amountMax(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    amountMin(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      pool_: string,
      priceDecimals_: BigNumberish,
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initializeOracleCore(
      pool_: string,
      priceDecimals_: BigNumberish,
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApproved(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    isSupported(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    priceDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed(token_: string, overrides?: CallOverrides): Promise<BigNumber>;

    priceMax(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    priceMin(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovedPriceFeed(
      token_: string[],
      priceFeed_: string[],
      correctDecimals_: BigNumberish[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPriceDecimals(
      priceDecimals_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setThreshold(
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    threshold(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ORACLE_ADMIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    amountMax(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    amountMin(
      token_: string,
      price_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      pool_: string,
      priceDecimals_: BigNumberish,
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initializeOracleCore(
      pool_: string,
      priceDecimals_: BigNumberish,
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApproved(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSupported(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceMax(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceMin(
      token_: string,
      amount_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovedPriceFeed(
      token_: string[],
      priceFeed_: string[],
      correctDecimals_: BigNumberish[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPriceDecimals(
      priceDecimals_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setThreshold(
      thresholdNumerator_: BigNumberish,
      thresholdDenominator_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    threshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

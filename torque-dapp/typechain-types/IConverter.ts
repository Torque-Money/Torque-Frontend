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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IConverterInterface extends utils.Interface {
  contractName: "IConverter";
  functions: {
    "maxAmountEthOut(address,uint256)": FunctionFragment;
    "maxAmountTokenOut(address,uint256,address)": FunctionFragment;
    "minAmountTokenInEthOut(address,uint256)": FunctionFragment;
    "minAmountTokenInTokenOut(address,address,uint256)": FunctionFragment;
    "swapMaxEthIn(address)": FunctionFragment;
    "swapMaxEthOut(address,uint256)": FunctionFragment;
    "swapMaxTokenOut(address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "maxAmountEthOut",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxAmountTokenOut",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "minAmountTokenInEthOut",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "minAmountTokenInTokenOut",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapMaxEthIn",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapMaxEthOut",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapMaxTokenOut",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "maxAmountEthOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxAmountTokenOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minAmountTokenInEthOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minAmountTokenInTokenOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapMaxEthIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapMaxEthOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapMaxTokenOut",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IConverter extends BaseContract {
  contractName: "IConverter";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IConverterInterface;

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
    maxAmountEthOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxAmountTokenOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    minAmountTokenInEthOut(
      tokenIn_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    minAmountTokenInTokenOut(
      tokenIn_: string,
      tokenOut_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    swapMaxEthIn(
      tokenOut_: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapMaxEthOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapMaxTokenOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  maxAmountEthOut(
    tokenIn_: string,
    amountIn_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxAmountTokenOut(
    tokenIn_: string,
    amountIn_: BigNumberish,
    tokenOut_: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  minAmountTokenInEthOut(
    tokenIn_: string,
    amountOut_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  minAmountTokenInTokenOut(
    tokenIn_: string,
    tokenOut_: string,
    amountOut_: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swapMaxEthIn(
    tokenOut_: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapMaxEthOut(
    tokenIn_: string,
    amountIn_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapMaxTokenOut(
    tokenIn_: string,
    amountIn_: BigNumberish,
    tokenOut_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    maxAmountEthOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxAmountTokenOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minAmountTokenInEthOut(
      tokenIn_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minAmountTokenInTokenOut(
      tokenIn_: string,
      tokenOut_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapMaxEthIn(
      tokenOut_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapMaxEthOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapMaxTokenOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    maxAmountEthOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxAmountTokenOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minAmountTokenInEthOut(
      tokenIn_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minAmountTokenInTokenOut(
      tokenIn_: string,
      tokenOut_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapMaxEthIn(
      tokenOut_: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapMaxEthOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapMaxTokenOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    maxAmountEthOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxAmountTokenOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minAmountTokenInEthOut(
      tokenIn_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minAmountTokenInTokenOut(
      tokenIn_: string,
      tokenOut_: string,
      amountOut_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swapMaxEthIn(
      tokenOut_: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapMaxEthOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapMaxTokenOut(
      tokenIn_: string,
      amountIn_: BigNumberish,
      tokenOut_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

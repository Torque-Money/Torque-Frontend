/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LPoolToken, LPoolTokenInterface } from "../LPoolToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200108a3803806200108a833981016040819052620000349162000251565b8151829082906200004d906003906020850190620000de565b50805162000063906004906020840190620000de565b505050620000806200007a6200008860201b60201c565b6200008c565b5050620002f8565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000ec90620002bb565b90600052602060002090601f0160209004810192826200011057600085556200015b565b82601f106200012b57805160ff19168380011785556200015b565b828001600101855582156200015b579182015b828111156200015b5782518255916020019190600101906200013e565b50620001699291506200016d565b5090565b5b808211156200016957600081556001016200016e565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001ac57600080fd5b81516001600160401b0380821115620001c957620001c962000184565b604051601f8301601f19908116603f01168101908282118183101715620001f457620001f462000184565b816040528381526020925086838588010111156200021157600080fd5b600091505b8382101562000235578582018301518183018401529082019062000216565b83821115620002475760008385830101525b9695505050505050565b600080604083850312156200026557600080fd5b82516001600160401b03808211156200027d57600080fd5b6200028b868387016200019a565b93506020850151915080821115620002a257600080fd5b50620002b1858286016200019a565b9150509250929050565b600181811c90821680620002d057607f821691505b60208210811415620002f257634e487b7160e01b600052602260045260246000fd5b50919050565b610d8280620003086000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d714610209578063a9059cbb1461021c578063dd62ed3e1461022f578063f2fde38b1461026857600080fd5b8063715018a6146101cb5780638da5cb5b146101d357806395d89b41146101ee5780639dc29fac146101f657600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461017a57806340c10f191461018d57806370a08231146101a257600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d61027b565b60405161011a9190610b6b565b60405180910390f35b610136610131366004610bdc565b61030d565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610c06565b610323565b6040516012815260200161011a565b610136610188366004610bdc565b6103d2565b6101a061019b366004610bdc565b61040e565b005b61014a6101b0366004610c42565b6001600160a01b031660009081526020819052604090205490565b6101a0610446565b6005546040516001600160a01b03909116815260200161011a565b61010d61047c565b6101a0610204366004610bdc565b61048b565b610136610217366004610bdc565b6104bf565b61013661022a366004610bdc565b610558565b61014a61023d366004610c64565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101a0610276366004610c42565b610565565b60606003805461028a90610c97565b80601f01602080910402602001604051908101604052809291908181526020018280546102b690610c97565b80156103035780601f106102d857610100808354040283529160200191610303565b820191906000526020600020905b8154815290600101906020018083116102e657829003601f168201915b5050505050905090565b600061031a338484610600565b50600192915050565b6000610330848484610725565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103ba5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103c78533858403610600565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161031a918590610409908690610ce8565b610600565b6005546001600160a01b031633146104385760405162461bcd60e51b81526004016103b190610d00565b61044282826108f4565b5050565b6005546001600160a01b031633146104705760405162461bcd60e51b81526004016103b190610d00565b61047a60006109d3565b565b60606004805461028a90610c97565b6005546001600160a01b031633146104b55760405162461bcd60e51b81526004016103b190610d00565b6104428282610a25565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105415760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b1565b61054e3385858403610600565b5060019392505050565b600061031a338484610725565b6005546001600160a01b0316331461058f5760405162461bcd60e51b81526004016103b190610d00565b6001600160a01b0381166105f45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103b1565b6105fd816109d3565b50565b6001600160a01b0383166106625760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b1565b6001600160a01b0382166106c35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b1565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166107895760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b1565b6001600160a01b0382166107eb5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b1565b6001600160a01b038316600090815260208190526040902054818110156108635760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b1565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061089a908490610ce8565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108e691815260200190565b60405180910390a350505050565b6001600160a01b03821661094a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103b1565b806002600082825461095c9190610ce8565b90915550506001600160a01b03821660009081526020819052604081208054839290610989908490610ce8565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610a855760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b1565b6001600160a01b03821660009081526020819052604090205481811015610af95760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b1565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610b28908490610d35565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610718565b600060208083528351808285015260005b81811015610b9857858101830151858201604001528201610b7c565b81811115610baa576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610bd757600080fd5b919050565b60008060408385031215610bef57600080fd5b610bf883610bc0565b946020939093013593505050565b600080600060608486031215610c1b57600080fd5b610c2484610bc0565b9250610c3260208501610bc0565b9150604084013590509250925092565b600060208284031215610c5457600080fd5b610c5d82610bc0565b9392505050565b60008060408385031215610c7757600080fd5b610c8083610bc0565b9150610c8e60208401610bc0565b90509250929050565b600181811c90821680610cab57607f821691505b60208210811415610ccc57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610cfb57610cfb610cd2565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600082821015610d4757610d47610cd2565b50039056fea264697066735822122095bbfcbc1b6fa2755b4aa84c9fac54bf4bb6892e52701e0b897c0de51950290e64736f6c63430008090033";

type LPoolTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LPoolTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LPoolToken__factory extends ContractFactory {
  constructor(...args: LPoolTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LPoolToken";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LPoolToken> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<LPoolToken>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): LPoolToken {
    return super.attach(address) as LPoolToken;
  }
  connect(signer: Signer): LPoolToken__factory {
    return super.connect(signer) as LPoolToken__factory;
  }
  static readonly contractName: "LPoolToken";
  public readonly contractName: "LPoolToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LPoolTokenInterface {
    return new utils.Interface(_abi) as LPoolTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LPoolToken {
    return new Contract(address, _abi, signerOrProvider) as LPoolToken;
  }
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Timelock, TimelockInterface } from "../Timelock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay_",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers_",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors_",
        type: "address[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611dbb806100206000396000f3fe60806040526004361061016a5760003560e01c806364d62353116100d1578063a217fddf1161008a578063d45c443511610064578063d45c443514610449578063d547741f14610476578063e38335e514610496578063f27a0c92146104a957600080fd5b8063a217fddf146103f4578063b1c5f42714610409578063c4d252f51461042957600080fd5b806364d62353146103325780637fbc79c6146103525780638065657f146103725780638f2a0bb0146103925780638f61f4f5146103b257806391d14854146103d457600080fd5b8063248a9ca311610123578063248a9ca3146102525780632ab0f529146102825780632f2ff15d146102b257806331d50750146102d257806336568abe146102f2578063584b153e1461031257600080fd5b806301d5062a1461017657806301ffc9a71461019857806307bd0265146101cd5780630d3cf6fc146101fd578063134008d31461021f57806313bc9f201461023257600080fd5b3661017157005b600080fd5b34801561018257600080fd5b50610196610191366004611489565b6104be565b005b3480156101a457600080fd5b506101b86101b33660046114fe565b610542565b60405190151581526020015b60405180910390f35b3480156101d957600080fd5b506101ef600080516020611d6683398151915281565b6040519081526020016101c4565b34801561020957600080fd5b506101ef600080516020611d2683398151915281565b61019661022d366004611528565b610579565b34801561023e57600080fd5b506101b861024d366004611594565b6105df565b34801561025e57600080fd5b506101ef61026d366004611594565b60009081526065602052604090206001015490565b34801561028e57600080fd5b506101b861029d366004611594565b60009081526097602052604090205460011490565b3480156102be57600080fd5b506101966102cd3660046115ad565b610605565b3480156102de57600080fd5b506101b86102ed366004611594565b610630565b3480156102fe57600080fd5b5061019661030d3660046115ad565b610649565b34801561031e57600080fd5b506101b861032d366004611594565b6106cc565b34801561033e57600080fd5b5061019661034d366004611594565b6106e3565b34801561035e57600080fd5b5061019661036d366004611691565b610787565b34801561037e57600080fd5b506101ef61038d366004611528565b61084e565b34801561039e57600080fd5b506101966103ad366004611743565b61088d565b3480156103be57600080fd5b506101ef600080516020611d4683398151915281565b3480156103e057600080fd5b506101b86103ef3660046115ad565b6109ce565b34801561040057600080fd5b506101ef600081565b34801561041557600080fd5b506101ef6104243660046117f5565b6109f9565b34801561043557600080fd5b50610196610444366004611594565b610a3e565b34801561045557600080fd5b506101ef610464366004611594565b60009081526097602052604090205490565b34801561048257600080fd5b506101966104913660046115ad565b610b02565b6101966104a43660046117f5565b610b28565b3480156104b557600080fd5b506098546101ef565b600080516020611d468339815191526104d78133610c4b565b60006104e789898989898961084e565b90506104f38184610caf565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a60405161052f969594939291906118c7565b60405180910390a3505050505050505050565b60006001600160e01b03198216637965db0b60e01b148061057357506301ffc9a760e01b6001600160e01b03198316145b92915050565b600080516020611d668339815191526105938160006109ce565b6105a1576105a18133610c4b565b60006105b188888888888861084e565b90506105bd8185610d9e565b6105cc8160008a8a8a8a610e39565b6105d581610f4d565b5050505050505050565b6000818152609760205260408120546001811180156105fe5750428111155b9392505050565b6000828152606560205260409020600101546106218133610c4b565b61062b8383610f86565b505050565b60008181526097602052604081205481905b1192915050565b6001600160a01b03811633146106be5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6106c8828261100c565b5050565b600081815260976020526040812054600190610642565b3330146107465760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b60648201526084016106b5565b60985460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1609855565b600054610100900460ff166107a25760005460ff16156107a6565b303b155b6108095760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016106b5565b600054610100900460ff1615801561082b576000805461ffff19166101011790555b610836848484611073565b8015610848576000805461ff00191690555b50505050565b600086868686868660405160200161086b969594939291906118c7565b6040516020818303038152906040528051906020012090509695505050505050565b600080516020611d468339815191526108a68133610c4b565b8887146108c55760405162461bcd60e51b81526004016106b590611904565b8885146108e45760405162461bcd60e51b81526004016106b590611904565b60006108f68b8b8b8b8b8b8b8b6109f9565b90506109028184610caf565b60005b8a8110156109c05780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e8581811061094257610942611947565b9050602002016020810190610957919061195d565b8d8d8681811061096957610969611947565b905060200201358c8c8781811061098257610982611947565b90506020028101906109949190611978565b8c8b6040516109a8969594939291906118c7565b60405180910390a36109b9816119d5565b9050610905565b505050505050505050505050565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60008888888888888888604051602001610a1a989796959493929190611a81565b60405160208183030381529060405280519060200120905098975050505050505050565b600080516020611d46833981519152610a578133610c4b565b610a60826106cc565b610ac65760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b60648201526084016106b5565b6000828152609760205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260656020526040902060010154610b1e8133610c4b565b61062b838361100c565b600080516020611d66833981519152610b428160006109ce565b610b5057610b508133610c4b565b878614610b6f5760405162461bcd60e51b81526004016106b590611904565b878414610b8e5760405162461bcd60e51b81526004016106b590611904565b6000610ba08a8a8a8a8a8a8a8a6109f9565b9050610bac8185610d9e565b60005b89811015610c3557610c2582828d8d85818110610bce57610bce611947565b9050602002016020810190610be3919061195d565b8c8c86818110610bf557610bf5611947565b905060200201358b8b87818110610c0e57610c0e611947565b9050602002810190610c209190611978565b610e39565b610c2e816119d5565b9050610baf565b50610c3f81610f4d565b50505050505050505050565b610c5582826109ce565b6106c857610c6d816001600160a01b031660146110a5565b610c788360206110a5565b604051602001610c89929190611b58565b60408051601f198184030181529082905262461bcd60e51b82526106b591600401611bcd565b610cb882610630565b15610d1d5760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b60648201526084016106b5565b609854811015610d7e5760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b60648201526084016106b5565b610d888142611c00565b6000928352609760205260409092209190915550565b610da7826105df565b610dc35760405162461bcd60e51b81526004016106b590611c18565b801580610dde57506000818152609760205260409020546001145b6106c85760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b60648201526084016106b5565b6000846001600160a01b0316848484604051610e56929190611c62565b60006040518083038185875af1925050503d8060008114610e93576040519150601f19603f3d011682016040523d82523d6000602084013e610e98565b606091505b5050905080610f055760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e6720746044820152721c985b9cd858dd1a5bdb881c995d995c9d1959606a1b60648201526084016106b5565b85877fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5887878787604051610f3c9493929190611c72565b60405180910390a350505050505050565b610f56816105df565b610f725760405162461bcd60e51b81526004016106b590611c18565b600090815260976020526040902060019055565b610f9082826109ce565b6106c85760008281526065602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610fc83390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61101682826109ce565b156106c85760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b600054610100900460ff1661109a5760405162461bcd60e51b81526004016106b590611ca4565b61062b838383611241565b606060006110b4836002611cef565b6110bf906002611c00565b67ffffffffffffffff8111156110d7576110d76115d9565b6040519080825280601f01601f191660200182016040528015611101576020820181803683370190505b509050600360fc1b8160008151811061111c5761111c611947565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061114b5761114b611947565b60200101906001600160f81b031916908160001a905350600061116f846002611cef565b61117a906001611c00565b90505b60018111156111f2576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106111ae576111ae611947565b1a60f81b8282815181106111c4576111c4611947565b60200101906001600160f81b031916908160001a90535060049490941c936111eb81611d0e565b905061117d565b5083156105fe5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106b5565b600054610100900460ff166112685760405162461bcd60e51b81526004016106b590611ca4565b611280600080516020611d26833981519152806113cf565b6112a6600080516020611d46833981519152600080516020611d268339815191526113cf565b6112cc600080516020611d66833981519152600080516020611d268339815191526113cf565b6112e4600080516020611d268339815191523361141a565b6112fc600080516020611d268339815191523061141a565b60005b825181101561134957611339600080516020611d4683398151915284838151811061132c5761132c611947565b602002602001015161141a565b611342816119d5565b90506112ff565b5060005b815181101561138a5761137a600080516020611d6683398151915283838151811061132c5761132c611947565b611383816119d5565b905061134d565b5060988390556040805160008152602081018590527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1505050565b600082815260656020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6106c88282610f86565b80356001600160a01b038116811461143b57600080fd5b919050565b60008083601f84011261145257600080fd5b50813567ffffffffffffffff81111561146a57600080fd5b60208301915083602082850101111561148257600080fd5b9250929050565b600080600080600080600060c0888a0312156114a457600080fd5b6114ad88611424565b965060208801359550604088013567ffffffffffffffff8111156114d057600080fd5b6114dc8a828b01611440565b989b979a50986060810135976080820135975060a09091013595509350505050565b60006020828403121561151057600080fd5b81356001600160e01b0319811681146105fe57600080fd5b60008060008060008060a0878903121561154157600080fd5b61154a87611424565b955060208701359450604087013567ffffffffffffffff81111561156d57600080fd5b61157989828a01611440565b979a9699509760608101359660809091013595509350505050565b6000602082840312156115a657600080fd5b5035919050565b600080604083850312156115c057600080fd5b823591506115d060208401611424565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261160057600080fd5b8135602067ffffffffffffffff8083111561161d5761161d6115d9565b8260051b604051601f19603f83011681018181108482111715611642576116426115d9565b60405293845285810183019383810192508785111561166057600080fd5b83870191505b848210156116865761167782611424565b83529183019190830190611666565b979650505050505050565b6000806000606084860312156116a657600080fd5b83359250602084013567ffffffffffffffff808211156116c557600080fd5b6116d1878388016115ef565b935060408601359150808211156116e757600080fd5b506116f4868287016115ef565b9150509250925092565b60008083601f84011261171057600080fd5b50813567ffffffffffffffff81111561172857600080fd5b6020830191508360208260051b850101111561148257600080fd5b600080600080600080600080600060c08a8c03121561176157600080fd5b893567ffffffffffffffff8082111561177957600080fd5b6117858d838e016116fe565b909b50995060208c013591508082111561179e57600080fd5b6117aa8d838e016116fe565b909950975060408c01359150808211156117c357600080fd5b506117d08c828d016116fe565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b03121561181157600080fd5b883567ffffffffffffffff8082111561182957600080fd5b6118358c838d016116fe565b909a50985060208b013591508082111561184e57600080fd5b61185a8c838d016116fe565b909850965060408b013591508082111561187357600080fd5b506118808b828c016116fe565b999c989b509699959896976060870135966080013595509350505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038716815285602082015260a0604082015260006118ef60a08301868861189e565b60608301949094525060800152949350505050565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561196f57600080fd5b6105fe82611424565b6000808335601e1984360301811261198f57600080fd5b83018035915067ffffffffffffffff8211156119aa57600080fd5b60200191503681900382131561148257600080fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156119e9576119e96119bf565b5060010190565b81835260006020808501808196508560051b810191508460005b87811015611a745782840389528135601e19883603018112611a2b57600080fd5b8701803567ffffffffffffffff811115611a4457600080fd5b803603891315611a5357600080fd5b611a60868289850161189e565b9a87019a9550505090840190600101611a0a565b5091979650505050505050565b60a0808252810188905260008960c08301825b8b811015611ac2576001600160a01b03611aad84611424565b16825260209283019290910190600101611a94565b5083810360208501528881526001600160fb1b03891115611ae257600080fd5b8860051b9150818a602083013781810191505060208101600081526020848303016040850152611b1381888a6119f0565b6060850196909652505050608001529695505050505050565b60005b83811015611b47578181015183820152602001611b2f565b838111156108485750506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611b90816017850160208801611b2c565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611bc1816028840160208801611b2c565b01602801949350505050565b6020815260008251806020840152611bec816040850160208701611b2c565b601f01601f19169190910160400192915050565b60008219821115611c1357611c136119bf565b500190565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b8183823760009101908152919050565b60018060a01b0385168152836020820152606060408201526000611c9a60608301848661189e565b9695505050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000816000190483118215151615611d0957611d096119bf565b500290565b600081611d1d57611d1d6119bf565b50600019019056fe5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63a2646970667358221220ac089fd2ce716a35f76ead63e071190c5e6588df55f788ea500ae3359d66e9d164736f6c63430008090033";

type TimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Timelock__factory extends ContractFactory {
  constructor(...args: TimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Timelock";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Timelock> {
    return super.deploy(overrides || {}) as Promise<Timelock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }
  static readonly contractName: "Timelock";
  public readonly contractName: "Timelock";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}

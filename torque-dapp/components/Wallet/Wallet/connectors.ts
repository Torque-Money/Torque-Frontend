import {SUPPORTED_CHAIN_IDS} from "../../../utils/providers/useChainData";

import {InjectedConnector} from "@web3-react/injected-connector";
import {WalletConnectConnector} from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
    supportedChainIds: [...SUPPORTED_CHAIN_IDS],
});

export const walletConnect = new WalletConnectConnector({
    rpc: {
        4: "https://eth-rinkeby.alchemyapi.io/v2/SbTuBtBxbJL2aEO2-f5S4bkc797ZDEwT",
        250: "https://rpc.ftm.tools/",
        31337: "http://127.0.0.1:8545/",
    },
});

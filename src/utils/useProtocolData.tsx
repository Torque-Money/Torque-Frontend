import {useWeb3React} from "@web3-react/core";
import {ethers} from "ethers";
import {createContext, useContext, useEffect, useState} from "react";
import useContracts from "./useContracts";
import config from "../config/config.json";
import {ROUND_CONSTANT} from "./parseNumber";

interface ProtocolData {
    totalPoolPrice: () => Promise<ethers.BigNumber>;
    totalBorrowedPrice: () => Promise<ethers.BigNumber>;

    totalPriceLocked: (address: string) => Promise<ethers.BigNumber>;
    totalBorrowed: (address: string) => Promise<ethers.BigNumber>;
    stakeAPY: (address: string) => Promise<number>;
    borrowAPR: (address: string) => Promise<number>;
}

const protocolDataCtx = createContext<ProtocolData | null>(undefined as any);

export default function useProtocolData() {
    return useContext(protocolDataCtx);
}

export function ProtocolDataProvider({children}: {children: any}) {
    const {library}: {library?: ethers.providers.JsonRpcProvider} = useWeb3React();
    const contracts = useContracts();

    const [protocolData, setProtocolData] = useState<ProtocolData | null>(null);

    // Parse decimals
    async function parseDecimals(num: ethers.BigNumber, address: string) {
        const decimals = await contracts?.oracle.decimals(address);
        return num.div(ethers.BigNumber.from(10).pow(decimals));
    }

    async function totalPoolPrice() {
        let totalPoolPrice;
        const assets = config.approved.filter((approved) => approved.leveragePool).map((approved) => approved.address);
        totalPoolPrice = ethers.BigNumber.from(0);
        for (const asset of assets) {
            const totalLocked = await contracts?.lPool.tvl(asset);
            const price = await contracts?.oracle.price(asset, totalLocked);
            totalPoolPrice = totalPoolPrice.add(price);
        }
        totalPoolPrice = await parseDecimals(totalPoolPrice, await contracts?.oracle.defaultStablecoin());
        return totalPoolPrice;
    }

    async function totalBorrowedPrice() {
        let totalBorrowedPrice;
        const assets = config.approved.filter((approved) => approved.leveragePool).map((approved) => approved.address);
        totalBorrowedPrice = ethers.BigNumber.from(0);
        for (const asset of assets) {
            const totalBorrowed = await contracts?.lPool.utilized(asset);
            const price = await contracts?.oracle.price(asset, totalBorrowed);
            totalBorrowedPrice = totalBorrowedPrice.add(price);
        }
        totalBorrowedPrice = await parseDecimals(totalBorrowedPrice, await contracts?.oracle.defaultStablecoin());
        return totalBorrowedPrice;
    }

    // Get the total price locked in the pool for a given asset
    async function totalPriceLocked(address: string) {
        const totalLocked = await contracts?.lPool.tvl(address);
        const price = await contracts?.oracle.price(address, totalLocked);
        return await parseDecimals(price, await contracts?.oracle.defaultStablecoin());
    }

    // Get the total amount borrowed
    async function totalBorrowed(address: string) {
        const borrowed = await contracts?.marginLong.totalBorrowed(address);
        return await parseDecimals(borrowed, address);
    }

    // Get the stake APY
    async function stakeAPY(address: string) {
        const [utilizationNumerator, utilizationDenominator] = await contracts?.lPool.utilizationRate(address);

        const _borrowAPY = ethers.BigNumber.from((await borrowAPR(address)) * ROUND_CONSTANT);
        if (utilizationDenominator.lte(0)) return 0;

        return _borrowAPY.mul(utilizationNumerator).div(utilizationDenominator).toNumber() / ROUND_CONSTANT;
    }

    // Get the borrow APY
    async function borrowAPR(address: string) {
        const blocksPerYear = ethers.BigNumber.from(10).pow(4).mul(3154).div(config.avgBlockTime);
        const currentBlock = ethers.BigNumber.from(await library?.getBlockNumber());
        let borrowBlock = currentBlock.sub(blocksPerYear);
        if (borrowBlock.lt(0)) borrowBlock = ethers.BigNumber.from(0);

        const initialBorrow = ethers.BigNumber.from(10).pow(5);
        let interest;
        try {
            interest = await contracts?.lPool.interest(address, initialBorrow, borrowBlock);
        } catch (e) {
            return 0;
        }

        const apy = interest.mul(ROUND_CONSTANT).div(initialBorrow).sub(ROUND_CONSTANT).mul(100).toNumber() / ROUND_CONSTANT;
        return apy;
    }

    // Get the minimum margin level
    // async function minMarginLevel() {
    //     if (contracts) {
    //         const [numerator, denominator] = await contracts.marginLong.minMarginLevel();
    //         return numerator.mul(ROUND_CONSTANT).div(denominator).toNumber() / ROUND_CONSTANT;
    //     }
    // }

    // Get the minimum margin collateral price to borrow
    // async function minCollateralPrice() {
    //     if (contracts) {
    //         const price = await contracts.marginLong.minCollateralPrice();
    //         return await parseDecimals(price, await contracts.oracle.defaultStablecoin());
    //     }
    // }

    // Total amount of a given asset locked in the pool
    // async function totalLocked(address: string) {
    //     if (contracts) {
    //         const totalLocked = await contracts.lPool.tvl(address);
    //         return await parseDecimals(totalLocked, address);
    //     }
    // }

    // Get the total amount borrowed long
    // async function totalBorrowedLong(address: string) {
    //     return await totalBorrowed(address);
    // }

    // **** Add in some prices and total borrow price for all of the pools

    // Get the liquidity of a given asset available
    // async function liquidityAvailable(address: string) {
    //     if (contracts) {
    //         const liquidity = await contracts.lPool.liquidity(address);
    //         return await parseDecimals(liquidity, address);
    //     }
    // }

    // Get the utilization rate
    // async function utilizationRate(address: string) {
    //     if (contracts) {
    //         const [numerator, denominator] = await contracts.lPool.utilizationRate(address);
    //         return numerator.mul(ROUND_CONSTANT).div(denominator).toNumber() / ROUND_CONSTANT;
    //     }
    // }

    // Get the total liquidity of an asset
    // async function totalLiquidity(address: string) {
    //     if (contracts) {
    //         const liquidity = await contracts.lPool.liquidity(address);
    //         return await parseDecimals(liquidity, address);
    //     }
    // }

    // Get the total amount locked of an asset as collateral
    // async function totalLockedCollateral(address: string) {
    //     if (contracts) {
    //         const lockedCollateral = await contracts.marginLong.totalCollateral(address);
    //         return await parseDecimals(lockedCollateral, address);
    //     }
    // }

    // Get the total collateral price of an asset
    // async function totalCollateralPrice(address: string) {
    //     if (contracts) {
    //         const lockedCollateral = await contracts.marginLong.totalCollateral(address);
    //         const price = await contracts.oracle.price(address, lockedCollateral);
    //         return await parseDecimals(price, await contracts.oracle.defaultStablecoin());
    //     }
    // }

    // Get the total borrowed amount of an asset
    // async function totalBorrowAmount(address: string) {
    //     if (contracts) {
    //         const borrowed = await contracts.marginLong
    //     }
    // }

    // Get the borrowed price of an asset
    // async function totalBorrowPrice(address: string) {}

    // Get the borrowed price of an asset

    // Get the margin level of an asset

    // Get the amount of available LP tokens for a given token

    // Get the amount of assets for redeeming given tokens

    // Get the price of redeeming the given underlying tokens

    // Get the reserve yield APR

    // Get the total amount staked in the reserve

    // Get the total TAU supply

    // Get the backing price per TAU

    // Get the total amount of TAU locked

    // Get the total assets in reserve for a given token

    useEffect(() => {
        if (!contracts) setProtocolData(null);
        else {
            (async () => {
                setProtocolData({totalPoolPrice, totalBorrowedPrice, totalPriceLocked, totalBorrowed, stakeAPY, borrowAPR});
            })();
        }
    }, [contracts]);

    return <protocolDataCtx.Provider value={protocolData}>{children}</protocolDataCtx.Provider>;
}

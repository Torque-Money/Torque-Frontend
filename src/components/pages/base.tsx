import { ethers } from "ethers";
import { useEffect, useState } from "react";
import parseTime from "../../utils/parseTime";
import useContracts from "../../utils/useContracts";
import Wallet from "../wallet";

function Base(props: { children: any }) {
    const [contracts, setContracts] = useContracts();

    const [epilogueTimes, setEpilogueTimes] = useState<[number, number]>([Date.now(), Date.now()]);

    const [prologueActive, setPrologueActive] = useState<boolean>(false);
    const [epilogueActive, setEpilogueActive] = useState<boolean>(false);

    const [periodId, setPeriodId] = useState<number>(0);

    useEffect(() => {
        (async () => {
            // Get the prologue and epilogue times
            const pool = contracts?.pool;

            const _epilogueTimes = await pool?.getEpilogueTimes();
            setEpilogueTimes(_epilogueTimes.map((time: ethers.BigNumber) => time.toNumber() * 1000));

            const _prologueActive = await pool?.isPrologue();
            setPrologueActive(_prologueActive);
            const _epilogueActive = await pool?.isEpilogue();
            setEpilogueActive(_epilogueActive);

            if (contracts?.periodId) setPeriodId(contracts.periodId);
        })();
    }, [contracts]);

    function activeClass(active: boolean) {
        return `${active ? "bg-emerald-300 text-green-600" : "bg-red-400 text-rose-700"} px-2 py-1 rounded-md ml-2`;
    }

    return (
        <>
            <div className="mx-auto w-4/5 bg-zinc-900 my-10 p-8 rounded-md drop-shadow-sm text-center">
                <h1 className="font-medium text-white text-lg flex items-center justify-evenly sm:flex-row flex-col sm:space-y-0 space-y-2">
                    <span className="sm:my-0 mb-4 sm:w-1/4 w-full flex sm:flex-row flex-col justify-center items-center">
                        <span className="w-full">Period ID:</span>
                        <input
                            type="number"
                            className="w-full text-center bg-zinc-700 bg-opacity-10 border-transparent rounded-md ml-4 font-medium"
                            value={periodId}
                            placeholder="0"
                            min="0"
                            step="1"
                            onChange={(e) => {
                                if (contracts) {
                                    const clone = {} as any;
                                    for (const [key, value] of Object.entries(contracts)) {
                                        clone[key] = value;
                                    }
                                    clone.periodId = e.target.valueAsNumber || 0;
                                    setContracts(clone);
                                }
                            }}
                        />
                    </span>
                    <span className="sm:my-0 mb-4 sm:w-1/4 w-full">
                        Prologue: <span className={activeClass(prologueActive)}>{prologueActive ? "active" : "inactive"}</span>
                    </span>
                    <span className="sm:my-0 mb-4 sm:w-1/4 w-full">
                        Epilogue: <span className={activeClass(epilogueActive)}>{epilogueActive ? "active" : "inactive"}</span>
                    </span>
                    <span className="sm:w-1/4 w-full">Period end: {parseTime(epilogueTimes[1])}</span>
                </h1>
            </div>
            <div className="mx-auto w-4/5 bg-zinc-900 my-5 p-8 rounded-md drop-shadow-sm">
                {!contracts ? (
                    <div className="text-center">
                        <h1 className="text-white font-bold mb-6">Please connect with a wallet to be able to access the app.</h1>
                        <Wallet />
                    </div>
                ) : (
                    props.children
                )}
            </div>
        </>
    );
}

export default Base;

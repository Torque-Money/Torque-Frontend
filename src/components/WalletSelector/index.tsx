import Card from "./card";

export default function WalletSelector() {
    return (
        <div className={`bg-black bg-opacity-80 fixed inset-0 flex items-center justify-center z-50 modal`}>
            <div className="mx-auto lg:w-2/5 w-4/5 min-w-min bg-neutral-900 glow rounded-xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-white font-bold text-2xl">Choose a wallet:</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <Card name="Metamask" icon="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" fn={() => {}} />
            </div>
        </div>
    );
}

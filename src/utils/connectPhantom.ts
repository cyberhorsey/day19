import { solanaAccount } from "../store/account";

function connectPhantom() {
    console.log("Phantom");
    const phantom = (window as any).phantom.solana.connect();
    console.log(phantom);
    const pubkey = (window as any).phantom.solana.publicKey.toString()
    console.log(pubkey)
    solanaAccount.set((window as any).phantom.solana.publicKey.toString());
}

export default connectPhantom;
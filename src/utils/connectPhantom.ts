import type { NFTType, NFT } from "../domain/nft";
import { solanaAccount } from "../store/account";
import nfts from "../store/nfts";
import fetchSolanaNfts from "./fetchSolanaNfts";

async function connectPhantom() {
    console.log("Phantom");
    const phantom = (window as any).phantom.solana.connect().then(() => {
        solanaAccount.set((window as any).phantom.solana.publicKey.toString())

    })
    const fetchedNFTs: NFT[] = await fetchSolanaNfts("6yqm5QUft621gmuVFht6USz1CbkZUwprUpa45HnvrG1m");
    console.log("fetched NFTS:", fetchedNFTs);
    nfts.set(fetchedNFTs);
  
}

export default connectPhantom;
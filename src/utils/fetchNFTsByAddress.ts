import { all } from "axios";
import type { NFT} from "../domain/nft";
import fetchImxNfts from "./fectchImxNfts";
import fetchEthereumNfts from "./fetchEthereumNfts";

async function fetchNFTsByAddress(ethereumAddress: string, solanaAddress: string): Promise<NFT[]> {
    const imxNfts: NFT[] = await fetchImxNfts(ethereumAddress);
    const ethereumNfts: NFT[] = await fetchEthereumNfts(ethereumAddress);
//    const solanaNfts: NFT[] = await fetchSolanaNfts(solanaAddress)
    return imxNfts.concat(ethereumNfts);
    
}

export default fetchNFTsByAddress;
import { all } from "axios";
import type { NFT } from "../domain/nft";
import fetchImxNfts from "./fectchImxNfts";
import fetchEthereumNfts from "./fetchEthereumNfts";
import fetchSolanaNfts from "./fetchSolanaNfts";

async function fetchNFTsByAddress(ethereumAddress: string): Promise<NFT[]> {
  const imxNfts: NFT[] = await fetchImxNfts(ethereumAddress);
  const ethereumNfts: NFT[] = await fetchEthereumNfts(ethereumAddress);
  const solNFTs: NFT[] = await fetchSolanaNfts(
    "6yqm5QUft621gmuVFht6USz1CbkZUwprUpa45HnvrG1m"
  );
  // console.log("concat:",imxNfts.concat(ethereumNfts).concat(solNFTs))
  const nfts = imxNfts.concat(ethereumNfts).concat(solNFTs);

  return nfts;
}

export default fetchNFTsByAddress;

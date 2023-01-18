import { ethers } from "ethers";
import {ethereumAccount} from "../store/account";
import fetchNFTsByAddress from "./fetchNFTsByAddress";
import type { NFTType, NFT } from "../domain/nft";
import nfts from "../store/nfts";
import detectGamestopProvider from "@gamestopnft/detect-gamestop-provider";
type EthereumWindow = {
    // todo: get rid of typing
    ethereum: any;
};
async function connectGME() {
    const gmeProvider = await detectGamestopProvider();
    const provider = new ethers.providers.Web3Provider(gmeProvider);

    const accounts = await provider.send("eth_requestAccounts", []);
    const providedAccount = accounts[0];
    //we need to set acount into a store o we can use it elsewhere
    ethereumAccount.set(providedAccount);
    const fetchedNFTs: NFT[] = await fetchNFTsByAddress(providedAccount);
    console.log("fetched NFTS:", fetchedNFTs);
    nfts.set(fetchedNFTs);
    console.log("set:",nfts)


}

export default connectGME;
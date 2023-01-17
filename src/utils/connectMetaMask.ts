import { ethers } from "ethers";
import {ethereumAccount} from "../store/account";
import fetchNFTsByAddress from "../utils/fetchNFTsByAddress";
import type { NFTType, NFT } from "../domain/nft";
import nfts from "../store/nfts";
type EthereumWindow = {
    // todo: get rid of typing
    ethereum: any;
};
async function connectMetaMask() {
    const provider = new ethers.providers.Web3Provider(
        (window as any as EthereumWindow).ethereum
    );

    const accounts = await provider.send("eth_requestAccounts", []);
    const providedAccount = accounts[0];
    //we need to set acount into a store o we can use it elsewhere
    ethereumAccount.set(providedAccount);
    const fetchedNFTs: NFT[] = await fetchNFTsByAddress(providedAccount);
    console.log("fetched NFTS:", fetchedNFTs);
    nfts.set(fetchedNFTs);
}

export default connectMetaMask;
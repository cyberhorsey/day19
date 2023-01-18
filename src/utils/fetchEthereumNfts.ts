import { NFTType, type NFT } from "../domain/nft";
import { Network, Alchemy } from "alchemy-sdk";

async function fetchEthereumNfts(address: string): Promise<NFT[]> {
    const settings = {
        apiKey: "9kNXbHSC4XEBluKh72dg644UOMK74Y7C", // Replace with your Alchemy API Key.
        network: Network.ETH_MAINNET, // Replace with your network.
    };

    // Print owner's wallet address:

    const alchemy = new Alchemy(settings);

    // Print total NFT count returned in the response:
    const nftsForOwner = await (await alchemy.nft.getNftsForOwner(address)).ownedNfts;
    const domainNfts: NFT[] = [];

    nftsForOwner.forEach(function (alchemyNft) {
        const media = alchemyNft.media;
        const imageURL = media.length ? media[0].raw : "";

        const nft: NFT = {
            name: alchemyNft.title,
            description: alchemyNft.description,
            imageURL: imageURL,
            nftType: NFTType.Ethereum
        };

        domainNfts.push(nft);
    })
    console.log("ethereum nft:   ",domainNfts)
    return domainNfts;
}

export default fetchEthereumNfts;
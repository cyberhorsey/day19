import { NFTType, type NFT } from "../domain/nft";
import { ImmutableX, Config } from '@imtbl/core-sdk';

async function fetchImxNfts(address: string): Promise<NFT[]> {

    const config = Config.PRODUCTION; // Or Config.PRODUCTION

    const client = new ImmutableX(config);

    const assetsRequest = await (await client.assetApi.listAssets({ user: address })).data.result;
 
    const domainNfts: NFT[] = [];

    assetsRequest.forEach(function (IMXnfts) {

        const nft: NFT = {
            name: IMXnfts.name,
            description: IMXnfts.collection.name,
            imageURL: IMXnfts.image_url,
            nftType: NFTType.IMX
        }
        domainNfts.push(nft);

    })

    return domainNfts;
}

export default fetchImxNfts;
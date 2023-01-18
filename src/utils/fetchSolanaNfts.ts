import { NFTType, type NFT } from "../domain/nft";
import { Connection } from '@metaplex/js';
import { programs } from "@metaplex/js"

async function fetchSolanaNfts(solanaAddressInput: string): Promise<NFT[]> {

    const connection = new Connection('mainnet-beta');
    const ownerPublickey = solanaAddressInput;
    // console.log("address:", solanaAddressInput);
    
    const domainNfts: NFT[] = [];
    const tokenMetadata = await programs.metadata.Metadata.findDataByOwner(connection, ownerPublickey);

    tokenMetadata.forEach(function (nft) {
        fetch(nft.data.uri)
       
            .then(response => response.json())
           
            .then(metadata => {
                // console.log(metadata)
                const nft: NFT = {
                    name: metadata.name,
                    description: metadata.description,
                    imageURL: metadata.image,
                    nftType: NFTType.Solana
                };
               console.log("sol nft being pushed",nft)
                domainNfts.push(nft);
                // console.log(domainNfts)
            })
      
    })


    // console.log(tokenMetadata);

    console.log("sol array being pushed into:   ",domainNfts)
    return domainNfts;




}

export default fetchSolanaNfts;
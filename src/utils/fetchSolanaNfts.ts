import { NFTType, type NFT } from "../domain/nft";
import { Connection } from "@metaplex/js";
import { programs } from "@metaplex/js";

async function fetchSolanaNfts(solanaAddressInput: string): Promise<NFT[]> {
  const connection = new Connection("mainnet-beta");
  const ownerPublickey = solanaAddressInput;
  // console.log("address:", solanaAddressInput);

  const domainNfts: NFT[] = [];
  const tokenMetadata = await programs.metadata.Metadata.findDataByOwner(
    connection,
    ownerPublickey
  );

  await Promise.all(
    tokenMetadata.map(async function (solNft) {
      const n = await fetch(solNft.data.uri);
      const metadata = await n.json();
      const nft: NFT = {
        name: metadata.name,
        description: metadata.description,
        imageURL: metadata.image,
        nftType: NFTType.Solana,
      };
      console.log("sol nft being pushed", nft);
      domainNfts.push(nft);
    })
  );

  // console.log(tokenMetadata);

  console.log("sol nfts", domainNfts);
  return domainNfts;
}

export default fetchSolanaNfts;

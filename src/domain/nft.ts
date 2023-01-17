enum NFTType {
    Ethereum,
    IMX, 
    Solana,
}

type NFT = {
    imageURL: string;
    name: string;
    description: string;
    nftType: NFTType;
};

export type { NFT }
export { NFTType};
function parseImageURL(imageURL: string): string {
  if (!imageURL) return "";
  if (imageURL.startsWith("ipfs://ipfs")) {
    // console.log("https://ipfs.io/ipfs/" + displayDescription.slice(11));
    imageURL = "https://ipfs.io/ipfs/" + imageURL.slice(11);
  }
  if (imageURL.startsWith("ipfs://")) {
    // console.log("https://ipfs.io/ipfs/" + displayDescription.slice(6));
    imageURL = "https://ipfs.io/ipfs/" + imageURL.slice(7);
  } else {
    return imageURL;
  }
}

export default parseImageURL;

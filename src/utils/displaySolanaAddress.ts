function displaySolanaAddress(address: string): string {
    if (!address) return address;
    
  return address.slice(0,5) + "..." + address.slice(address.length -6, address.length);
    
}

export default displaySolanaAddress;
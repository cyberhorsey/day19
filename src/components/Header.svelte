<script lang="ts">
  // import ConnectGme from "./components/buttons/ConnectGME.svelte";
  import ConnectWallet from "./buttons/ConnectWallet.svelte";
  // import ConnectWallet from "./components/buttons/ConnectMetaMask.svelte";
  // import ConnectPhantom from "./components/buttons/ConnectPhantom.svelte";
  // import Counter from "./components/Counter.svelte";
  import displayEthereumAddress from "../utils/displayEthereumAddress";
  import {ethereumAccount, solanaAccount} from "../store/account"
    import displaySolanaAddress from "../utils/displaySolanaAddress";
    import connectPhantom from "../utils/connectPhantom";
    import ConnectSolanaWallet from "./buttons/ConnectSolanaWallet.svelte";
</script>

<div id="header">
  Yahoo's NFT viewer
  <div>
    <input placeholder="Enter address here" />
  </div>
  <div class="headerButtons">
    <div id = ethereumButtons>
      {#if $ethereumAccount}
      {"Connected Ethereum Account: "+ displayEthereumAddress($ethereumAccount)}
    {:else}
      <ConnectWallet />
      {/if}
    </div>
   <div id="solanaButton">
    
    {#if $solanaAccount}
    {"Connected Solana Account: " + displaySolanaAddress($solanaAccount)}
    {:else}
    <ConnectSolanaWallet/>
    {/if}
   </div>
      
   
    <!-- <div class="walletButton"><ConnectPhantom/></div> -->
    <!-- <div class="walletButton"><ConnectGme/></div> -->
  </div>
</div>

<style>

</style>
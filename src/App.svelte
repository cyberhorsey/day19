<script lang="ts">
  // import ConnectGme from "./components/buttons/ConnectGME.svelte";
  // import ConnectMetaMask from "./components/buttons/ConnectMetaMask.svelte";
  // import ConnectWallet from "./components/buttons/ConnectMetaMask.svelte";
  // import ConnectPhantom from "./components/buttons/ConnectPhantom.svelte";
  // import Counter from "./components/Counter.svelte";

  import Header from "./components/Header.svelte";
  import NfTview from "./components/NFTview.svelte";
  import nfts from "./store/nfts";
  import {ethereumAccount} from "./store/account";
</script>

<Header/>

{#if $ethereumAccount}
  <NfTview />
{:else}
  Connect a Wallet
{/if}

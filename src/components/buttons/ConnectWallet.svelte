<script lang="ts">
  import connectGME from "../../utils/connectGME";
  import connectMetaMask from "../../utils/connectMetaMask";
  import connectPhantom from "../../utils/connectPhantom";
</script>


<button on:click={async () => await connectMetaMask()}>Connect MetaMask</button>
or
<button on:click={async () => await connectGME()}
  >Connect GameStop Wallet</button
>
<!-- <button on:click={}</button> -->

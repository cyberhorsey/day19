<script land="ts">
    import nfts from "../store/nfts";
    import Nft from "./NFT.svelte";
</script>

{#if $nfts && $nfts.length}
<div class="nfts-grid">
    {#each $nfts as nft}
    <Nft {nft}/>
   {/each}
</div>
   
{:else}
    Loading....
{/if}


<style>
    .nfts-grid {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  overflow:visible;
    /* border-top: 2px solid white; */
    height: fit-content;
    }
</style>
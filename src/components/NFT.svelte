<script lang="ts">
    import type { NFT } from "../domain/nft";
    import parseImageURL from "../utils/parseImageURL";
    import truncateDescription from "../utils/truncateDescription";
    export let nft: NFT;
</script>

<div class="nft">
    {nft.name}<br />
    <img src={parseImageURL(nft.imageURL)} alt="" /> <br />
    {truncateDescription(nft.description)}<br />
</div>

<style>
    .nft {
        border: 1px solid white;
        height: 200px;
        width: 150px;
        text-align: center;
        margin: 10px;
        border-radius: 20px;
    }
    img {
        height: 100px;
        width: 100px;
    }
</style>

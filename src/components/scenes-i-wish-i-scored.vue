<template lang="pug">
.siwis-container
  .vimeo-embed-grid
    .vimeo-embed-row
      VimeoEmbed(:id="365272563")
    .vimeo-embed-row
      VimeoEmbed(:id="457165730")
      VimeoEmbed(:id="457167350")
</template>

<script>
  import VimeoEmbed from './vimeo-embed.vue';

  export default {
    components: { VimeoEmbed },
  }
</script>

<style scoped lang="scss">
  .siwis-container {
    margin: 20px 0px;

    .vimeo-embed-row {
      display: flex;
      justify-content: center;
    }
  }
</style>
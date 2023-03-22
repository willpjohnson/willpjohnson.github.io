<template lang="pug">
.ads-container
  .vimeo-embed-grid
    .vimeo-embed-row
      VimeoEmbed(:id="148430902")
      VimeoEmbed(:id="165378387")
    .vimeo-embed-row
      VimeoEmbed(:id="110213267")
      VimeoEmbed(:id="110212920")
</template>

<script>
  import VimeoEmbed from './vimeo-embed.vue';

  export default {
    components: { VimeoEmbed },
  }
</script>

<style scoped lang="scss">
  .ads-container {
    margin: 20px 0px;

    .vimeo-embed-row {
      display: flex;
      justify-content: center;
    }
  }
</style>
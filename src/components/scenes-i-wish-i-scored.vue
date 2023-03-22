<template lang="pug">
.siwis-container
  PostIt(
    :top="4"
    :right="80"
    text="This is a collection of classic score-less moments that I thought could use some help"
  )
  .vimeo-embed-grid
    .vimeo-embed-row
      VimeoEmbed(:id="365272563")
    .vimeo-embed-row
      VimeoEmbed(:id="457165730")
      VimeoEmbed(:id="457167350")
</template>

<script>
  import VimeoEmbed from './vimeo-embed.vue';
  import PostIt from './post-it.vue';

  export default {
    components: { VimeoEmbed, PostIt },
  }
</script>

<style scoped lang="scss">
  .siwis-container {
    margin: 20px 0px;
    position: relative;

    .vimeo-embed-row {
      display: flex;
      justify-content: center;
    }
  }
</style>
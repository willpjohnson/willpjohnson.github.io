<template lang="pug">
.grid-container
  .grid
    .grid-row
      VimeoEmbed(:id="148430902")
      VimeoEmbed(:id="165378387")
    .grid-row
      VimeoEmbed(:id="110213267")
      VimeoEmbed(:id="110212920")
</template>

<script>
  import VimeoEmbed from './vimeo-embed.vue';

  export default {
    components: { VimeoEmbed },
  }
</script>
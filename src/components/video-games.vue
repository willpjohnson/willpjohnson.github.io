<template lang="pug">
.vg-container
  .vimeo-embed-grid
    .vimeo-embed-row
      VimeoEmbed(:id="174053285")
      VimeoEmbed(:id="197982990")
  </template>
  
  <script>
    import VimeoEmbed from './vimeo-embed.vue';
  
    export default {
      components: { VimeoEmbed },
    }
  </script>
  
  <style scoped lang="scss">
    .vg-container {
      margin: 20px 0px;
  
      .vimeo-embed-row {
        display: flex;
        justify-content: center;
      }
    }
  </style>
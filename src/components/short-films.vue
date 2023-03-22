<template lang="pug">
.sf-container
  .vimeo-embed-grid
    .vimeo-embed-row
      VimeoEmbed(:id="219755414")
      VimeoEmbed(:id="148148000")
  </template>
  
  <script>
    import VimeoEmbed from './vimeo-embed.vue';
  
    export default {
      components: { VimeoEmbed },
    }
  </script>
  
  <style scoped lang="scss">
    .sf-container {
      margin: 20px 0px;
  
      .vimeo-embed-row {
        display: flex;
        justify-content: center;
      }
    }
  </style>
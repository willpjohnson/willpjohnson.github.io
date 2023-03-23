<template lang="pug">
.grid-container
  .grid
    .grid-row
      VimeoEmbed(:id="174053285")
      VimeoEmbed(:id="197982990")
  </template>
  
  <script>
    import VimeoEmbed from './vimeo-embed.vue';
  
    export default {
      components: { VimeoEmbed },
    }
  </script>
<template lang="pug">
.sf-container
  .vimeo-embed-grid
    .vimeo-embed-row
      VimeoEmbed(:id="219755414")
        PostIt(text="Password is 'Nomads2017'")
      VimeoEmbed(:id="148148000")
  </template>
  
  <script>
    import VimeoEmbed from './vimeo-embed.vue';
    import PostIt from './post-it.vue';
  
    export default {
      components: { VimeoEmbed, PostIt },
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
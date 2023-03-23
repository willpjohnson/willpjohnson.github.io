<template lang="pug">
.grid-container
  .grid
    .grid-row
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
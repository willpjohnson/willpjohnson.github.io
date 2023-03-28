<template lang="pug">
.grid-container
  PostIt(
    :top="4"
    :right="80"
    text="A collection of a capella moments from film and TV that I thought could use some help"
  )
  .grid
    .grid-row
      VimeoEmbed(:id="365272563")
    .grid-row
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
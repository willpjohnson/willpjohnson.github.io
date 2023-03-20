<template lang="pug">
.vimeo-embed
  div(style="padding:56.25% 0 0 0;position:relative;")
    iframe(
      :src="src"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      style="position:absolute;top:0;left:0;width:100%;height:100%;"
      title="Nacho Libre (Encarnacion)"
    )
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        required: true,
      },
    },

    computed: {
      src() {
        return `https://player.vimeo.com/video/${this.id}?h=11f3c7b0f6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
      },
    },
  }
</script>

<style scoped lang="scss">
  .vimeo-embed {
    width: 40%;
    margin: 12px;
  }
</style>
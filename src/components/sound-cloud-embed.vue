<template lang="pug">
iframe(
  width="40%"
  height="450"
  scrolling="no"
  frameborder="no"
  allow="autoplay"
  :src="src"
)
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },

    computed: {
      src() {
        const url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/';
        let params = "&color=%230bd2d3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
        if (this.type === 'tracks') params += "&visual=true";
        return url + this.type + '/' + this.id + params;
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '../../public/colors.scss';
  iframe {
    margin: 12px;
  }
</style>


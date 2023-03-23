<template lang="pug">
iframe(
  :width="width"
  height="450"
  scrolling="no"
  frameborder="no"
  allow="autoplay"
  :src="src"
)
</template>

<script>
  export default {
    data() {
      return {
        onMobile: false,
      };
    },

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
      width() {
        if (this.$store.state.onMobile) {
          return '80%';
        }
        return '40%';
      },

      height() {
        if (this.$store.state.onMobile) {
          return '300';
        }
        return '450';
      },

      src() {
        const url = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/';
        let params = "&color=%230bd2d3&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";
        if (this.type === 'tracks' || this.$store.state.onMobile) params += "&visual=true";
        return url + this.type + '/' + this.id + params;
      },
    },

    mounted() {
      console.log(this.$store.state.onMobile)
    },

    methods: {
      resize() {
        this.onMobile = window.innerWidth <= 450;
        console.log(this.onMobile);
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


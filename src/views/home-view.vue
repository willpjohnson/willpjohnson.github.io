<template lang="pug">
.home
  .sub-nav
    .link(
      v-for="tab in tabs"
      :key="tab.name"
      @click="scrollTo(tab.ref)"
    ) {{  tab.name  }}
  .parent-container
    SoundCloud(ref="soundcloud")
    .border
    LiveTheater(ref="theater")
    .border
    ScenesIWishIScored(ref="scenes")
</template>

<script>
import SoundCloud from '../components/sound-cloud.vue';
import LiveTheater from '../components/live-theater.vue';
import ScenesIWishIScored from '../components/scenes-i-wish-i-scored.vue';

export default {
  name: 'HomeView',

  components: {
    SoundCloud,
    LiveTheater,
    ScenesIWishIScored,
  },

  computed: {
    tabs() {
      return [
        { name: 'Soundcloud', ref: 'soundcloud' },
        { name: 'Theater', ref: 'theater' },
        { name: 'Scenes I Wish I Scored', ref: 'scenes' },
      ];
    },
  },

  methods: {
    scrollTo(ref) {
      const el = this.$refs[ref].$el;
      el.scrollIntoView();
    },
  },
}
</script>

<style scoped lang="scss">
  @import '../../public/colors.scss';

  .home {
    display: flex;
  }
  .sub-nav {
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 80px);
    max-height: calc(100% - 80px);
    max-width: 100px;
    background-color: $white;
    box-shadow:
      0 0 7px $white,
      0 0 10px $white,
      0 0 21px $white,
      0 0 42px $white;

    margin-right: 12px;
  }

  .parent-container {
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  .border {
    width: 80%;
    height: 2px;
    margin: 36px 0px;
    margin-left: 10%;
    
    background-color: $cyan;
    box-shadow:
      0 0 7px $cyan,
      0 0 10px $cyan,
      0 0 21px $cyan,
      0 0 42px $cyan,
      0 0 82px $white,
      0 0 92px $white,
      0 0 102px $white,
      0 0 151px $white;
  }
</style>

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
</template>

<script>
import SoundCloud from '../components/sound-cloud.vue';
import LiveTheater from '../components/live-theater.vue';

export default {
  name: 'HomeView',

  components: {
    SoundCloud,
    LiveTheater,
  },

  computed: {
    tabs() {
      return [
        { name: 'Soundcloud', ref: 'soundcloud' },
        { name: 'Theater', ref: 'theater' },
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
    // padding: 20px;
  }
  .sub-nav {
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 80px);
    max-height: calc(100% - 80px);
    background-color: $white;

    margin-right: 12px;
  }

  .parent-container {
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow-y: scroll;
  }

  .border {
    width: 80%;
    height: 2px;
    margin: 24px 0px;
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

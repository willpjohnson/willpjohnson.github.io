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
      console.log(ref);
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
</style>

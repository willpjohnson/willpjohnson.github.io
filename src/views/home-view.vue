<template lang="pug">
.home
  .sub-nav
    .link(
      v-for="tab in tabs"
      :key="tab.name"
      :class="linkClass(tab.ref)"
      @click="scrollTo(tab.ref)"
    ) {{  tab.name  }}
  .parent-container(ref="container")
    AdSpots(ref="ads")
    .border
    ShortFilms(ref="films")
    .border
    VideoGames(ref="games")
    .border
    SoundCloud(ref="soundcloud")
    .border
    LiveTheater(ref="theater")
    .border
    ScenesIWishIScored(ref="scenes")
</template>

<script>
import ScrollDetector from '../scroll.js';
import AdSpots from '../components/ad-spots.vue';
import ShortFilms from '../components/short-films.vue';
import VideoGames from '../components/video-games.vue';
import SoundCloud from '../components/sound-cloud.vue';
import LiveTheater from '../components/live-theater.vue';
import ScenesIWishIScored from '../components/scenes-i-wish-i-scored.vue';

export default {
  name: 'HomeView',

  mixins: [ ScrollDetector ],

  components: {
    AdSpots,
    ShortFilms,
    VideoGames,
    SoundCloud,
    LiveTheater,
    ScenesIWishIScored,
  },

  data() {
    return {
      focusedRef: null,
      tabs: [
        { name: 'Advertising', ref: 'ads' },
        { name: 'Short Films', ref: 'films' },
        { name: 'Video Games', ref: 'games' },
        { name: 'Soundcloud', ref: 'soundcloud' },
        { name: 'Theater', ref: 'theater' },
        { name: 'Scenes I Wish I Scored', ref: 'scenes' },
      ],
      containerHeight: null,
      containerScrollHeight: null,
    };
  },

  mounted() {
    this.$refs.container.onscroll = this.onScroll;
    this.getSizeOfContainerAndPositionsOfRefs();
    window.onresize = this.getSizeOfContainerAndPositionsOfRefs;
    this.focusedRef = this.tabs[0].ref;
  },

  methods: {
    linkClass(ref) {
      if (this.focusedRef === ref) {
        return 'selected';
      }
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
    margin-left: 24px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 80px);
    max-height: calc(100% - 80px);
    max-width: 100px;
    border-radius: 8px;
    box-shadow:
      0 0 7px $cyan,
      0 0 10px $cyan,
      0 0 21px $white;

    margin-right: 12px;
  }

  .parent-container {
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
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

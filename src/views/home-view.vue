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

  data() {
    return {
      closestRef: null,
      tabs: [
        { name: 'Soundcloud', ref: 'soundcloud' },
        { name: 'Theater', ref: 'theater' },
        { name: 'Scenes I Wish I Scored', ref: 'scenes' },
      ],
    };
  },

  mounted() {
    const container = this.$refs.container;
    container.onscroll = this.onScroll;
    this.tabs.forEach((tab) => {
      const top = this.$refs[tab.ref].$el.offsetTop;
      const height = this.$refs[tab.ref].$el.offsetHeight;
      const middle = top + (height / 2);
      tab.position = middle;
    });
    this.closestRef = this.tabs[0].ref;
  },

  methods: {
    scrollTo(ref) {
      const el = this.$refs[ref].$el;
      el.scrollIntoView();
    },

    onScroll() {
      const container = this.$refs.container;
      const containerHeight = container.offsetHeight;
      const scrollTop = container.scrollTop;
      const middleOfScreen = scrollTop + (containerHeight / 2);

      let closestTab = { ref: null, dist: -1 };
      this.tabs.forEach((tab) => {
        const dist = Math.abs(middleOfScreen - tab.position);
        if (closestTab.dist < 0) {
          closestTab = { ref: tab.ref, dist };
        } else {
          if (closestTab.dist > dist) closestTab = { ref: tab.ref, dist };
        }
      });
      this.closestRef = closestTab.ref;
    },

    linkClass(ref) {
      if (this.closestRef === ref) {
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

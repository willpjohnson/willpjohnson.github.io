<template lang="pug">
.home
  .sub-nav
    .link(
      v-for="tab in tabs"
      :key="tab.name"
    ) {{  tab.name  }}
  component(
    :is="activeTab.comp"
  )
</template>

<script>
import { markRaw } from 'vue';
import LiveTheater from '../components/live-theater.vue';

export default {
  name: 'HomeView',

  data() {
    return {
      activeTabIdx: 0,
      liveTheater: markRaw(LiveTheater),
    };
  },

  computed: {
    tabs() {
      return [
        { name: 'Theater', comp: this.liveTheater },
      ];
    },

    activeTab() {
      return this.tabs[this.activeTabIdx];
    },
  },
}
</script>

<style scoped lang="scss">
  @import '../../public/colors.scss';
  .sub-nav {
    width: calc(100% - 40px);
    padding: 20px;
    background-color: $white;

    display: flex;
    justify-content: space-between;
  }
</style>

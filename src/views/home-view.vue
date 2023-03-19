<template lang="pug">
.home
  .sub-nav
  component(
    :is="liveTheater"
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
        this.liveTheater,
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
    background-color: $cyan;

    display: flex;
    justify-content: space-between;
  }
</style>

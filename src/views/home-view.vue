<template lang="pug">
.home
  .sub-nav
    .link(
      v-for="tab in tabs"
      :key="tab.name"
      @click="scrollTo(tab.ref)"
    ) {{  tab.name  }}
  .parent-container
    LiveTheater(ref="theater")
</template>

<script>
import LiveTheater from '../components/live-theater.vue';

export default {
  name: 'HomeView',

  components: {
    LiveTheater,
  },

  computed: {
    tabs() {
      return [
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
    height: 100%;
    padding: 20px;
  }
  .sub-nav {
    height: calc(100% - 40px);
    padding: 20px;
    background-color: $white;

    margin-right: 12px;
  }

  .parent-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
</style>

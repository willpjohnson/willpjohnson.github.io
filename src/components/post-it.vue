<template lang="pug">
.post-it(
  @dblclick="close"
  :style="{ top: `${top}px`, right: `${right}px`, display: display }"
)
  .close(@click="close") &#10007
  div {{ text }}
</template>

<script>
  export default {
    props: {
      top: {
        type: Number,
        default: 0, 
      },
      right: {
        type: Number,
        default: 0,
      },
      text: {
        type: String,
        default: null,
      },
    },

    data() {
      return {
        display: null,
      };
    },

    methods: {
      close() {
        this.display = 'none';
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '../../public/colors.scss';
  .post-it {
    position: absolute;
    cursor: pointer;
    background-color: $cyan;
    width: 120px;
    height: 120px;
    padding: 20px;
    transform: rotate(-8deg);
    box-shadow: -4px 4px 4px $black;

    .close {
      position: absolute;
      top: 4px;
      left: 4px;
    }
    .close:hover {
      color: $white;
    }
  }
  .post-it:hover {
    transform: rotate(-8deg) scale(1.01, 1.01);
  }
</style>
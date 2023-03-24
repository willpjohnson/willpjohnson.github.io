<template lang="pug">
.theater-container
  .theater-piece(
    v-for="(asset, idx) in assets"
    :key="idx"
  )
    img.image(:src="asset.img")
    img.audio-button(
      v-if="currentlyPlayingAudioKey === asset.key"
      src="../../public/images/pause-button.svg"
      @click="triggerAudio(asset.key)"
    )
    img.audio-button(
      v-else
      src="../../public/images/play-button.svg"
      @click="triggerAudio(asset.key)"
    )
</template>

<script>
  import ttmnAud from '../../public/audio/ttmn.mp3';
  import ocvAud from '../../public/audio/ocv.mp3';
  import ttmnImg from '../../public/images/ttmn.jpeg';
  import ocvImg from '../../public/images/ocv.jpeg';

  export default {
    data() {
      return {
        currentlyPlayingAudio: null,
        currentlyPlayingAudioKey: null,
      };
    },

    computed: {
      assets() {
        return [
          { key: 'ttmn', aud: ttmnAud, img: ttmnImg },
          { key: 'ocv', aud: ocvAud, img: ocvImg },
        ];
      },
    },

    methods: {
      triggerAudio(key) {
        if (this.currentlyPlayingAudio) {
          this.currentlyPlayingAudio.pause();
          this.currentlyPlayingAudio = null;
          if (this.currentlyPlayingAudioKey !== key) {
            this.playAudio(key);
          } else {
            this.currentlyPlayingAudioKey = null;
          }
        } else {
          this.playAudio(key);
        }
      },

      playAudio(key) {
        this.currentlyPlayingAudioKey = key;
        const aud = this.assets.find(f => f.key === key).aud;
        this.currentlyPlayingAudio = new Audio(aud);
        this.currentlyPlayingAudio.play();
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '../../public/colors.scss';

  $button-size: 80px;
  .theater-container{
    display: flex;
    justify-content: space-around;
    margin: 20px 0px;
    @media only screen and (max-width: $mobile-width) {
      flex-direction: column;
    }
    .theater-piece {
      position: relative;
      .image {
        height: 400px;
        @media only screen and (max-width: $mobile-width) {
          height: auto;
          max-width: 60%;
          width: 60%;
          margin: 8px;
        }
      }
    }
    .theater-piece:hover {
      transform: translate(-2px, -2px);
    }
    .theater-piece:hover .image {
      opacity: 0.5;
    }
    .theater-piece .audio-button {
      width: $button-size;
      cursor: pointer;
      position: absolute;
      top: calc(50% - #{$button-size / 2});
      left: calc(50% - #{$button-size / 2});
      visibility: hidden;
    }
    .theater-piece:hover .audio-button {
      visibility: visible;
    }
  }
</style>
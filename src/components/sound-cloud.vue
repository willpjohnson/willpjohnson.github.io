<template lang="pug">
.grid-container
  .sc-icon(@click="openSoundcloud")
    img(src="../../public/images/soundcloud.svg")
  .highlight-grid
    .grid-row
      SoundCloudEmbed(
        type="playlists"
        id="1515606427"
      )
      SoundCloudEmbed(
        type="playlists"
        id="607152600"
      )
    .grid-row
      SoundCloudEmbed(
        type="playlists"
        id="45387503"
      )
      SoundCloudEmbed(
        type="tracks"
        id="1356773245"
      )
</template>

<script>
  import SoundCloudEmbed from './sound-cloud-embed.vue';

  export default {
    components: { SoundCloudEmbed },

    methods: {
      openSoundcloud() {
        window.open('https://soundcloud.com/willpjohnson', '_blank');
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../public/colors.scss';

  $diameter: 160px;
  .sc-icon {
    cursor: pointer;
    margin: 0 auto;
    width: $diameter * 1.5;
    height: $diameter;
    background-color: white;
    border-radius: $diameter;
    box-shadow:
      0 0 7px $cyan,
      0 0 10px $cyan,
      0 0 21px $cyan,
      0 0 42px $cyan;

    img {
      width: $diameter * .75;
      margin: $diameter / 12;
    }
  }
  .sc-icon:hover {
    transform: translate(-1px, -1px);
  }

  .highlight-grid {
    margin-top: 24px;
    .highlight-row {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>

<template lang="pug">
.sc-container
  .sc-icon(@click="openSoundcloud")
    img(src="../../public/images/soundcloud.svg")
  .highlight-grid
    .highlight-row
      SoundCloudEmbed(
        type="playlists"
        id="1515606427"
      )
      SoundCloudEmbed(
        type="playlists"
        id="607152600"
      )
    .highlight-row
      SoundCloudEmbed(
        type="playlists"
        id="1235753893"
      )
      SoundCloudEmbed(
        type="tracks"
        id="1356773245"
      )
    .highlight-row
      SoundCloudEmbed(
        type="tracks"
        id="160420227"
      )
      SoundCloudEmbed(
        type="playlists"
        id="45387503"
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
  .sc-container {
    margin: 20px 0px;
  }

  $diameter: 160px;
  .sc-icon {
    cursor: pointer;
    margin: 0 auto;
    width: $diameter * 1.5;
    height: $diameter;
    background-color: white;
    border-radius: $diameter;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

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

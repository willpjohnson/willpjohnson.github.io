<template lang="pug">
.about
  SelfPortrait
  .bio-and-contact
    .bio
      span My name is Will and I am a New York City based composer and producer. 
      span I have written music for ads, video games, short films, and theater pieces. 
      span I've worked with music houses 
      a.link(
        href="http://www.gimmebutter.com/"
        target="_blank"  
      ) Butter
      span , 
      a.link(
        href="http://www.jinglepunks.com/"
        target="_blank"  
      ) Jingle Punks
      span , and 
      a.link(
        href="http://www.mophonics.com/"
        target="_blank"  
      ) Mophonics
      span .
    ContactForm
</template>

<script>
  import SelfPortrait from '../components/self-portrait.vue';
  import ContactForm from '../components/contact-form.vue';

  export default {
    components: { SelfPortrait, ContactForm },
  }
</script>

<style scoped lang="scss">
  @import '../../public/colors.scss';
  .about {
    padding: 20px;
    display: flex;

    @media only screen and (max-width: $mobile-width) {
      flex-direction: column;
      align-items: center;
      overflow-y: scroll;
    }
    .bio-and-contact {
      .bio {
        width: 40vw;
        font-size: 24px;
        color: $white;
        margin-bottom: 24px;

        @media only screen and (max-width: $mobile-width) {
          width: 100%;
          margin-top: 40px;
        }
      }
    }

  }
</style>

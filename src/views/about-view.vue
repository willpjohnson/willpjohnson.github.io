<template lang="pug">
.about
  .images
    img.photo(
      alt="Baby Will"
      src="../assets/young-will.jpg"
    )
    img.photo(
      alt="Adult Will"
      src="../assets/will.jpg"
    )
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
  import ContactForm from '../components/contact-form.vue';

  export default {
    components: { ContactForm },
  }
</script>

<style scoped lang="scss">
  @import '../../public/colors.scss';
  .about {
    padding: 20px;
    display: flex;
    .images {
      display: flex;
      .photo {
        object-fit: cover;
        height: 50vh;
        margin-right: 2vw;
      }
    }
    .bio-and-contact {
      .bio {
        width: 40vw;
        font-size: 24px;
        color: $white;
        margin-bottom: 24px;
      }
    }

  }
</style>

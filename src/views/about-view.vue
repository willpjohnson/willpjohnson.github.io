<template lang="pug">
.about
  .bio
    span My name is Will and I am a New York City based composer and producer. 
    span I have written music for ads, video games, short films, and theater pieces. 
    span I've worked with music houses 
    a(href="http://www.gimmebutter.com/") Butter
    span , 
    a(href="http://www.jinglepunks.com/") Jingle Punks
    span , and 
    a(href="http://www.mophonics.com/") Mophonics
    span .
</template>

<style scoped lang="scss">
  @import '../../public/colors.scss';
  .about {
    display: flex;

    .bio {
      width: 40vw;
      font-size: 24px;
    }
  }
</style>

<template lang="pug">
.images
  img.photo.hidden-on-mobile(
    alt="Baby Will"
    src="../assets/young-will.jpg"
  )
  img.photo(
    alt="Adult Will"
    src="../assets/will.jpg"
  )
</template>

<style scoped lang="scss">
  @import '../../public/colors.scss';
  .images {
    display: flex;
    .photo {
      object-fit: cover;
      height: 50vh;
      margin-right: 2vw;
      border: 1px solid $cyan;
      border-radius: 8px;
      box-shadow:
        0 0 7px $cyan,
        0 0 10px $cyan,
        0 0 21px $white;
    }
  }
</style>
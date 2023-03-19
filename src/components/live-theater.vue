<template lang="pug">
.theater-container
  img.image.hover(
    src="../../public/images/ttmn.jpeg"
  )
  img.image.hover(
    src="../../public/images/ocav.jpeg"
  )
</template>

<style scoped lang="scss">
  .theater-container{
    display: flex;
    justify-content: space-around;

    .image {
      height: 400px;
    }
  }
</style>
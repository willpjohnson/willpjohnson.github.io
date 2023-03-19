<template lang="pug">
nav
  img.logo(
    alt="Will Johnson logo"
    src="./assets/will-logo.png"
  )
  router-link(
    to="/"
  ) Home
  router-link(
    to="/about"
  ) About
router-view
</template>

<style scoped lang="scss">
@import '../public/colors.scss';

nav {
  display: flex;
  align-items: center;
  padding: 20px;
  height: 120px;
  background-color: $yellow;
}

nav .logo {
  height: 80px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

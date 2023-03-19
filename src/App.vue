<template lang="pug">
nav
  img.logo(
    alt="Will Johnson logo"
    src="./assets/will-logo.png"
  )
  .links
    router-link(
      to="/"
    ) Home
    router-link(
      to="/about"
    ) About
router-view.router-view
</template>

<style scoped lang="scss">
@import '../public/colors.scss';

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 120px;
  background-color: $yellow;
}

nav .links {
  display: flex;
}

nav .logo {
  height: 80px;
}

nav a {
  font-weight: bold;
  color: $pink;
}

nav a.router-link-exact-active {
  color: $purple;
}
</style>

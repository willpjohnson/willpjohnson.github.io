<template lang="pug">
nav
  img.logo(
    alt="Will Johnson logo"
    src="./assets/will-logo.png"
  )
  .links
    router-link(
      to="/"
    ) Music
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
  background-color: $cyan;
}

nav .links {
  display: flex;
}

nav .logo {
  height: 80px;
}

nav a {
  font-weight: bold;
  font-size: 24px;
  color: $pink;
}
nav a:not(:last-child) {
  margin-right: 8px;
}

nav a.router-link-exact-active {
  color: white;
}
</style>

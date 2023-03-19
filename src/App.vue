<template lang="pug">
nav
  img.logo(
    alt="Will Johnson logo"
    src="./assets/will-logo.png"
  )
  .links
    router-link.link(
      to="/"
    ) Music
    router-link.link(
      to="/about"
    ) About
.border
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

.border {
  width: 100%;
  height: 2px;
  background-color: $white;
  box-shadow:
    0 0 7px $white,
    0 0 10px $white,
    0 0 21px $white,
    0 0 42px $cyan,
    0 0 82px $cyan,
    0 0 92px $cyan,
    0 0 102px $cyan,
    0 0 151px $cyan;
}
</style>

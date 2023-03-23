<template lang="pug">
nav
  .header-logo
    .will William
    .johnson Johnson
  .links
    router-link.link(
      to="/"
    ) Music
    router-link.link(
      to="/about"
    ) About
.border.hidden-on-mobile
router-view.router-view
</template>

<style scoped lang="scss">
@import '../public/colors.scss';

$nav-height: 120px;
$nav-padding: 20px;
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: $nav-padding;
  width: calc(100vw - #{$nav-padding * 2});
  height: $nav-height;
  min-height: $nav-height;
  background-color: $black;
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

.header-logo {
  margin-left: 12px;
  text-align: start;
  font-family: stillTime;
  font-size: 48px;
  color: $pink;
  text-shadow:
    0 0 1px $white,
    0 0 3px $white,
    0 0 5px $white,
    0 0 10px $white,
    0 0 20px $pink,
    0 0 23px $pink,
    0 0 25px $pink,
    2px 2px $black,
    4px 4px $cyan;
  
  .johnson { margin-left: 32px; }
}

$border-height: 4px;
.border {
  width: 100%;
  height: $border-height;
  background-color: $cyan;
  box-shadow:
    0 0 7px $cyan,
    0 0 10px $cyan,
    0 0 21px $cyan,
    0 0 42px $cyan,
    0 0 82px $white,
    0 0 92px $white,
    0 0 102px $white,
    0 0 151px $white;
}

$neg-router-view-height: $nav-height + $nav-padding + $nav-padding + $border-height;
.router-view {
  height: calc(100% - #{$neg-router-view-height});
  max-height: calc(100% - #{$neg-router-view-height});
}
</style>

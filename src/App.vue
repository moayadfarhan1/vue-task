<template>
  <div id="app">
    <sideComponent :opened="isOpened" />
    <topComponent @openMenu="openMenu" />
    <bottomComponent />
    <div class="overlay" v-if="isOpened" @click="openMenu"></div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      isOpened: false,
    };
  },
  components: {
    topComponent:  () => import("./components/topComponent/topComponent"),
    bottomComponent:  () => import("./components/bottomComponent/bottomComponent"),
    sideComponent:  () => import("./components/sideComponent/sideComponent"),
  },
  methods: {
    openMenu() {
      this.isOpened = !this.isOpened;
    },
  },
  created() {},
};
</script>

<style lang="scss">
@import "./assets/scss/common";
</style>

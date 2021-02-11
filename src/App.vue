<template>
  <div id="app">
    <sideComponent :opened="isOpened" />
    <topComponent @openMenu="openMenu" />
    <bottomComponent />
    <!-- <div class="overlay" v-if="isOpened" @click="openMenu"></div> -->
  </div>
</template>
<script>
const bottomComponent = () =>
  import("./components/bottomComponent/bottomComponent");
const topComponent = () => import("./components/topComponent/topComponent");
const sideComponent = () => import("./components/sideComponent/sideComponent");
export default {
  name: "App",
  data() {
    return {
      isOpened: false,
    };
  },
  components: {
    topComponent: topComponent,
    bottomComponent: bottomComponent,
    sideComponent: sideComponent,
  },
  methods: {
    openMenu() {
      console.log('inn');
      this.isOpened = !this.isOpened;
    },
  },
  created() {},
};
</script>

<style lang="scss">
@import "./assets/scss/common";
</style>

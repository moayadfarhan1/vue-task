<template>
  <div id="app">
    <meta name="Description" content="Moayad Task" />
    <topComponent />
    <bottomComponent />
  </div>
</template>
<script>
const bottomComponent = () => import('./components/bottomComponent/bottomComponent')
const topComponent = () => import('./components/topComponent/topComponent')
export default {
  name: "App",
  data() {
    return {};
  },
  components: { topComponent:topComponent, bottomComponent:bottomComponent },
  methods: {},
  created() {},
};
</script>

<style lang="scss">
@import "./assets/scss/common";
</style>

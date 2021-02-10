<template>
  <div id="app">
    <topComponent/>
    <bottomComponent/>
  </div>
</template>
<script>
import bottomComponent from './components/bottomComponent/bottomComponent'

import topComponent from './components/topComponent/topComponent'

export default {
  name: "App",
  data() {
    return {
    };
  },
  components: {topComponent,bottomComponent},
  methods: {

  },
  created() {
  },
};
</script>

<style lang="scss">
@import "./assets/scss/common";
</style>

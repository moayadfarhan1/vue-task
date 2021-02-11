<template>
  <div id="side-menu" class="side-nav" :class="{ sidenavopen: opened }">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contact</a>
  </div>
</template>
<script>
export default {
  props: ["opened"],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
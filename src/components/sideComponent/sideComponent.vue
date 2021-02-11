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
<style scoped>
.enter {
  transform: translateX(100%);
}
.enter-to {
  transform: translateX(0);
}
.slide-enter-active {
  position: absolute;
}

.leave {
  transform: translateX(0);
}
.leave-to {
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 750ms ease-in-out;
}
</style>
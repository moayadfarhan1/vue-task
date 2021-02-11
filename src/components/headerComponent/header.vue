<template>
  <!-- start Header -->
  <header class="header">
    <!-- Logo -->
    <a rel="logo" href="/" class="logo">
      <img src="@/assets/images/NT.svg" alt="logo" />
    </a>
    <!-- End Logo -->
    <!-- Action -->
    <div class="d-flex align-center">
      <a href="/" rel="icon">
        <img
          src="@/assets/images/search-solid.svg"
          class="search-icon"
          alt="Search Logo"
        />
      </a>
      <button type="button" class="btn" @click="openMenu">Menu</button>
    </div>
    <!-- End Action -->
  </header>
  <!-- End Header -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
    },
  },
  mounted() {},
};
</script>
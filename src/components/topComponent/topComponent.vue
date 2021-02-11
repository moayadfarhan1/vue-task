<template>
  <section class="top-section bg-image">
    <div
      class="container container-sm container-md container-lg position-relative top-section-container"
    >
      <headerComponent  @openMenu="openMenu"/>
      <div class="d-flex flex-column justify-center about-trips">
        <h1 class="title">Night Trips</h1>
        <p class="sub-title">WE GOT TRIPS FOR THE TRIPPSTER IN YOU</p>
        <p>
          Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut
          venenatis, volutpat lorem ut faucibus mauris, quisque. Integer gravida
          sed quis congue. Vel risus, arcu a viverra leo id pulvinar ultricies.
          Enim in in in pulvinar nulla sollicitudin. Ullamcorper.
        </p>
      </div>
      <div class="social-links">
        <a
          href="/"
          title="twitter"
          rel="icon"
        >
          <img src="@/assets/images/twitter.svg" alt="twitter" srcset="" />
        </a>
        <a
          href="/"
          title="instagram"
          rel="icon"
        >
          <img
            width="20px"
            src="@/assets/images/instagram.svg"
            alt="instagram"
            srcset=""
          />
        </a>
        <a
          href="/"
          title="facebook"
          rel="icon"
        >
          <img src="@/assets/images/facebook.svg" alt="facebook" srcset="" />
        </a>
      </div>
      <div class="scroll-container">
        <span class="scroll-text">scroll</span>
      </div>
    </div>
    <div class="divider"></div>
  </section>
</template>
<script>
import headerComponent from "../headerComponent/header";
export default {
  components: {
    headerComponent,
  },
  data() {
    return {};
  },
  methods: {
    openMenu(){
      this.$emit("openMenu");
    }
  },
  mounted() {},
};
</script>
<template>
  <section class="bottom-section bg-bottom">
    <div
      class="container container-sm container-md container-lg position-relative"
    >
      <div class="d-flex align-center flex-wrap header-bottom-section">
        <h2 class="title-2">Pick your trip</h2>
        <p class="sub-title">
          Our team put together some trips to you to discover, feel free to
          discover each of them.
        </p>
      </div>
      <tabComponent :tabContent="tabs" />
      
      <div class="social-links with-share">
        <div class="share-it">share it</div>
        <a href="http://" title="twitter" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/images/twitter.svg" alt="twitter" srcset="" />
        </a>
        <a href="http://" title="instagram" target="_blank" rel="noopener noreferrer">
          <img
            width="20px"
            src="@/assets/images/instagram.svg"
            alt="instagram"
            srcset=""
          />
        </a>
        <a href="http://" target="_blank" title="facebook" rel="noopener noreferrer">
          <img src="@/assets/images/facebook.svg" alt="facebook" srcset="" />
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import trips from "../../data.json";
import tabComponent from '../tabComponent/tabComponent'

export default {
  components: {
    tabComponent,
  },
  data() {
    return {
        tabs: trips
    };
  },
  methods: {},
  mounted() {},
};
</script>
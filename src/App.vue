<template>
  <div id="app">
    <section class="top-section bg-image">
      <div class="container container-sm container-md container-lg position-relative top-section-container">
        <!-- start Header -->
        <header class="header">
          <!-- Logo -->
          <a href="http://" target="_blank" class="logo">
            <img src="@/assets/images/NT.svg" alt="logo" />
          </a>
          <!-- End Logo -->
          <!-- Action -->
          <div class="d-flex align-center">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img
                src="@/assets/images/search-solid.svg"
                class="search-icon"
                alt="Search Logo"
              />
            </a>
            <button class="btn">Menu</button>
          </div>
          <!-- End Action -->
        </header>
        <!-- End Header -->
        <div class="d-flex flex-column justify-center about-trips">
          <h1 class="title">Night Trips</h1>
          <h3 class="sub-title">WE GOT TRIPS FOR THE TRIPPSTER IN YOU</h3>
          <p>
            Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut
            venenatis, volutpat lorem ut faucibus mauris, quisque. Integer
            gravida sed quis congue. Vel risus, arcu a viverra leo id pulvinar
            ultricies. Enim in in in pulvinar nulla sollicitudin. Ullamcorper.
          </p>
        </div>
          <div class="social-links">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/images/twitter.svg" alt="twitter" srcset=""/>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img width="20px" src="@/assets/images/instagram.svg" alt="twitter" srcset=""/>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="@/assets/images/facebook.svg" alt="twitter" srcset=""/>
            </a>
          </div>
          <div class="scroll-container">
            <span class="scroll-text">scroll</span>
          </div>
      </div>
      <div class="divider"></div>
    </section>
    <section class="bottom-section bg-bottom">
      <div class="container container-sm container-md container-lg">
        asdasdsa
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {},
  methods() {},
};
</script>

<style lang="scss">
@import "./assets/scss/container";
@import "./assets/scss/common";

html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "Larsseit";
  color: #fff;
  background-color: #011627;
}
@font-face {
  font-family: "Larsseit";
  src: url("./assets/fonts/Larsseit.eot");
  src: url("./assets/fonts/Larsseit.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/Larsseit.woff2") format("woff2"),
    url("./assets/fonts/Larsseit.woff") format("woff"),
    url("./assets/fonts/Larsseit.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Noe Display";
  src: url("./assets/fonts/NoeDisplay-Bold.eot");
  src: url("./assets/fonts/NoeDisplay-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/NoeDisplay-Bold.woff2") format("woff2"),
    url("./assets/fonts/NoeDisplay-Bold.woff") format("woff"),
    url("./assets/fonts/NoeDisplay-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
</style>

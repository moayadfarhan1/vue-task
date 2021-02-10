<template>
  <div id="app">
    <section class="top-section bg-image">
      <div
        class="container container-sm container-md container-lg position-relative top-section-container"
      >
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
            <img src="@/assets/images/twitter.svg" alt="twitter" srcset="" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img
              width="20px"
              src="@/assets/images/instagram.svg"
              alt="twitter"
              srcset=""
            />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/images/facebook.svg" alt="twitter" srcset="" />
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
        <div class="d-flex align-center flex-wrap header-bottom-section">
          <h2 class="title-2">Pick your trip</h2>
          <p class="sub-title">
            Our team put together some trips to you to discover, feel free to
            discover each of them.
          </p>
        </div>
        <div class="tabs" v-cloak>
          <ul class="d-flex">
            <li
              v-for="(tab, index) in tabs"
              v-bind:key="tab.id"
              :class="{ 'is-active': show == index }"
            >
              <a @click.prevent="show = index">{{ tab.tabTitle }}</a>
            </li>
          </ul>
        </div>
        <div class="tabs-content" v-cloak>
          <transition-group
            name="fade-up"
            target="div"
            appear
            @click.native="
              navigate($event);
              alerts($event);
            "
          >
            <div
              v-for="(tab, indexTab) in tabs"
              v-if="show == indexTab"
              :key="indexTab"
            >
              <div class="slider"
                v-for="(slider, indexSlider) in tab.slider"
                :key="indexSlider"
              >
                <div class="left-section">
                  <div class="img-slider">
                    <img :src="getUrl(slider.name)" alt="" srcset="">
                  </div>
                  <div class="slider-info">
                    <div class="slider-number">{{slider.num}}</div>
                    <div class="slider-title">{{slider.title}}</div>
                  </div>
                  <div class="slider-nav">
                      <button class="btn-slider prew"></button>
                      <button class="btn-slider next"></button>
                  </div>
                </div>
                <div class="right-section">
                    <div class="trip-title">
                      {{ tab.tabTitle }}
                    </div>
                    <div class="trip-desc">
                      <div>{{tab.desc1}}</div>
                      <div>{{tab.desc2}}</div>
                    </div>
                    

                    <button class="btn">SEE OUR LATEST OFFER</button>
                  </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import trips from "./data.json";
export default {
  name: "App",
  data() {
    return {
      show: 0,
      tabs: trips,
    };
  },
  components: {},
  methods: {
    navigate: function (e) {
      if (e.target.dataset.show) {
        e.preventDefault();
        this.show = e.target.dataset.show;
      }
    },
    alerts: function (e) {
      if (e.target.dataset.alert) {
        e.preventDefault();
        alert(e.target.dataset.alert);
      }
    },
    getUrl(imageName){
      console.log(imageName);
       return require("@/assets/images/" + imageName);
    }
  },
  created() {
    // console.log(this.tabs);
  },
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

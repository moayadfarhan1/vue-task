<template>
  <div>
    <div class="tabs" v-cloak>
      <ul class="d-flex">
        <li
          v-for="(tab, index) in tabContent"
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
          v-for="(tab, indexTab) in tabContent"
          v-if="show == indexTab"
          :key="indexTab"
        >
            <sliderComponent :sliderContent="tab.slider" :tabDesc="tab.desc" :tabDescSec="tab.desc2" :tabTitle="tab.tabTitle"/>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tabContent"],
  components: {
    sliderComponent: () =>import("../sliderComponent/sliderComponent"),
  },
  data() {
    return {
      show: 0,
    };
  },
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
  },
  mounted() {
  },
};
</script>
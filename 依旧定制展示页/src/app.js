import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);

import App from "./view/App.vue";




new Vue({
    el: "#app",
    render: h => h(App)
});
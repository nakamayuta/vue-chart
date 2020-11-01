import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css"; // add
import "bootstrap-vue/dist/bootstrap-vue.css"; // add
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

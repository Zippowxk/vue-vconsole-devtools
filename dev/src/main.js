import VConsole from "vconsole";
import vvp from 'vue-vconsole-devtools'
// import vvp from "./vue_plugin.min.js";
// import { initPlugin } from "./vue_plugin.esm.min.js";
import Vue from "vue";
import App from "./App.vue";
new VConsole();
// const vc = new VConsole();
console.log(vvp);
// vvp.initPlugin(vc);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");

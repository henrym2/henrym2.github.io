import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import "particles.js";
     
import {particleConfig} from "./particleConfig.js"

// eslint-disable-next-line no-undef
particlesJS('particles-js', particleConfig)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import './plugins/element.js'
import '../public/awe/css/font-awesome.min.css'
import $ from "./../public/jquery-3.2.1.min.js"
import axios from './utils/request'
// import '../mock'

Vue.prototype.$axios=axios;
Vue.prototype.$=$
Vue.config.productionTip = false
new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
// 使用swiper
Vue.use(VueAwesomeSwiper)
//全局注册$http为数据请求
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

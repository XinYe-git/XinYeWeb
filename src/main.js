import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'Gbyb8M7nwynpsP6aW7oGiRIlnKqtqsNu'
});
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')


//防止路由push多次点击出错
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

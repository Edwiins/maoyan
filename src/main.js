import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';



// import store from './store'
import "./assets/style/reset.scss"

import "./assets/font/iconfont.css"

import "amfe-flexible"
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router:router,
  store:store,
  render: h => h(App)
}).$mount('#app')

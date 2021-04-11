import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import Vuex from 'vuex'



//============================================//
//components
import compAbout from './components/about/about.vue'
import compHome from './components/home.vue'
import compUsers from './components/user.vue'

Vue.component('comp-about', compAbout);
Vue.component('comp-home', compHome)
Vue.component('comp-users', compUsers)
//==========================================//

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({ routes, mode: 'history' });

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

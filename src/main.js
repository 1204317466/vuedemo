import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
// import router from 'assets/js'
Vue.config.productionTip = false
Vue.use(VueRouter)
const home = () => import("views/home/home")
const cat = () => import("views/cat/cat")
const kind = () => import("views/kind/kind")
const my = () => import("./views/my/my")


const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/home',
      component:home
    },
    {
      path: '/cat',
      component:cat
    },
    {
      path: '/kind',
      component:kind
    },
    {
      path: '/my',
      component:my
    }
  ],
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

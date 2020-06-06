import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const home = () => import("../../views/home/home")
const cat = () => import("../../views/cat/cat")
const kind = () => import("../../views/kind/kind")
const my = () => import("../../views/my/my")
const  routers  = [
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
]

const router = new Router({
  routers,
  mode:'history'
})



export default router

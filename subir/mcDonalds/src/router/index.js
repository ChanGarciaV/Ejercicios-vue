import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../App.vue'
import Login from '../views/Login'
import McDonalds from '../views/McDonalds'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:Login 
    //() => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  
  {
    path: '/mcDonalds',
    name: 'McDonalds',
    component: McDonalds
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

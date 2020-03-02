import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/create',
    name: 'create',
    component: Edit
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Pedidos from '../views/Pedidos.vue'
import Catalogo from '../views/Catalogo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: Catalogo
  },
  {
    path: '/pedidos/:id',
    name: 'pedidos',
    component: Pedidos
  }
  
  
]

const router = new VueRouter({
  routes
})

export default router

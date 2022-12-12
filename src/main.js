import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from  './views/Login'
import Home from  './views/HomeView'
import About from  './views/AboutView'
import Catalogo from  './views/Catalogo'
import Pedidos from  './views/Pedidos'
import PedidosAdmin from  './views/PedidosAdmin'


//import router from './router'
//import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store(
  {
    state: {
      authenticatedU: false,
      authenticatedA: false,

    },
    mutations: {
      setAuthentication(state, status){
        state.authenticatedU = status;
      },
      setAuthenticationA(state, status){
        state.authenticatedA = status;
      }

    }
  }

);

const router = new VueRouter({
  routes:  [
    {
      path: '/',
      redirect:{
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) =>{
        if(store.state.authenticatedU == false){
          next('/login');
        }else{
          next()
        }
      }
    },
    
    {
      path: '/about',
      name: 'about',
      component: About,
      beforeEnter: (to, from, next) =>{
        if(store.state.authenticatedU == false){
          next('/login');
        }else{
          next()
        }
      }
    },
    
    {
      path: '/catalogo',
      name: 'catalogo',
      component: Catalogo,
      beforeEnter: (to, from, next) =>{
        if(store.state.authenticatedU == false){
          next('/login');
        }else{
          next()
        }
      }
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: Pedidos,
      beforeEnter: (to, from, next) =>{
        if(store.state.authenticatedU == false){
          next('/login');
        }else{
          next()
        }
      }
    },

    {
      path: '/pedidosadmin',
      name: 'pedidosadmin',
      component: PedidosAdmin,
      beforeEnter: (to, from, next) =>{
        if(store.state.authenticatedA == false){
          next('/login');
        }else{
          next()
        }
      }
    }

    
  ]
})

new Vue({
  
  vuetify,
  axios,
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

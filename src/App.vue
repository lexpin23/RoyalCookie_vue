<template>
  <v-app>
    <v-app-bar app color="#fd79a8" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../src/assets/RoyalCookieLogo2.png"
          transition="scale-transition" width="40" />

        <h2>Royal Cookie</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn v-for="(item, index) in rutas" :key="index" text @click="insertarRuta(item.ruta)">
        <span class="mr-2">{{ item.nombre }}</span>
      </v-btn>

          <ModalCarrito></ModalCarrito>
       
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>


import ModalCarrito from './components/ModalCarrito.vue';


export default {

  name: 'App',

  components: {
    ModalCarrito,
    

  },

  data() {
    return {

      rutas: [
        { nombre: 'Home', ruta: '/' },
        { nombre: 'About', ruta: '/acercade' },
        { nombre: 'Catalogo', ruta: '/catalogo' },
        { nombre: 'Pedidos', ruta: '/pedidos' },
      ],
      ModalCarrito: false,

    }

  },

  methods: {
    insertarRuta(ruta) {
      this.$router.push(ruta)
    }
  }
};
</script>

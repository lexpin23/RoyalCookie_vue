<template>
        <v-bottom-navigation app color="#F48FB1" dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../assets/RoyalCookieLogo2.png"
          transition="scale-transition" width="40" />

        <h2>Royal Cookie</h2>
      </div>

      <v-spacer></v-spacer>
    
    <v-btn v-for="(item, index) in rutas" :key="index" text @click="insertarRuta(item.ruta)">
        <span class="mr-2">{{ item.nombre }}</span>
    </v-btn>

    <v-btn v-on:click="logout()">Cerrar Sesión</v-btn>

      
          <ModalCarrito></ModalCarrito>

       
    </v-bottom-navigation>
</template>

<script>

import ModalCarrito from '../components/ModalCarrito.vue'

export default {

    components: {
        ModalCarrito
    },
    data() {
    return {

      rutas: [
        { nombre: 'Inicio', ruta: '/home' },
        { nombre: 'Nosotros', ruta: '/about' },
        { nombre: 'Catalogo', ruta: '/catalogo' },
        { nombre: 'Pedidos', ruta: '/pedidos' },
      ],
      ModalCarrito: false,

    }

  },

  methods: {
    insertarRuta(ruta) {
      this.$router.push(ruta)
    },
    logout(){
        this.$store.commit("setAuthentication", false)
        this.$router.replace({ name: "login"})
               
    }        
  }
}

</script>
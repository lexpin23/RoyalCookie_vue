<template>
  <v-app>
    <v-app-bar
      app
      color="#fd79a8"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/RoyalCookieLogo2.png"
          transition="scale-transition"
          width="40"
        />

      <h2>Royal Cookie</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-for = "(item, index) in rutas" :key = "index"
        text
        @click="insertarRuta(item.ruta)"
      >
        <span class="mr-2">{{item.nombre}}</span>
      </v-btn>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    rutas: [
      {nombre: 'Home', ruta: '/'},
      {nombre: 'About', ruta: '/about'},
      {nombre: 'Catalogo', ruta: '/catalogo'},
      {nombre: 'Pedidos', ruta: '/pedidos'},
    ]
  }),

  methods: {
    insertarRuta(ruta){
      this.$router.push(ruta)
    }
  }
};
</script>

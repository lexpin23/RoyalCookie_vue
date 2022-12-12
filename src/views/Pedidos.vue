<template>
  <div class="pedidos">
    <v-app>
      <BarraNavegacionVue></BarraNavegacionVue>
      <h1 class="text-center mt-5">Tus pedidos</h1>

      <CardsPedidos></CardsPedidos>
      <v-main>
        <router-view />
      </v-main>
    </v-app>


  </div>
</template>
  
<script>

import CardsPedidos from '../components/CardsPedidos.vue'
import BarraNavegacionVue from '@/components/BarraNavegacion.vue';

export default {
  name: 'pedidos',

  components: {
    CardsPedidos,
    BarraNavegacionVue
  },

  data() {
    return {

    }
  },

  methods: {

  }
}
</script>
<template>
  <div class="about">

    <v-app>
      <BarraNavegacionVue></BarraNavegacionVue>
      <h1>Esta es una página de Acerca de nosotros como empresa</h1>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
    

  </div>
</template>

<script>

import BarraNavegacionVue from '@/components/BarraNavegacion.vue';

export default {
    name: 'About',

    components: {
      BarraNavegacionVue

    },

    
  }

</script>

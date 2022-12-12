<template>
  <div>
    <v-app>
      <BarraNavegacionVue></BarraNavegacionVue>
    <HelloWorld></HelloWorld>
    <v-main>
      <router-view />
    </v-main>
  </v-app>


  </div>
   


</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  import BarraNavegacionVue from '@/components/BarraNavegacion.vue';


  export default {
    name: 'Home',

    components: {
      HelloWorld,
      BarraNavegacionVue

    },

    
  }
</script>

<style></style>

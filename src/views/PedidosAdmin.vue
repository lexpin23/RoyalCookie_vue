<template>

<div>
    <v-app>
      <BarraNavegacionAdminVue></BarraNavegacionAdminVue>
      <h1 class="text-center mt-5">Administrar pedidos</h1>
      <CardsPedidosAdmin></CardsPedidosAdmin>
    <v-main>
      <router-view />
    </v-main>
  </v-app>

    
</div>
</template>


<script>

    import CardsPedidosAdmin from '../components/TarjetasPedidosAdmin.vue'
    import BarraNavegacionAdminVue from '@/components/BarraNavegacionAdmin.vue'

    export default {
    name: 'pedidosadmin',

    components: {
      CardsPedidosAdmin,
      BarraNavegacionAdminVue
    },

    data () {
      return {
        
      }
    },

    methods:{
      
    }
  }
</script>
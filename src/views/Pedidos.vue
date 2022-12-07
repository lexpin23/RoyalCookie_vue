<template>
    <div class="pedidos">
      <h1 class="text-center mt-5">Tus pedidos</h1>

      <CardsPedidos></CardsPedidos>

    </div>
  </template>
  
  <script>

  import CardsPedidos from '../components/CardsPedidos.vue'
  export default {
    name: 'pedidos',

    components: {
      CardsPedidos
    },

    data () {
      return {
        
      }
    },

    methods:{
      
    }
  }
</script>
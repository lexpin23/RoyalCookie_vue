<template>

<div>
    <h2>Administrar pedidos</h2>

    <CardsPedidosAdmin></CardsPedidosAdmin>
</div>
</template>


<script>

    import CardsPedidosAdmin from '../components/CardsPedidosAdmin.vue'

    export default {
    name: 'pedidosadmin',

    components: {
      CardsPedidosAdmin
    },

    data () {
      return {
        
      }
    },

    methods:{
      
    }
  }
</script>
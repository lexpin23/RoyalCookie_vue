<template>
    <div class="about">
      <h1 class="text-center mt-5">ALERTAS</h1>
      <v-btn @click="visible()">Mostrar</v-btn>
      <appAlert v-if="success" type="success" mensaje="Esto es una alerta" @salir="success = $event"></appAlert>
      <appAlert v-if="error" type="error" mensaje="Esto es un error" @salir="error = $event"></appAlert>

    </div>
  </template>
  
  <script>
  import appAlert from '../components/alerts.vue'

  export default {
    name: 'pedidos',

    components: {
      appAlert
    },

    data () {
      return {
        success: false,
        error: false
      }
    },

    methods:{
      visible(){
        this.success = true;
        this.error =  true;
      }
    }
  }
</script>
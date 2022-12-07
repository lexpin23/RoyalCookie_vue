<template >
  <div id="body-inicio">
    <v-container class="d-flex justify-center mb-6">

    <h1 color="transparent" id="titulo" class="mt-5">Bienvenido a Royal Cookie</h1>
 

    </v-container>
    
   
     
  </div>
  
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      
    })
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Square+Peg&display=swap');

#body-inicio{
 
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/pastel-chocolate.jpg);
  position:absolute;
  z-index:1; 
  width:100%; 
  height:100%;

}

#titulo{
  font-family: 'Square Peg', cursive;
  font-size: 100px;
  color: #f8e2e9;
}
</style>

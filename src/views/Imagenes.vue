<template>
    <div>
        <h1>IMÁGENES</h1>
        <imagen :items="Items" />
    </div>
</template>

<script>

import imagen from '../components/imagen'

export default {

    name: 'Imagenes',

    components : {
        imagen
    },
    
    created(){
        this.cargarImagenes()
    },

    data(){
        return{
            Items : []
        }
    },

    methods: {
    cargarImagenes: async function(){
        try{
            const SETTING = {
                method : 'GET'
            }
            const URL = "https://picsum.photos/v2/list?page=2&limit=100";
            const DATA = await fetch(URL, SETTING);
            const JSON = await DATA.json();
            this.Items = JSON;

        }
        catch(err){
            console.log(err)
        }
    }
    }
    
}

</script>
<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="400px" max-height="450px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn dark v-bind="attrs" v-on="on">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>

                </template>
                <v-card>
                    <v-card-title class="grey lighten-2">
                        <span class="text-h5">{{ title }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            
                            <v-col>
                                <v-row>
                                    <v-row class="mt-5">
                                        <h2 class="mr-3">Cajas</h2>
                                    </v-row>
                                   
                                    <v-row>
                                        <v-btn type="button" v-if="counter < 0 ? counter = 0 : 'logrado'" v-on:click="counter -= 1">-</v-btn>
                                        <p class="ml-2 mr-2 mt-2">{{ counter }}</p>
                                        <v-btn v-on:click="counter += 1" class="mr-auto">+</v-btn>
                                    </v-row>
                                    
                                </v-row>

                                <v-row class="mt-3">
                                    <v-row class="mt-5">
                                        <h2>Total</h2>     
                                    </v-row>
                                </v-row>

                                <v-row class="mt-3">
                                    <v-row class="mt-5"><v-label>${{ (cajaB * counter)}}</v-label></v-row>
                                </v-row>
                            </v-col>

                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            Cerrar
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="agregarCarrito()">
                            Agregar al carrito
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['title'],
    name: 'ModalBollitos',

    data: () => ({
        dialog: false,
        counter: 1,
        
        cajaB: 40,
        info: ''
    }),

    methods: {
        getToppings(){
            

            // axios.get('https://api.nasa.gov/planetary/apod?api_key=Q3sdmUApwLSLHhNM3Mcd5A77yc3VcOAdfHWIxXRK')
            // .then(response => {
            //     console.log('===SUCCESS===')
            //     console.log(response)
            //     Object.entries(response.data).forEach(([key, value]) => {
            //         console.log(value.Toping)
            //         this.items.push(value.Toping)
            //     });
            // })
            // .catch(error => console.log(error))
        },

        agregarCarrito() {

            if (this.counter > 0) {
                alert('Se añadió al carrito')

                //Establecer valores en 0
                this.counter = 0
                this.dialog = false
            }
            else {

            }
        }
    },

    computed: {
    },

    created() {
        // this.getToppings()
    },

    watch: {

    }


}
</script>

<style>
#v-card-title {
    background-color: #ffffff9d;
}
</style>
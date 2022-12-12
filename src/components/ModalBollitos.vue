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

        <v-snackbar v-model="snackbar" :timeout="timeout">
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                    Cerrar
                </v-btn>
            </template>
        </v-snackbar>

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
        info: '',
        snackbar: false,
        text: 'Agregado al carrito',
        timeout: 2000,
    }),

    methods: {
        agregarCarrito() {

            if (this.counter > 0) {
                axios.post('https://royalback.herokuapp.com/api/AgregarCarrito', {
                    "idUser": 1,
                    "Cantidad": this.counter,
                    "idCatalogo": 3

                }).then((res) => {
                    const { data } = res;
                    console.log(data)
                    this.snackbar = true;

                }).catch((err) => {
                    console.log(err)
                })
                
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
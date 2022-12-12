<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="400px" max-height="450px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn dark v-bind="attrs" v-on="on">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>

                </template>
                <v-form  ref="form" lazy-validation>
                    <v-card>
                    <v-card-title class="grey lighten-2">
                        <span class="text-h5">{{ title }}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-col>
                                <v-row class="mt-3">
                                        <v-row class="">
                                            <h3 class="mr-3">Tamaño</h3>
                                        </v-row>
                                    </v-row>

                                    <v-row>
                                        <v-row class="mt-5">
                                            <v-radio-group id="radio-group" v-model="selectedOptionIdTam"
                                                :rules="[v => !!v || 'Debes elegir un tamaño']" required>
                                                <v-radio v-for="optionTam in optionsTam" :key="optionTam.id" :label="optionTam.label" :value="optionTam.id"></v-radio>
                                            </v-radio-group>
                                        </v-row>
                                    </v-row>


                                    <v-row class="">
                                        <v-row class="mt-3">
                                            <h3 class="mr-3">Estilo</h3>
                                        </v-row>
                                    </v-row>

                                    <v-row>
                                        <v-row class="mt-5">
                                            <v-radio-group id="radio-group" v-model="selectedOptionId"
                                                :rules="[v => !!v || 'Debes elegir un estilo']" required>
                                                <v-radio v-for="option in options" :key="option.id" :label="option.label" :value="option.id"></v-radio>
                                            </v-radio-group>
                                        </v-row>
                                    </v-row>

                                
                                <v-row class="">
                                    <v-row class="mt-3">
                                        <h3 class="mr-3">Sabor</h3>
                                    </v-row>
                                </v-row>
                                
                                <v-row>
                                    <v-row class="mt-5">
                                        <v-radio-group id="radio-group"  :rules="[v => !!v || 'Debes elegir un sabor']" required>
                                            <v-radio label="Vainilla" value="radio-1">Vainilla</v-radio>
                                            <v-radio label="Chocolate" value="radio-2">Chocolate</v-radio>
                                            <v-radio label="Tres leches" value="radio-3">Tres leches</v-radio>
                                        </v-radio-group>
                                    </v-row>
                                </v-row>

                                <v-row class="mt-3">
                                    <v-row class="mt-5">
                                        <h2>Total</h2>
                                    </v-row>
                                </v-row>

                                <v-row class="mt-3">
                                    <v-row class="mt-5">
                                        <v-label>$</v-label>
                                    </v-row>
                                </v-row>
                            </v-col>

                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">
                            Cerrar
                        </v-btn>
                        <v-btn color="blue darken-1" text class="mr-4" @click="validate()" >
                            Agregar al carrito
                        </v-btn>
                    </v-card-actions>
                </v-card>
                </v-form>

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

    data: () => ({
        dialog: false,
        checkbox: false,
        name: '',

        selectedOptionIdTam: null,
        optionsTam:[
            { id: 1, label: 'Chico'},
            { id: 2, label: 'Mediano'},
        ],
        selectedOptionId: null,
        options: [
            { id: 1, label: 'Esponjoso'},
            { id: 2, label: 'Mantequilla'},
        
        ],
        snackbar: false,
        text: 'Agregado al carrito',
        timeout: 2000
    }),

    methods: {
        validate () {
            this.$refs.form.validate() ? this.agregarCarrito() : console.log('campos obligatorios')
        },
        reset() {
            this.$refs.form.reset()
        },
        agregarCarrito(){
            axios.post('https://royalback.herokuapp.com/api/AgregarPasteles', {
                    "idUser": 1,
                    "Tamaño": this.selectedOptionIdTam == 1 ? 'Chico' : 'Mediano',
                    "Estilo": this.selectedOptionId == 1 ? 'Esponjoso' : 'Mantequilla',
                    "Fecha": this.date,
                    "Descripcion": '',
                    "Imagen": '',
                    "idProd": 1
            }).then((res) => {
                const { data } = res;
                
                this.snackbar = true;
                this.dialog = false
                this.reset()
                

            }).catch((err) => {
                console.log(err)
            })
        }
    },
    watch: {

    }


}
</script>

<style>
#v-card-title {
    background-color: #ffffff9d;
}

.tamanio{
    margin-top: 18px;
}

#radio-group{
    margin-top: -10px;
}
</style>
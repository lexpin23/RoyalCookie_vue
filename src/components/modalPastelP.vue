<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="400px" max-height="450px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn dark v-bind="attrs" v-on="on">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>

                </template>
                <v-form ref="form" lazy-validation>
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
                                        <v-row class="mt-4">
                                            <h3 class="mr-3">Descripción</h3>
                                        </v-row>

                                        <v-textarea class="mt-4" filled auto-grow label="Describe tu pastel" rows="4"
                                            row-height="30" shaped v-model="name" :rules="nameRules" :counter="150" required
                                            append-icon="mdi-comment">

                                        </v-textarea>
                                    </v-row>

                                    <v-row class="">
                                        <v-row class="mt-4">
                                            <h3 class="mr-3">Fecha</h3>
                                        </v-row>

                                        <v-menu ref="startMenu" :close-on-content-click="false" :return-value.sync="trip.start" offset-y min-width="290px" >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-text-field v-model="trip.start" label="Elegir una fecha de entrega" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" >
                                                </v-text-field>
                                            </template>
                                            <v-date-picker v-model="date" no-title scrollable required color="pink lighten-3" :picker-date.sync="pickerDate" :rules="dateRules">
                                                <v-spacer></v-spacer>
                                                
                                                <v-btn text color="pink lighten-3" @click="$refs.startMenu.isActive = false">
                                                    Cancel
                                                </v-btn>
                                                <v-btn text color="pink lighten-3" @click="$refs.startMenu.save(date)">
                                                    OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                        {{date}}

                                    </v-row>



                                    <v-row class="">
                                        <v-row class="mt-4">
                                            <h3 class="mr-3">Adjuntar imagen</h3>
                                        </v-row>

                                        <v-btn class="mx-2" fab dark color="#424242">
                                            <v-icon dark>
                                                mdi-image-plus
                                            </v-icon>
                                        </v-btn>


                                    </v-row>

                                    <v-row class="mt-3">
                                        <v-row class="mt-5">
                                            <h2>Total</h2>
                                        </v-row>
                                    </v-row>

                                    <v-row class="mt-3">
                                        <v-row class="mt-5">
                                            <v-label><i>El costo será calculado por el administrador</i></v-label>
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

                            <v-btn color="error" class="mr-4" @click="reset">
                                Limpiar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>

            </v-dialog>
        </v-row>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    props: ['title'],

    data: () => ({
        dialog: false,
        checkbox: false,
        pickerDate: null,
        name: '',
        nameRules: [
            v => !!v || 'Debes hacer una descripción',
            v => (v && v.length <= 150) || 'No debe sobrepasar 150 letras',
        ],
        date: null,
        dateRules: [
            v => !!v || 'Debes hacer una descripción',
            v => (v == null) || 'Debes elegir una fecha',
            
        ],
        trip: {
            location: null,
            start: null
        },
        selectedOptionIdTam: null,
        optionsTam:[
            { id: 1, label: 'Chico'},
            { id: 2, label: 'Mediano'},
        ],
        selectedOptionId: null,
        options: [
            { id: 1, label: 'Esponjoso'},
            { id: 2, label: 'Mantequilla'},
        
        ]
    }),

    methods: {
        agregarCarrito(){
  
            axios.post('http://localhost:8080/api/AgregarPasteles', {
                    "idUser": 1,
                    "Tamaño": this.selectedOptionIdTam == 1 ? 'Chico' : 'Mediano',
                    "Estilo": this.selectedOptionId == 1 ? 'Esponjoso' : 'Mantequilla',
                    "Fecha": this.date,
                    "Descripcion": `${this.name}`,
                    "Imagen": '',
                    "idProd": 2
            }).then((res) => {
                const { data } = res;
                console.log(data)
                alert('Se añadió al carrito')
                this.dialog = false
                this.reset()

            }).catch((err) => {
                console.log(err)
            })
           
           
           
        },

        validate() {
            
            this.$refs.form.validate() ? this.agregarCarrito() : console.log('campos obligatorios')
        },

        reset() {
            this.$refs.form.reset()
        },
    },

    computed:{
        selectedOptionType() {
        if (!this.selectedOptionId) {
           return("") 
        }
           return this.options.find(o => o.id === this.selectedOptionId).type
        },

        selectedOptionTypeTam() {
            if (!this.selectedOptionIdTam) {
                return("") 
            }
            
            return this.optionsTam.find(o => o.id === this.selectedOptionIdTam).type
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

.tamanio {
    margin-top: 18px;
}

#radio-group {
    margin-top: -10px;
}
</style>
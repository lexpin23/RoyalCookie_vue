<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="400px" max-height="450px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn dark v-bind="attrs" v-on="on">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>

                </template>
                <v-form  ref="form" v-model="valid" lazy-validation>
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
                                        <v-radio-group id="radio-group" v-model="radioGroup" :rules="[v => !!v || 'Debes elegir un tamaño']" required>
                                            <v-radio label="Chico" value="radio-1">Chico</v-radio>
                                            <v-radio label="Mediano" value="radio-2"></v-radio>
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
                                        <v-radio-group id="radio-group" v-model="radioGroup" :rules="[v => !!v || 'Debes elegir un estilo']" required>
                                            <v-radio label="Esponjoso" value="radio-1">Esponjoso</v-radio>
                                            <v-radio label="Mantequilla" value="radio-2">Mantequilla</v-radio>
                                        </v-radio-group>
                                    </v-row>
                                </v-row>

                                <v-row class="">
                                    <v-row class="mt-4">
                                        <h3 class="mr-3">Descripción</h3>
                                    </v-row>

                                    <v-textarea class="mt-4" filled auto-grow label="Describe tu pastel" rows="4" row-height="30" shaped
                                    v-model="name" :error-messages="nameErrors" :counter="100" required @input="$v.name.$touch()" @blur="$v.name.$touch()" append-icon="mdi-comment">

                                    </v-textarea>
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
                                        <v-label>${{ (cajaA * counter) + (counterT * coco) + (counterA * azucarG) }}
                                        </v-label>
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
                        <v-btn color="blue darken-1" text class="mr-4" @click="validate">
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


export default {
    props: ['title'],
    name: 'ModalAlfajores',

    data: () => ({
        dialog: false,
        counter: 1,
        counterT: 0,
        counterA: 0,
        cajaA: 80,
        coco: 10,
        azucarG: 5,
        desbtn: false,
        desbtnT: false,
        select: [],
        items: [
            'Esponjoso',
            'Mantequilla'
        ],
        column: 1,
        row: null,
        checkbox: false,
        name: '',
        nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 100) || 'Name must be less than 100 characters',
      ],
    }),

    methods: {
        agregarCarrito() {

            if (this.counter > 0) {
                alert('Se añadió al carrito')
                const ALFAJOR = {
                    cajas: this.counter,
                    toppings: this.select
                }
                console.log(ALFAJOR)

                //Establecer valores en 0
                this.counter = 0
                this.counterT = 0
                this.counterA = 0
                this.select = []
                this.dialog = false
            }
            else {

            }
        },

        validate () {
        this.$refs.form.validate()
        },

        reset () {
            this.$refs.form.reset()
        },
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
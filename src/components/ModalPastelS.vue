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
                                        <v-radio-group id="radio-group" :rules="[v => !!v || 'Debes elegir un tamaño']" required>
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
                                        <v-radio-group id="radio-group"  :rules="[v => !!v || 'Debes elegir un estilo']" required>
                                            <v-radio label="Esponjoso" value="radio-1">Esponjoso</v-radio>
                                            <v-radio label="Mantequilla" value="radio-2">Mantequilla</v-radio>
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
                        <v-btn color="blue darken-1" text class="mr-4" @click="validate">
                            Agregar al carrito
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

    data: () => ({
        dialog: false,
        checkbox: false,
        name: ''
    }),

    methods: {
        validate () {
        this.$refs.form.validate()
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
<template>
    <div>
        <h1>Bienvenido al catálogo de Royal Cookie</h1>
        <v-row>
            <v-col>
                    <v-card class="mx-auto" max-width="344">
                        <v-img src="../assets/alfajores.jpg" height="200px"></v-img>

                        <v-card-title>
                            Alfajores
                        </v-card-title>

                        <v-card-subtitle>
                            Disponibilidad: 5
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn icon >
                                <!--<v-icon>mdi-plus</v-icon>-->
                                <ModalAlfajores id="modalA" title="Alfajores" @click="getToppings()"></ModalAlfajores>
                            </v-btn>

                        </v-card-actions>

                    </v-card>
            </v-col>

            <v-col>
                <v-card class="mx-auto" max-width="344">
                        <v-img src="../assets/roles_canelo.jpg" height="200px"></v-img>

                        <v-card-title>
                            Roles
                        </v-card-title>

                        <v-card-subtitle>
                            Disponibilidad: 5
                        </v-card-subtitle>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn icon>
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>

                    </v-card-actions>

                </v-card>
            </v-col>

            <v-col>
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/bollitos.png" height="200px"></v-img>

                    <v-card-title>
                        Bollitos
                    </v-card-title>

                    <v-card-subtitle>
                        Disponibilidad: 3
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>

                    </v-card-actions>

                </v-card>
            </v-col>

            <v-col>
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/pastel_simple.jpg" height="200px"></v-img>

                    <v-card-title>
                        Pastel simple
                    </v-card-title>

                    <v-card-subtitle>
                        Disponibilidad: 2
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>

                    </v-card-actions>

                </v-card>
            </v-col>

            <v-col>
                <v-card class="mx-auto" max-width="344">
                    <v-img src="../assets/pastel_personalizado.webp" height="200px"></v-img>

                    <v-card-title>
                        Pastel personalizado
                    </v-card-title>

                    <v-card-subtitle>
                        Disponibilidad: 2
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <!--<v-icon>mdi-plus</v-icon>-->
                            <ModalPastelP title="Pastel Personalizado"></ModalPastelP>
                        </v-btn>

                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>

<script>

    import ModalAlfajores from '../components/ModalAlfajores.vue'
    import ModalPastelP from '../components/modalPastelP.vue'

    export default {
        name : 'catalogo',

        components: {
            ModalAlfajores,
            ModalPastelP
        },
        data() {
            return{
                ModalAlfajores: false
            }
            
        },

        methods: {
            print(){
                console.log(this.getToppings)
            }
        }
    }

</script>
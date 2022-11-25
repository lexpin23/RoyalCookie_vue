<template>
    <div>
        <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark v-bind="attrs" v-on="on">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">{{title}}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="6" sm="3" md="4">
                                <v-label>Cajas</v-label>
                                
                            </v-col>
                            <v-col cols="6" sm="3" md="4">
                                <v-label>Toppings</v-label>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6" sm="3" md="6">
                                <v-row>
                                    <v-btn v-on:click="counter -= 1">-</v-btn>
                                        <p>{{ counter }}</p>
                                    <v-btn v-on:click="counter += 1">+</v-btn>
                                </v-row>
                            </v-col>
                            <v-col cols="6" sm="3" md="6">
                                <v-row>
                                    <v-label>Coco</v-label>
                                    <v-btn v-on:click="counterT -= 1">-</v-btn>
                                        <p>{{ counterT }}</p>
                                    <v-btn v-on:click="counterT += 1">+</v-btn>
                                </v-row>
                                <v-row>
                                    <v-label>Azúcar glass</v-label>
                                    <v-btn v-on:click="counterA -= 1">-</v-btn>
                                        <p>{{ counterA }}</p>
                                    <v-btn v-on:click="counterA += 1">+</v-btn>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                                <v-label>Total</v-label>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        Cerrar
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        Agregar al carrito
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    </div>
</template>

<script>

  export default {
    props:['title'],

    data: () => ({
      dialog: false,
      counter: 0,
      counterT: 0,
      counterA: 0
    }),

    
  }
</script>
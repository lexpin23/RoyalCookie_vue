<template>
    <v-container class="grey lighten-3">
        <v-card v-for="(item, index) in desserts" :key="index" class="mt-5">
            <v-card-title class="d-flex grey lighten-2" flat tile>
                {{ pedido }}
                <v-col
        class="d-flex"
        cols="3"
        sm="3"
      >
        <v-select
       
          :items="items"
          filled
          label="Cambiar estado"
          dense
          @change="(selection) => selectionChanged(selection, item)" 
        ></v-select>
        
      </v-col>
            </v-card-title>
            
            <template>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    ID
                                </th>
                                <th class="text-left">
                                    Producto
                                </th>
                                <th class="text-left col-4">
                                    Descripcion
                                </th>
                                <th class="text-left">
                                    Toppings
                                </th>
                                <th class="text-left">
                                    Cantidad
                                </th>
                                <th class="text-left">
                                    Precio
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ item.IDLineaPedido }}</td>
                                <td>{{ item.Nombre }}</td>
                                <td>{{ item.Descripcion }}</td>
                                <td>{{ item.Toping }}</td>
                                <td>{{ item.Cantidad }}</td>
                                <td>{{ item.Precio }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </template>
        </v-card>

        <v-snackbar v-model="snackbar" :timeout="timeout">
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                    Cerrar
                </v-btn>
            </template>
        </v-snackbar>

    </v-container>
</template>

<script>

import axios from 'axios'

export default {
    data: () => ({
        desserts: [],
        pedido: 'Pedido',
        autorizar:  'red lighten-1',
        carrito: 'En El Carrito',
        colorCarrito: 'orange lighten-2',
        items: ['EN PROCESO', 'TERMINADO', 'AUTORIZADO'],

        snackbar: false,
        text: 'CAMBIO DE ESTADO EXITOSO',
        timeout: 2000,
    }),

    computed: {

    },

    created() {
        this.getPedidos()
    },

    methods: {
        getPedidos(){
            console.log('Abrir carrito')

            axios.get('http://localhost:8080/api/ObtenerPedido/1', {

                }).then((res) => {
                    const { data } = res;
                    console.log(data)
                    console.log('Se obtuvo todos los pedidos')
                    this.desserts = data

                }).catch((err) => {
                    console.log(err)
                })
        },

        selectionChanged(selection, item) {
            console.log(selection)
                   
            this.editedItem = Object.assign({}, item)
            
            axios.post('http://localhost:8080/api/ModEstatus', {
                "idLinea": this.editedItem.IDLineaPedido,
                "Estatus": selection
            }).then((res) => {
                const { data } = res;
                console.log(data)
                console.log('Se hizo el cambio de estado')
                 this.snackbar = true;

            }).catch((err) => {
                console.log(err)
            })
      
        }
        

    }
}
</script>



<style>

</style>
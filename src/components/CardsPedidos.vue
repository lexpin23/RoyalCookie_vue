<template>
    <v-container class="grey lighten-3">
        <v-card v-for="(item, index) in desserts" :key="index" class="mt-5">
            <v-card-title class="d-flex grey lighten-2" flat tile>
                {{ pedido }}
                <v-btn class="pa-2 ml-auto "> {{item.Estatus}} </v-btn>
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
        colorCarrito: 'orange lighten-2'
    }),

    created() {
        this.getPedidos()
    },

    methods: {
        getPedidos(){
           

            axios.get('https://royalback.herokuapp.com/api/ObtenerPedido/4', {

                }).then((res) => {
                    const { data } = res;
                    console.log(data)
                    console.log('Se obtuvo todos los pedidos')
                    this.desserts = data

                }).catch((err) => {
                    console.log(err)
                })
        },

    }
}
</script>



<style>

</style>
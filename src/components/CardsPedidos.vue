<template>
    <v-container class="grey lighten-3">
        <v-card>
            <v-card-title class="d-flex grey lighten-2" flat tile>
                Pedido #1
                <v-btn class="pa-2 ml-auto " color="orange lighten-2"> En proceso </v-btn>
            
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
                            <tr v-for="item in desserts" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td>{{ item.producto }}</td>
                                <td>{{ item.descripcion }}</td>
                                <td>{{ item.toppings }}</td>
                                <td>{{ item.cantidad }}</td>
                                <td>{{ item.precio }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </template>

        </v-card>

        <v-card class="mt-5">
            <v-card-title class="d-flex grey lighten-2" flat tile>
                Pedido #2
                <v-btn class="pa-2 ml-auto " color="blue darken-3"> Terminado </v-btn>
            
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
                            <tr v-for="item in desserts" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td>{{ item.producto }}</td>
                                <td>{{ item.descripcion }}</td>
                                <td>{{ item.toppings }}</td>
                                <td>{{ item.cantidad }}</td>
                                <td>{{ item.precio }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </template>

            
        </v-card>
    </v-container>
</template>

<script>

export default {
    data: () => ({
        desserts: [
            {
                id: 1,
                producto: 'Alfajores',
                descripcion: '',
                toppings: 'Coco, Azúcar glass',
                cantidad: 1,
                precio: 80
            },

            {
                id: 2,
                producto: 'Bollitos',
                descripcion: '',
                toppings: '',
                cantidad: 2,
                precio: 100
            },
            {
                id: 3,
                producto: 'Pastel Chocolate',
                descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, voluptatum neque possimus quia quae et dicta delectus fugit nulla rerum? Odio earum sit esse incidunt magni a iste. Quae, incidunt.',
                toppings: '',
                cantidad: 1,
                precio: 150
            },

        ]
    }),

    created() {

    },

    methods: {


    }
}
</script>



<style>

</style>
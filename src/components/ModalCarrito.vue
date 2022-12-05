<template>

    <div class="text-center">
        <v-dialog v-model="dialog" width="700">
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark v-bind="attrs" v-on="on">
                    <v-icon>mdi-cart</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Carrito
                </v-card-title>

                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr class="">
                                <th class="text-left">
                                    ID
                                </th>
                                <th class="text-left">
                                    Producto
                                </th>
                                <th class="text-left">
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
                            <tr v-for="item in desserts" :key="item.name">
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

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">
                        Cerrar
                    </v-btn>
                    <v-btn color="red darken-2" text @click="dialog = false">
                        Pagar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>

</template>

<script>


export default {

    name: 'carrito',
    data() {
        return {
            dialog: false,
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
        ],
        }
    },

}


</script>
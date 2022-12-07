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

                <v-data-table :headers="headers" :items="desserts">
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-text-field v-model="editedItem.producto" label="ID"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field v-model="editedItem.descripcion" label="Descripcion"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field v-model="editedItem.toppings" label="Toppings"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field v-model="editedItem.cantidad" label="Cantidad"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field v-model="editedItem.precio" label="Precio"></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>

                    <v-dialog v-model="dialogDelete" max-width="500px">
                        <v-card>
                            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)">
                            mdi-pencil
                        </v-icon>
                        <v-icon small @click="deleteItem(item)">
                            mdi-delete
                        </v-icon>
                    </template>
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">
                            Reset
                        </v-btn>
                    </template>

                </v-data-table>

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

import ModalAlfajores from '../components/ModalAlfajores.vue'
export default {

    name: 'carrito',

    components: {
        ModalAlfajores
    },

    data() {
        return {
            dialog: false,
            dialogDelete: false,
            headers: [
                {
                    text: 'ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                { text: 'Producto', value: 'producto', sortable: false },
                { text: 'Descripcion', value: 'descripcion', sortable: false },
                { text: 'Toppings', value: 'toppings', sortable: false },
                { text: 'Cantidad', value: 'cantidad', sortable: false },
                { text: 'Precio', value: 'precio', sortable: false },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                id: 0,
                producto: '',
                descripcion: '',
                toppings: '',
                cantidad: 0,
                precio: 0,
            },
            defaultItem: {
                id: 0,
                producto: '',
                descripcion: '',
                toppings: '',
                cantidad: 0,
                precio: 0,
            },
        }
    },

    computed: {
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = [
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
                }
            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },

}


</script>
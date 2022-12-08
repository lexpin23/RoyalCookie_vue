<template>
    <v-dialog v-model="dialog" width="700">
        <template v-slot:activator="{ on, attrs }">
            <v-btn dark v-bind="attrs" v-on="on" @click="getCarrito()">
                <v-icon>mdi-cart</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                    Carrito
            </v-card-title>

            <v-data-table :headers="headers" :items="desserts">
                <template v-slot:top>
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
                    
                </template>

                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon small class="mr-2" @click="editItem(item)">
                        mdi-pencil
                    </v-icon>
                    <v-icon small @click="deleteItem(item)">
                        mdi-delete
                    </v-icon>
                </template>

            </v-data-table>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Cerrar
                </v-btn>
                <v-btn color="blue darken-1" text class="mr-4" @click="pagarCarrito()">
                    Pagar
                </v-btn>
            </v-card-actions>

        </v-card>   
        
        <v-snackbar v-model="snackbar" :timeout="timeout">
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
                    Cerrar
                </v-btn>
            </template>
        </v-snackbar>
    </v-dialog>

    

</template>

<script>

import axios from 'axios'

export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'ID',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            { text: 'Producto', value: 'Nombre', sortable: false },
            { text: 'Toppings', value: 'Toping', sortable: false },
            { text: 'Cantidad', value: 'Cantidad', sortable: false },
            { text: 'Precio', value: 'Precio', sortable: false },
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
        snackbar: false,
        text: 'Pago exitoso',
        timeout: 2000,
    }),

    computed: {
    },

    watch: {
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {

    },

    methods: {
        getCarrito(){
            console.log('Abrir carrito')
            this.desserts = []

            axios.get('http://localhost:8080/api/ObtenerCarrito/1', {

                }).then((res) => {
                    const { data } = res;
                    this.desserts = data;
                    console.log(this.desserts)

                }).catch((err) => {
                    console.log(err)
                })
        },

        pagarCarrito(){
            axios.post('http://localhost:8080/api/pagarCarrito', {
                "idUser": 1

            }).then((res) => {
                const { data } = res;
                console.log(data)
                this.snackbar = true;

            }).catch((err) => {
                console.log(err)
            })
        },

        editItem(item) {
            this.editedItem = Object.assign({}, item)
            console.log( this.editedItem)
            console.log( this.editedItem.cantidad )
            
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
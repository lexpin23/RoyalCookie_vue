<template>
    <v-bottom-navigation app color="#F48FB1" dark>
        <div class="d-flex align-center">
            <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="../assets/RoyalCookieLogo2.png"
                transition="scale-transition" width="40" />

            <h2>Royal Cookie</h2>
        </div>

        <v-spacer></v-spacer>

        <v-btn v-on:click="logout()">Cerrar Sesión</v-btn>


        <ModalCarrito></ModalCarrito>


    </v-bottom-navigation>
</template>

<script>

export default {

    components: {

    },
    data() {
        return {

        }

    },

    methods: {
        insertarRuta(ruta) {
            this.$router.push(ruta)
        },
        logout() {
            this.$store.commit("setAuthentication", false)
            this.$router.replace({ name: "login" })

        }
    }
}

</script>
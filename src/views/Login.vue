<template>
    <v-app id="inspire">

        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="#BDBDBD">
                            <v-toolbar-title color="black">Iniciar sesión</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <input name="username" v-model="input.username" placeholder="Usuario" type="text"/>
                                <input name="password" v-model="input.password" placeholder="Password" type="password"/>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn type="button" v-on:click="login()" color="#F8BBD0">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

    </v-app>
</template>
 
<script>
export default {
    name: 'Login',

    data(){
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods:{
        login(){
            if(this.input.username == "usuario1" && this.input.password == "pass"){
                this.$store.commit("setAuthentication", true)
                this.$router.replace({ name: "home"})
               
            }
            else{
                
            }
            if(this.input.username == "admin" && this.input.password == "pass"){
                this.$store.commit("setAuthenticationA", true)
                this.$router.replace({ name: "pedidosadmin"})
               
            }
            else{
                
            }
        }
    }
};
</script>
 
<style>

</style>
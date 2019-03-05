<template>
    <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title class="login">Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="checkCredential" id="check-login">
                  <v-text-field prepend-icon="person" v-model="authenticate.email" label="Email" type="text" autocomplete="off"></v-text-field>
                  <v-text-field prepend-icon="lock" v-model="authenticate.password" label="Password" type="password" autocomplete="off"></v-text-field>
                </v-form>
                <v-btn type="submit" color="primary" form="check-login" block :disabled="buttonSubmit">{{buttonText}}</v-btn>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>

</template>
<script>
export default {
   name:'login',
   data:()=>({
        buttonText    : 'Login',
        error         : false,
        buttonSubmit  : false,
        authenticate:{
            email     : '',
            passwrod  : ''
        }
   }),
   methods: {
       checkCredential(){
          this.buttonText   = 'Authenticating...'
          this.buttonSubmit = true
          let authenticate  = {
              email     : this.authenticate.email,
              password  : this.authenticate.password
          }

       }
   } 
}
</script>
<style scoped>
   .login{
      text-align: center
   }
</style>

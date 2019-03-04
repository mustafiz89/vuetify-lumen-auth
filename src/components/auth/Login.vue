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
                <v-form>
                  <v-text-field prepend-icon="person" name="email" label="Login" type="text" autocomplete="off"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" autocomplete="off"></v-text-field>
                </v-form>
                <v-btn color="primary" block>Login</v-btn>
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

   }) 
}
</script>
<style scoped>
   .login{
      text-align: center
   }
</style>

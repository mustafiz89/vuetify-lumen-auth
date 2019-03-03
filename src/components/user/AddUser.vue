<template>
    <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex>
            <v-card>
              <v-breadcrumbs :items="bredcrums">
                <template slot="bredcrum" slot-scope="props">
                  <router-link :to="props.bredcrum.href" :class="[props.bredcrum.disabled && 'disabled']">{{ props.bredcrum.text.toUpperCase() }}</router-link>
                </template>                 
              </v-breadcrumbs>                  
              </v-card>              
            </v-flex>
          </v-layout>

           <v-layout row wrap>
            <v-flex xs12>
              <v-card>
                  <v-card-title primary-title>
                      <h2 class="">Add User</h2> 
                  </v-card-title>   
                  <v-card-text>
                       <v-form>
                           <v-layout>
                              <v-flex>
                                <v-text-field v-model="firstname" label="First Name" required></v-text-field>
                              </v-flex>
                              <v-flex>
                                <v-text-field v-model="lastname" label="Last Name" required></v-text-field>
                              </v-flex>
                           </v-layout>
                           <v-layout>
                              <v-flex>
                                <v-text-field v-model="email" label="Email" required></v-text-field>
                              </v-flex>
                              <v-flex>
                                <v-text-field v-model="phone" label="Phone" required></v-text-field>                                
                              </v-flex>
                           </v-layout>
                           <v-layout>
                              <v-flex>
                                <v-textarea rows="2" name="address" label="Address" value=""></v-textarea>
                              </v-flex>
                           </v-layout>
                           <v-layout>
                              <v-flex>
                                <v-btn  color="success" @click="submit">submit</v-btn>
                                <v-btn color="info" @click="clear">clear</v-btn>
                              </v-flex>
                           </v-layout>
                       </v-form>
                  </v-card-text>              
              </v-card>              
            </v-flex>
          </v-layout>
        </v-container>
</template>
<script>
export default {
    name:'AddUser',
    data: () => ({
     bredcrums:[
        {
          text: 'Dashboard', 
          disabled: false,
          href: '#/'
        },
        {
          text: 'User',
          disabled: true,
          href: '#/user/add'
        }
    ]
    })
}
</script>
<style>

</style>

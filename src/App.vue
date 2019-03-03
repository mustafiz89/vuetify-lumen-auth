<template>
    <v-app>       
      <v-navigation-drawer fixed v-model="drawer" app>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="green darken-2">dashboard</v-icon>
              </v-list-tile-action>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile>
            <v-list-group v-for="item in items"  :key="item.title" v-model="item.active"
              no-action >
              <v-list-tile slot="activator">
                <v-list-tile-action>
                  <v-icon v-bind:color="item.color" >{{item.action }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title >{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="" >
                <v-list-tile-action>
                  <v-icon color="error  ">link</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>             
                </v-list-tile-content>              
              </v-list-tile>
            </v-list-group>
          </v-list>
      </v-navigation-drawer>
      <v-toolbar dark color="primary" height="45px" fixed app>
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title class="white--text">Admin Dashboard</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
              <v-icon>apps</v-icon>
          </v-btn>

          <v-btn icon>
              <v-icon>refresh</v-icon>
          </v-btn>

          <v-btn icon>
              <v-icon>more_vert</v-icon>
          </v-btn>
      </v-toolbar>
      <v-content>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex>
            <v-card>
              <v-breadcrumbs :items="bredcrums">
                <template slot="bredcrum" slot-scope="props">
                  <a :href="props.bredcrum.href" :class="[props.bredcrum.disabled && 'disabled']">{{ props.bredcrum.text.toUpperCase() }}</a>
                </template>                 
              </v-breadcrumbs> 
                  
              </v-card>              
            </v-flex>
            <v-flex xs12>
              <v-card>
                  <v-card-title primary-title>
                      <h3 class="">Kangaroo Valley Safari</h3>
                      <div> Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, 
                        te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, 
                        no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, 
                        ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, 
                        qui id ludus appareat. </div>
                  </v-card-title>

                  <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                  </v-card-actions>
              </v-card>              
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer class="pa-3" app>
          <v-spacer></v-spacer>
          <div>Mustafizur Rahman &copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-app>  
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  data:()=>({
    drawer:null,
    items: [
      {
        action: 'people',
        title: 'User',
        color: 'indigo',
        items: [
          { title: 'Add User' },
          { title: 'View User' }
          ]
      },
      {
        action: 'restaurant',
        title: 'Dining',
        color:'red lighten-2',
        items: [
          { title: 'Breakfast & brunch' },
          { title: 'New American' },
          { title: 'Sushi' }
        ]
      },
      {
        action: 'school',
        title: 'Education',
        color: 'pink darken-2',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'directions_run',
        title: 'Family',
        color: 'teal darken-2',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'healing',
        title: 'Health',
        color: 'orange darken-2',
        items: [
          { title: 'List Item' }
        ]
      },
      {
        action: 'content_cut',
        title: 'Office',
        color: 'primary',
        items: [
          { title: 'List Item' }
        ]
      }
    ],
    bredcrums:[
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Link 1',
          disabled: true,
          href: 'breadcrumbs_link_1'
        }
    ]
  })
}
</script>

<style>
   .disabled{
    color: grey
   }
</style>

<template>
<div>
    <v-navigation-drawer fixed v-model="drawer" app>
          <v-list dense>
            <v-list-tile to="/dashboard">
              <v-list-tile-action>
                <v-icon color="green darken-2">dashboard</v-icon>
              </v-list-tile-action>
              <v-list-tile-title >Dashboard</v-list-tile-title>
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

              <v-list-tile v-for="subItem in item.items" :key="subItem.title" :to="subItem.url" >
                <v-list-tile-action>
                  <v-icon color="error  ">link</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title >{{ subItem.title }}</v-list-tile-title>             
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

          <v-menu bottom left>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                icon
                v-on="on"
              >
                <v-icon>more_vert</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-tile>
                <v-icon>people</v-icon>
                <v-list-tile-sub-title> Profile</v-list-tile-sub-title>                
              </v-list-tile>
              <v-list-tile @click="logout">
                  <v-icon>exit_to_app</v-icon>
                <v-list-tile-sub-title>Logout</v-list-tile-sub-title>                
              </v-list-tile>
            </v-list>
          </v-menu>
      </v-toolbar>
</div>
</template>
<script>
export default {
    name:'navbar',
    data:()=>({
        drawer:null,
        items: [
          {
            action  : 'people',
            title   : 'User',
            color   : 'indigo',
            items: [
              { 
                  title: 'Add User',
                  url: '/user/add'
              },
              { 
                  title: 'View User',
                  url: '/user/view'            
              }
            ]
          }
        ]
    }),
    methods:{
        logout(){
            localStorage.clear()				
            this.$router.push({ path : '/login' })
        }	
	}
}
</script>
<style>

</style>

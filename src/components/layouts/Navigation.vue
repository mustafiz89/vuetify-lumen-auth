<template>
 <v-navigation-drawer>
    <v-list>
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
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  },
  data () {
      return {
        mini: true,
        drawer: true,
        right: null,
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
        ]
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style> 
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.v-list__tile {
    height: 37px !important;
}
</style>

<template>
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
</template>

<script>
export default {
    name: 'toolbar'
}
</script>

<style>

</style>

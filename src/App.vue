<template>
     <v-app>
          <Toolbar></Toolbar> 
          <Navigation></Navigation>
          <Adduser></Adduser>
          <Footer></Footer>
    </v-app>
</template>

<script>
import Toolbar from './components/layouts/Toolbar.vue'
import Navigation from './components/layouts/Navigation.vue'
import Footer from './components/layouts/Footer.vue'
import Adduser from './components/user/AddUser.vue'

export default {
  name: 'app',
  components: {
    Navigation, Toolbar, Footer, Adduser
  }
}
</script>

<style>

</style>

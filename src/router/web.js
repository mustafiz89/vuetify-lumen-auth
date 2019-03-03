import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard'
import AddUser from '../components/user/AddUser'
import ViewUser from '../components/user/ViewUser'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/user/add', name: 'add user', component: AddUser },
    { path: '/user/view', name: 'view user', component: ViewUser }
  ]
})

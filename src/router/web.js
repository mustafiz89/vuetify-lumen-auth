import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/auth/Login'
import Dashboard from '../components/Dashboard'
import AddUser from '../components/user/AddUser'
import ViewUser from '../components/user/ViewUser'

Vue.use(Router)


function isLogin(){
  let token = localStorage.getItem('token')
		if (token) {
			return true
		} else {
			return false
		}
}

const router =  new Router({
  routes: [
    { path: '/login', alias: '/', name: 'login', component: Login },
    { path: '/dashboard', name: 'dashboard', component: Dashboard, meta : { requiresAuth : true } },
    { path: '/user/add', name: 'add user', component: AddUser, meta : { requiresAuth : true } },
    { path: '/user/view', name: 'view user', component: ViewUser, meta : { requiresAuth : true } }
  ]
})

router.beforeEach((to, from, next) => {
	if(to.meta.requiresAuth) {
		if(isLogin()) {
			next()
		} else {
			next({
				path : '/login'
			})
		}
	} else {
		next()
	}
})


export default router;

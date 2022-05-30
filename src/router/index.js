import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LogInView from '../views/LogInView.vue'
import UserSelectorView from '../views/UserSelectorView.vue'
import UserDataView1 from '../views/UserDataView1.vue'
import UserDataView2 from '../views/UserDataView2.vue'
import SearchServiceView from '../views/SearchServiceView.vue'
import ProfileView from '../views/ProfileView.vue'


Vue.use(VueRouter)

const routes = [
  // If route doesnt exists
  { 
    path: "*", 
    redirect: "/" 
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/service',
    name: 'service',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ServiceView.vue')
  },
  {
    path: '/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/register/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/register/user-selector',
    name: 'userSelector',
    component: UserSelectorView
  },
  {
    path: '/register/user-selector/user-data-1',
    name: 'userData1',
    component: UserDataView1
  },
  {
    path: '/register/user-selector/user-data-2',
    name: 'userData2',
    component: UserDataView2
  },
  {
    path: '/search-service',
    name: 'searchservice',
    component: SearchServiceView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

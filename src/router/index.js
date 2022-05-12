import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home2View from '../views/Home2View.vue'
import RegisterView from '../views/RegisterView.vue'
import LogInView from '../views/LogInView.vue'
import UserSelectorView from '../views/UserSelectorView.vue'
import UserDataView1 from '../views/UserDataView1.vue'
import UserDataView2 from '../views/UserDataView2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Home',
    name: 'home2',
    component: Home2View
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
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/register/login',
    name: 'login',
    component: LogInView
  },
  {
    path: '/register/userSelector',
    name: 'userSelector',
    component: UserSelectorView
  },
  {
    path: '/register/userSelector/userData1',
    name: 'userData1',
    component: UserDataView1
  },
  {
    path: '/register/userSelector/userData2',
    name: 'userData2',
    component: UserDataView2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import RegisterView from '../views/RegisterView.vue'
import LogInView from '../views/LogInView.vue'
import UserSelectorView from '../views/UserSelectorView.vue'
import UserServiceView from '../views/UserServiceView.vue'
import UserDataView1 from '../views/UserDataView1.vue'
import UserDataView2 from '../views/UserDataView2.vue'
import SearchServiceView from '../views/SearchServiceView.vue'
import ProfileView from '../views/ProfileView.vue'
import PublishServiceView from '../views/PublishServiceView.vue'
import EditUserData from '../views/EditUserData.vue'


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
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/user-service',
    name: 'user-service',
    component: UserServiceView
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
    component: RegisterView,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LogInView
      },
      {
        path: 'user-selector',
        name: 'userSelector',
        component: UserSelectorView
      },
      {
        path: 'user-selector/user-data-1',
        name: 'userData1',
        component: UserDataView1
      },
      {
        path: 'user-selector/user-data-2',
        name: 'userData2',
        component: UserDataView2
      },
    ]
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
  {
    path: '/publish-service',
    name: 'publish-service',
    component: PublishServiceView
  },
  {
    path: '/edit-user-data',
    name: 'edit-user-data',
    component: EditUserData
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

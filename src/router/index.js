import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import AwaitingRequestView from '../views/AwaitingRequestView.vue'
import RegisterView from '../views/RegisterView.vue'
import LogInView from '../views/LogInView.vue'
import UserSelectorView from '../views/UserSelectorView.vue'
import UserServiceView from '../views/UserServiceView.vue'
import ServiceEditView from '../views/ServiceEditView.vue'
import UserDataView from '../views/UserDataView.vue'
import SearchServiceView from '../views/SearchServiceView.vue'
import ProfileView from '../views/ProfileView.vue'
import PublishServiceView from '../views/PublishServiceView.vue'
import EditUserData from '../views/EditUserData.vue'
import DocumentHelpView from '../views/DocumentHelpView.vue'


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
    path: '/documents',
    name: 'documents',
    component: DocumentHelpView
  },
  {
    path: '/awaiting-request',
    name: 'awaiting-request',
    component: AwaitingRequestView
  },
  {
    path: '/user-service',
    name: 'user-service',
    component: UserServiceView
  },
  {
    path: '/service/:id',
    name: 'service',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ServiceView.vue'),
  },
  {
    path: '/service-edit/:id',
    name: 'service-edit',
    component: ServiceEditView
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
    path: '/register/user-selector/user-data',
    name: 'userData',
    component: UserDataView
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

<template>
  <div class="home">
    <div v-if="userLogged" style="height: -webkit-fill-available;">
      <TopNavbar2/>
      <HomePage/>
      <BottomNavbar/>
      <p v-if="userLogged">User loggued: {{userLogged}}</p>
    </div>
    <div v-else class="home2" style="height: -webkit-fill-available;">
      <TopNavbar1/>
      <HomePage/>
      <BottomNavbar/>
    </div>
  </div>
</template>

<script>
import BottomNavbar from '../components/BottomNavbar.vue'
import HomePage from '../components/HomePage.vue'
import TopNavbar1 from '../components/TopNavbar1.vue'
import TopNavbar2 from '../components/TopNavbar2.vue'
import auth from "@/logic/auth";

export default{
  name: 'home',
  components: {
    BottomNavbar,
    HomePage,
    TopNavbar1,
    TopNavbar2
  },
  computed: {
    userLogged() {
      return auth.getUserLogged()
    }
  }
}
</script>
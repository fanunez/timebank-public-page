<template>
  <div class="home">
    <div v-if="userLogged">
      <TopNavbar2/>
      <HomePage/>
      <BottomNavbar/>
    </div>
    <div v-else>
      <TopNavbar1/>
      <HomePage/>
      <BottomNavbar/>
    </div>
  </div>
</template>

<script>
import BottomNavbar from '../components/shared/BottomNavbar.vue'
import HomePage from '../components/HomePage.vue'
import TopNavbar1 from '../components/shared/TopNavbar1.vue'
import TopNavbar2 from '../components/shared/TopNavbar2.vue'
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
    },
    userBono(){
      const respon = auth.getUserLogged()
      const CookieUser = auth.getUserBono(respon)
      return CookieUser
    }
  }
}
</script>
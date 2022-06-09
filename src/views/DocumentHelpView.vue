<template>
  <div id="pdf-viewer">
    <div v-if="userLogged">
      <TopNavbar2/>
    </div>
    <div v-else>
      <TopNavbar1/>
    </div>
    <Tabs/>
    <BottomNavbar/>
  </div>
</template>

<script>
import BottomNavbar from '../components/shared/BottomNavbar.vue'
import HomePage from '../components/HomePage.vue'
import TopNavbar1 from '../components/shared/TopNavbar1.vue'
import TopNavbar2 from '../components/shared/TopNavbar2.vue'
import Tabs from '../components/help/DocumentTab.vue'

import auth from "@/logic/auth";

// VuePdfApp component is registered in src/main.js
export default {
  name: "DocumentView",
  components: {
    BottomNavbar,
    HomePage,
    TopNavbar1,
    TopNavbar2,
    Tabs
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
};
</script>

<style>
</style>
<template>
  <div class="service" style="height: -webkit-fill-available;">
    <!-- User logged-->
    <div v-if="userLogged">
      <TopNavbar2/>
    </div>
    <!-- User NO logged-->
    <div v-else>
      <TopNavbar1/>
    </div>
    <Service/>
    <BottomNavbar/>
  </div>
</template>

<script>
import BottomNavbar from '../components/BottomNavbar.vue'
import Service from '../components/Service.vue'
import TopNavbar2 from '../components/TopNavbar2.vue'
import TopNavbar1 from '../components/TopNavbar1.vue'
import auth from "@/logic/auth";

export default {
  name: 'service',
  components: {
    TopNavbar2,
    TopNavbar1,
    Service,
    BottomNavbar
  },
  computed: {
    userLogged() {
      return auth.getUserLogged()
    }
  }
}

</script>

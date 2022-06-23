<template>
  <div class="SearchS">
    <!-- User logged-->
    <div v-if="userLogged">
      <TopNavbar2/>
    </div>
    <!-- User NO logged-->
    <div v-else>
      <TopNavbar1/>
    </div>
    <SearchService/>
    <BottomNavbar/>
  </div>
</template>

<script>
import BottomNavbar from '../../components/shared/BottomNavbar.vue'
import SearchService from '../../components/services/SearchService.vue'
import TopNavbar2 from '../../components/shared/TopNavbar2.vue'
import TopNavbar1 from '../../components/shared/TopNavbar1.vue'
import auth from "@/logic/auth";

export default {
  name: 'SearchS',
  components: {
    TopNavbar2,
    TopNavbar1,
    SearchService,
    BottomNavbar
  },
  computed: {
    userLogged() {
      return auth.getUserLogged()
    }
  }
}

</script>
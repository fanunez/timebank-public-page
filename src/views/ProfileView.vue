<template>
  <div class="SearchS">
    <TopNavbar2/>
    <Profile/>
    <BottomNavbar/>
  </div>
</template>

<script>
import BottomNavbar from '../components/shared/BottomNavbar.vue'
import Profile from '../components/user-profile/Profile.vue'
import TopNavbar2 from '../components/shared/TopNavbar2.vue'

export default {
  name: 'SearchS',
  components: {
    TopNavbar2,
    Profile,
    BottomNavbar
  }
}

</script>
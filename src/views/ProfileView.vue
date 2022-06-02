<template>
  <div class="SearchS">
    <TopNavbar2/>
    <Profile/>
    <BottomNavbar/>
  </div>
</template>

<script>
import BottomNavbar from '../components/BottomNavbar.vue'
import Profile from '../components/Profile.vue'
import TopNavbar2 from '../components/TopNavbar2.vue'

export default {
  name: 'SearchS',
  components: {
    TopNavbar2,
    Profile,
    BottomNavbar
  }
}

</script>
<template>
  <div class="home">
    <TopNavbar1/>
    <HomePage/>
    <BottomNavbar/>
  </div>
</template>

<script>
import BottomNavbar from '../components/BottomNavbar.vue'
import HomePage from '../components/HomePage.vue'
import TopNavbar1 from '../components/TopNavbar1.vue'

export default {
  name: 'home',
  components: {
    BottomNavbar,
    HomePage,
    TopNavbar1
  }
}

</script>

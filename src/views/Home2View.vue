<template>
  <div class="home2">
    <TopNavbar2/>
    <HomePage2/>
    <BottomNavbar/>
  </div>
</template>

<script>
import BottomNavbar from '../components/BottomNavbar.vue'
import HomePage2 from '../components/HomePage2.vue'
import TopNavbar2 from '../components/TopNavbar2.vue'

export default {
  name: 'home2',
  components: {
    BottomNavbar,
    HomePage2,
    TopNavbar2
  }
}

</script>

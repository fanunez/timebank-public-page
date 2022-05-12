<template>
  <div class="service" style="height: -webkit-fill-available;">
    <TopNavbar2/>
    <Service/>
    <BottomNavbar/>
  </div>
</template>

<script>
import TopNavbar2 from '../components/TopNavbar2.vue'
import Service from '../components/Service.vue'
import BottomNavbar from '../components/BottomNavbar.vue'

export default {
  name: 'service',
  components: {
    TopNavbar2,
    Service,
    BottomNavbar
  }
}
</script>

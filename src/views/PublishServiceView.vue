<template>
  <div class="publishService" style="height: -webkit-fill-available;">
    <TopNavbar2/>
    <PublishService/>
    <BottomNavbar/>
  </div>
</template>

<script>
import TopNavbar2 from '../components/TopNavbar2.vue'
import PublishService from '../components/PublishService.vue'
import BottomNavbar from '../components/BottomNavbar.vue'

export default {
  name: 'publishService',
  components: {
    TopNavbar2,
    PublishService,
    BottomNavbar
  }
}
</script>

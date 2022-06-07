<template>
  <div class="publishService" style="height: -webkit-fill-available;">
    <TopNavbar2/>
    <PublishService/>
    <BottomNavbar/>
  </div>
</template>

<script>
import TopNavbar2 from '../components/shared/TopNavbar2.vue'
import PublishService from '../components/services/PublishService.vue'
import BottomNavbar from '../components/shared/BottomNavbar.vue'

export default {
  name: 'publishService',
  components: {
    TopNavbar2,
    PublishService,
    BottomNavbar
  }
}
</script>

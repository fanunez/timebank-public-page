<template>
  <div class="SearchS" style="height: -webkit-fill-available;">
    <TopNavbar2/>
    <SearchService/>
    <BottomNavbar/>
  </div>
</template>

<script>
import BottomNavbar from '../components/BottomNavbar.vue'
import SearchService from '../components/SearchService.vue'
import TopNavbar2 from '../components/TopNavbar2.vue'

export default {
  name: 'SearchS',
  components: {
    TopNavbar2,
    SearchService,
    BottomNavbar
  }
}

</script>
<template>
  <div class="Hp" style="height: -webkit-fill-available">
    <Help/>
    <BottomNavbar/>
  </div>
</template>

<script>
import Help from '../components/Help.vue'
import BottomNavbar from '../components/BottomNavbar.vue'

export default {
  name: 'Hp',
  components: {
    BottomNavbar,
    Help
  }
}
</script>

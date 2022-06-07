<template>
  <div class="Hp" style="height: -webkit-fill-available">
    <Help/>
    <BottomNavbar/>
  </div>
</template>

<script>
import Help from '../components/help/Help.vue'
import BottomNavbar from '../components/shared/BottomNavbar.vue'

export default {
  name: 'Hp',
  components: {
    BottomNavbar,
    Help
  }
}
</script>

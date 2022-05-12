<template>
  <div class="USelector" style="height: -webkit-fill-available">
    <UserSelector/>
  </div>
</template>

<script>
import UserSelector from '../components/userSelector.vue'

export default {
  name: 'USelector',
  components: {
    UserSelector
  }
}
</script>

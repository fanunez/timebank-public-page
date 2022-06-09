<template>
  <div class="USelector" style="height: 100vh">
    <UserSelector/>
  </div>
</template>

<script>
import UserSelector from '../../components/auth/userSelector.vue'

export default {
  name: 'USelector',
  components: {
    UserSelector
  }
}
</script>

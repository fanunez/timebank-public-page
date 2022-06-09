<template>
  <div class="serviceEdit" style="height: -webkit-fill-available;">
    <ServiceEdit/>
  </div>
</template>

<script>
import ServiceEdit from '../components/user-profile/ServiceEdit.vue'
import auth from "@/logic/auth";

export default {
  name: 'serviceEdit',
  components: {
    ServiceEdit
  },
  computed: {
    userLogged() {
      return auth.getUserLogged()
    }
  }
}

</script>

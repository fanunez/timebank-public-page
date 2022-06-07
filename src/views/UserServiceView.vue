<template>
    <div class= "userService" style="height: -webkit-fill-available;">
        <TopNavbar2/>
        <UserService/>
        
        <div class="row justify-content-center btn-flotante" style="margin: 10px 0px;">
          <b-button type="button" class="publish-button" style="padding:0px 10px;">Publicar nuevo servicio</b-button>
        </div>
    
        <BottomNavbar/>
    </div>
</template>

<script>
import TopNavbar2 from '../components/shared/TopNavbar2.vue'
import UserService from '../components/user-profile/UserService.vue'
import BottomNavbar from '../components/shared/BottomNavbar.vue'
export default {
    name: 'userService',
    components: {
        TopNavbar2,
        UserService,
        BottomNavbar
    }
}
</script>
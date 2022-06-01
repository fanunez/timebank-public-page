<template>
    <div class= "userService" style="height: -webkit-fill-available;">
        <TopNavbar2/>
        <UserService/>
        <BottomNavbar/>
    </div>
</template>

<script>
import TopNavbar2 from '../components/TopNavbar2.vue'
import UserService from '../components/UserService.vue'
import BottomNavbar from '../components/BottomNavbar.vue'
export default {
    name: 'userService',
    components: {
        TopNavbar2,
        UserService,
        BottomNavbar
    }
}
</script>
<template>
    <div class= "notification" style="height: -webkit-fill-available;">
        <TopNavbar2/>
        <Notification/>
        <BottomNavbar/>
    </div>
</template>

<script>
import TopNavbar2 from '../../components/shared/TopNavbar2.vue'
import Notification from '../../components/user-profile/Notification.vue'
import BottomNavbar from '../../components/shared/BottomNavbar.vue'
export default {
    name: 'notification',
    components: {
        TopNavbar2,
        Notification,
        BottomNavbar
    }
}
</script>
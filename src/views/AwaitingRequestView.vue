<template>
    <div class= "awaitingRequest" style="height: -webkit-fill-available;">
        <TopNavbar2/>
        <AwaitingRequest/>
        <BottomNavbar/>
    </div>
</template>

<script>
import TopNavbar2 from '../components/shared/TopNavbar2.vue'
import AwaitingRequest from '../components/services/AwaitingRequest.vue'
import BottomNavbar from '../components/shared/BottomNavbar.vue'
export default {
    name: 'userService',
    components: {
        TopNavbar2,
        AwaitingRequest,
        BottomNavbar
    }
}
</script>
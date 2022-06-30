<template>
    <div class= "awaitingRequest" style="height: -webkit-fill-available;">
        <AwaitingRequest/>
    </div>
</template>

<script>
import AwaitingRequest from '../../components/services/AwaitingRequest.vue'
export default {
    name: 'awaitingRequest',
    components: {
        AwaitingRequest,
    }
}
</script>
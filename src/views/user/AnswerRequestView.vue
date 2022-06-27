<template>
    <div class="answerRequest" style="height: -webkit-fill-available">
        <AnswerRequest/>
        <BottomNavbar/>
    </div>
</template>

<script>
import AnswerRequest from '../../components/services/AnswerRequest.vue'
import BottomNavbar from '../../components/shared/BottomNavbar.vue'

export default {
    name: 'answerRequest',
    components: {
        AnswerRequest,
        BottomNavbar
    }
}
</script>

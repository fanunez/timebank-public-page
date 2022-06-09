<template>
  <div class="principal-frame">
    <b-button v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab">
      {{ tab }}
    </b-button>
    <div v-if="currentTab === tabs[0]">
      <UserGuide /> 
    </div>
    <div v-if="currentTab === tabs[1]">
      <GoodPractices />     
    </div>
  </div>
</template>

 <script>
import GoodPractices from './GoodPractices.vue'
import UserGuide from './UserGuide.vue'

  export default {
    data: () => ({
      currentTab: 'Manual de usuario',
      tabs: ['Manual de usuario', 'Buenas prácticas'],
    }),
    components: {
      GoodPractices,
      UserGuide
    },
  }
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .principal-frame{
    box-sizing: border-box;
    max-width: 425px;
    margin: 0 auto;
    padding: 100px 0px;
    background-color:white;
    height: 100vh;
  }
  .tab-button{
    border-style: solid!important;
    border-color: #A70187!important;
    font-size: 12px;
    padding: 12px;
    margin: 0px 0px;
    border-radius: 7px!important;
    color: black;
  }
  .tab-button:hover{
    color: black!important;
  }
  .btn-secondary{
    background-color: white!important;
  }
  .btn-secondary:not([disabled]):not(.disabled).active{
    background-color: #A70187!important;
    color: white!important;
}

</style>

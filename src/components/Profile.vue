<template>
  <div class="PrincipalFrame" style="max-width: 425px;">
    <b-button v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab">
      {{ tab }}
    </b-button>
    <div v-if="currentTab === tabs[0]">
      <UserInformation />          
    </div>
    <div v-if="currentTab === tabs[1]">
        
    </div>
    <div v-if="currentTab === tabs[2]">
        
    </div>
    <div v-if="currentTab === tabs[3]">
        
    </div>
  </div>
</template>

 <script>
import UserInformation from './UserInformation.vue'

  export default {
    data: () => ({
      currentTab: 'Mi perfil',
      tabs: ['Mi perfil', 'Mis servicios', 'Historial', 'Mensajes'],
    }),
    components: {
      UserInformation,
    },
  }
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.PrincipalFrame{
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  padding: 20px 0px;
  background-color:white;
  height: -webkit-fill-available;
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

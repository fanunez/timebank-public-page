<template>
    <div class="awaiting-request-frame">    
        <div class="row" style="margin: 10px 35px;">
            Algo es

        </div>
    </div>

</template>

<script>

import axios from 'axios'
import auth from "@/logic/auth";

export default {
    name: 'AwaitingRequest',
    data(){
        return{
            userName: '',
            surname:'',
            uid: '',
        }     
    },
    methods: {

    },
    async mounted() {
    // get user uid
    const token = auth.getUserLogged();
    // petition
    await axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/auth/user-logged/', {
          headers:{
            'Authorization': token,
          },
        })
        .then( r => {
            this.userName = r.data.name;
            this.surname = r.data.surname;
            this.uid = r.data.uid;
        })
        .catch( e => console.log( e ))
    },
}

</script>

<style scoped>
.awaiting-request-frame{
  padding-bottom: 10px;
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  background-color:white
}
.timebank-header{
  font-weight: bold;
  font-size: 28px;
  margin-top: 10px;
}
.card-body{
  padding: 0px;
}
.publish-button{
  padding: 5px 10px;
  max-width: 354px;
  height: 50px;
  margin: 10px auto;
  background-color: #A70187!important;
  font-size: 24px;
  border-radius: 10px;
  bottom: 75px;
  left: 0px;
  right: 0px;
  position:fixed;
}

</style>
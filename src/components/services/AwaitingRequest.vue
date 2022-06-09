<template>
    <div class="awaiting-request-frame">    
        <div class="row" style="margin: 10px 35px;">
            
            <div v-if="titlesSReq.length==0" class="timebank-header">
                <div class="row mb-5" style= "margin: 70px"></div>
                Aún no has solicitado un servicio de la comunidad. </div>
            <div v-else class="mb-5" style= "margin: 120px 0px"> 
                <div class="timebank-info">Estos son los servicios que has solicitado en la comunidad.</div>
                <div class="row mb-5"></div>
                <div v-for="(service, index) in titlesSReq" :key="index">
                    <b-card-group class="mb-3" style="border: 1px solid rgba(0,0,0,.125)">
                    <b-card-body>
                    <b-card-title class="font-weight-bold text-left" style="margin:10px 20px;">{{service}}</b-card-title>
              
                    </b-card-body>
                    </b-card-group>
                </div>
            </div>

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
            awRequestS: [],
            titlesSReq: [],
        }     
    },
    methods: {

        getServicesReq(id_s){
            axios
            .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/' + id_s )
            .then( r => {
                this.titlesSReq.push(r.data.title);
            })
            .catch(e => console.log( e ))
        },

        getAwRequest(){
            axios
            .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/transaction/own_request/' + this.uid)
            .then( r =>{
                console.log(r.data);
                r.data.forEach(element => {
                    this.awRequestS.push(element.id_service);
                    this.getServicesReq(element.id_service);
                });
            })
            .catch(e => console.log( e ))
        },

        
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

            this.getAwRequest();
            
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
.timebank-info{
  font-weight: bold;
  font-size: 24px;
  margin-top: 0px;
  
}

</style>
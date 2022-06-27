<template>
    <div class="awaiting-request-frame">    
        <div class="row" style="margin: 10px 35px;">
            <div v-if="titlesSReq.length==0" class="timebank-header">
                <div class="row mb-5" style= "margin: 70px; max-width: 425px;"></div>
                La comunidad aún no te ha solicitado servicios. </div>
            <div v-else class="mb-5" style= "margin: 120px 0px"> 
                <div class="timebank-info">Servicios solicitados.</div>
                <div class="row mb-5"></div>
                <div v-for="(service, index) in titlesSReq" :key="index">
                    <b-card-group class="mb-3" style="border: 1px solid rgba(0,0,0,.125)">
                        <b-card-body > 
                            <b-card-title class="font-weight-bold justify-content-center" style="margin:10px 20px;"> 
                                <div class="row">
                                    <div class="col-8" style="margin:10px 0px;">{{service}}</div>
                                    <div class="col-2">
                                        <button style="width:80px; height: 50px; background-color:white; border-width:0px; padding: 0px 50px;" @click="answerRequest(index)"><Icon  icon="bi:eye-fill" style="display-flex;"/></button>
                                    </div>
                                </div>
                            </b-card-title>
              
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
            .get( process.env.VUE_APP_BACKEND_URL_LOCAL + '/service/' + id_s )
            .then( r => {
                this.titlesSReq.push(r.data.title);
            })
            .catch(e => console.log( e ))
        },

        getAwRequest(){
            axios
            .get( process.env.VUE_APP_BACKEND_URL_LOCAL + '/transaction/owner_requests/' + this.uid)
            .then( r =>{
                r.data.forEach(element => {
                    this.awRequestS.push(element.id_service);
                    this.getServicesReq(element.id_service);
                });
            })
            .catch(e => console.log( e ))
        },

        answerRequest(index){
            const service_uid = this.awRequestS[index];
            //Esta debe ser la ruta a la vista de responder solicitud
            this.$router.push('/answer-request/' + service_uid);
        },
        
    },
    async mounted() {
        // get user uid
        const token = auth.getUserLogged();
        // petition
        await axios
            .get( process.env.VUE_APP_BACKEND_URL_LOCAL + '/auth/user-logged/', {
            headers:{
                'Authorization': token,
            },
            })
            .then( r => {
                this.userName = r.data.name;
                this.surname = r.data.surname;
                this.uid = r.data.uid;
                console.log(this.uid);
            })
            .catch( e => console.log( e ))

            this.getAwRequest();
            
    },
}

</script>

<style scoped>
    .awaiting-request-frame{
        box-sizing: border-box;
        max-width: 425px;
        margin: 0 auto;
        background-color:white;
        height: fit-content;
        height: 100vh;
        min-height: 900px;
        padding-bottom: 10px;
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
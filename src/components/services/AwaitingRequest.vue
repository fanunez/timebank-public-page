<template>
    <div class="awaiting-request-frame">    
        <div class="row" style="margin: 10px 35px;">
            <div v-if="transactions.length==0" class="timebank-header">
                <div class="row mb-5" style= "margin: 70px; max-width: 425px;"></div>
                La comunidad aún no te ha solicitado servicios ni tu has solicitado servicios. </div>
            <div v-else class="mb-5" style= "margin: 120px 0px"> 
                <div class="timebank-info">Servicios solicitados y que solicitaste.</div>
                <div class="row mb-5"></div>
                
                <div v-for="(service, index) in transactions" :key="index">
                    <div v-if="usersReq[index]==uid">
                        <b-card-group class="mb-3" style="border: 1px solid rgba(0,0,0,.125)">
                            <b-card-body > 
                                <b-card-title class="font-weight-bold justify-content-center" style="margin:10px 20px;"> 
                                    <div class="row">
                                        <div class="col-8" style="margin:10px 0px; font-size: 24px;">{{titlesSReq[index]}}</div>
                                        <div class="col-2">
                                            <div v-if="statesTransaction[index]==0" style="font-size: 20px; margin:20px 0px; text-align:left">Solicitud rechazada</div>
                                            <div v-else-if="statesTransaction[index]==1" style="font-size: 20px; margin:20px 0px; text-align:left">Solicitud pendiente</div>
                                            <div v-else style="font-size: 20px; margin:20px 0px; text-align:left">Solicitud aceptada</div>
                                        </div>
                                    </div>
                                </b-card-title>
                                <b-card-sub-title class="font-weight-bold justify-content-center" style="font-size: 20px; margin:20px 20px; text-align:left"> 
                                    <div class="col-10">fecha:</div> <div class="col-10">{{dates[index]}}</div>
                                </b-card-sub-title>
                            </b-card-body>
                        </b-card-group>
                    </div>
                    
                    <div v-else>
                        <div v-if="statesTransaction[index]==1">
                            <b-card-group class="mb-3" style="border: 1px solid rgba(0,0,0,.125)">
                                <b-card-body > 
                                    <b-card-title class="font-weight-bold justify-content-center" style="margin:10px 20px;"> 
                                        <div class="row">
                                            <div class="col-8" style="margin:10px 0px; font-size: 24px;">{{titlesSReq[index]}}</div>
                                            <div class="col-2">
                                                <button style="width:80px; height: 50px; background-color:white; border-width:0px; padding: 0px 40px;" @click="showModalConfirmRequest(index)"><Icon  icon="bi:eye-fill" style="display-flex;"/></button>
                                            </div>
                                        </div>
                                    </b-card-title>
                                    <b-card-sub-title class="font-weight-bold justify-content-center" style="font-size: 20px; margin:20px 20px; text-align:left"> 
                                        <div class="col-10">usuario solicitante:</div> <div class="col-10">{{aplicants[index]}} y {{owners[index]}}</div>
                                    </b-card-sub-title>
                                </b-card-body>
                            </b-card-group>
                        </div>
                        <div v-else>
                            <b-card-group class="mb-3" style="border: 1px solid rgba(0,0,0,.125)">
                                <b-card-body > 
                                    <b-card-title class="font-weight-bold justify-content-center" style="margin:10px 20px;"> 
                                        <div class="row">
                                            <div class="col-8" style="margin:10px 0px; font-size: 24px;">{{titlesSReq[index]}}</div>
                                            <div class="col-2">
                                                <div v-if="statesTransaction[index]==0" style="font-size: 20px; margin:20px 0px; text-align:left">Solicitud rechazada</div>
                                                <div v-else style="font-size: 20px; margin:20px 0px; text-align:left">Solicitud aceptada</div>
                                            </div>
                                        </div>
                                    </b-card-title>
                                    <b-card-sub-title class="font-weight-bold justify-content-center" style="font-size: 20px; margin:20px 20px; text-align:left"> 
                                        <div class="col-10">usuario solicitante:</div> <div class="col-10">{{aplicants[index]}}</div>
                                    </b-card-sub-title>
                                </b-card-body>
                            </b-card-group>
                        </div>
                    </div>
                </div>
                <div>
                    
                    aplicantes: {{aplicants}}, owner: {{owners}},
                    servicios: {{titlesSReq}}
                </div>
                <div class="row mb-3"></div>
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
            usersReq: [],
            //nameUsers: [],
            //surnameUsers: [],
            aplicants:[],
            owners: [],
            transactions: [],
            statesTransaction: [],
            answer: '',
            serviceToAsk: '',
            userToAsk: '',
            dates:[],
        }     
    },
    methods: {

        async acceptRequest(id_transaction){
            const id = this.idNot[id_transaction];
            const payload = {
                check: 1,
            }

        await axios
            .put(process.env.VUE_APP_BACKEND_URL_SERVER + /notification/ + id, payload)
            .then( response => {
            })
            .catch(e=> console.log(e))
        },

        showModalConfirmRequest(id) {
            this.answer = ''
            this.serviceToAsk=this.titlesSReq[id]
            this.userToAsk=this.nameUsers[id] + ' ' + this.surnameUsers[id]
            this.$bvModal.msgBoxConfirm('Desea aceptar la solicitud de servicio del usuario '+ this.userToAsk, {
            title: '' + this.serviceToAsk,
            size: 'sm',
            buttonSize: 'm',
            okVariant: 'success',
            okTitle: 'SI',
            okSize: '20px',
            cancelTitle: 'NO',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true,
            
        })  
          .then(value => {
            this.answer = value
            if (this.answer==true){
               console.log('es aceptado');
            }
            else if (this.answer==false){
               console.log('es rechazado');
            }
            else{
               console.log('esta ne limbo');
            }
          })
          .catch(err => {
            // An error occurred
          })
        }, 

        getServicesReq(id_s){
            axios
            .get( process.env.VUE_APP_BACKEND_URL_LOCAL + '/service/' + id_s )
            .then( r => {
                this.titlesSReq.push(r.data.title);
            })
            .catch(e => console.log( e ))
        },

        getUsersNameOwner(id_u){
            axios
            .get( process.env.VUE_APP_BACKEND_URL_LOCAL + '/users/' + id_u )
            .then( r => {
                //this.nameUsers.push(r.data.user.name);
                //this.surnameUsers.push(r.data.user.surname);
                this.owners.push(r.data.user.name+ ' ' + r.data.user.surname);
            })
            .catch(e => console.log( e ))
        },

        getUsersNameAplicant(id_u){
            axios
            .get( process.env.VUE_APP_BACKEND_URL_LOCAL + '/users/' + id_u )
            .then( r => {
                //this.nameUsers.push(r.data.user.name);
                //this.surnameUsers.push(r.data.user.surname);
                this.aplicants.push(r.data.user.name+ ' ' + r.data.user.surname);
            })
            .catch(e => console.log( e ))
        },

/*            getAwRequest(){
                axios
                .get( process.env.VUE_APP_BACKEND_URL_LOCAL + '/transaction/owner_requests/' + this.uid)
                .then( r =>{
                    r.data.forEach(element => {
                        console.log(element);
                        this.transactions.push(element.id);
                        console.log(element.id_user_aplicant);
                        this.awRequestS.push(element.id_service);
                        this.getServicesReq(element.id_service);
                        this.usersReq.push(element.id_user_aplicant);
                        this.getUsersNameAplicant(element.id_user_aplicant);
                        this.getUsersNameOwner(element.id_user_owner);
                    });
                })
//                .catch(e => console.log( e ))
            },*/

        async getRequest(){
            await axios
            .get(process.env.VUE_APP_BACKEND_URL_LOCAL + '/transaction/getByUser/' + this.uid)
            .then( r =>{
                console.log(r.data);
                console.log(this.uid);
                for (const element of r.data){
                     console.log(element);
                    this.transactions.push(element.id);
                     this.awRequestS.push(element.id_service);
                     this.getServicesReq(element.id_service);
                     this.usersReq.push(element.id_user_aplicant);
                     this.getUsersNameAplicant(element.id_user_aplicant);
                     this.getUsersNameOwner(element.id_user_owner);
                     this.statesTransaction.push(element.state_request);
                     this.dates.push(element.date);
                }
                
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
            })
            .catch( e => console.log( e ))

            //this.getAwRequest();
            this.getRequest();
            
    },
}

</script>

<style>
    .modal-body{
        font-size: 20px;
    }
    .modal-title{
        font-size: 24px;
        font-weight: bold;
    }
    .modal-footer{
        font-size: 20px;
    }
    .btn.btn-secondary.btn-m{
        background-color: red !important;
    }
   
</style>

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
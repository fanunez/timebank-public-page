<template>
    <div class="awaiting-request-frame">    
        <div class="row" style="margin: 10px 35px;">
            <div v-if="transactions.length==0" class="timebank-header">
                <div class="row mb-5" style= "margin: 20px; max-width: 425px;"></div>
                La comunidad aún no te ha solicitado servicios ni tu has solicitado servicios. </div>
            <div v-else class="mb-5" style= "margin: 20px 0px"> 
                <div class="timebank-info">Servicios que te han solicitado y que solicitaste.</div>
                <div class="row mb-5"></div>
                
                <div v-for="(transaction, index) in transactions" :key="index">
                    <div v-if="aplicantsId[index]==uid">
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
                                        <div class="col-10">usuario solicitante:</div> <div class="col-10">{{aplicants[index]}}</div>
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

            aplicantsId: [],
            //Title services          
            titlesSReq: [],

            aplicants:[],
            owners: [],
            //ID transactions
            transactions: [],

            statesTransaction: [],
            dates:[],
            answer: '',
            serviceToAsk: '',
            userToAsk: '',
            transactionToAsk:'',
            boxTwo: '',
            boxOne: '',
        }     
    },
    methods: {

        async acceptRequest(transaction){
            const id = transaction;
            console.log(id);
            const payload = {
                id_transaction: id,
            }

        await axios
            .post(process.env.VUE_APP_BACKEND_URL_SERVER + '/transaction/accept_transaction/', payload)
            .then( response => {
            })
            .catch(e=> console.log(e))
        },

        async rejectRequest(transaction){
            const id = transaction;
            const payload = {
                id_transaction: id,
            }

        await axios
            .post(process.env.VUE_APP_BACKEND_URL_SERVER + '/transaction/reject_transaction/', payload)
            .then( response => {
            })
            .catch(e=> console.log(e))
        },

        showModalReject(service) {
        this.boxOne = ''
        this.$bvModal.msgBoxOk('La solicitud al servicio '+ service + ' ha sido rechazada exitosamente.', {
          title: 'Solicitud rechazada',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxOne = value
            location.reload();
          })
          .catch(err => {
            // Error
          })
      },

        showModalAccept(service) {
        this.boxTwo = ''
        this.$bvModal.msgBoxOk('La solicitud al servicio '+ service + ' ha sido aceptada exitosamente.', {
          title: 'Solicitud aceptada',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'success',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true
        })
          .then(value => {
            this.boxTwo = value
            location.reload();
          })
          .catch(err => {
            // Error
          })
      },

        showModalConfirmRequest(id) {
            this.answer = ''
            this.serviceToAsk=this.titlesSReq[id]
            this.userToAsk=this.aplicants[id]
            this.transactionToAsk=this.transactions[id]
            this.$bvModal.msgBoxConfirm('¿Desea aceptar la solicitud de servicio del usuario '+ this.userToAsk +'?', {
            title: '' + this.serviceToAsk,
            size: 'sm',
            buttonSize: 'sm',
            okVariant: 'success',
            okTitle: 'SI',
            
            cancelTitle: 'NO',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true,
            
        })  
          .then(value => {
            this.answer = value
            if (this.answer==true){
                console.log(this.transactionToAsk);
                this.acceptRequest(this.transactionToAsk);
                this.showModalAccept(this.serviceToAsk);
               console.log('es aceptado');
            }
            else if (this.answer==false){
                
                this.rejectRequest(this.transactionToAsk);
               console.log('es rechazado');
               this.showModalReject(this.serviceToAsk);
            }
            else{
               console.log('esta en limbo');
            }
          })
          .catch(err => {
            // Error
          })
        }, 

        async getRequest(){
            await axios
            .get(process.env.VUE_APP_BACKEND_URL_SERVER + '/transaction/get-by-user/' + this.uid)
            .then( response => {
                console.log( response.data );
                response.data.forEach(element => {
                    console.log(element);
                    this.transactions.push(element.id_transaction);
                    this.aplicantsId.push(element.applicant.uid);
                    this.aplicants.push(element.applicant.name + ' ' + element.applicant.surname);
                    this.owners.push(element.owner.name + ' ' + element.owner.surname);
                    this.titlesSReq.push(element.service);
                    this.statesTransaction.push(element.state_request);
                    this.dates.push(element.date.split('T')[0] + ' ' + element.date.split('T')[1].split('.')[0]);
                });
                console.log( this.uid );
                
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
    .btn.btn-secondary.btn-sm{
        background-color: red !important;
        font-size: 20px;
    }
    .btn.btn-success.btn-sm{
        font-size: 20px;
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
<template>
    <div class="notification-frame">   
        <div class="row " style="margin: 80px 35px;">
            <div v-if="descNot.length==0" class= "timebank-header">
                <div class="col-1" style="padding: 5px 0px; margin: 10px 10px;">
                    <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></button>
                </div>
                <div class="row mb-5" style= "margin: 20px"></div>
                Aún no has recibido notificaciones. </div>
            <div v-else> 
                <div class="row mb-2">
                <div class="col-1" style="padding: 5px 0px; margin: 10px 10px;">
                    <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></button>
                </div>
                <div class="col-8" style="padding: 0px 40px; margin-top: 5px;">
                    <div class="timebank-header" style="margin-right: 10px">Notificaciones</div>
                </div> <div class="col-2"></div></div>
        
                <div v-for="(notification,index) in stateNot" :key="index">
                    <div v-if="stateNot[index]==0">
                        <b-list-group-item button @click="checkNotification(index)" style="font-weight: bold; text-align:left;">
                            <div class="row">
                                <div class="col-4" style="margin: 0px -20px">
                                    <img class="img-s" left :src= img rounded="circle" width="60" height="60" style="margin-left: 12px; border-radius:50px;"></div>
                                <div class="col-9"><h4 text-left style= "font-weight: bold;">{{descNot[index]}}</h4><h5>{{dateNot[index]}}</h5></div>
                            </div>
                        </b-list-group-item>
                    </div>
                    <div v-else>
                        <b-list-group-item button style="background-color: #A70187; color: white; font-weight: bold; text-align:left;">
                            <div class="row">
                                <div class="col-4" style="margin: 0px -20px">
                                    <img class="img-s" left :src= img rounded="circle" width="60" height="60" style="margin-left: 12px; border-radius:50px;"></div>
                                <div class="col-9"><h4 text-left style= "font-weight: bold;">{{descNot[index]}}</h4><h5>{{dateNot[index]}}</h5></div>
                            </div>
                        </b-list-group-item>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import axios from 'axios'
import auth from "@/logic/auth";

export default {
    name: 'Notification',
    data() {
        return{
            uid: '',
            img: '',
            idNot: [],
            serviceNot: [],
            dateNot: [],
            descNot: [],
            stateNot: [],
        }
    },
    methods: {
        getNotificationsUser(){
            axios
            .get(process.env.VUE_APP_BACKEND_URL_SERVER + '/notification/user-notifactions/' + this.uid)
            .then( r=>{
                r.data.forEach(element => {
                    this.idNot.push(element.uid);
                    this.serviceNot.push(element.id_service);
                    this.dateNot.push(element.date);
                    this.descNot.push(element.description);
                    this.stateNot.push(element.check);
                });
            })
            .catch(e => console.log(e))
        },

        async checkNotification(id_transaction){
            const id = this.idNot[id_transaction];
            const payload = {
                check: 1,
            }

        await axios
            .put(process.env.VUE_APP_BACKEND_URL_SERVER + /notification/ + id, payload)
            .then( response => {
                this.$router.push("/profile");
            })
            .catch(e=> console.log(e))
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
                this.uid = r.data.uid;
                this.img = r.data.img;
            })
            .catch( e => console.log( e ))

            this.getNotificationsUser();
    },

    
}
</script>

<style>
    .notification-frame{
        box-sizing: border-box;
        max-width: 425px;
        margin: 0 auto;
        background-color:white;
    
    }
    .timebank-header{
    font-weight: bold;
    font-size: 28px;
    margin-top: 10px;
    }

    .timebank-info{
    font-weight: bold;
    font-size: 24px;
    margin-top: 0px;
    
    }

</style>
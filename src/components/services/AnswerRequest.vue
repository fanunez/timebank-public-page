<template>
    <div class="main">
      <!-- Header -->
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-1" style="padding: 5px 0px; margin: 10px 10px; margin-left: 37px;">
          <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="bi:x-lg" style="width:40px; height:40px;"/></button>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 10px;">
          <div class="timebank-header" style="margin-right: 10px">Solicitudes del servicio {{}}</div>
        </div>
      </div>

                    <b-card-group class="mb-3" style="border: 1px solid rgba(0,0,0,.125)">
                        <b-card-body > 
                            <b-card-title class="font-weight-bold justify-content-center" style="margin:10px 20px;"> 
                                <div class="row">
                                    <div class="col-8" style="margin:10px 0px;">nombre usuario</div>
                                    <div class="col-2">
                                        <button onclick="history.back()" style="width:80px; height: 50px; background-color:white; border-width:0px; padding: 0px 50px;" ><Icon  icon="bi:eye-fill" style="display-flex;"/></button>
                                    </div>
                                </div>
                            </b-card-title>
                        </b-card-body>
                    </b-card-group>
    </div>

</template>

<script>
import axios from 'axios'
import auth from "@/logic/auth";

export default {
    name: 'AnswerRequest',
    data(){
        return{
            userName: '',
            surname:'',
            uid: '',
            id_service: '',
        }     
    },

    async mounted() {
        this.id_service = this.$route.params.id;
        console.log(this.id_service);
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

            
    },
}
</script>

<style scoped>
  .main{
    min-height: -webkit-fill-available;
    box-sizing: border-box;
    max-width: 425px;
    margin: 0 auto;
    background-color:white
  }

  .timebank-header{
    font-weight: bold;
    font-size: 28px;
  }

  .timebank-subtitle{
    font-weight: bold;
    font-size: 18px;
  }
  </style>

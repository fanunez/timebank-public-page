<template>
    <div class="main">
      <!-- Header -->
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-1" style="padding: 5px 0px; margin: 10px 10px; margin-left: 37px;">
          <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></button>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 10px;">
          <div class="timebank-header" style="margin-right: 10px">Solicitudes del servicio {{titleSReq}}</div>
        </div>
      </div>
      <div class="row mb-5"></div>
      <div v-for="(users, index) in usersReq" :key="index">
      <!--div class="mb-5" style= "margin: 0px 50px"-->
                    <b-card-group class="mb-3" style="border: 1px solid rgba(0,0,0,.125)">
                        <b-card-body > 
                            <b-card-title class="font-weight-bold justify-content-center" style="margin:10px 20px;"> 
                                <div class="row">
                                    <div class="col-8" style="margin:10px 0px;">{{}}</div>
                                    <div class="col-2">
                                        <button onclick="history.back()" style="width:80px; height: 50px; background-color:white; border-width:0px; padding: 0px 50px;" ><Icon  icon="bi:eye-fill" style="display-flex;"/></button>
                                    </div>
                                </div>
                            </b-card-title>
                        </b-card-body>
                    </b-card-group>
                  </div>
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
            titleSReq: '',
            usersReq: [],
            nameUsers: [],
            surnameUsers: [],
        }     
    },

    methods:{

      getServiceToAnsw(id_s){
        axios
        .get(process.env.VUE_APP_BACKEND_URL_LOCAL + '/service/' + id_s)
        .then( r => {
                this.titleSReq = r.data.title;
            })
            .catch(e => console.log( e ))
      },

      getUsersName(id_user){
        axios
        .get(process.env.VUE_APP_BACKEND_URL_LOCAL + '/users/' + id_user)
        .then(r =>{
          this.nameUsers.push(r.data.name);
        })
        .catch(e => console.log( e ))
      },

      getUsersSurname(id_user){
        axios
        .get(process.env.VUE_APP_BACKEND_URL_LOCAL + '/users/' + id_user)
        .then(r =>{
          this.surnameUsers.push(r.data.surname);
        })
        .catch(e => console.log( e ))
      },

      getUsersReq(){
        axios
        .get(process.env.VUE_APP_BACKEND_URL_LOCAL + '/transaction/owner_requests/' + this.uid)
        .then(r =>{
          console.log(this.id_service);
          r.data.forEach(element => {
            if (element.id_service == this.id_service){
              console.log('este:');
              console.log(element.uid_aplicant);
              this.usersReq.push(element.uid_aplicant);
              this.getUsersName(element.uid_aplicant);
              this.getUsersSurname(element.uid_aplicant);
            }
           
            
          });
        })
        .catch(e => console.log( e ))
      },

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
                this.getServiceToAnsw(this.id_service);
            })
            .catch( e => console.log( e ))

            this.getUsersReq();

            

            
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

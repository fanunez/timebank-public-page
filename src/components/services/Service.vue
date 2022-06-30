<template>
    <div class="Service">
      <div class="row" style="margin: 0px 30px; padding-top: 20px;">
        <a href="/" style="color:black"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></a>
      </div>
        <div class="row" style="margin: 0px 30px;">
          <div class="timebank-header">{{nameService}}</div>
        </div>
        <div class="row" style="margin: 0px 30px;">
          <div class="timebank-title">Por: {{nameUser}}</div>
        </div>
      <div>
        <!-- First container -->
        <div class="container-format">
          <!-- Achievements -->
          <div class="row" style="margin: 10px 15px;">
            <div class="col-3.5" style="font-size: 14px;"><Icon icon="icon-park:timer" style="width:40px; height:40px;"/><br>Puntual</div>
            <div class="col-4" style="font-size: 14px;"><Icon icon="noto:1st-place-medal" style="width:40px; height:40px;"/><br>Domina el servicio</div>
          </div>
          <!-- Images -->
          <div class="row" style="margin: 0px 0px;">
            <mdb-carousel :interval="8000" showControls showIndicators>
              <mdb-carousel-item>
                <a v-bind:href=img>
                  <img class="d-block w-100" :src=img alt="First slide"/>
                </a>
              </mdb-carousel-item>
            </mdb-carousel>
          </div>
        </div>
        
        <!-- Request button -->
        <div class="row" style="margin: 0px 30px;">
          <b-button type="sumbit" @click="requestService(id_user, id_owner)" class="request-button col-9">Solicitar</b-button>
          <b-modal ref="my-modal" hide-footer hide-header>
            <div class="d-block text-center">
              <h3>{{message}}</h3>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Cerrar</b-button>
          </b-modal>
          <b-card class="col-3 request-button-balance">
            <b-card-text style="font-size: 24px; color:#A70187; background-color: white; border-radius: 10px;">{{value}}<br>Bono</b-card-text>
          </b-card>
        </div>
        
        <hr class="rounded mb-3" style="border: solid; margin: 8px 30px; opacity: 30%;">
        
        <!-- Description -->
        <div class="container-format">
          <div class="row" style="margin: 0px; border-bottom: 2px solid rgba(0, 0, 0, 0.125);">
            <div class="timebank-title pt-2" style="margin-left: 10px;">Descripción</div>
          </div>
          <div class="row" style="margin: 0px;">
            <div class="timebank-phrase my-3" style="margin-left: 10px;">{{description}}</div>
          </div>
          <div class="row" style="margin: 0px; background-color: #A70187;">
            <div class="timebank-title pt-2" style="margin-left: 10px; color: white">Categoria: {{category}}</div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import axios from 'axios'
import auth from "@/logic/auth"

export default {
  name: 'Service',
  data() {
    return{
      nameService: '',
      nameUser: '',
      achievements: [],
      img: '',
      value: '',
      description: '',
      category: '',
      id_owner: '',
      id_user: '',
      message: ''
    }
  },
  created () {
    // get service uid
    this.uid = this.$route.params.id;
    // petition
    axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/' + this.uid)
        .then( response => {
            this.nameService = response.data.title;
            this.getCategories(response.data.id_category);
            this.getNameUser(response.data.id_owner);
            this.description = response.data.description;
            this.value = response.data.value;
            this.img = response.data.img;
            this.id_owner = response.data.id_owner;
            this.achievements = response.data.achievements;   
        })
        .catch( e => console.log( e ))

    const token = auth.getUserLogged();
        // petition
        axios
          .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/auth/user-logged/', {
          headers:{
              'Authorization': token,
          },
          })
          .then( response => {
              this.id_user = response.data.uid
          })
          .catch( e => console.log( e ))
  },
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    getCategories(id_c) {
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/'+ id_c )
        .then( r => {
          this.category = r.data.name;
        })
        .catch(e => console.log( e ))
    },
    getNameUser(id_own) {
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/users/'+ id_own )
        .then( r => {
          this.nameUser = r.data.user.name;
        })
        .catch(e => console.log( e ))
    },
    requestService(id_u, id_o){

      const payload = {
        id_user_aplicant : id_u,
        id_user_owner : id_o,
        id_service : this.$route.params.id,
        state_request : 1,
        state : true
      }

      axios
        .post( process.env.VUE_APP_BACKEND_URL_SERVER + '/transaction', payload )
        .then( r => {
          this.message = r.data
          this.showModal()
        })
        .catch(e => console.log( e ))
    }
  }
}
</script>
<style>
.modal-content{
  max-width: 350px;
  margin: auto;
}
</style>
<style scoped>
.Service{
  padding-bottom: 10px;
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  background-color:white;
  padding-top: 80px;
  padding-bottom: 100px;
  height: fit-content;
  min-height: 900px;
}
.timebank-header{
  font-weight: bold;
  font-size: 28px;
  margin-top: 10px;
}
.timebank-title{
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 10px;
}
.fuente3{
  font-size: 26px;
  color:white
}
.timebank-subtitle{
  font-size: 20px;
  color: white;
}
.timebank-phrase{
  font-size: 18px;
  text-align: left;
}
.card-body{
  padding: 0px;
}
.request-button{
  padding: 5px 0px;
  width: -webkit-fill-available;
  margin: 10px 0px;
  background-color: #A70187!important;
  font-size: 26px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.container-format {
  margin: 0px 30px;
  border: 2px solid rgba(0, 0, 0, 0.125);
  padding: 0px!important;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.request-button-balance{
  background-color: #A70187;
  margin: 10px 0px;
  padding: 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
</style>

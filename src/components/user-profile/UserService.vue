<template>
  <div class="user-service-frame">    
    
    <b-input-group>
      <form @submit.prevent="getServiceFound" class="row mt-2" style="width: -webkit-fill-available; justify-content: center; max-height: 60px;">
        <b-form-input class="search-bar" id="buscador" v-model="formData.title" placeholder="¿Que servicio busca?" />
        <b-button type = "submit" class="search-button" variant="none">
          <template>
            <Icon icon="charm:search" style="width:22px; height:22px; color: white;"/>
          </template>
        </b-button>
      </form>
    </b-input-group>
    
    <div class="row" style="margin: 10px 35px;">
      <div v-if="formData.title!= ''">
        <div v-if="titulosServicesF.length>0">
          <div v-for="(service,index) in titulosServicesF" :key="index">
            <b-card-group @click="servicesEdit(index)" class="mb-3" style="cursor:pointer; border: 1px solid rgba(0,0,0,.125);">
              <b-card-img class="img-s" :src= imagenesServicesF[index]  img-alt="Card image" img-top>
                </b-card-img><b-card-body>
                <b-card-sub-title class="mb-2 text-left" style="margin:10px 10px;"><Icon icon="icon-park-outline:label" style="margin:10px;"/>{{nameCategoriaServiceF[index]}}</b-card-sub-title>
                <b-card-title class="font-weight-bold text-left" style="margin:10px 20px;">{{service}}</b-card-title>
                <b-list-group-item class="text-left text-muted" style="font-size: 20px; padding-left:1.5rem;">{{userName}} {{surname}}</b-list-group-item>
              </b-card-body>
            </b-card-group>
          </div>
        </div>
        <div v-else class="timebank-header">
          No has publicado servicios con ese nombre.
        </div>
      </div>

      <div v-else>
        <div v-if="titulosServices.length==0" class="timebank-header">
          <div class="row mb-3"></div>
          Aún no has ofrecido un servicio a la comunidad. </div>
        <div v-else class="mt-3"> 
          <div class="row"></div>
          <div v-for="(service, index) in titulosServices" :key="index">
            <b-card-group @click="servicesEdit(index)" class="mb-3" style="cursor:pointer; border: 1px solid rgba(0,0,0,.125);">
            <b-card-img class="img-s" :src= imagenesServices[index]  img-alt="Card image" img-top>
              </b-card-img><b-card-body>
              <b-card-sub-title class="mb-2 text-left" style="margin:10px 10px;"><Icon icon="icon-park-outline:label" style="margin:10px;"/>{{nameCategoriaService[index]}}</b-card-sub-title>
              <b-card-title class="font-weight-bold text-left" style="margin:10px 20px;">{{service}}</b-card-title>
              <b-list-group-item class="text-left text-muted" style="font-size: 20px; padding-left:1.5rem;">{{userName}} {{surname}}</b-list-group-item>
            </b-card-body>
            </b-card-group>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5" style= "margin: 70px"></div>
    <b-button type="button" onclick="location.href='/publish-service'" class="publish-button" style="padding:0px 10px;">Publicar nuevo servicio</b-button>
  </div>
</template>

<script>

import axios from 'axios'
import auth from "@/logic/auth";

export default {
  name: 'UserService',
  data() {
    return{
       formData:{
        title: '',
      },
      titulosServices: [],
      categoriasServices: [],
      nameCategoriaService: [],
      imagenesServices: [],
      ServicesUids:[],
      found: false,

      userName: '',
      surname:'',
      uid: '',
      titulosServicesF: [],
      categoriasServicesF: [],
      nameCategoriaServiceF: [],
      imagenesServicesF: [],
    }
  },
   methods: {
    
    getCategories(id_c) {
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/'+ id_c )
        .then( r => {
          this.nameCategoriaService.push(r.data.name);
        })
        .catch(e => console.log( e ))
    },

    getServices() {
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/service-user-finder/' + this.uid )
        .then( r => {
          r.data.forEach(element => {
            this.titulosServices.push(element.title);
            this.categoriasServices.push(element.id_category);
            this.getCategories(element.id_category);
            this.imagenesServices.push(element.img);
            this.ServicesUids.push(element.uid)
          });
        })
        .catch(e => console.log( e ))
    },

    servicesEdit(index){
      const service_uid = this.ServicesUids[index];
      this.$router.push('/service-edit/' + service_uid);
    },

    getCategoriesFound(id_c) {
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/'+ id_c )
        .then( r => {
          this.nameCategoriaServiceF.push(r.data.name);
        })
        .catch(e => console.log( e ))
    },
    
    getServiceFound(){
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/buscarUsuario/'+ this.uid +'/'+ this.formData.title)
        .then( r => {
          this.titulosServicesF=[];
          this.categoriasServicesF= [],
          this.nameCategoriaServiceF= [],
          this.imagenesServicesF= [],
           r.data.forEach(element => {
            this.titulosServicesF.push(element.title);
            this.categoriasServicesF.push(element.id_category);
            this.getCategoriesFound(element.id_category);
            this.imagenesServicesF.push(element.img);
          });
        })
        .catch(e => console.log( e ))
    },

    servicesEdit(index){
      const service_uid = this.ServicesUids[index];
      this.$router.push('/service-edit/' + service_uid);
    }

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

    this.getServices();  
  },
}
</script>

<style scoped>
  .user-service-frame{
    box-sizing: border-box;
    max-width: 425px;
    margin: 0 auto;
    background-color:white;
    height: fit-content;
    /* padding-bottom: 20px; */
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
  .img-s{
    width: 350px;
    height: 150px;
  }
  .search-bar{
    width:69%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-color: #A70187;
    border-width: medium;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    height:50px;
  }
  .search-button{
    width:50px;
    padding: 7px;
    margin: 10px 0px;
    background-color: #A70187;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

</style>
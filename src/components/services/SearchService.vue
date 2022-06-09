<template>
  
  <div class="principal-frame">
      <b-input-group>
        <form @submit.prevent="searchByTitle" class="row" style="width: -webkit-fill-available; justify-content: center; max-height: 60px;">
          <b-form-input class="search-bar" id="buscador" v-model="formData.title" placeholder="¿Que servicio necesita?" />
          <b-button type = "submit" class="search-button" variant="none">
            <template>
              <Icon icon="charm:search" style="width:22px; height:22px; color: white;"/>
            </template>
          </b-button>
        </form>
      </b-input-group>
      
      <div v-if="formData.title==''">
        <h3 style="text-align: left; margin-left: 30px; padding-top: 10px;">Nuestras categorías</h3>
        <div v-for="i in ( ~~(categories.length/2) + 1 )" :key="i">
          <div v-if="(categories.length % 2) == 0" class="row" style="max-height: 190px; margin: 15px auto;">
            <div v-if="i <= (categories.length/2)" class="contenedor col-6" style="padding-right: 5px; padding-left: 40px;">
              <img src="../../assets/Gato_Indio.jpg" class="img-left">
              <div class="center-left">{{categories[(i*2)-2].name}}</div>
            </div>
            <div v-if="i <= (categories.length/2)" class="contenedor col-6" style="padding-left: 5px; padding-right: 40px;">
              <img src="../../assets/gato_guaton.jpg" class="img-right">
              <div class="center-right">{{categories[(i*2)-1].name}}</div>
            </div>
          </div>
          <div v-else class="row" style="max-height: 190px; margin: 15px auto;">
            <div v-if="i <= (categories.length/2) + 1" class="contenedor col-6" style="padding-right: 5px; padding-left: 40px;">
              <img src="../../assets/Gato_Indio.jpg" class="img-left">
              <div class="center-left">{{categories[(i*2)-2].name}}</div>
            </div>
            <div v-if="i <= (categories.length/2)" class="contenedor col-6" style="padding-left: 5px; padding-right: 40px;">
              <img src="../../assets/gato_guaton.jpg" class="img-right">
              <div class="center-right">{{categories[(i*2)-1].name}}</div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="row mb-5"></div>
          <div v-for="(service, index) in servicios" :key="index">
            <b-card-group class="mb-3" style="margin: 0px auto; max-width:360px; cursor:pointer; border: 1px solid rgba(0,0,0,.125);">
            <b-card-img  :src="service.img"  img-alt="Card image" img-top>
              </b-card-img><b-card-body>
              <b-card-sub-title class="mb-2 text-left" style="margin:10px 40px;">{{categoriesNames[index]}}</b-card-sub-title>
              <b-card-title class="font-weight-bold text-left" style="margin:10px 20px;">{{service.title}}</b-card-title>
              <b-list-group-item class="text-left text-muted" style="font-size: 20px; padding-left:1.5rem;">{{userNames[index][0]}} {{userNames[index][1]}}</b-list-group-item>
            </b-card-body>
            </b-card-group>
          </div>
      </div>

  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return{
      formData:{
        title: '',
      },
      categories: [],
      servicios: [],
      userNames: [],
      categoriesNames: []
    }
  },
  methods: {
    searchByTitle() {
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/buscarTitulo/' + this.formData.title )
          .then(( response ) => {
            this.servicios = response.data;
            this.servicios.forEach(element => {
              this.getNameCategoria(element.id_category);
              this.getUserName(element.id_owner);
            });
          }
          )
          .catch(( error ) => console.log( error ))
      
    },
    getNameCategoria(id_c) {
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/'+ id_c )
        .then( r => {
          this.categoriesNames.push(r.data.name);        
        })
        .catch(e => console.log( e ))
    },
    getUserName(id_o) {
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/users/'+ id_o )
        .then( r => {
          let names = [r.data.user.name,r.data.user.surname];
          this.userNames.push(names);
        })
        .catch(e => console.log( e ))
    }
  },
  async mounted (){
    await axios
      .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/' )
      .then( response => {
        this.categories = response.data.categories;
      })
      .catch(( e => console.log( e ) ))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.principal-frame{
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  padding: 100px 0px;
  background-color:white;
  height: fit-content;
  min-height: 900px;
}
.bg-light{
  background-color:#74015E!important;
}
.btn{
  padding: 0rem;
}
.btn-primary{
  background-color: #74015E!important;
}
.btn-outline-primary{
  width: -webkit-fill-available;
  background-color: white!important;;
  color: black!important;
  border-color: black!important;
}
.contenedor{
    position: relative;
    display: inline-block;
    text-align: center;
}
.center-left{
    position: absolute;
    top: 50%;
    left: 57%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 24px;
}
.center-right{
    position: absolute;
    top: 50%;
    left: 43%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 24px;
}
.img-left{
  width: 100%;
  max-width: 167.5px;
  height: auto;
  opacity: 50%;
  margin-right: 5px;
}
.img-right{
  width: 100%;
  max-width: 167.5px;
  height: auto;
  opacity: 50%;
  margin-left: 5px;
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
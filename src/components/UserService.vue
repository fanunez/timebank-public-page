<template>
    <div class="UserService">    
      <div class="row" style="margin: 10px 35px;">
        <div class="fuente1" v-if="titulosServices.length==0">
          <div class="row mb-3"></div>
          Aún no has ofrecido un servicio a la comunidad. </div>
        <div v-else > 
          <div class="row mb-3"></div>
          <div v-for="(service, index) in titulosServices" :key="index">
            <b-card-group>
            <b-card-img  :src= imagenesServices[index]  img-alt="Card image" img-top>
              </b-card-img><b-card-body class="mb-5">
              <b-card-sub-title class="mb-2 text-left" style="margin:10px 40px;">{{nameCategoriaService[index]}}</b-card-sub-title>
              <b-card-title class="font-weight-bold text-left" style="margin:10px 20px;">{{service}}</b-card-title>
              <b-list-group-item class="text-left text-muted" style="font-size: 20px; padding-left:1.5rem;">{{userName}} {{surname}}</b-list-group-item>
            </b-card-body>
            </b-card-group>
          </div>
        </div>
      </div>

      <div class="row mb-5"></div>
        
      <div class="btn-flotante" style="margin: 10px 0px;">
          <b-button type="button" class="botonPublicar col-12" style="padding:0px 10px;">Publicar nuevo servicio</b-button>
      </div>
    </div>
</template>

<script>

import axios from 'axios'
import auth from "@/logic/auth";

export default {
  name: 'UserService',
  data() {
    return{
      servicios: [],
      titulosServices: [],
      categoriasServices: [],
      nameCategoriaService: [],
      imagenesServices: [],

      userName: '',
      surname:'',
      uid: '',
      imagen: 'https://placekitten.com/1000/300',
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
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/buscarUsuario/' + this.uid )
        .then( r => {
          r.data.forEach(element => {
            this.titulosServices.push(element.title);
            this.categoriasServices.push(element.id_category);
            //this.getCategories(element.id_category);
            this.imagenesServices.push(element.image);
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

    // 
    this.getServices();
    this.categoriasServices.forEach(element => {
      this.getCategories(element);
    });

  
  },
 
}
</script>

<style scoped>
.UserService{
  padding-bottom: 10px;
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  background-color:white
}
.btn-flotante {
		font-size: 14px;
		padding: 50px 20px;
		bottom: 0px;
		
    position: fixed;
	}

.fuente1{
  font-weight: bold;
  font-size: 28px;
  margin-top: 10px;
}
.fuente2{
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 10px;
}
.fuente3{
  font-size: 26px;
  color:white
}
.fuente4{
  font-size: 20px;
  color: white;
}
.fuente5{
  font-size: 18px;
  text-align: left;
}
.card-body{
  padding: 0px;
}
.botonPublicar{
  padding: 5px 10px;
  width: -webkit-fill-available;
  margin: 10px 0px;
  background-color: #A70187!important;
  font-size: 26px;
  border-radius: 10px;

}
</style>
<template>
  <div class="SearchService">
    <div class="PrincipalFrame" style="padding-top: 5px;">
        <b-input-group>
          <form @submit.prevent="searchByTitle" class="row" style="width: -webkit-fill-available; padding-left: 25px; padding-right: 25px; max-height: 60px;">
            <b-form-input id="buscador" v-model="formData.titulo" placeholder="¿Que servicio necesita?" style="width:81%; margin-top: 10px; margin-bottom: 10px; margin-left: 20px; border-color: #A70187; border-width: medium;"/>
            <b-button type = "submit" variant="none" style="padding: 7px; margin: 10px 0px; background-color: #A70187;">
              <template>
                <Icon icon="charm:search" style="width:22px; height:22px; color: white;"/>
              </template>
            </b-button>
          </form>
        </b-input-group>
        
        <h3 style="text-align: left; margin-left: 30px; padding-top: 10px;">Nuestras categorías</h3>
        <div v-for="i in (categorias.length/2)" :key="i">
          <div v-if="(categorias.length % 2) == 0" class="row" style="max-height: 190px; margin: 15px auto;">
            <div v-if="i <= (categorias.length/2)" class="contenedor col" style="padding-right: 5px; padding-left: 40px;">
              <img src="../assets/Gato_Indio.jpg" class="ImgIzquierda">
              <div class="centradoIzq">{{categorias[(i*2)-2].name}}</div>
            </div>
            <div v-if="i <= (categorias.length/2)" class="contenedor col" style="padding-left: 5px; padding-right: 40px;">
              <img src="../assets/gato_guaton.jpg" class="ImgDerecha">
              <div class="centradoDer">{{categorias[(i*2)-1].name}}</div>
            </div>
          </div>
          <div v-else class="row" style="max-height: 190px; margin: 15px auto;">
            <div v-if="i <= (categorias.length/2) + 1" class="contenedor col" style="padding-right: 5px; padding-left: 40px;">
              <img src="../assets/Gato_Indio.jpg" class="ImgIzquierda">
              <div class="centradoIzq">{{categorias[(i*2)-2].name}}</div>
            </div>
            <div v-if="i <= (categorias.length/2)" class="contenedor col" style="padding-left: 5px; padding-right: 40px;">
              <img src="../assets/gato_guaton.jpg" class="ImgDerecha">
              <div class="centradoDer">{{categorias[(i*2)-1].name}}</div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchService',
  data() {
    return{
      formData:{
        titulo: '',
      },
      categorias: []
    }
  },
  methods: {
    searchByTitle() {
      axios
        .post( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/buscador/' + this.formData.titulo )
          .then(( response ) => console.log(response.data))
          .catch(( error ) => console.log( error ))
      
    }
  },
  async mounted (){
    console.log( this.formData.titulo )
    await axios
      .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/' )
      .then( resp => {
        this.categorias = resp.data.categories;
        })
      .catch(( e => console.log( e ) ))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SearchService{
  height: auto;
}
.PrincipalFrame{
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  padding: 31px 0px;
  background-color:white;
  height: -webkit-fill-available;
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
.centradoIzq{
    position: absolute;
    top: 50%;
    left: 57%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 24px;
}
.centradoDer{
    position: absolute;
    top: 50%;
    left: 43%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 24px;
}
.ImgIzquierda{
  width: 100%;
  max-width: 180px;
  height: auto;
  opacity: 50%;
  margin-right: 5px;
}
.ImgDerecha{
  width: 100%;
  max-width: 180px;
  height: auto;
  opacity: 50%;
  margin-left: 5px;
}
</style>
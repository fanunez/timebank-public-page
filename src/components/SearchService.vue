<template>
  <div class="SearchService">
    <div class="PrincipalFrame" style="padding-top: 5px;">
        <b-input-group>
          <form @submit.prevent="buscar" class="row" style="width: -webkit-fill-available; padding-left: 25px; padding-right: 25px; max-height: 60px;">
            <b-form-input id="buscador" v-model="formData.titulo" placeholder="¿Que servicio necesita?" style="width:81%; margin-top: 10px; margin-bottom: 10px; margin-left: 20px; border-color: #A70187; border-width: medium;"/>
            <b-button type = "submit" variant="none" style="padding: 7px; margin: 10px 0px; background-color: #A70187;">
              <template>
                <Icon icon="charm:search" style="width:22px; height:22px; color: white;"/>
              </template>
            </b-button>
          </form>
        </b-input-group>
        
        <h3 style="text-align: left; margin-left: 30px; padding-top: 10px;">Nuestras categorías</h3>
        <div class="row" style="max-height: 190px;">
            <div class="contenedor col" style="margin: 5px auto; padding-right: 0px; padding-left: 40px;">
                <img src="../assets/Gato_Indio.jpg" class="ImgIzquierda">
                <div class="centradoIzq">Deporte</div>
            </div>
            <div class="contenedor col" style="margin: 5px auto; padding-left: 0px; padding-right: 40px;">
            <img src="../assets/Gato_Indio.jpg" class="ImgDerecha">
                <div class="centradoDer">Negocio</div>
            </div>
        </div>
        <div class="row" style="max-height: 190px;">
            <div class="contenedor col" style="margin: 5px auto; padding-right: 0px; padding-left: 40px;">
                <img src="../assets/gato_guaton.jpg" class="ImgIzquierda">
                <div class="centradoIzq">Siesta</div>
            </div>
            <div class="contenedor col" style="margin: 5px auto; padding-left: 0px; padding-right: 40px;">
                <img src="../assets/gato_guaton.jpg" class="ImgDerecha">
                <div class="centradoDer">Comida</div>
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
      }
    }
  },
  methods: {
    buscar() {
      
      const payload = {
        titulo: this.formData.titulo
      }

      console.log(payload)

      axios
        //.get('http://164.92.96.206:8081/api/buscador/', payload )
        .get('http://localhost:8080/api/buscador/', {
          params:{
            titulo: this.formData.titulo
            }}) 
        .then(( response ) => console.log(response.data))
        .catch(( error ) => console.log( error ))
      
    }
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
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-size: 24px;
}
.centradoDer{
    position: absolute;
    top: 50%;
    left: 50%;
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
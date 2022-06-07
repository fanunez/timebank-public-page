<template>
    <div class="main">
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-2" style="padding: 5px ; margin: 10px 0px; margin-top: 10px; padding-left: 35px;">
          <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></button>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 10px;">
          <div class="timebank-header">Publicar servicio</div>
        </div>
      </div>
      <form @submit.prevent="createService">
        <div class="timebank-phrase">Nombre del servicio</div>
        <b-form-input id="nombre" type = "text" v-model="formService.nombre" placeholder="Ej: Clases de inglés" class="form-container"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px; margin: 5px 30px" v-if="formService.errorNombre === true">
          <div style = "padding-bottom: 5px;">{{ formService.errorNombreT }}</div>
        </div>
        <div class="timebank-phrase">Categoría del servicio</div>
        <b-form-select v-model="formService.categoria" :options="options" class="form-container" id="categoria" right variant="none" toggle-class="escogerCategoria"></b-form-select>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formService.errorCategoria === true">
          <div style = "padding-bottom: 5px;">{{ formService.errorCategoriaT }}</div>
        </div>
        <div class="timebank-phrase">Valor del servicio</div>
        <b-form-input id="valor" type = "number" v-model="formService.valor" placeholder="Ej: 1" class="form-container"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px; margin: 5px 30px" v-if="formService.errorValor === true">
          <div style = "padding-bottom: 5px;">{{ formService.errorValorT }}</div>
        </div>
        <div class="timebank-phrase">URL de la imagen del servicio</div>
        <b-form-input id="imagen" type = "text" v-model="formService.imagen" placeholder="Ej: shorturl.at/tEMS4" class="form-container"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px; margin: 5px 30px" v-if="formService.errorImagen === true">
          <div style = "padding-bottom: 5px;">{{ formService.errorImagenT }}</div>
        </div>
        <div class="timebank-phrase">Descripción del servicio</div>
        <b-container fluid>
          <b-row>
            <b-form-textarea type="text" rows="3" v-model="formService.texto" class="description-frame" placeholder="Ingrese la descripción de su servicio"></b-form-textarea>
          </b-row>
        </b-container>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px; margin: 5px 30px" v-if="formService.errorTexto === true">
          <div style = "padding-bottom: 5px;">{{ formService.errorTextoT }}</div>
        </div>
        <b-button type="submit" class="send-button">Subir servicio</b-button>
      </form>
    </div>
</template>

<script>
import axios from 'axios';
import auth from "@/logic/auth";

export default {
  data() {
    return{
      selected: null,
      categorias: [],
      options: [
        { value: null , text: 'Seleccione una categoria' }
      ],
      formService:{
        nombre: '',
        categoria: '',
        valor: '',
        texto: '',
        imagen: '',
        state: 'true',

        estateError: false,

        errorNombre: false,
        errorCategoria: false,
        errorValor: false,
        errorTexto: false,
        errorImagen: false,

        errorNombreT: '',
        errorCategoriaT: '',
        errorValorT: '',
        errorTextoT: '',
        errorImagenT: '',
    
      }
    }
  },
  mounted (){
    this.aid = auth.getUserLogged()
    axios
      .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/categoryBuscador', {
        params:{
          name: ""        
        }})
      .then( resp => {
        this.categorias = resp.data;
        this.categorias.forEach(element => {
          const aux = { value: element.uid, text: element.name }
          this.options.push(aux)
        });
        })
      .catch(( e => console.log( e ) ))
  },
  methods: {
    createService(){
      this.formService.estateError = false;

      this.formService.errorNombre = false;
      this.formService.errorCategoria = false;
      this.formService.errorValor = false;
      this.formService.errorTexto = false;
      this.formService.errorImagen = false;

      this.formService.errorNombreT = '';
      this.formService.errorCategoriaT = '';
      this.formService.errorValorT = '';
      this.formService.errorTextoT = '';
      this.formService.errorImagenT = '';

      if (!this.formService.nombre){
        this.formService.estateError = true;
        this.formService.errorNombre = true;
        this.formService.errorNombreT = 'Ingrese nombre.';
      }

      if (!this.formService.categoria){
        this.formService.estateError = true;
        this.formService.errorCategoria = true;
        this.formService.errorCategoriaT = 'Ingrese categoria.';

      }

      if (!this.formService.valor){
        this.formService.estateError = true;
        this.formService.errorValor = true;
        this.formService.errorValorT = 'Ingrese valor.';

      }

      if (!this.formService.texto){
        this.formService.estateError = true;
        this.formService.errorTexto = true;
        this.formService.errorTextoT = 'Ingrese texto.';
      }

      if (!this.formService.imagen){
        this.formService.estateError = true;
        this.formService.errorImagen = true;
        this.formService.errorImagenT = 'Ingrese imagen.';

      }

      if (this.formService.estateError == true){    
        return true;
      }
      
      const payload = {
        title: this.formService.nombre,
        id_category: this.formService.categoria,
        description: this.formService.texto,
        value: this.formService.valor,
        image: this.formService.imagen,
        id_owner: this.aid,
        achievements: [],
        state: true
      }

      console.log( payload );

      axios
        .post( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/', payload )
        .then(( response ) => {
          console.log(response.data)
          window.location.href="/profile"
        })
        .catch(( error ) => console.log( error ))

    }
  }
}
</script>
<style>
.choose-category{
  width: -webkit-fill-available;
  margin-top: 10px!important;
  margin-right: 0px!important;
  margin-bottom: 10px!important;
  margin-left: 0px!important;
  border: groove!important;
  border-color: #A70187!important;
  box-shadow: none!important;
}
</style>
<style scoped>
.main{
  min-height: -webkit-fill-available;
  box-sizing: border-box;
  max-width: 425px;
  margin: 0px auto;
  padding: 70px 0px;
  background-color:white;
  height: 100vh;
}
.form-container{
  margin: 5px 35px;
  border-color: #A70187;
  border-width: medium;
  width: -webkit-fill-available;
  height: fit-content;
}
.timebank-header{
  font-weight: bold;
  font-size: 28px;
}
.timebank-phrase{
  font-weight: 300px;
  font-size: 22px;
  text-align: left;
  margin-left: 35px;
}
.description-frame{
  font-size: 20px;
  margin: 5px 35px;
  width:-webkit-fill-available;
  padding-top: 10px;
  padding-bottom: 20px;
  height: 180px;
}
.send-button{
  padding: 5px 0px;
  width: -webkit-fill-available;
  margin: 10px 35px;
  margin-bottom: 100px;
  background-color: #A70187!important;
  font-size: larger;
}

</style>

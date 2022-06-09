<template>
    <div class="main">
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-1" style="padding: 5px 0px; margin: 10px 10px; margin-left: 37px;">
          <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="bi:x-lg" style="width:40px; height:40px;"/></button>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 10px;">
          <div class="timebank-header" style="margin-right: 10px">Publicar servicio</div>
        </div>
      </div>

      <!-- Data form -->
      <form style="margin-bottom: 10px">
      <b-row style="margin: 10px 40px;">
        <!-- Name -->
        <div class="timebank-subtitle mt-2">Nombre del servicio</div>
        <b-form-input class="input-border" id="nombre" type = "text" v-model="formService.nombre" placeholder="Ej: Clases de inglés"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formService.errorNombre === true">
          <div style = "padding-bottom: 5px;">{{ formService.errorNombreT }}</div>
        </div>

        <!-- Category -->
        <div class="timebank-subtitle mt-2">Categoría del servicio</div>
        <b-form-select class="input-border" v-model="formService.categoria" :options="options" id="categoria" right variant="none" toggle-class="escogerCategoria"></b-form-select>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formService.errorCategoria === true">
          <div style = "padding-bottom: 5px;">{{ formService.errorCategoriaT }}</div>
        </div>

        <!-- Value -->
        <div class="timebank-subtitle mt-2">Valor del servicio</div>
        <b-form-input class="input-border" id="valor" type = "number" v-model="formService.valor" placeholder="Ej: 1"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formService.errorValor === true">
          <div style = "padding-bottom: 5px;">{{ formService.errorValorT }}</div>
        </div>

        <!-- Description -->
        <div class="timebank-subtitle mt-2">Descripción del servicio</div>
        <b-container fluid>
          <b-row>
            <b-form-textarea type="text" 
                             rows="3" 
                             max-rows="10"
                             v-model="formService.texto" 
                             class="input-border"
                             placeholder="Ingrese la descripción de su servicio"
            ></b-form-textarea>
          </b-row>
        </b-container>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formService.errorTexto === true">
          <div style = "padding-bottom: 5px;">{{ formService.errorTextoT }}</div>
        </div>
      </b-row>
      </form>

      <!-- Image -->
      <div class="timebank-subtitle row mt-2" style="margin: 10px 40px;">Imágenes del servicio</div>
      <div v-if="formService.img != ''" class="col-12">
        <UploadImage class="mb-4 w-32 h-32 rounded-full"
                      v-model="formService.serviceImg"
                      :default-src="formService.img"
                      >
        </UploadImage>
      </div>

      <!-- Submit button -->
      <b-button type="submit" class="send-button" v-on:click="createService">Publicar servicio</b-button>
    </div>
</template>

<script>
import axios from 'axios';
import auth from "@/logic/auth";
import UploadImage from './helpers/UploadImage.vue'

export default {
  components: {
    UploadImage
  },
  data() {
    return{
      selected: null,
      categorias: [],
      options: [
        { value: null , text: 'Seleccione una categoria' }
      ],
      formService:{
        uid: '',
        nombre: '',
        categoria: '',
        valor: '',
        texto: '',
        serviceImg: null,
        img: 'https://res.cloudinary.com/clouduwu/image/upload/v1654751873/no_service_image_j3ajxr.webp',

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
  async mounted (){
    // get user uid
    const token = auth.getUserLogged();
    // petition
    await axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/auth/user-logged/', {
        headers:{
            'Authorization': token,
        },
        })
        .then( response => {
            // console.log( response.data.uid )
            this.uid = response.data.uid
        })
        .catch( e => console.log( e ))

    await axios
      .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/' )
      .then( resp => {
        this.categorias = resp.data.categories;
        this.categorias.forEach(element => {
          const aux = { value: element.uid, text: element.name }
          this.options.push(aux)
        });
        })
      .catch(( e => console.log( e ) ))
  },
  methods: {
    async createService(){
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

      if (!this.formService.img){
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
        value: this.formService.valor,
        description: this.formService.texto,
        id_owner: this.uid,
        achievements: [],
      }

      let serviceUid;
      // send data
      await axios
        .post( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/', payload )
        .then(( response ) => {
          this.serviceUid = response.data.uid;
        })
        .catch(( error ) => console.log( error ))

      // send image
      if( this.formService.serviceImg ) {
        // send new image
        let fileData = new FormData();
        fileData.append("file", this.formService.serviceImg )
        await axios
          .put( `${process.env.VUE_APP_BACKEND_URL_SERVER}/uploads/service/${this.serviceUid}`, fileData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then( response => {
            return window.location.href="/profile"
          })
          .catch( e => console.log( e ))
      } else {
        return window.location.href="/profile"
      }
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
      margin: 0 auto;
      background-color:white
    }
  .input-border {
    margin: 5px auto; 
    border-color: #A70187; 
    border-width: medium;
    height: 50px;
    /* border-left: none; */
  }
  .input-group-text{
    height:50px;
    margin:5px 0px;
    border-right: none;
    background-color: white;
    border-color: #A70187; 
    border-width: medium;
  }
  .timebank-header{
    font-weight: bold;
    font-size: 28px;
  }
  .timebank-subtitle{
      font-weight: bold;
      font-size: 18px;
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

  .send-button{
    /* padding: 5px 0px; */
    width: 346px;
    margin-top: 10px;
    margin-right: 0px;
    margin-bottom: 30px;
    margin-left: 0px;
    background-color: #A70187!important;;
    color: white!important;
    font-size: x-large;
    border-radius: 10px;
  }

</style>

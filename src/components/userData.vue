<template>
    <div class="main">
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-1" style="padding: 5px 0px; margin: 10px 10px; margin-left: 37px;">
          <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="bi:x-lg" style="width:40px; height:40px;"/></button>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 10px;">
          <div class="timebank-header" style="margin-right: 10px">Escribe tus datos</div>
        </div>
      </div>
      <form @submit.prevent="createUser">
      <b-row style="margin: 10px 40px;">

        <div class="timebank-subtitle mt-2">Nombres</div>
        <b-form-input class="input-border" id="nombre" type = "text" v-model="formData.nombre" placeholder="Ej: Vanessa Carolina" ></b-form-input>
        <div class = "container input-error-location" v-if="formData.errorNombre === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorNombreT }}</div>
        </div>
        <br>

        <div class="timebank-subtitle mt-2">Apellidos</div>
        <b-form-input class="input-border" id="apellido" type = "text" v-model="formData.apellido" placeholder="Ej: Sáez Bonacic" ></b-form-input>
        <div class = "container input-error-location" v-if="formData.errorApellido === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorApellidoT }}</div>
        </div>
        <br>

        <div class="timebank-subtitle mt-2">Escoger relación</div>
        <b-form-select class="input-border" v-model="formData.relacion" :options="options" id="relacion" right variant="none" toggle-class="escogerRelacion">
          <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        </b-form-select>
        <div class = "container input-error-location" v-if="formData.errorRelacion === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorRelacionT }}</div>
        </div>
        <br>
        
        <div class="timebank-subtitle mt-2">Edad</div>
        <b-form-input class="input-border" id="edad" type = "number" v-model="formData.edad" placeholder="Ej: 30" ></b-form-input>
        <div class = "container input-error-location" v-if="formData.errorEdad === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorEdadT }}</div>
        </div>
        <br>

        <div class="timebank-subtitle mt-2">Dirección</div>
        <b-form-input class="input-border" id="direccion" type = "text" v-model="formData.direccion" placeholder="Ej: Vicuña Mackenna 1234" ></b-form-input>
        <div class = "container input-error-location" v-if="formData.errorDireccion === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorDireccionT }}</div>
        </div>
        <br>

        <div class="timebank-subtitle mt-2">Teléfono de contacto (fijo o celular)</div>
        <b-form-input class="input-border" id="telefono" type = "text" v-model="formData.telefono" placeholder="Ej: 987654321" ></b-form-input>
        <div class = "container input-error-location" v-if="formData.errorTelefono === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorTelefonoT }}</div>
        </div>
        <br>

        <div class="timebank-subtitle mt-2">Rut</div>
        <b-form-input class="input-border" id="rut" type = "text" v-model="formData.rut" placeholder="Ej: 12.345.678-9" ></b-form-input>
        <div class = "container input-error-location" v-if="formData.errorRut === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorRutT }}</div>
        </div>
        <br>

        <div class="timebank-subtitle mt-2">Correo electrónico</div>
        <b-form-input class="input-border" id="correo" type = "text" v-model="formData.correo" placeholder="Ej: banco.tiempo@gmail.com" ></b-form-input>
        <div class = "container input-error-location" v-if="formData.errorCorreo === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorCorreoT }}</div>
        </div>
        <br>

        <div class="timebank-subtitle mt-2">Contraseña</div>
        <b-form-input class="input-border" id="contraseña" type = "password" v-model="formData.contraseña" placeholder="********" ></b-form-input>
        <div class = "container input-error-location" v-if="formData.errorContraseña === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorContraseñaT }}</div>
        </div>
        <br>

        <div class="timebank-phrase">Al pulsar el boton registrar usted está de acuerdo con nuestros <a href="#">Términos y condiciones de uso</a> </div>
        <b-button type="submit" class="send-button" href="/">Registrarse</b-button>

      </b-row>
      </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'userData',
  data() {
    return{
      formData: {
        nombre: '',
        apellido: '',
        relacion: null,
        edad: '',
        direccion: '',
        telefono: '',
        rut: '',
        correo: '',
        contraseña: '',
        tipoUsuario: 'Blue',
        state: 'true',

        stateError: false,

        errorNombre: false,
        errorApellido: false,
        errorRelacion: false,
        errorEdad: false,
        errorDireccion: false,
        errorTelefono: false,
        errorRut: false,
        errorCorreo: false,
        errorContraseña: false,

        errorNombreT: '',
        errorApellidoT: '',
        errorRelacionT: '',
        errorEdadT: '',
        errorDireccionT: '',
        errorTelefonoT: '',
        errorRutT: '',
        errorCorreoT: '',
        errorContraseñaT: '',


      },
      // Form relation data
      options: [
        { value: null, text: 'Seleccione una alternativa', disabled: true },
        { value: 'Trabajo', text: 'Trabajo' },
        { value: 'Estudio', text: 'Estudio' },
        { value: 'Vivo', text: 'Vivo' }
      ]
    }
  },
  methods: {
    createUser() {

      this.formData.estateError = false;

      this.formData.errorNombre = false;
      this.formData.errorApellido = false;
      this.formData.errorRelacion = false;
      this.formData.errorEdad = false;
      this.formData.errorDireccion = false;
      this.formData.errorTelefono = false;
      this.formData.errorRut = false;
      this.formData.errorCorreo = false;
      this.formData.errorContraseña = false;

      this.formData.errorNombreT = '';
      this.formData.errorApellidoT = '';
      this.formData.errorRelacionT = '';
      this.formData.errorEdadT = '';
      this.formData.errorDireccionT = '';
      this.formData.errorTelefonoT = '';
      this.formData.errorRutT = '';
      this.formData.errorCorreoT = '';
      this.formData.errorContraseñaT = '';

      if (!this.formData.nombre){
        this.formData.estateError = true;
        this.formData.errorNombre = true;
        this.formData.errorNombreT = 'Ingrese nombre.';
      }

      if (!this.formData.apellido){
        this.formData.estateError = true;
        this.formData.errorApellido = true;
        this.formData.errorApellidoT = 'Ingrese apellido.';
      }

      if (!this.formData.relacion){
        this.formData.estateError = true;
        this.formData.errorRelacion = true;
        this.formData.errorRelacionT = 'Ingrese relación.';
      }

      if (!this.formData.edad){
        this.formData.estateError = true;
        this.formData.errorEdad = true;
        this.formData.errorEdadT = 'Ingrese edad.';
      }

      if ((this.formData.edad < 18 || this.formData.edad > 120) && (this.formData.errorEdad == false) ){
        this.formData.estateError = true;
        this.formData.errorEdad = true;
        this.formData.errorEdadT = 'Debe tener una edad entre 18 y 120 años.';
      }
      
      if (!this.formData.direccion){
        this.formData.estateError = true;
        this.formData.errorDireccion = true;
        this.formData.errorDireccionT = 'Ingrese dirección.';
      }

      if (!this.formData.telefono){
        this.formData.estateError = true;
        this.formData.errorTelefono = true;
        this.formData.errorTelefonoT = 'Ingrese telefono.';
      }

      if (!this.formData.rut){
        this.formData.estateError = true;
        this.formData.errorRut = true;
        this.formData.errorRutT = 'Ingrese rut.';
      }

      if (!this.formData.correo){
        this.formData.estateError = true;
        this.formData.errorCorreo = true;
        this.formData.errorCorreoT = 'Ingrese correo.';
      }

      if (!this.formData.contraseña){
        this.formData.estateError = true;
        this.formData.errorContraseña = true;
        this.formData.errorContraseñaT = 'Ingrese contraseña.';
      }

      if ((this.formData.contraseña.length < 8) && (this.formData.errorContraseña == false) ){
        this.formData.estateError = true;
        this.formData.errorContraseña = true;
        this.formData.errorContraseñaT = 'La contraseña debe tener minimo 8 caracteres.';
      }

      if (this.formData.estateError == true){    
        return true;
      }

      // generate payload body with the information of the data that is send
      const payload = {
        name: this.formData.nombre,
        surname: this.formData.apellido,
        relation: this.formData.relacion,
        age: this.formData.edad,
        address: this.formData.direccion,
        phone: this.formData.telefono,
        rut: this.formData.rut,
        email: this.formData.correo,
        password: this.formData.contraseña,
        type_user: this.formData.tipoUsuario,
        state: true
      }
      
      console.log( payload );

      axios
        // if you need to change the endpoint base to local, replace as
        // process.env.VUE_APP_BACKEND_URL_LOCAL
        .post( process.env.VUE_APP_BACKEND_URL_SERVER + '/users/', payload )
        .then(( response ) => {
          console.log(response.data)
          window.location.href="/home"
        })
        .catch(( error ) => console.log( error ))
      
    }
  }

}
</script>
<style>
.escogerRelacion{
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

.timebank-header{
  font-weight: bold;
  font-size: 28px;
}

.timebank-subtitle{
  font-weight: bold;
  font-size: 18px;
}

.timebank-phrase{
  font-weight: 300px;
  font-size: 18px;
  margin: 10px 0px;
}

.send-button{
  /* padding: 5px 0px; */
  width: -webkit-fill-available;
  margin-top: 10px;
  margin-right: 0px;
  margin-bottom: 30px;
  margin-left: 0px;
  background-color: #A70187!important;;
  color: white!important;
  font-size: x-large;
  border-radius: 10px;
}

.input-error-location {
  color: red;
  font-size: 12px;
  text-align: left;
  padding-left: 0px;
}

.input-border {
  margin: 5px auto; 
  border-color: #A70187; 
  border-width: medium;
  height: 50px;
}

</style>

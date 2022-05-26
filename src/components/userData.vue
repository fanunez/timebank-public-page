<template>
    <div class="main">
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-2" style="padding: 5px 0px; margin: 10px 10px;">
          <a href="/register/userSelector" style="color:black"><Icon icon="bi:x-lg" style="width:40px; height:40px;"/></a>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 10px;">
          <div class="fuente1">Escribe tus datos</div>
        </div>
      </div>
      <form @submit.prevent="createUser">
      <b-row style="margin: 10px 40px;">

        <div class="fuente2">Nombres</div>
        <b-form-input id="nombre" type = "text" v-model="formData.nombre" placeholder="Ej: " style="margin: 5px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formData.errorNombre === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorNombreT }}</div>
        </div>
        <br>

        <div class="fuente2">Apellidos</div>
        <b-form-input id="apellido" type = "text" v-model="formData.apellido" placeholder="Ej: " style="margin: 5px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formData.errorApellido === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorApellidoT }}</div>
        </div>
        <br>

        <div class="fuente2">Escoger relación</div>
        <b-form-select v-model="formData.relacion" :options="options" id="relacion" right variant="none" toggle-class="escogerRelacion" style=" margin: 5px auto; width:-webkit-fill-available; border-color: #A70187; border-width: medium;">
          <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        </b-form-select>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formData.errorRelacion === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorRelacionT }}</div>
        </div>
        <br>
        
        <div class="fuente2">Edad</div>
        <b-form-input id="edad" type = "number" v-model="formData.edad" placeholder="Ej: 30" style="margin: 5px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formData.errorEdad === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorEdadT }}</div>
        </div>
        <br>

        <div class="fuente2">Dirección</div>
        <b-form-input id="direccion" type = "text" v-model="formData.direccion" placeholder="Ej: Vicuña mackenna XXXX" style="margin: 5px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formData.errorDireccion === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorDireccionT }}</div>
        </div>
        <br>

        <div class="fuente2">Teléfono de contacto (fijo o celular)</div>
        <b-form-input id="telefono" type = "text" v-model="formData.telefono" placeholder="Ej: 987654321" style="margin: 5px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formData.errorTelefono === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorTelefonoT }}</div>
        </div>
        <br>

        <div class="fuente2">Rut</div>
        <b-form-input id="rut" type = "text" v-model="formData.rut" placeholder="Ej: 12.345.678-9" style="margin: 5px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formData.errorRut === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorRutT }}</div>
        </div>
        <br>

        <div class="fuente2">Correo electrónico</div>
        <b-form-input id="correo" type = "text" v-model="formData.correo" placeholder="Ej: banco.tiempo@gmail.com" style="margin: 5px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formData.errorCorreo === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorCorreoT }}</div>
        </div>
        <br>

        <div class="fuente2">Contraseña</div>
        <b-form-input id="contraseña" type = "password" v-model="formData.contraseña" placeholder="******** " style="margin: 5px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class = "container" style = "color: red; font-size: 12px; text-align: left; padding-left: 0px;" v-if="formData.errorContraseña === true">
          <div style = "padding-bottom: 5px;"> {{ formData.errorContraseñaT }}</div>
        </div>
        <br>

        <div class="fuente3">Al pulsar el boton registrar usted está de acuerdo con nuestros <a href="#">Términos y condiciones de uso</a> </div>
        <b-button type="submit" class="botonEnviar" href="/">Registrarse</b-button>

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
        relacion: '',
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
      // selected: null,
      selected: null,
        options: [
          { value: null, text: 'Selecciona una alternativa' },
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
        // .post('http://164.92.96.206:8081/api/users/', payload )
        .post('http://localhost:8080/api/users/', payload )
        .then(( response ) => {
          console.log(response.data)
          window.location.href="/Home"
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
.fuente1{
  font-weight: bold;
  font-size: 28px;
}
.fuente2{
  font-weight: bold;
  font-size: 14px;
}
.fuente3{
  font-weight: 300px;
  font-size: 18px;
  margin: 10px 0px;
}
.botonEnviar{
  padding: 5px 0px;
  width: -webkit-fill-available;
  margin-top: 10px;
  margin-right: 0px;
  margin-bottom: 30px;
  margin-left: 0px;
  background-color: #A70187!important;
  font-size: larger;
}
</style>

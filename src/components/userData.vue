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
        <b-form-input id="nombre" type = "text" v-model="formData.nombre" placeholder="Ej: Panchuwu" style="margin: 10px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class="fuente2">Apellidos</div>
        <b-form-input id="apellido" type = "text" v-model="formData.apellido" placeholder="Ej: El bailarin" style="margin: 10px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class="fuente2">Escoger relación</div>
        <b-form-select v-model="formData.relacion" :options="options" id="relacion" right variant="none" toggle-class="escogerRelacion" style="width:-webkit-fill-available;">
          <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
        </b-form-select>
        <div class="fuente2">Edad</div>
        <b-form-input id="edad" type = "number" v-model="formData.edad" placeholder="Ej: 30" style="margin: 10px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class="fuente2">Teléfono de contacto (fijo o celular)</div>
        <b-form-input id="telefono" type = "text" v-model="formData.telefono" placeholder="Ej: 987654321" style="margin: 10px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class="fuente2">Rut</div>
        <b-form-input id="rut" type = "text" v-model="formData.rut" placeholder="Ej: 12.345.678-9" style="margin: 10px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class="fuente2">Correo electrónico</div>
        <b-form-input id="correo" type = "text" v-model="formData.correo" placeholder="Ej: banco.tiempo@gmail.com" style="margin: 10px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class="fuente2">Contraseña</div>
        <b-form-input id="contraseña" type = "text" v-model="formData.contraseña" style="margin: 10px auto; border-color: #A70187; border-width: medium;"></b-form-input>
        <div class="fuente3">Al pulsar el boton registrar usted está de acuerdo con nuestros <a href="#">Términos y condiciones de uso</a> </div>
        <b-button type="submit" class="botonEnviar">Registrarse</b-button>
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
      formData:{
        nombre: '',
        apellido: '',
        relacion: '',
        edad: '',
        telefono: '',
        rut: '',
        correo: '',
        contraseña: '',
        tipoUsuario: 'Azul',
        state: 'true'
      },
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
      console.log(this.formData)
      axios
        .post('164.92.96.206:8081/api/users/', this.formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
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

<template>
    <div class="main">
      <!-- Header -->
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-1" style="padding: 5px 0px; margin: 10px 10px; margin-left: 37px;">
          <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="bi:x-lg" style="width:40px; height:40px;"/></button>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 10px;">
          <div class="timebank-header" style="margin-right: 10px">Edita tus datos</div>
        </div>
      </div>
      
      <!-- Change image -->
      <div v-if="formData.img != ''" class="col-12">
        <avatar-input class="w-32 h-32 rounded-full" 
                      v-model="formData.avatar"
                      :default-src="formData.img"
                      >
        </avatar-input>
      <div class="timebank-subtitle mt-2 mb-2" style="color: #A70187">CAMBIAR AVATAR</div>
      </div>
      <!-- Data form -->
      <form style="margin-bottom: 30px">
      <b-row style="margin: 10px 40px;">


        <!-- Name -->
        <div class="timebank-subtitle mt-2">Nombres</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon class="icon-container" icon="bi:person-fill"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="nombre" type = "text" v-model="formData.newName" placeholder="Ej: Vanessa Carolina" ></b-form-input>
        </b-input-group>

        <div class = "container input-error-location" v-if="formData.nameError === true">
          <div style = "padding-bottom: 5px;"> {{ formData.nameErrorT }}</div>
        </div>
        <br>

        <!-- Surname -->
        <div class="timebank-subtitle mt-2">Apellidos</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon class="icon-container" icon="bi:person-fill"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="apellido" type = "text" v-model="formData.newSurname" placeholder="Ej: Sáez Bonacic" ></b-form-input>
        </b-input-group>

        <div class = "container input-error-location" v-if="formData.surnameError === true">
          <div style = "padding-bottom: 5px;"> {{ formData.surnameErrorT }}</div>
        </div>
        <br>

        <!-- Relation -->
        <div class="timebank-subtitle mt-2">Escoger relación</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon class="icon-container" icon="ic:sharp-maps-home-work"/></span>
          </b-input-group-prepend>
          <b-form-select class="input-border" v-model="formData.newRelation" :options="options" id="relacion" right variant="none" toggle-class="choose-relation"></b-form-select>
        </b-input-group>

        <div class = "container input-error-location" v-if="formData.relationError === true">
          <div style = "padding-bottom: 5px;"> {{ formData.relationErrorT }}</div>
        </div>
        <br>

        <!-- Address -->
        <div class="timebank-subtitle mt-2">Dirección</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon class="icon-container" icon="bx:world"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="direccion" type = "text" v-model="formData.newAddress" placeholder="Ej: Vicuña Mackenna 1234" ></b-form-input>
        </b-input-group>

        <div class = "container input-error-location" v-if="formData.addressError === true">
          <div style = "padding-bottom: 5px;"> {{ formData.addressErrorT }}</div>
        </div>
        <br>

        <!-- Phone -->
        <div class="timebank-subtitle mt-2">Teléfono de contacto (fijo o celular)</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon class="icon-container" icon="bxs:phone"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="telefono" type = "text" v-model="formData.newPhone" placeholder="Ej: 987654321" ></b-form-input>
        </b-input-group>

        <div class = "container input-error-location" v-if="formData.phoneError === true">
          <div style = "padding-bottom: 5px;"> {{ formData.phoneErrorT }}</div>
        </div>
        <br>

        <!-- Email -->
        <div class="timebank-subtitle mt-2">Correo electrónico</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon class="icon-container" icon="ant-design:mail-outlined"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="correo" type="email" v-model="formData.newEmail" placeholder="Ej: banco.tiempo@gmail.com" ></b-form-input>
        </b-input-group>

        <div class = "container input-error-location" v-if="formData.emailError === true">
          <div style = "padding-bottom: 5px;"> {{ formData.emailErrorT }}</div>
        </div>
        <br>

        <!-- Preferences -->
        <div class="timebank-subtitle my-2">Mis preferencias</div>
        <div class="row col-12">
          <!-- Actual preferences -->
          <div class="row px-3" v-if="preferences.length > 0" style="margin-top: 6px;">
            <div class="px-1" v-for="i in preferences.length" :key="i">
                <img class="add-preferences-container" 
                     height="40" 
                     style="border-radius: 10px; cursor: pointer;" 
                     :src='preferences[i-1].img'
                     @click="deletePreference( preferences[i-1] )"
                >
            </div>
          </div>
          <!-- Modal with more preferences -->
          <b-button v-b-modal.modalPopover class="add-preferences-container">
            <img height="30" src="../../../public/img/default_images/plus.png">
          </b-button>
          <b-modal ref="modal" id="modalPopover" title="Escoge una de las preferencias" hide-footer centered>
            <div class="row justify-content-around">
              <div class="text-center" v-for="i in categories.length" :key="i">
                <div class="col-12">
                  <button class="add-preferences-container-modal" @click="addPreference( categories[i-1] )">
                    <img height="50" style="border-radius: 10px;" :src='categories[i-1].img'>
                  </button>
                </div>
                <div class="timebank-phrase">
                  {{ categories[i-1].name }}
                </div>
              </div>
            </div>
            <b-button class="mt-3 modal-button" block @click="hideModal">Cerrar</b-button>
          </b-modal>
        </div>

        <!-- Description -->
        <div class="timebank-subtitle mt-3">Sobre tí</div>
        <b-form-textarea class="input-border"
                         type="text" 
                         v-model="formData.newDescription"
                         rows="3"
                         max-rows="6"
        ></b-form-textarea>
        
        <!-- Verify request -->
        <!-- <div class="timebank-subtitle mt-3">Contraseña</div>
        <b-input-group class="pb-5">
          <b-input-group-prepend>
            <span class="input-group-text"><Icon class="icon-container" icon="dashicons:lock"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="contraseña" type = "password" v-model="formData.verifyPassword" placeholder="" ></b-form-input>
        </b-input-group> -->
        
      </b-row>
      </form>

      <!-- Register button -->
      <b-button type="submit" class="send-button mt-2" v-on:click="updateUser" >Realizar cambios</b-button>

    </div>
</template>

<script>
import axios from 'axios'
import auth from "@/logic/auth";
import AvatarInput from "./helpers/AvatarInput";

export default {
  name: 'editData',
  components: {
    AvatarInput,
  },
  data() {
    return{
      formData: {
        uid: '',
        newName: '',
        newSurname: '',
        newRelation: null,
        newAge: '',
        newAddress: '',
        newPhone: '',
        newRut: '',
        newEmail: '',
        newDescription: '',
        newType: '',
        newBalance: '',
        img: '',
        avatar: null,
        verifyPassword: '',

        errorState: false,

        nameError: false,
        surnameError: false,
        relationError: false,
        addressError: false,
        phoneError: false,
        emailError: false,
        descriptionError: false,

        nameErrorT: '',
        surnameErrorT: '',
        relationErrorT: '',
        addressErrorT: '',
        phoneErrorT: '',
        emailErrorT: '',
        descriptionErrorT: ''

      },
      // Form relation data
      options: [
        { value: null, text: 'Seleccione una alternativa', disabled: true },
        { value: 'Trabajo', text: 'Trabajo' },
        { value: 'Estudio', text: 'Estudio' },
        { value: 'Vivo', text: 'Vivo' }
      ],
      // All categories
      categories: [],
      preferences: [],
    }
  },
  async created () {
        // get user uid
        const token = auth.getUserLogged();
        // user preferences
        let preferencesUid;
        // petition
        await axios
            .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/auth/user-logged/', {
            headers:{
                'Authorization': token,
            },
            })
            .then( response => {
                this.formData.uid = response.data.uid;
                this.formData.newName = response.data.name;
                this.formData.newSurname = response.data.surname;
                this.formData.newRelation = response.data.relation;
                this.formData.newAddress = response.data.address;
                this.formData.newPhone = response.data.phone;
                this.formData.newEmail = response.data.email;
                this.formData.newDescription = response.data.description;
                this.formData.img = response.data.img;
                this.preferencesUid = response.data.preferences;
            })
            .catch( e => console.log( e ))
        
        // get categories
        await axios
          .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/' )
            .then( response => {
              this.categories = response.data.categories; 
              this.categories.filter( category => {
                if( this.preferencesUid.indexOf( category.uid ) !== -1 ) {
                  this.preferences.push( category );
                }
              })
            })
            .catch( e => console.log( e ));

  },
  methods: {
    async updateUser() {
      // generate payload body with the information of the data that is send
      this.formData.stateError = false;

      this.formData.nameError = false;
      this.formData.surnameError = false;
      this.formData.relationError = false;
      this.formData.descriptionError = false;
      this.formData.addressError = false;
      this.formData.phoneError = false;
      this.formData.emailError = false;

      this.formData.nameErrorT = '';
      this.formData.surnameErrorT = '';
      this.formData.relationErrorT = '';
      this.formData.descriptionErrorT = '';
      this.formData.addressErrorT = '';
      this.formData.phoneErrorT = '';
      this.formData.emailErrorT = '';

      if (!this.formData.newName){
        this.formData.stateError = true;
        this.formData.nameError = true;
        this.formData.nameErrorT = 'Ingrese nombre.';
      }

      if (!this.formData.newSurname){
        this.formData.stateError = true;
        this.formData.surnameError = true;
        this.formData.surnameErrorT = 'Ingrese apellido.';
      }

      if (!this.formData.newRelation){
        this.formData.stateError = true;
        this.formData.relationError = true;
        this.formData.relationErrorT = 'Ingrese relación.';
      }

      if (!this.formData.newAddress){
        this.formData.stateError = true;
        this.formData.addressError = true;
        this.formData.addressErrorT = 'Ingrese dirección.';
      }

      if (!this.formData.newPhone){
        this.formData.stateError = true;
        this.formData.phoneError = true;
        this.formData.phoneErrorT = 'Ingrese telefono.';
      }

      if (!this.formData.newEmail){
        this.formData.stateError = true;
        this.formData.emailError = true;
        this.formData.emailErrorT = 'Ingrese correo.';
      }

      if (this.formData.stateError == true){    
        return true;
      }

      let payloadPreferences = this.preferences.map( element => {
        return element.uid;
      })

      const payload = {
        name: this.formData.newName,
        surname: this.formData.newSurname,
        relation: this.formData.newRelation,
        age: this.formData.newAge,
        address: this.formData.newAddress,
        phone: this.formData.newPhone,
        rut: this.formData.newRut,
        email: this.formData.newEmail,
        description: this.formData.newDescription,
        type_user: this.formData.newType,
        balance: this.formData.newBalance,
        preferences: payloadPreferences
      } 

      // send new user data
      await axios
        .put( process.env.VUE_APP_BACKEND_URL_SERVER + /users/ + this.formData.uid, payload )
        .then( response => console.log( response.status ))
        .catch( e => console.log( e ))
      
      if( this.formData.avatar ) {
        // send new image
        let fileData = new FormData();
        fileData.append("file", this.formData.avatar )
        await axios
          .put( `${process.env.VUE_APP_BACKEND_URL_SERVER}/uploads/users/${this.formData.uid}`, fileData, {
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
    },
    hideModal() {
      this.$refs['modal'].hide()
    },
    addPreference( category ) {
      let index = this.preferences.indexOf( category );
      if (index !== -1) {
        this.preferences.splice(index, 1);
      }
      this.preferences.push( category );
    },
    deletePreference( category ) {
      let index = this.preferences.indexOf( category );
      if (index !== -1) {
        this.preferences.splice(index, 1);
      }
    }
  }

}
</script>

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

  .choose-relation{
    width: -webkit-fill-available;
    margin-top: 10px!important;
    margin-right: 0px!important;
    margin-bottom: 10px!important;
    margin-left: 0px!important;
    border: groove!important;
    border-color: #A70187!important;
    box-shadow: none!important;
  }
  .icon-container {
    width:24px;
    height:24px;
    color: #A70187;
  }

  .add-preferences-container {
    width: 50px; 
    height: 50px;
    padding: 3px;
    border-radius: 10px;
    border: 2px solid #bababa;
    background-color: white !important;
  }

  .add-preferences-container-modal {
    width: 70px; 
    height: 70px;
    padding: 3px;
    border-radius: 10px;
    border: 2px solid #bababa;
    background-color: white !important;
  }

  .modal-body {
    padding: 2rem;
  }

  .modal-button{
    margin-top: 10px;
    margin-right: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
    background-color: #A70187!important;;
    color: white!important;
    border-radius: 10px;
  }

  .modal-content {
    width: 350px !important;
  }


</style>
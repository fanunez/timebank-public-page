<template>
    <div class="main">
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-1" style="padding: 5px 0px; margin: 10px 10px; margin-left: 37px;">
          <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="bi:x-lg" style="width:40px; height:40px;"/></button>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 10px;">
          <div class="timebank-header" style="margin-right: 10px">Edita tus datos</div>
        </div>
      </div>
      <form @submit.prevent="updateUser">
      <b-row style="margin: 10px 40px;">

        <!-- Name -->
        <div class="timebank-subtitle mt-2">Nombres</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon icon="bi:person-fill" style="width:24px; height:24px; color: #A70187;"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="nombre" type = "text" v-model="formData.newName" placeholder="Ej: Vanessa Carolina" ></b-form-input>
        </b-input-group>

        <!-- Surname -->
        <div class="timebank-subtitle mt-2">Apellidos</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon icon="bi:person-fill" style="width:24px; height:24px; color: #A70187;"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="apellido" type = "text" v-model="formData.newSurname" placeholder="Ej: Sáez Bonacic" ></b-form-input>
        </b-input-group>

        <!-- Relation -->
        <div class="timebank-subtitle mt-2">Escoger relación</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon icon="ic:sharp-maps-home-work" style="width:24px; height:24px; color: #A70187;"/></span>
          </b-input-group-prepend>
          <b-form-select class="input-border" v-model="formData.newRelation" :options="options" id="relacion" right variant="none" toggle-class="choose-relation"></b-form-select>
        </b-input-group>

        <!-- Address -->
        <div class="timebank-subtitle mt-2">Dirección</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon icon="bx:world" style="width:24px; height:24px; color: #A70187;"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="direccion" type = "text" v-model="formData.newAddress" placeholder="Ej: Vicuña Mackenna 1234" ></b-form-input>
        </b-input-group>

        <!-- Region or state -->
        <div class="timebank-subtitle mt-2">Región o Estado</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon icon="bx:world" style="width:24px; height:24px; color: #A70187;"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="region" type = "text" v-model="formData.newRegion" placeholder="República, Región Metropolitana" ></b-form-input>
        </b-input-group>

        <!-- Phone -->
        <div class="timebank-subtitle mt-2">Teléfono de contacto (fijo o celular)</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon icon="bxs:phone" style="width:24px; height:24px; color: #A70187;"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="telefono" type = "text" v-model="formData.newPhone" placeholder="Ej: 987654321" ></b-form-input>
        </b-input-group>

        <!-- Email -->
        <div class="timebank-subtitle mt-2">Correo electrónico</div>
        <b-input-group>
          <b-input-group-prepend>
            <span class="input-group-text"><Icon icon="ant-design:mail-outlined" style="width:24px; height:24px; color: #A70187;"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="correo" type = "text" v-model="formData.newEmail" placeholder="Ej: banco.tiempo@gmail.com" ></b-form-input>
        </b-input-group>

        <!-- Change image -->
        <div class="timebank-subtitle mt-2 mb-2">Tu foto de perfil</div>
        <div v-if="formData.img != ''" class="col-12">
          <avatar-input class="w-32 h-32 rounded-full" 
                        v-model="formData.avatar"
                        :default-src="formData.img"
                        >
          </avatar-input>
        </div>

        <!-- Verify request -->
        <div class="timebank-subtitle mt-3">Contraseña</div>
        <b-input-group class="pb-5">
          <b-input-group-prepend>
            <span class="input-group-text"><Icon icon="dashicons:lock" style="width:24px; height:24px; color: #A70187;"/></span>
          </b-input-group-prepend>
          <b-form-input class="input-border" id="contraseña" type = "password" v-model="formData.verifyPassword" placeholder="" ></b-form-input>
        </b-input-group>
        
        <!-- Register button -->
        <b-button type="submit" class="send-button" >Realizar cambios</b-button>

      </b-row>
      </form>
    </div>
</template>

<script>
import axios from 'axios'
import auth from "@/logic/auth";
import AvatarInput from "./AvatarInput";

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
        newAddress: '',
        newRegion: '',
        newPhone: '',
        newEmail: '',
        img: '',
        avatar: null,
        verifyPassword: ''
      },
      // Form relation data
      options: [
        { value: null, text: 'Seleccione una alternativa', disabled: true },
        { value: 'Trabajo', text: 'Trabajo' },
        { value: 'Estudio', text: 'Estudio' },
        { value: 'Vivo', text: 'Vivo' }
      ],
    }
  },
  created () {
        // get user uid
        const token = auth.getUserLogged();
        // petition
        axios
            .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/auth/user-logged/', {
            headers:{
                'Authorization': token,
            },
            })
            .then( response => {
                console.log( response.data );
                this.formData.uid = response.data.uid;
                this.formData.newName = response.data.name;
                this.formData.newSurname = response.data.surname;
                this.formData.newRelation = response.data.relation;
                this.formData.newAddress = response.data.address;
                this.formData.newRegion = response.data.region;
                this.formData.newPhone = response.data.phone;
                this.formData.newEmail = response.data.email;
                this.formData.img = response.data.img;
            })
            .catch( e => console.log( e ))
  },
  methods: {
    async updateUser() {
      // generate payload body with the information of the data that is send
      const payload = {
        name: this.formData.newName,
        surname: this.formData.newSurname,
        relation: this.formData.newRelation,
        address: this.formData.newAddress,
        region: this.formData.newRegion,
        phone: this.formData.newPhone,
        email: this.formData.newEmail,
      }
      // send new user data
      await axios
        .put( process.env.VUE_APP_BACKEND_URL_SERVER + /users/ + this.formData.uid, payload )
        .then( response => {
        })
        .catch( e => console.log( e ))
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
    },
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
    border-left: none;
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

</style>
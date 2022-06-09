<template>
    <div class="main">
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-1" style="padding: 5px 0px; margin: 10px 10px; margin-left: 37px;">
          <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="bi:x-lg" style="width:40px; height:40px;"/></button>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 10px;">
          <div class="timebank-header" style="margin-right: 10px">Edita tu servicio</div>
        </div>
      </div>

      <!-- Change image -->
      <div v-if="formData.img != ''" class="col-12">
        <avatar-input class="w-32 h-32 rounded-full" 
                      v-model="formData.avatar"
                      :default-src="formData.image"
                      >
        </avatar-input>
      <div class="timebank-subtitle mt-2 mb-2" style="color: #A70187">CAMBIAR IMAGEN</div>
      </div>
      <!-- Data form -->
      <form style="margin-bottom: 30px">
      <b-row style="margin: 10px 40px;">

        <!-- Title -->
        <div class="timebank-subtitle mt-2">Nombre del Servicio</div>
        <b-input-group>
          <b-form-input class="input-border" id="nombre" type = "text" v-model="formData.newTitle" placeholder="Ej: Taller de manejo" ></b-form-input>
        </b-input-group>

        <!-- Balance -->
        <div class="timebank-subtitle mt-2">Valor del servicio</div>
        <b-input-group>
          <b-form-input class="input-border" id="balance" type = "number" v-model="formData.newValue" placeholder="Ej: 2" ></b-form-input>
        </b-input-group>

        <!-- category -->
        <div class="timebank-subtitle mt-2">Categoria del servicio</div>
        <b-input-group>
          <b-form-input class="input-border" id="categorie" type = "text" v-model="nameCategory" placeholder="Ej: Conducción" ></b-form-input>
        </b-input-group>
        
        <!-- Description -->
        <div class="timebank-subtitle mt-2">Descripción del servicio</div>
        <b-form-textarea class="input-border"
          type="text" 
          v-model="formData.newDescription"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
        
      </b-row>
      </form>

      <!-- Update button -->
      <b-button type="submit" class="send-button mt-2" v-on:click="updateService" >Realizar cambios</b-button>

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
      nameCategory: '',
      formData: {
        newTitle: '',
        newCategory: '',
        newDescription: '',
        newValue: '',
        image: '',
        id_owner: '',
        achievements: [],
        state: true,
        uid: '',
        avatar: null
      },
    }
  },
  created () {
        // get service uid
        this.uid = this.$route.params.id;
        // petition
        axios
            .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/' + this.uid)
            .then( response => {
                this.formData.newTitle = response.data.title;
                this.getCategories(response.data.id_category);
                this.formData.newCategory = response.data.id_category;
                this.formData.newDescription = response.data.description;
                this.formData.newValue = response.data.value;
                this.formData.image = response.data.image;
                this.formData.id_owner = response.data.id_owner;
                this.formData.achievements = response.data.achievements;     
            })
            .catch( e => console.log( e ))
  },
  methods: {
    async updateService() {
      // generate payload body with the information of the data that is send
      const payload = {
        title: this.formData.newTitle,
        id_category: this.formData.newCategory,
        description: this.formData.newDescription,
        value: this.formData.newValue,
        image: this.formData.image,
        id_owner: this.formData.id_owner,
        achievements: this.formData.achievements,
        state: true,
        uid: this.uid,
      }
      // send new service data
      await axios
        .put( process.env.VUE_APP_BACKEND_URL_SERVER + /service/ + this.uid, payload )
        .then( response => {
        })
        .catch( e => console.log( e ))
      
      /*if( this.formData.avatar ) {
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
      }
      else {
        return window.location.href="/profile"
      }*/
    },

    getCategories(id_c) {
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/'+ id_c )
        .then( r => {
          this.nameCategory = r.data.name;
        })
        .catch(e => console.log( e ))
    },
  }

}
</script>

<style scoped>
  .main{
    min-height: 900px;
    box-sizing: border-box;
    max-width: 425px;
    margin: 0 auto;
    background-color:white;
    height: 100vh;

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

</style>

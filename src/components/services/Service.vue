<template>
    <div class="Service">
      <div class="row" style="margin: 0px 30px; padding-top: 20px;">
        <a href="/" style="color:black"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></a>
      </div>
        <div class="row" style="margin: 0px 30px;">
          <div class="timebank-header">{{nombreServicio}}</div>
          <div class="timebank-title">Por: {{nombreUsuario}}</div>
        </div>
      <div>
        <!-- First container -->
        <div class="container-format">
          <!-- Achievements -->
          <div class="row" style="margin: 10px 15px;">
            <div class="col-3.5" style="font-size: 14px;"><Icon icon="icon-park:timer" style="width:40px; height:40px;"/><br>Puntual</div>
            <div class="col-4" style="font-size: 14px;"><Icon icon="noto:1st-place-medal" style="width:40px; height:40px;"/><br>Domina el servicio</div>
          </div>
          <!-- Images -->
          <div class="row" style="margin: 0px 0px;">
            <mdb-carousel :interval="8000" showControls showIndicators>
              <mdb-carousel-item>
                <a href="https://placekitten.com/1000/300">
                  <img class="d-block w-100" src="https://placekitten.com/1000/300" style="height: 150px;" alt="First slide"/>
                </a>
              </mdb-carousel-item>
            </mdb-carousel>
          </div>
        </div>
        
        <!-- Request button -->
        <div class="row" style="margin: 0px 30px;">
          <b-button type="button" class="request-button col-9">Solicitar</b-button>
          <b-card class="col-3" style="background-color: #A70187; margin: 10px 0px; padding: 5px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 0px; border-bottom-left-radius: 0px; ">
            <b-card-text style="font-size: 24px; color:#A70187; background-color: white; border-radius: 10px;">{{valor}}<br>Bono</b-card-text>
          </b-card>
        </div>
        
        <hr class="rounded mb-3" style="border: solid; margin: 8px 30px; opacity: 30%;">
        
        <!-- Description -->
        <div class="container-format">
          <div class="row" style="margin: 0px; border-bottom: 2px solid rgba(0, 0, 0, 0.125);">
            <div class="timebank-title pt-2" style="margin-left: 10px;">Descripción</div>
          </div>
          <div class="row" style="margin: 0px;">
            <div class="timebank-phrase my-3" style="margin-left: 10px;">{{descripcion}}</div>
          </div>
          <div class="row" style="margin: 0px; background-color: #A70187;">
            <div class="timebank-title pt-2" style="margin-left: 10px; color: white">Categoria: {{categoria}}</div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Service',
  data() {
    return{
      nombreServicio: '',
      nombreUsuario: '',
      logros: [],
      img: '',
      valor: '',
      descripcion: '',
      categoria: '',
    }
  },
  created () {
    // get service uid
    this.uid = this.$route.params.id;
    // petition
    axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/service/' + this.uid)
        .then( response => {
            this.nombreServicio = response.data.title;
            this.getCategories(response.data.id_category);
            this.getNameUser(response.data.id_owner);
            this.descripcion = response.data.description;
            this.valor = response.data.value;
            this.img = response.data.image;
            this.id_owner = response.data.id_owner;
            this.logros = response.data.achievements;   
        })
        .catch( e => console.log( e ))
  },
  methods: {
    getCategories(id_c) {
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/category/'+ id_c )
        .then( r => {
          this.categoria = r.data.name;
        })
        .catch(e => console.log( e ))
    },
    getNameUser(id_own) {
      axios
        .get( process.env.VUE_APP_BACKEND_URL_SERVER + '/users/'+ id_own )
        .then( r => {
          this.nombreUsuario = r.data.user.name;
        })
        .catch(e => console.log( e ))
    }
  }
}
</script>

<style scoped>
.Service{
  padding-bottom: 10px;
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  background-color:white;
  padding-top: 80px;
  padding-bottom: 100px;
  height: fit-content;
  min-height: 900px;
}
.timebank-header{
  font-weight: bold;
  font-size: 28px;
  margin-top: 10px;
}
.timebank-title{
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 10px;
}
.fuente3{
  font-size: 26px;
  color:white
}
.timebank-subtitle{
  font-size: 20px;
  color: white;
}
.timebank-phrase{
  font-size: 18px;
  text-align: left;
}
.card-body{
  padding: 0px;
}
.request-button{
  padding: 5px 0px;
  width: -webkit-fill-available;
  margin: 10px 0px;
  background-color: #A70187!important;
  font-size: 26px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.container-format {
  margin: 0px 30px;
  border: 2px solid rgba(0, 0, 0, 0.125);
  padding: 0px!important;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

</style>

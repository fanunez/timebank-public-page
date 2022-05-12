<template>
  <div class="HomePage2">
    <div class="PrincipalFrame">

      <div class="row" style="margin: 0px; padding-left: 30px; padding-right: 30px; padding-bottom: 15px; background-color: #74015E;">
        <b-input-group>
          <form @submit.prevent="buscar" class="row" style="width: -webkit-fill-available;">
            <b-form-input id="buscador" v-model="formData.titulo" placeholder="¿Que servicio necesita?" style="width:81%; margin-top: 10px; margin-bottom: 10px; margin-left: 20px; border-color: #A70187; border-width: medium;"/>
            <b-button type = "submit" variant="none" style="padding: 8px 8px; margin: 10px 0px; background-color: #A70187;">
              <template>
                <Icon icon="charm:search" style="width:22px; height:22px; color: white;"/>
              </template>
            </b-button>
          </form>
        </b-input-group>
      </div>

      <br>
      <h5>Servicios populares</h5>

      <div class="container" style="margin: 10px auto;">
        <mdb-carousel :interval="8000" showControls showIndicators>
            <mdb-carousel-item>
              <a href="Service">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp" alt="First slide"/>
              </a>
            </mdb-carousel-item>
            <mdb-carousel-item>
              <a href="https://youtube.com">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp" alt="Second slide"/>
              </a>
            </mdb-carousel-item>
            <mdb-carousel-item>
              <a href="https://twitch.tv">
                <img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp" alt="Third slide"/>
              </a>
            </mdb-carousel-item>
        </mdb-carousel>
      </div>

      <h5>Categorías recomendadas</h5>

      <div class="container" style="margin: 10px auto;">
        <mdb-carousel :interval="8000" showControls showIndicators>
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp" alt="First slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp" alt="Second slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp" alt="Third slide" />
        </mdb-carousel>
      </div>

      <h5>Últimos servicios agregados</h5>

      <div class="container" style="margin: 10px auto;">
        <mdb-carousel :interval="8000" showControls showIndicators>
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp" alt="First slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp" alt="Second slide" />
          <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp" alt="Third slide" />
        </mdb-carousel>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  
  name: 'Homepage2',
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
.HomePage2{
  height: auto;
}
.PrincipalFrame{
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  padding-top: 0px;
  padding-bottom: 31px;
  padding-left: 0px;
  padding-right: 0px;
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
</style>

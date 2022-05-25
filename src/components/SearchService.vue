<template>
  <div class="SearchService">
    <div class="PrincipalFrame" style="padding-top: 5px;">
        <b-input-group>
          <form @submit.prevent="buscar" class="row" style="width: -webkit-fill-available; padding-left: 25px; padding-right: 25px;">
            <b-form-input id="buscador" v-model="formData.titulo" placeholder="¿Que servicio necesita?" style="width:81%; margin-top: 10px; margin-bottom: 10px; margin-left: 20px; border-color: #A70187; border-width: medium;"/>
            <b-button type = "submit" variant="none" style="padding: 8px 8px; margin: 10px 0px; background-color: #A70187;">
              <template>
                <Icon icon="charm:search" style="width:22px; height:22px; color: white;"/>
              </template>
            </b-button>
          </form>
        </b-input-group>
        <h4 style="text-align: left; margin-left: 30px;">Nuestras categorías</h4>
        <div class="row">
            <div class="col-1"></div>
            <div class="col-5" style="padding-right: 5px;">
                <img src="../assets/Gato_Indio.jpg" style="margin: 20px auto; width: 150px; height: 150px;">
            </div>
            <div class="col-5" style="padding-left: 5px;">
                <img src="../assets/Gato_Indio.jpg" style="margin: 20px auto; width: 150px; height: 150px;">
            </div>
            <div class="col-1"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchService',
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
.SearchService{
  height: auto;
}
.PrincipalFrame{
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  padding: 31px 0px;
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
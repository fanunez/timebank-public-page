<template>
    <div class="UserService">
         
      <div class="row" style="margin: 10px 35px;">
           
        
        <b-card class="mb-5" img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
          <b-card-sub-title class="mb-2 text-left" style="margin:10px 40px;">Deportes</b-card-sub-title>
          <b-card-title class="font-weight-bold">Natacion piscina municipal</b-card-title>
          <b-list-group-item class="text-left text-muted" style="font-size: 20px; padding-left:1.5rem;">Usuario 1</b-list-group-item>
        </b-card>
          
        <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
          <b-card-sub-title class="mb-2 text-left" style="margin:10px 40px;">Deportes</b-card-sub-title>
          <b-card-title class="font-weight-bold">Natacion piscina municipal</b-card-title>
          <b-list-group-item class="text-left text-muted" style="font-size: 20px; padding-left:1.5rem;">Usuario 1</b-list-group-item>
        </b-card>   

      </div>

      <div class="row mb-5"></div>
        
      <div class="btn-flotante" style="margin: 10px 0px;">
          <b-button type="button" class="botonSolicitar col-12" style="padding:0px 10px;">Publicar nuevo servicio</b-button>
          
      </div>

    </div>
</template>

<script>
export default {
    name: 'UserService'
}
</script>

<style scoped>
.UserService{
  padding-bottom: 10px;
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  background-color:white
}
.btn-flotante {
		font-size: 14px;
		padding: 50px 20px;
		bottom: 0px;
		
    position: fixed;
	}

.fuente1{
  font-weight: bold;
  font-size: 28px;
  margin-top: 10px;
}
.fuente2{
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 10px;
}
.fuente3{
  font-size: 26px;
  color:white
}
.fuente4{
  font-size: 20px;
  color: white;
}
.fuente5{
  font-size: 18px;
  text-align: left;
}
.card-body{
  padding: 0px;
}
.botonSolicitar{
  padding: 5px 10px;
  width: -webkit-fill-available;
  margin: 10px 0px;
  background-color: #A70187!important;
  font-size: 26px;
  border-radius: 10px;

}
</style>
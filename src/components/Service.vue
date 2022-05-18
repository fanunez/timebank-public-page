<template>
    <div class="Service">
      <div class="row" style="margin: 0px 30px; padding-top: 20px;">
        <a href="/" style="color:black"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></a>
      </div>
        <div class="row" style="margin: 0px 30px;">
          <div class="fuente1">Nombre del servicio</div>
          <div class="fuente2">Por: Usuario genérico</div>
        </div>
      <div>
        <b-card style="margin: 0px 30px; border: solid; border-color: #A70187; padding: 0px!important">
          <div class="row" style="margin: 10px 15px;">
            <div class="col-3.5" style="font-size: 14px;"><Icon icon="icon-park:timer" style="width:40px; height:40px;"/><br>Puntual</div>
            <div class="col-4" style="font-size: 14px;"><Icon icon="noto:1st-place-medal" style="width:40px; height:40px;"/><br>Domina el servicio</div>
          </div>
        </b-card>
        <div class="container" style="margin: 0px 15px; width: -webkit-fill-available;">
          <mdb-carousel :interval="8000" showControls showIndicators>
            <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp" alt="First slide" />
            <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp" alt="Second slide" />
            <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp" alt="Third slide" />
          </mdb-carousel>
        </div>
        <div class="row" style="margin: 0px 30px;">
          <b-button type="button" class="botonSolicitar col-9">Solicitar</b-button>
          <b-card class="col-3" style="background-color: #A70187; margin: 10px 0px; padding: 5px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 0px; border-bottom-left-radius: 0px; ">
            <b-card-text style="font-size: 24px; color:#A70187; background-color: white; border-radius: 10px;">1<br>Bono</b-card-text>
          </b-card>
        </div>
        <hr class="rounded" style="border: solid; margin: 8px 30px; opacity: 30%;">
        <b-card style="margin-top: 15px; margin-left: 30px; margin-right: 30px; background-color: #A70187; padding: 0px!important">
          <div class="row" style="margin: 10px 15px;">
            <div class="fuente3">Descripción</div>
          </div>
        </b-card>
        <b-card style="margin: 0px 30px; border: solid; border-color: #A70187; padding: 0px!important">
          <div class="row" style="margin: 10px 15px;">
            <div class="fuente5">Este servicio trata sobre una clase de deportes guiada y resumida para un facil entendimiento...</div>
          </div>
        </b-card>
        <b-card style="margin-bottom: 20px; margin-left: 30px; margin-right: 30px; border: solid; border-color: #A70187; background-color: #A70187; padding: 0px!important">
          <div class="row" style="margin: 10px 15px;">
            <div class="fuente4">Categoria 1, Categoria 2</div>
          </div>
        </b-card>
      </div>
    </div>

</template>

<script>
export default {
  name: 'Service'
}
</script>

<style scoped>
.Service{
  padding-bottom: 10px;
  box-sizing: border-box;
  max-width: 425px;
  margin: 0 auto;
  background-color:white
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
  padding: 5px 0px;
  width: -webkit-fill-available;
  margin: 10px 0px;
  background-color: #A70187!important;
  font-size: 26px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
</style>

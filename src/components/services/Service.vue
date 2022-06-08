<template>
    <div class="Service">
      <div class="row" style="margin: 0px 30px; padding-top: 20px;">
        <a href="/" style="color:black"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></a>
      </div>
        <div class="row" style="margin: 0px 30px;">
          <div class="timebank-header">Nombre del servicio</div>
          <div class="timebank-title">Por: Usuario genérico</div>
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
              <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).webp" alt="First slide" />
              <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).webp" alt="Second slide" />
              <mdb-carousel-item img src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp" alt="Third slide" />
            </mdb-carousel>
          </div>
        </div>
        
        <!-- Request button -->
        <div class="row" style="margin: 0px 30px;">
          <b-button type="button" class="request-button col-9">Solicitar</b-button>
          <b-card class="col-3" style="background-color: #A70187; margin: 10px 0px; padding: 5px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 0px; border-bottom-left-radius: 0px; ">
            <b-card-text style="font-size: 24px; color:#A70187; background-color: white; border-radius: 10px;">1<br>Bono</b-card-text>
          </b-card>
        </div>
        
        <hr class="rounded mb-3" style="border: solid; margin: 8px 30px; opacity: 30%;">
        
        <!-- Description -->
        <div class="container-format">
          <div class="row" style="margin: 0px; border-bottom: 2px solid rgba(0, 0, 0, 0.125);">
            <div class="timebank-title pt-2" style="margin-left: 10px;">Descripción</div>
          </div>
          <div class="row" style="margin: 0px;">
            <div class="timebank-phrase my-3" style="margin-left: 10px;">Este servicio trata sobre una clase de deportes guiada y resumida para un facil entendimiento...</div>
          </div>
          <div class="row" style="margin: 0px; background-color: #A70187;">
            <div class="timebank-title pt-2" style="margin-left: 10px; color: white">Categoria 1, Categoria 2</div>
          </div>
        </div>
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

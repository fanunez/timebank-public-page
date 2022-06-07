<template>
    <div class="main">
      <div class="row" style="margin: 0px 40px; padding-top: 20px;">
        <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="bi:x-lg" style="width:40px; height:40px;"/></button>
      </div>
      <div class="container" style="margin: 25px 0; margin-top: 0px;">
          <img src="../../assets/logo_banco.png" style="margin: 20px auto; width: 146px; height: 86px;">
          <div class="fuente1">¿Ya tienes una cuenta?</div>
          <div class="fuente2">Empecemos a compartir</div>
          <b-button  href="/register/login"  class="btnIngreso">Ingresar</b-button>
      </div>
      <div class="container" style="margin: 25px 0;">
          <div class="fuente1">¿Primera vez en banco de tiempo?</div>
          <div class="fuente2">¡Registrate, te ayudaremos!</div>
          <b-button href="/register/user-selector" class="btnRegistro">Registrarse</b-button>
      </div>
      <div class="row" style="margin-left:15px;">
        <img src="../../assets/logo_citiaps.png" style="width: 146px; height: 55px; ">
      </div>
    </div>
</template>

<script>
export default {
  name: 'Register'
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
.fuente1{
  font-weight: bold;
  font-size: 28px;
}
.fuente2{
  font-weight: 300;
  font-size: 24px;
}

.btnIngreso{
  width: -webkit-fill-available;
  margin: 20px 40px;
  background-color: white!important;;
  color: #A70187!important;
  border-color: #A70187!important;
  font-size: x-large;
  border: groove;
  border-radius: 10px;
}
.btnRegistro{
  width: -webkit-fill-available;
  margin: 20px 40px;
  background-color: #A70187!important;;
  color: white!important;
  font-size: x-large;
  border-radius: 10px;
}
</style>

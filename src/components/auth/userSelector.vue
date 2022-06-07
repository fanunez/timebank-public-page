<template>
    <div class="main">
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-2" style="padding: 5px ; margin: 10px 0px; margin-top: 10px; padding-left: 35px;">
          <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></button>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 10px;">
          <div class="timebank-title">Cuéntanos sobre tí</div>
        </div>
      </div>
      <div class="timebank-subtitle">Selecciona una de las opciones</div>
      <b-button href="/register/user-selector/user-data-1" class="userBlue" variant="none">
        <img src="../../assets/asistencia_social.png" style="width: 90px; height: 90px;"><br>
        Quiero ofrecer y utilizar servicios de la comunidad
      </b-button>
      <hr class="rounded" style="border: solid; margin: 8px 40px; opacity: 30%;">
      <b-button href="/register/user-selector/user-data-2" class="userOrange" variant="none">
        <img src="../../assets/ayudando.png" style="width: 90px; height: 90px;"><br>
        No puedo ofrecer servicios, pero quiero aportar a la comunidad
      </b-button>
    </div>
</template>

<script>
export default {
  name: 'userSelector'
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
.timebank-title{
  font-weight: bold;
  font-size: 28px;
}
.timebank-subtitle{
  font-weight: 300px;
  font-size: 24px;
  text-align: center;
}
.userBlue{
  padding: 8px 8px;
  margin: 20px 40px;
  background-color: #A70187;
  font-weight: 300;
  font-size: 22px;
  color: white;
  border: groove;
  border-color: black;
  border-radius: 10px;
}
.userOrange{
  padding: 8px 8px;
  margin: 20px 40px;
  background-color: #8400DA;
  font-weight: 300;
  font-size: 22px;
  color: white;
  border: groove;
  border-color: black;
  border-radius: 10px;
}
</style>

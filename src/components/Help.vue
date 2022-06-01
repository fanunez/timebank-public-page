<template>
    <div class="main">
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-2" style="padding: 5px ; margin: 10px 0px; margin-top: 10px; padding-left: 35px;">
          <a href="/" style="color:black"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></a>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 10px;">
          <div class="fuente1">¿En qué podemos ayudar?</div>
        </div>
      </div>
      <div class="fuente2">Selecciona una de las opciones</div>
      <b-button href="/help" class="userBlue" variant="none">
        <Icon  icon="emojione-v1:document" style="width: 90px; height: 90px;"/><br>
        Solicitar documentos de ayuda
      </b-button>
      <hr class="rounded" style="border: solid; margin: 8px 40px; opacity: 30%;">
      <b-button href="/" class="userOrange" variant="none">
        <Icon icon="flat-color-icons:online-support" style="width: 90px; height: 90px;"/><br>
        Quiero hablar con un asistente
      </b-button>
    </div>
</template>

<script>
export default {
  name: 'help'
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

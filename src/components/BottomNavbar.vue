<template>
    <nav class="navbar fixed-bottom navbar-light bg-light" style="max-width:425px; margin:0 auto; background-color:#74015E!important; position: sticky">
        <div class="row" style="width:-webkit-fill-available">
          <div class="col-3" style="padding:0px;">
            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: -webkit-fill-available; background-color:#74015E; box-shadow: none!important;"><Icon icon="bx:help-circle" width="20" height="20"/><br>Ayuda</button>
          </div>
          <div class="col-3" style="padding:0px;">
            <button type="button" onclick="location.href='/';" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: -webkit-fill-available; background-color:#74015E; box-shadow: none!important;"><Icon icon="bxs:home" width="20" height="20"/><br>Inicio</button>
          </div>
          <div class="col-3" style="padding:0px;">
            <button type="button" onclick="location.href='/search-service';" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: -webkit-fill-available; background-color:#74015E; box-shadow: none!important;"><Icon icon="charm:search" width="20" height="20"/><br>Buscar</button>
          </div>
          <div class="col-3" style="padding:0px;">
            <button type="button" onclick="location.href='/profile';" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" style="width: -webkit-fill-available; background-color:#74015E; box-shadow: none!important;"><Icon icon="bi:person-circle" width="20" height="20"/><br>Perfil</button>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
  name: 'BottomNavbar'
}
</script>

<style scoped>
.btn{
  padding: 0rem;
}
.btn-primary{
  background-color: #74015E!important;
}
</style>

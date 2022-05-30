<template>
    <div class="navbar-buttons fixed-top" style="padding: 10px 0px; background-color: #74015E; position:sticky;">
        <div class="row" style="margin: 10px 0px; background-color:#74015E">
        <div class="col-2" style="padding-right: 0px; padding-top: 0px;">
            <b-dropdown no-caret toggle-class="CustomHamb" variant="none">
            <template #button-content>
                <Icon icon="charm:menu-hamburger" width="28" height="32" color="white"></Icon>
            </template>
            <b-dropdown-item href="#">Categorias</b-dropdown-item>
            <b-dropdown-item href="#">Añadir servicio</b-dropdown-item>
            <b-dropdown-item href="#">Solicitar bono</b-dropdown-item>
            <b-dropdown-item href="#">Sobre nosotros</b-dropdown-item>
            </b-dropdown>
        </div>
        <div class="col-8" style="align-self: center;">
            <b-button href="/register" class="btnIngresar" style="height: 35px; padding: 5px;">Ingresar</b-button>
        </div>
        <div class="col-2" style="padding-left: 0px; padding-top: 2px; color: white;">
            <b-dropdown right no-caret toggle-class="CustomHamb" menu-class="tuerca" variant="none">
            <template #button-content>
                <Icon icon="ph:gear-duotone" width="32" height="32" />
            </template>
            <b-dropdown-item href="#">+A</b-dropdown-item>
            <b-dropdown-item href="#">-A</b-dropdown-item>
            <b-dropdown-item href="#">+a</b-dropdown-item>
            <b-dropdown-item href="#">-a</b-dropdown-item>
            </b-dropdown>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TopNavbar1'
}
</script>

<style>
.CustomHamb{
  box-shadow: none!important;
  padding: 0px!important;
  margin: 0px!important;
}
.tuerca{
    min-width: 4rem!important;
}
</style>

<style scoped>
.navbar-buttons{
    max-width: 425px;
    margin: 0 auto
}
.btnIngresar{
  width: -webkit-fill-available;
  margin: auto 20px;
  background-color: white!important;;
  color: #74015E!important;
  border-color: #74015E!important;
  font-size: 18px;
  border-radius: 10px;
}
</style>

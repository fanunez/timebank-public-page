<template>
    <div class="navbar-buttons fixed-top" style="padding: 10px 0px; background-color: #74015E; position:fixed;">
        <div class="row" style="margin: 10px 0px; background-color:#74015E">
            <div class="col-2" style="padding-right: 0px;">
                <b-dropdown no-caret toggle-class="custom-hamb" variant="none">
                <template #button-content>
                    <Icon icon="charm:menu-hamburger" width="28" height="32" color="white"></Icon>
                </template>
                <b-dropdown-item href="#">Categorias</b-dropdown-item>
                <b-dropdown-item href="#">Añadir servicio</b-dropdown-item>
                <b-dropdown-item href="#">Solicitar bono</b-dropdown-item>
                <b-dropdown-item href="#">Sobre nosotros</b-dropdown-item>
                <b-dropdown-item v-on:click="cerrarSesion">Cerrar sesión</b-dropdown-item>
                </b-dropdown>
            </div>
            <div class="col-4" style="padding: 0px;">
                    <div class="balance">
                        <Icon class="icon-size" icon="akar-icons:clock"/>
                            <span id="super-script-num" class="badge rounded-circle">{{this.userLoggedBono}}</span>
                    </div>
            </div>
            <div class="col-4" style="padding: 0px;">
                <b-button href="/notification" class="notifications" type="button">
                    <Icon class="icon-size" icon="akar-icons:bell"/>
                    <span id="super-script-num" class="badge rounded-circle">{{this.userLoggedNotifications}}</span>
                </b-button>
            </div>
            <div class="col-2" style="padding-left: 0px; color: white;">
                <b-dropdown right no-caret toggle-class="custom-hamb" menu-class="nut" variant="none">
                <template #button-content>
                    <Icon icon="ph:gear-duotone" width="32" height="32"/>
                </template>
                <b-dropdown-item>+A</b-dropdown-item>
                <b-dropdown-item>-A</b-dropdown-item>
                <b-dropdown-item>+a</b-dropdown-item>
                <b-dropdown-item>-a</b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import auth from "../../logic/auth";

export default {
  name: 'TopNavbar2',
  data: () => ({
      userLoggedBono: null,
      id_user: '',
      userLoggedNotifications: ''
  }),
  created() {
    // get user token
    const token = auth.getUserLogged();
    auth.getUserBono( token )
        .then( resp => {
            this.userLoggedBono = resp;
        })
        .catch( e => console.log( e ) )

    auth.getUserNotifications( token )
        .then( response => {
            this.userLoggedNotifications = response.length;               
        })
        .catch( e => console.log( e ))
  },
  methods: {
      cerrarSesion() {
        auth.deleteUserLogged()
        return window.location.href="/"
      }
  }
}
</script>

<style>
    .custom-hamb{
        box-shadow: none!important;
        padding: 0px!important;
        margin: 0px!important;
    }
    .nut{
        min-width: 4rem!important;
    }
</style>

<style scoped>
    #super-script-num {
        position: absolute;
        top: 0;
        left: 55%;
        background: red;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        padding: 2px;
        font-size: 15px;
    }
    .navbar-buttons{
        max-width: 425px;
        margin: 0 auto
    }
    .balance{
        box-shadow: none!important;
        background-color: #74015E!important;
        padding: 0px;
        width: -webkit-fill-available;
        font-size: 20px;
        margin: 0px auto;
    }
    .notifications{
        box-shadow: none!important;
        background-color: #74015E!important;
        padding: 0px;
        width: -webkit-fill-available;
        font-size: 20px;
        margin: 0px auto;
    }
    .btn-outline-primary{
        width: -webkit-fill-available;
        margin: auto 20px;
        background-color: white!important;;
        color: #74015E!important;
        border-color: #74015E!important;
    }
    .icon-size {
        width:32px; 
        height:32px;
        color: white;
    }
</style>

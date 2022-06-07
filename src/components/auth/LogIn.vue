<template>
    <div class="main">
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-2" style="padding: 5px ; margin-right: 10px; margin-top: 10px; padding-left: 35px;">
          <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></button>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 5px;">
          <div class="fuente1">Ingresa tus datos</div>
        </div>
      </div>
      <form action class="form" @submit.prevent="loginUser">
        <b-row style="justify-content: center; margin: 10px 40px;">
          <b-form-input type="email" id="email" v-model="email" placeholder="Correo electrónico" class="formMail"></b-form-input>
          <b-input-group>
            <b-form-input type="password" id="password" v-model="password" placeholder="Contraseña" class="formPass"></b-form-input>
            <b-button variant="none" class="btnOjo">
              <template>
                <Icon icon="bi:eye-fill" style="width:25px; height:18px; color: white;"/>
              </template>
            </b-button>
          </b-input-group>
          <b-button value="Login" type="submit" class="botonIngresar">Ingresar</b-button>
        </b-row>
        <img src="../../assets/logo_banco.png" style="margin: 20px auto; width: 146px; height: 86px;">
        <div class="container" style="margin: 25px 0;">
              <div class="fuente2">¿Olvidaste tu contraseña?</div>
              <a class="fuente3" type="link" href="#">Restablecer aquí</a>
        </div>
      </form>
    </div>
</template>


<script>
import auth from "@/logic/auth";
export default {
  data: () => ({
      email: "",
      password: "",
      error: false
  }),
  methods: {
    async loginUser() {
      try {
        const respon = await auth.loginUser(this.email, this.password);
        const token = respon.data.token;
        auth.setUserLogged(token);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    }
  }
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
  font-size: xx-large;
}
.fuente2{
  font-weight: bold;
  font-size: larger;
}
.fuente3{
  font-weight: bold;
  font-size: x-large;
  color: #A70187;
}
.botonIngresar{
  padding: 15px 0px;
  width: -webkit-fill-available;
  background-color: #A70187!important;
  font-size: 24px;
  margin: 20px 0px;
  color: white!important;
  border-radius: 10px;
}
.formMail{
  margin: 10px auto;
  border-color: #A70187;
  border-width: medium;
  font-size: larger;
  height: 59px;
  border-radius: 5px;
  
}
.btnOjo{
  padding: 8px 8px;
  margin: 10px 0px;
  background-color: #A70187;
  height: 59px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.formPass{
  margin: 10px auto;
  border-color: #A70187;
  border-width: medium;
  font-size: larger;
  height: 59px;
  border-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>

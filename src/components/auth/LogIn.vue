<template>
    <div class="main">
      <div class="row" style="margin: 0px; padding-top: 20px;">
        <div class="col-2" style="padding: 5px ; margin-right: 10px; margin-top: 10px; padding-left: 35px;">
          <button onclick="history.back()" style="color:black; display: contents;"><Icon icon="akar-icons:arrow-left" style="width:40px; height:40px;"/></button>
        </div>
        <div class="col-8" style="padding: 5px 0px; margin-top: 5px;">
          <div class="timebank-header">Ingresa tus datos</div>
        </div>
      </div>

      <div v-if="error==true">
        <b-alert class="alert-credentials" show variant="danger">
          <Icon icon="eva:alert-triangle-fill" style="width:32px; height:32px; color:#e90606;"/>
          El email o la contraseña es incorrecto/a. Por favor, inténtelo de nuevo.
        </b-alert>
      </div>

      <form action class="form" @submit.prevent="loginUser">
        <b-row style="justify-content: center; margin: 10px 40px;">
          <b-input-group>
            <b-input-group-prepend>
              <span class="input-group-text"><Icon class="icon-format" icon="ant-design:mail-outlined"/></span>  
            </b-input-group-prepend>
            <b-form-input class="input-border mail-format" 
                          type="email" 
                          id="email" 
                          v-model="email" 
                          placeholder="Correo electrónico"
            ></b-form-input>
          </b-input-group>
          
          <b-input-group>
            <b-input-group-prepend>
              <span class="input-group-text"><Icon class="icon-format" icon="dashicons:lock"/></span>
            </b-input-group-prepend>
            <b-form-input class="input-border password-format" 
                          type="password" 
                          id="password"  
                          v-model="password" 
                          placeholder="Contraseña" 
            ></b-form-input>
          </b-input-group>

          <b-button value="Login" type="submit" class="login-button">Ingresar</b-button>
        </b-row>
        <img src="../../assets/logo_banco.png" style="margin: 20px auto; width: 146px; height: 86px;">
        <div class="container" style="margin: 25px 0;">
              <div class="timebank-title">¿Olvidaste tu contraseña?</div>
              <a class="timebank-subtitle" type="link" href="#">Restablecer aquí</a>
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
.timebank-header{
  font-weight: bold;
  font-size: xx-large;
}
.timebank-title{
  font-weight: bold;
  font-size: larger;
}
.timebank-subtitle{
  font-weight: bold;
  font-size: x-large;
  color: #A70187;
}
.login-button{
  padding: 15px 0px;
  width: -webkit-fill-available;
  background-color: #A70187!important;
  font-size: 24px;
  margin: 20px 0px;
  color: white!important;
  border-radius: 10px;
}
.mail-format{
  margin: 10px auto;
  border-color: #A70187;
  border-width: medium;
  font-size: larger;
  height: 59px;
  border-radius: 5px;
}

.password-format{
  margin: 10px auto;
  border-color: #A70187;
  border-width: medium;
  font-size: larger;
  height: 59px;
  border-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.input-border {
  margin: 5px auto; 
  border-color: #A70187; 
  border-width: medium;
  height: 55px;
  /* border-left: none; */
}

.input-group-text{
  height:55px;
  margin:5px 0px;
  border-right: none;
  background-color: white;
  border-color: #A70187; 
  border-width: medium;
}

.icon-format {
  width:24px; 
  height:24px; 
  color: #A70187;
}

.alert-credentials{
  max-width: 375px;
  margin: 15px auto;
  border-color: #e90606;
  background-color: #fff3f4;
}

</style>

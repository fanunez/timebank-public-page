import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH_AUTH = process.env.VUE_APP_BACKEND_URL_SERVER + '/auth/';
const ENDPOINT_PATH_USER = process.env.VUE_APP_BACKEND_URL_SERVER + '/users/';

export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },

  getUserLogged() {
    return Cookies.get("userLogged");
  },

  register(email, password) { 
    const user = { email, password };
    return axios.post(ENDPOINT_PATH_AUTH + "register", user);
  },

  loginUser(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH_AUTH + "login", user);
  },

  async getUserBono( token ) {
    const resp = await axios.get( ENDPOINT_PATH_AUTH + 'user-logged/', {
      headers:{
        'Authorization': token,
      },
    })
    console.log( resp );
    const balance = resp.data.balance;
    return balance;
  },

  deleteUserLogged() {
    Cookies.remove('userLogged');
  }
};
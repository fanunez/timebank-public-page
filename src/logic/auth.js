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

  register(payload) {
    return axios.post(ENDPOINT_PATH_USER, payload);
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
    const balance = resp.data.balance;
    return balance;
  },

  async getUserNotifications( token ) {
    const resp = await axios.get( ENDPOINT_PATH_AUTH + 'user-logged/', {
      headers:{
        'Authorization': token,
      },
    })
    const r = await axios.get( process.env.VUE_APP_BACKEND_URL_SERVER + '/notification/user-notifications/' + resp.data.uid)
    return r.data;
  },

  deleteUserLogged() {
    Cookies.remove('userLogged');
  },

  setUserRol(role) {
    Cookies.set("RoleUser", role);
  },

  getUserRol() {
    return Cookies.get("RoleUser");
  },

  deleteUserRol() {
    Cookies.remove('RoleUser');
  }
};
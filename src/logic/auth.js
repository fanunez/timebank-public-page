import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH_AUTH = process.env.VUE_APP_BACKEND_URL_SERVER + '/auth/';
const ENDPOINT_PATH_USER = process.env.VUE_APP_BACKEND_URL_SERVER + '/users/';

export default {
  setUserLogged(userLogged) {
    console.log(userLogged);
    Cookies.set("userLogged", userLogged.uid);
    Cookies.set("userLoggedToken", userLogged.tok);
  },

  getUserLogged() {
    return Cookies.get("userLogged");
  },

  register(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH_AUTH + "regiser", user);
  },

  loginUser(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH_AUTH + "login", user);
  },

  async getUserBono(uid) {
    const resp = await axios.get(ENDPOINT_PATH_USER + uid);
    const CantBonos = resp.data.user.balance;
    return CantBonos;
  },

  deleteUserLogged() {
    Cookies.remove('userLogged');
    Cookies.remove('userLoggedToken');
  }
};
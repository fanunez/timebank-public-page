import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "http://localhost:8080/api/auth/";

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
    return axios.post(ENDPOINT_PATH + "regiser", user);
  },
  loginUser(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  },
  deleteUserLogged() {
    Cookies.remove('userLogged');
  }
};
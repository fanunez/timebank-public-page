import axios from "axios";
import Cookies from "js-cookie";

//const ENDPOINT_PATH = "http://localhost:8080/api/auth/";
//const ENDPOINT_PATH2 = "http://localhost:8080/api/users/";
const ENDPOINT_PATH = "http://164.92.96.206:8081/api/auth/";
const ENDPOINT_PATH2 = "http://164.92.96.206:8081/api/users/";

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
  async getUserBono(uid) {
    const resp = await axios.get(ENDPOINT_PATH2 + uid);
    const CantBonos = resp.data.user.balance;
    return CantBonos;
  },
  deleteUserLogged() {
    Cookies.remove('userLogged');
  }
};
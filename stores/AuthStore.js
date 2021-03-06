import AsyncStorage from "@react-native-community/async-storage";
import instance from "./instance";

// Mobx
import { decorate, observable } from "mobx";

// JWT
import decode from "jwt-decode";

class AuthStore {
  user = null;
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token); //TODO: Local Storage is not working
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      await this.setUser(res.data.token);
    } catch (error) {
      console.error(error);
    }
  };

  signout = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
    this.user = null;
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      await this.setUser(res.data.token);
    } catch (error) {}
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp >= Date.now()) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;

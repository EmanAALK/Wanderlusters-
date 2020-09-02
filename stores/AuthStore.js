import instance from "./instance";
import AsyncStorage from "@react-native-community/async-storage";

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
    } catch (error) {
      console.error(error);
    }
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        await this.setUser(token);
      } else {
        // REVIEW: wrong spelling
        this.signOut();
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

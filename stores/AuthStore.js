import { decorate, observable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import axios from "axios";
import jwt_decode from "jwt-decode"; // this import is duplicated, remove it.
import AsyncStorage from "@react-native-community/async-storage";

class AuthStore {
  user = null;

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < decodedToken.exp) {
        this.setUser(token); // this line needs an await
      } else {
        this.signout();
      }
    }
  };

  // add a single empty line between methods

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token); // this line needs an await
      console.log("AuthStore -> signup -> res", res.data); // remove extra console logs the app doesn't need
    } catch (error) {
      console.log("AuthStore -> signup -> error", error); // this console log you keep
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token); // this line needs an await
      console.log("AuthStore -> signin -> res.data.token", res.data.token); // remove extra console logs the app doesn't need
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };

  signout = () => {
    delete axios.defaults.headers.common.Authorization;
    this.user = null;
  };
}

// add a single empty line here

decorate(AuthStore, { user: observable });

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
